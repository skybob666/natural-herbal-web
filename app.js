(function () {
  "use strict";

  const data = window.CAO_DATA;
  if (!data) return;

  const ingredients = new Map(data.ingredients.map(item => [item.id, item]));
  const plants = new Map(data.plants.map(item => [item.id, item]));
  const dialog = document.querySelector("#detail-dialog");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let trigger = null;
  let currentItem = null;
  let returnHash = "#ingredients";
  let routePushed = false;

  const text = (id, value) => { document.getElementById(id).textContent = value || ""; };
  const sourceFor = key => data.sources[key || "formula"];

  function selectPlant(id) {
    const plant = plants.get(id);
    if (!plant) return;
    document.querySelectorAll("[data-plant-select]").forEach(button => {
      const selected = button.dataset.plantSelect === id;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll("[data-plant-panel]").forEach(panel => {
      const selected = panel.dataset.plantPanel === id;
      panel.hidden = !selected;
      if (!selected) {
        const science = panel.querySelector(".plant-science");
        const toggle = panel.querySelector("[data-plant-reading-toggle]");
        if (science) science.hidden = true;
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
    const empty = document.querySelector("[data-plant-empty]");
    if (empty) empty.hidden = true;
  }

  function togglePlantReading(id) {
    const panel = document.querySelector(`[data-plant-panel="${id}"]`);
    if (!panel || panel.hidden) return;
    const science = panel.querySelector(".plant-science");
    const toggle = panel.querySelector("[data-plant-reading-toggle]");
    if (!science || !toggle) return;
    const willShow = science.hidden;
    science.hidden = !willShow;
    toggle.setAttribute("aria-expanded", String(willShow));
    toggle.querySelector("span:last-child").textContent = willShow ? "↑" : "↓";
  }

  function showDialog() {
    if (!dialog || typeof dialog.showModal !== "function") return;
    const evidence = dialog.querySelector(".evidence-details");
    if (evidence) evidence.open = false;
    const scroll = dialog.querySelector(".detail-scroll");
    scroll.scrollTop = 0;
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("modal-open");
    scroll.focus({ preventScroll: true });
  }

  function renderIngredient(item) {
    if (!item || !item.featured) return;
    currentItem = item;
    const source = sourceFor(item.source);
    const plant = plants.get(item.plantId);

    text("detail-kicker", "INGREDIENT NOTES / 成分解码");
    text("detail-title", item.name);
    text("detail-english", item.english);
    text("detail-role", item.role || item.alias || "成分角色");
    text("detail-what", item.what);
    text("detail-general-role", item.generalRole);
    text("detail-evidence", item.evidence);

    const sourceLink = document.querySelector("#detail-source");
    sourceLink.href = source.url;
    sourceLink.textContent = source.label + " ↗";

    const image = document.querySelector("#detail-image");
    image.hidden = !plant;
    if (plant) {
      image.src = plant.image;
      image.alt = plant.name + "品牌插画";
    }
    showDialog();
  }

  function registerOpen(sourceElement, route) {
    trigger = sourceElement || null;
    if (dialog?.open) return;
    returnHash = /^(#ingredient=|#note-)/.test(location.hash) ? "#ingredients" : location.hash || "#ingredients";
    routePushed = Boolean(route);
    if (route) history.pushState({ caoDetail: true }, "", route);
  }

  function openItem(item, sourceElement, route) {
    if (!item || !item.featured) return;
    registerOpen(sourceElement, route);
    renderIngredient(item);
  }

  function hideDialog() {
    if (dialog?.open) dialog.close();
    document.body.classList.remove("modal-open");
    if (trigger && trigger.isConnected) trigger.focus({ preventScroll: true });
    trigger = null;
  }

  function requestClose() {
    hideDialog();
    if (routePushed) {
      routePushed = false;
      history.back();
    } else {
      history.replaceState(null, "", location.pathname + location.search + returnHash);
    }
  }

  function jumpToFormula(item) {
    if (!item) return;
    document.querySelectorAll(".sequence-node").forEach(node => {
      node.classList.toggle("is-target", node.id === "formula-entry-" + item.id);
    });
    routePushed = false;
    trigger = null;
    hideDialog();
    history.replaceState(null, "", "#formula-entry-" + item.id);
    const target = document.getElementById("formula-entry-" + item.id);
    if (target) {
      target.scrollIntoView({ behavior: reduced.matches ? "auto" : "smooth", block: "center" });
      target.focus?.({ preventScroll: true });
    }
  }

  function route() {
    const hash = decodeURIComponent(location.hash);
    const plantMatch = hash.match(/^#plant=([a-z0-9-]+)$/);
    const ingredientMatch = hash.match(/^#ingredient=([a-z0-9-]+)$/);
    const noteMatch = hash.match(/^#note-([a-z0-9-]+)$/);
    if (plantMatch) {
      selectPlant(plantMatch[1]);
    } else if (ingredientMatch) {
      openItem(ingredients.get(ingredientMatch[1]), null, null);
    } else if (noteMatch) {
      openItem(ingredients.get(noteMatch[1]), null, null);
    } else if (dialog?.open) {
      hideDialog();
      routePushed = false;
    }
  }

  document.addEventListener("click", event => {
    const plantChoice = event.target.closest("[data-plant-select]");
    if (plantChoice) {
      selectPlant(plantChoice.dataset.plantSelect);
      return;
    }
    const plantReading = event.target.closest("[data-plant-reading-toggle]");
    if (plantReading) {
      togglePlantReading(plantReading.dataset.plantReadingToggle);
      return;
    }
    const ingredient = event.target.closest("[data-ingredient-id]");
    if (ingredient) {
      const item = ingredients.get(ingredient.dataset.ingredientId);
      if (!item?.featured) return;
      event.preventDefault();
      openItem(item, ingredient, "#ingredient=" + item.id);
      return;
    }
    const filter = event.target.closest("[data-filter]");
    if (filter) {
      const type = filter.dataset.filter;
      let count = 0;
      document.querySelectorAll(".ingredient-card").forEach(card => {
        card.hidden = type !== "all" && card.dataset.type !== type;
        if (!card.hidden) count++;
      });
      document.querySelectorAll("[data-filter]").forEach(button => {
        const active = button === filter;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      text("filter-count", count + " 项重点解码");
    }
  });

  if (dialog) {
    dialog.querySelector(".detail-close").addEventListener("click", requestClose);
    dialog.addEventListener("cancel", event => { event.preventDefault(); requestClose(); });
    dialog.addEventListener("click", event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) requestClose();
    });
    dialog.addEventListener("keydown", event => {
      if (event.key !== "Tab") return;
      const focusable = [...dialog.querySelectorAll("button, a[href], summary")].filter(element => !element.hidden && element.getClientRects().length);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    dialog.querySelector("#detail-formula").addEventListener("click", () => jumpToFormula(currentItem));
    const handle = dialog.querySelector(".drawer-handle");
    let startY = null;
    handle.addEventListener("pointerdown", event => { startY = event.clientY; handle.setPointerCapture(event.pointerId); });
    handle.addEventListener("pointerup", event => {
      if (startY !== null && event.clientY - startY > 55) requestClose();
      startY = null;
    });
    handle.addEventListener("pointercancel", () => { startY = null; });
  }

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  function closeMenu() {
    nav.classList.remove("is-open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "展开导航");
  }
  menu.addEventListener("click", () => {
    const isOpen = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute("aria-label", isOpen ? "收起导航" : "展开导航");
    nav.classList.toggle("is-open", isOpen);
  });
  nav.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
  document.addEventListener("click", event => { if (!event.target.closest(".site-header")) closeMenu(); });

  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = [...document.querySelectorAll("[data-section]")];
  let pendingScroll = false;
  function updateNav() {
    const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 240);
    let active = sections[0];
    for (const section of sections) if (section.offsetTop <= marker) active = section;
    navLinks.forEach(link => {
      const selected = link.hash === "#" + active.id;
      link.classList.toggle("is-active", selected);
      if (selected) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    pendingScroll = false;
  }
  window.addEventListener("scroll", () => {
    if (!pendingScroll) {
      pendingScroll = true;
      requestAnimationFrame(updateNav);
    }
  }, { passive: true });
  window.addEventListener("resize", () => { if (innerWidth > 600) closeMenu(); updateNav(); });
  window.addEventListener("hashchange", route);

  document.documentElement.classList.add("js");
  updateNav();
  route();
})();
