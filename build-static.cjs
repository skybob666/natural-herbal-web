/* 单一数据源 data.js 同步到静态 HTML；无脚本时仍保留配方与资料文本。 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), sandbox);
const data = sandbox.window.CAO_DATA;
const esc = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const n = value => String(value).padStart(2, "0");
const featured = data.ingredients.filter(item => item.featured && item.what && item.generalRole);

function plantScience(plant) {
  const reading = plant.botanicalReading;
  const source = data.sources[reading.source];
  return `<div class="plant-science" id="plant-science-${plant.id}" hidden><div class="plant-science-head"><span>BOTANICAL NOTES</span><b>植物科普 · 3 段阅读</b></div><p class="plant-reading-lead">${esc(reading.lead)}</p><div class="plant-reading-sections">${reading.sections.map(section => `<section><h4>${esc(section.heading)}</h4><p>${esc(section.body)}</p></section>`).join("")}</div><div class="plant-reading-source"><span>${esc(reading.sourceNote)}</span><a href="${source.url}" target="_blank" rel="noopener">查看资料 ↗</a></div></div>`;
}

function plantPanel(plant, index) {
  return `<article class="plant-panel" id="plant-panel-${plant.id}" data-plant-panel="${plant.id}" hidden><div class="plant-panel-art"><img src="${plant.image}" alt="草肤荟公众号发布的${plant.name}品牌插画，用于植物名称关联" width="640" height="640" loading="eager"></div><div class="plant-panel-copy"><div class="plant-panel-meta"><span>BOTANICAL / ${n(index + 1)}</span><span>配方 ${n(plant.position)}</span></div><em>${esc(plant.latin)}</em><h3>${esc(plant.name)}</h3><p class="plant-panel-intro">${esc(plant.description)}</p><dl class="plant-facts"><div><dt>植物识别</dt><dd>${plant.recognition.map(esc).join("<br>")}</dd></div><div><dt>植物背景</dt><dd>${esc(plant.background)}</dd></div></dl><div class="plant-position"><span>配方定位</span><strong>${n(plant.position)}</strong><small>16 项主配方记录</small></div><button class="plant-reading-toggle" type="button" data-plant-reading-toggle="${plant.id}" aria-expanded="false" aria-controls="plant-science-${plant.id}"><span>查看植物科普</span><span aria-hidden="true">↓</span></button>${plantScience(plant)}<a class="plant-source-link" href="${data.sources[plant.source].url}" target="_blank" rel="noopener">植物资料 ↗</a></div></article>`;
}

const blocks = {
  plants: `<div class="plant-selector" role="group" aria-label="选择一株植物进行阅读">${data.plants.map((plant, index) => `<button class="plant-choice" type="button" data-plant-select="${plant.id}" aria-pressed="false" aria-controls="plant-panel-${plant.id}"><span class="plant-choice-index">${n(index + 1)}</span><img src="${plant.image}" alt="" width="120" height="120"><span class="plant-choice-copy"><b>${esc(plant.name)}</b><small>${esc(plant.latin)}</small></span></button>`).join("")}</div><div class="plant-stage" id="plant-stage" aria-live="polite"><div class="plant-stage-empty" data-plant-empty><span>SELECT A BOTANICAL</span><p>选择一株植物，查看它的识别、背景与配方定位。</p></div>${data.plants.map(plantPanel).join("\n")}</div>`,
  ingredients: featured.map(item => `<details class="ingredient-card" id="note-${item.id}" data-type="${item.type}"><summary data-ingredient-id="${item.id}"><span class="ingredient-index">${n(item.position)}</span><span class="ingredient-copy"><span class="ingredient-alias">${esc(item.alias)}</span><strong>${esc(item.name)}</strong><em>${esc(item.english)}</em><span class="ingredient-hook">${esc(item.hook)}</span></span><span class="ingredient-arrow" aria-hidden="true">↗</span></summary><div class="static-note"><dl class="ingredient-layers"><div><dt>成分身份</dt><dd>${esc(item.what)}</dd></div><div><dt>一般角色</dt><dd>${esc(item.generalRole)}</dd></div></dl><p class="ingredient-evidence">${esc(item.evidence)}</p><a href="${data.sources[item.source].url}" target="_blank" rel="noopener">${esc(data.sources[item.source].label)} ↗</a></div></details>`).join("\n"),
  sequence: data.ingredients.map(item => item.featured ? `<a class="sequence-node is-featured" id="formula-entry-${item.id}" href="#note-${item.id}" data-ingredient-id="${item.id}"><span class="sequence-number">${n(item.position)}</span><span class="sequence-name">${esc(item.name)}</span><span class="sequence-mark" aria-hidden="true">↗</span></a>` : `<span class="sequence-node is-passive" id="formula-entry-${item.id}" aria-label="${n(item.position)} ${esc(item.name)}，保留在完整配方记录中"><span class="sequence-number">${n(item.position)}</span><span class="sequence-name">${esc(item.name)}</span><span class="sequence-mark" aria-hidden="true">·</span></span>`).join("\n"),
  "main-formula": data.ingredients.map(item => esc(item.labelName)).join("、") + "。",
  "trace-formula": data.traceIngredients.map(esc).join("、") + "。",
  sources: Object.entries(data.sources).filter(([key]) => key !== "formula").map(([, source]) => `<li><a href="${source.url}" target="_blank" rel="noopener">${esc(source.label)} ↗</a></li>`).join("\n")
};

const file = path.join(root, "index.html");
let html = fs.readFileSync(file, "utf8");
for (const [key, markup] of Object.entries(blocks)) {
  const pattern = new RegExp("<!-- GENERATED:" + key + " -->[\\s\\S]*?<!-- /GENERATED:" + key + " -->");
  if (!pattern.test(html)) throw new Error("Missing static block: " + key);
  html = html.replace(pattern, "<!-- GENERATED:" + key + " -->\n" + markup + "\n<!-- /GENERATED:" + key + " -->");
}
fs.writeFileSync(file, html);
console.log(`Static content updated: ${data.plants.length} selectable plants, ${featured.length} ingredient notes, ${data.ingredients.length}+${data.traceIngredients.length} formula entries.`);
