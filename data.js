/* 单一数据源。静态 HTML 由 scripts/build-static.cjs 同步。 */
window.CAO_DATA = {
  version: "2026-11-03-v1.10",
  plants: [
    {
      id: "bidens",
      name: "三叶鬼针草",
      latin: "Bidens pilosa",
      family: "菊科 · Bidens 属",
      image: "assets/images/plants/bidens.webp",
      position: 3,
      ingredientId: "bidens-extract",
      description: "从形态、分布和植物研究线索认识三叶鬼针草。",
      recognition: ["菊科一年生草本；叶对生。", "瘦果黑色，顶端带倒刺。"],
      background: "原产热带美洲，多地引种归化（Kew）。",
      extractRelation: "包装写作「BIDENS PILOSA 提取物」；未注明部位与工艺。",
      formulaPosition: "第 03 项 / 共 16 项。",
      botanicalReading: {
        lead: "三叶鬼针草是一年生菊科草本，叶形、花序和带倒刺的瘦果，是认识它的主要线索。",
        sections: [
          { heading: "形态与分布", body: "它常见于温暖地区，叶多对生，常见三至五个小叶或裂片；黑色瘦果顶端的倒刺有助于传播。Kew 资料将其记录为原产热带和亚热带美洲、现已在多地引种或归化的一年生草本。" },
          { heading: "植物成分线索", body: "相关研究常提到黄酮、酚类和植醇等成分线索。不同产地、部位、提取溶剂和工艺会影响组成，研究结果需要结合具体原料条件理解。" },
          { heading: "护肤研究观察", body: "部分研究围绕含三叶鬼针草提取物样品的紧致抗皱表现展开，观察内容包括样品浓度、配方基质、周期和受试者条件。" }
        ],
        sourceNote: "资料：Kew POWO 与公开研究资料。",
        source: "articleBidens"
      },
      source: "bidensBotany"
    },
    {
      id: "acmella",
      name: "千日菊",
      latin: "Acmella oleracea",
      family: "菊科 · Acmella 属",
      image: "assets/images/plants/acmella.webp",
      position: 5,
      ingredientId: "acmella-extract",
      description: "从花序、叶形和植物成分线索认识千日菊。",
      recognition: ["菊科一年生草本；黄橙色头状花。", "叶宽卵形至三角状，边缘具齿。"],
      background: "巴西东南部栽培起源记录（Kew）。",
      extractRelation: "包装写作「ACMELLA OLERACEA 提取物」；未注明部位。",
      formulaPosition: "第 05 项 / 共 16 项。",
      botanicalReading: {
        lead: "千日菊是一年生菊科草本，黄色至橙色的头状花序和花部的烷基酰胺，是认识它的两个入口。",
        sections: [
          { heading: "形态与植物背景", body: "千日菊的头状花序外形醒目，叶片多为宽卵形至三角状并带齿。Kew 资料将其记录为菊科一年生草本，原生范围与巴西东南部的栽培起源记录有关。" },
          { heading: "植物成分线索", body: "公开研究常关注千日菊花中的烷基酰胺，这类成分与传统使用中出现的麻感有关。成分名称、提取部位和标准化方式会影响研究中的组成与观察结果。" },
          { heading: "护肤研究观察", body: "相关研究涉及局部神经、炎症与表情相关皮肤纹理等方向，研究对象包括细胞、动物模型和局部使用样品。" }
        ],
        sourceNote: "资料：Kew POWO 与公开研究资料。",
        source: "articleAcmella"
      },
      source: "acmellaBotany"
    },
    {
      id: "rhodiola",
      name: "红景天",
      latin: "Rhodiola rosea",
      family: "景天科 · Rhodiola 属",
      image: "assets/images/plants/rhodiola.webp",
      position: 9,
      ingredientId: "rhodiola-extract",
      description: "从生长环境、形态和植物成分线索认识红景天。",
      recognition: ["景天科多年生多肉；叶片肥厚。", "花序密集，多为黄或黄绿色。"],
      background: "北半球亚寒带、亚高山分布。",
      extractRelation: "包装写作「RHODIOLA ROSEA 提取物」；未注明部位。",
      formulaPosition: "第 09 项 / 共 16 项。",
      botanicalReading: {
        lead: "红景天属植物多见于北半球亚寒带和亚高山环境，日常传播中也常被称作“高原人参”。",
        sections: [
          { heading: "形态与分布", body: "红景天为景天科多年生多肉植物，叶片通常较厚，花序较为密集。World Flora Online 与 Kew 的植物资料记录了它的分类与分布背景。" },
          { heading: "植物成分线索", body: "相关研究常提到红景天苷、酪醇和黄酮类等成分线索，不同物种、部位、产地和提取方式可能带来组成差异。" },
          { heading: "护肤研究观察", body: "相关研究涉及自由基清除、紫外线相关 ROS、酪氨酸酶、成纤维细胞和炎症因子等方向，覆盖生化、细胞与组织模型。" }
        ],
        sourceNote: "资料：World Flora Online 与公开研究资料。",
        source: "articleRhodiola"
      },
      source: "rhodiolaBotany"
    }
  ],
  articles: [
    {
      id: "rhodiola-evidence",
      number: "01",
      plantId: "rhodiola",
      title: "红景天：把高寒适应，读成研究线索",
      kicker: "植物护肤功效解读系列 1",
      sourceLabel: "项目内资料摘录 · 植物科普",
      source: "articleRhodiola",
      sourceNote: "课程展示版已将“高原人参”等传播性表达改为植物背景与研究线索，不把体外结果写成本产品功效。",
      image: "assets/images/plants/rhodiola.webp",
      imageAlt: "红景天品牌插画；用于名称关联，不作为植物鉴定或功效证据",
      imageStatus: "已有本地红景天品牌插画；原稿提到的 DPPH、ROS、酪氨酸酶和细胞图未随资料提供。",
      summary: "红景天相关研究可作为抗氧化、黑色素生成、细胞模型与炎症通路的阅读入口，但现有资料不足以证明这瓶精华的实际功效。",
      sections: [
        { heading: "先说植物", body: "红景天属植物多见于北半球的亚寒带、亚高山等环境。不同种、不同产地的生长条件并不相同，因此“海拔 3000 米以上、极端环境”不能作为所有红景天或所有红景天提取物的统一标签。" },
        { heading: "研究观察到了什么", body: "相关资料汇总了自由基清除、紫外线相关 ROS、酪氨酸酶、成纤维细胞和炎症因子等方向的体外或细胞研究。这些结果反映了植物成分的研究价值。" },
        { heading: "回到这瓶精华", body: "包装资料只能确认“红景天提取物”位于配方记录第 09 项。资料没有提供提取部位、工艺、标准化指标、添加量或本产品人体测试，因此网页不使用“美白淡斑、抗衰、舒缓修复”等确定性承诺。" }
      ],
      boundary: "文献条目与具体实验条件需在课程论文提交前逐条核验；成分表序位不能换算为浓度。",
      references: [
        "相关资料[1]—[6]：红景天化妆品功效评价相关中文文献条目。",
        "植物背景：World Flora Online / Kew POWO 的 Rhodiola rosea 资料。"
      ]
    },
    {
      id: "bidens-retinol",
      number: "02",
      plantId: "bidens",
      title: "三叶鬼针草与视黄醇：先比较证据，再谈替代",
      kicker: "植物抗衰新势力 · 对照阅读",
      sourceLabel: "项目内资料摘录 · 植物科普",
      source: "articleBidens",
      sourceNote: "课程展示版保留“对照阅读”，删除“天然替代视黄醇”和“安全性较高”等无法由现有资料直接支持的结论。",
      image: "assets/images/plants/bidens.webp",
      imageAlt: "三叶鬼针草品牌插画；用于名称关联，不作为功效证据",
      imageStatus: "已有本地三叶鬼针草品牌插画；原稿外链图片未下载进项目，避免线上失效或未经确认的转载。",
      summary: "三叶鬼针草提取物与视黄醇不是同一类原料。可以比较研究对象、模型和证据等级，但不能把有限的眼膜样品研究写成“植物版 A 醇”。",
      sections: [
        { heading: "可以观察的研究线索", body: "相关资料提到黄酮、酚类和植醇等成分，并介绍含三叶鬼针草提取物样品的紧致抗皱评价，研究中会记录样品浓度、产品基质、观察周期和受试者条件。" },
        { heading: "不宜直接写成机制定论", body: "“植醇转化后结合 RAR/RXR”“促进胶原和弹性蛋白”“使用量最高可达 29.94%”“通常不会引起光敏或刺激”等表述，在当前资料中缺少完整来源、适用条件或人体安全证据，已从展示稿中降级为待核验问题，不作为结论。" },
        { heading: "与视黄醇的合理比较", body: "视黄醇有较成熟的皮肤研究与明确的刺激、光稳定性等配方议题；三叶鬼针草提取物的证据类型、标准化方式和长期安全性不能据此等同。更准确的说法是：它是一个值得继续研究的植物来源原料，而不是已经被证明的视黄醇天然替代品。" }
      ],
      boundary: "比较文章中的“相似”只表示研究方向或传播概念相近，不表示分子机制、浓度、效果或安全性相同。",
      references: [
        "相关资料[1]—[2]、[5]：三叶鬼针草化学成分与眼膜样品评价条目。",
        "视黄醇基础比较仅作概念说明，不用于给出个人使用建议。"
      ]
    },
    {
      id: "acmella-expression-lines",
      number: "03",
      plantId: "acmella",
      title: "千日菊：动态纹叙事，不能替代临床证据",
      kicker: "项目内资料摘录 · 植物科普",
      sourceLabel: "项目内资料摘录 · 植物科普",
      source: "articleAcmella",
      sourceNote: "课程展示版保留动态纹这一问题意识，但将“植物肉毒素、5 分钟淡纹、放心使用”等营销式表述改为模型与证据边界。",
      image: "assets/images/plants/acmella.webp",
      imageAlt: "千日菊品牌插画；用于名称关联，不作为功效证据",
      imageStatus: "已有本地千日菊品牌插画；原稿中的机制图、人体数据图和皮肤扫描 3D 图均为占位文字，当前缺失。",
      summary: "千日菊的烷基酰胺研究可以帮助理解麻感、局部神经和炎症模型，但“植物肉毒素”只是传播性比喻，不能当作这瓶精华的抗皱承诺。",
      sections: [
        { heading: "动态纹是什么", body: "表情线与持续性皱纹之间存在纵向研究关联，但这只能说明皮肤表现会随时间变化，不能反推某一种植物提取物可以阻断皱纹形成。课程页面只把它作为问题背景，不作因果承诺。" },
        { heading: "千日菊研究能说明什么", body: "公开研究关注千日菊花中的烷基酰胺及其麻感、疼痛和炎症模型。Dallazen 等人的研究是局部给药与小鼠炎症疼痛模型，并非面部动态纹的人体化妆品试验；因此原稿中的通道机制、浓度和时间数据不能直接写成产品使用效果。" },
        { heading: "回到配方阅读", body: "包装资料只能确认千日菊提取物位于配方记录第 05 项。没有提取部位、标准化成分、添加量和本产品临床数据时，页面应使用“研究线索”“待核验”，不使用“即时淡纹、温和安全、适合敏感肌”等确定性表述。" }
      ],
      boundary: "研究资料涉及烷基酰胺、局部神经与炎症模型。",
      references: [
        "相关资料[1]—[3]：动态纹、千日菊及视黄醇研究条目。",
        "Dallazen et al. 2019：Acmella 烷基酰胺与炎症疼痛模型研究，不能直接替代化妆品人体功效试验。"
      ]
    }
  ],
  sources: {
    formula: { label: "S01 · 项目提供的配方记录与包装照片", url: "assets/images/serum/package.webp" },
    butylene: { label: "S04 · COSMILE Europe：Butylene Glycol", url: "https://cosmileeurope.eu/inci/detail/2015/butylene-glycol/" },
    ectoin: { label: "S05 · COSMILE Europe：Ectoin", url: "https://cosmileeurope.eu/inci/detail/5191/ectoin/" },
    panthenol: { label: "S06 · COSMILE Europe：Panthenol", url: "https://cosmileeurope.eu/inci/detail/10243/panthenol/" },
    hyaluronate: { label: "S07 · COSMILE Europe：Sodium Hyaluronate", url: "https://cosmileeurope.eu/inci/detail/14809/sodium-hyaluronate/" },
    hexanediol: { label: "S08 · COSMILE Europe：1,2-Hexanediol", url: "https://cosmileeurope.eu/inci/detail/5/1-2-hexanediol/" },
    bidensBotany: { label: "S09 · Kew POWO：Bidens pilosa L.（2026-11-03 查阅）", url: "https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A32564-2/general-information" },
    acmellaBotany: { label: "S10 · Kew POWO：Acmella oleracea（2026-11-03 查阅）", url: "https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A914778-1/general-information" },
    rhodiolaBotany: { label: "S11 · World Flora Online：Rhodiola rosea（2026-11-03 查阅）", url: "https://www.worldfloraonline.org/taxon/wfo-0000399342" },
    articleRhodiola: { label: "S12 · 草肤荟公众号：红景天植物护肤功效解读", url: "https://mp.weixin.qq.com/s/nKg7ZkaeRh_Vqi2fl2JVhg" },
    articleBidens: { label: "S13 · 草肤荟公众号：三叶鬼针草植物科普", url: "https://mp.weixin.qq.com/s/CQgqzE5M9VhfoZi9ogJlWQ" },
    articleAcmella: { label: "S14 · 植物云公众号：千日菊植物科普", url: "https://mp.weixin.qq.com/s/pdHcMb2kJH4Q_fDoXJTFSw" }
  },
  ingredients: [
    { id: "water", name: "水", labelName: "水", english: "Water", position: 1 },
    {
      id: "butylene-glycol", name: "丁二醇", labelName: "丁二醇", english: "Butylene Glycol", position: 2, expandable: true, type: "hydration", alias: "保湿剂 · 溶剂", role: "一般用途：保湿、溶剂、皮肤调理",
      what: "Butylene Glycol 是丁二醇的英文 INCI 名称。", generalRole: "常作为保湿、溶剂与皮肤调理成分使用，帮助原料在水相体系中分散并带来更轻盈的肤感。", evidence: "资料入口：COSMILE Europe 成分库。这里呈现的是它在化妆品配方中的常见角色。", hook: "保湿与溶剂，常见于水相精华。", source: "butylene"
    },
    {
      id: "bidens-extract", name: "三叶鬼针草提取物", labelName: "三叶鬼针草（BIDENS PILOSA）提取物", english: "Bidens Pilosa Extract", position: 3, expandable: true, type: "plant", alias: "植物提取物", role: "配方记录中的植物来源成分", plantId: "bidens",
      what: "这是与三叶鬼针草（Bidens pilosa）对应的提取物 INCI 名称。", generalRole: "作为植物来源成分列入配方；植物图鉴中可继续阅读其形态、成分线索与研究观察。", evidence: "资料入口：包装成分记录与植物图鉴。", hook: "从植物名，读到成分表中的 INCI 名称。", source: "formula"
    },
    {
      id: "ectoin", name: "四氢甲基嘧啶羧酸", labelName: "四氢甲基嘧啶羧酸", english: "Ectoin", position: 4, expandable: true, type: "hydration", alias: "依克多因 · 皮肤调理", role: "一般用途：皮肤调理",
      what: "四氢甲基嘧啶羧酸常被称为依克多因，英文名为 Ectoin。", generalRole: "在成分资料库中归为皮肤调理成分，常见于强调保湿与环境适应体验的护肤配方。", evidence: "资料入口：COSMILE Europe 成分库。", hook: "依克多因：一项皮肤调理成分。", source: "ectoin"
    },
    {
      id: "acmella-extract", name: "千日菊提取物", labelName: "千日菊（ACMELLA OLERACEA）提取物", english: "Acmella Oleracea Extract", position: 5, expandable: true, type: "plant", alias: "植物提取物", role: "配方记录中的植物来源成分", plantId: "acmella",
      what: "这是与千日菊（Acmella oleracea）对应的提取物 INCI 名称。", generalRole: "作为植物来源成分列入配方；植物图鉴中可继续阅读千日菊的花序特征与烷基酰胺研究线索。", evidence: "资料入口：包装成分记录与植物图鉴。", hook: "从黄色花序，进入植物研究线索。", source: "formula"
    },
    { id: "ergothioneine", name: "麦角硫因", labelName: "麦角硫因", english: "Ergothioneine", position: 6 },
    { id: "alpha-arbutin", name: "α-熊果苷", labelName: "α-熊果苷", english: "Alpha-Arbutin", position: 7 },
    {
      id: "panthenol", name: "泛醇", labelName: "泛醇", english: "Panthenol", position: 8, expandable: true, type: "hydration", alias: "维生素 B5 前体", role: "一般用途：皮肤调理",
      what: "Panthenol 的中文名是泛醇，常被称作维生素原 B5。", generalRole: "在成分资料库中归为皮肤调理成分；它是精华、乳霜和身体护理中常见的基础护理原料。", evidence: "资料入口：COSMILE Europe 成分库。", hook: "泛醇：基础护理配方里的常见名字。", source: "panthenol"
    },
    {
      id: "rhodiola-extract", name: "红景天提取物", labelName: "红景天（RHODIOLA ROSEA）提取物", english: "Rhodiola Rosea Extract", position: 9, expandable: true, type: "plant", alias: "植物提取物", role: "配方记录中的植物来源成分", plantId: "rhodiola",
      what: "这是与红景天（Rhodiola rosea）对应的提取物 INCI 名称。", generalRole: "作为植物来源成分列入配方；植物图鉴中可继续阅读红景天的生长环境、成分线索与相关研究方向。", evidence: "资料入口：包装成分记录与植物图鉴。", hook: "从高寒植物背景，读到配方中的植物名。", source: "formula"
    },
    { id: "matsutake", name: "松口蘑提取物", labelName: "松口蘑（TRICHOLOMA MATSUTAKE）提取物", english: "Tricholoma Matsutake Extract", position: 10 },
    { id: "white-truffle", name: "白松露菌提取物", labelName: "白松露菌（TUBER MAGNATUM）提取物", english: "Tuber Magnatum Extract", position: 11 },
    {
      id: "sodium-hyaluronate", name: "透明质酸钠", labelName: "透明质酸钠", english: "Sodium Hyaluronate", position: 12, expandable: true, type: "hydration", alias: "透明质酸的钠盐", role: "一般用途：保湿、皮肤调理",
      what: "Sodium Hyaluronate 是透明质酸的钠盐形式。", generalRole: "常作为保湿与皮肤调理成分使用，帮助配方形成清润、易延展的使用体验。", evidence: "资料入口：COSMILE Europe 成分库。", hook: "透明质酸的钠盐形式，常用于保湿体系。", source: "hyaluronate"
    },
    {
      id: "hexanediol", name: "1,2-己二醇", labelName: "1,2-己二醇", english: "1,2-Hexanediol", position: 13, expandable: true, type: "other", alias: "溶剂 · 皮肤调理", role: "一般用途：溶剂、皮肤调理",
      what: "1,2-己二醇是一种常见的二元醇类成分。", generalRole: "常作为溶剂与皮肤调理成分使用；它与相邻列出的对羟基苯乙酮，共同构成理解精华稳定体系的一条配方线索。", evidence: "水相精华的稳定通常由原料质量、生产卫生、pH、包装密封与配方辅助体系共同维持。1,2-己二醇与对羟基苯乙酮的组合，常出现在这类体系的阅读语境中。", hook: "精华稳定，来自多个环节共同协作。", source: "hexanediol"
    },
    { id: "hydroxyacetophenone", name: "对羟基苯乙酮", labelName: "对羟基苯乙酮", english: "Hydroxyacetophenone", position: 14 },
    { id: "dipotassium-glycyrrhizate", name: "甘草酸二钾", labelName: "甘草酸二钾", english: "Dipotassium Glycyrrhizate", position: 15 },
    { id: "tremella", name: "银耳提取物", labelName: "银耳（TREMELLA FUCIFORMIS）提取物", english: "Tremella Fuciformis Extract", position: 16 }
  ],
  traceIngredients: ["黄芩（SCUTELLARIA BAICALENSIS）根提取物", "黑孢块菌（TUBER MELANOSPORUM）提取物", "麦冬（OPHIOPOGON JAPONICUS）根提取物", "薰衣草（LAVANDULA ANGUSTIFOLIA）花提取物", "姜黄（CURCUMA LONGA）根提取物", "精氨酸", "葡萄柚（CITRUS PARADISI）果提取物", "柑橘（CITRUS RETICULATA）果提取物", "绣球菌（SPARASSIS CRISPA）提取物", "冬虫夏草（CORDYCEPS SINENSIS）提取物", "矢车菊（CENTAUREA CYANUS）花提取物", "栀子（GARDENIA FLORIDA）提取物", "桂花（OSMANTHUS FRAGRANS）花提取物", "拟石花菜（GELIDIELLA ACEROSA）提取物", "玫瑰（ROSA RUGOSA）花提取物", "檀香（SANTALUM ALBUM）木提取物", "尿囊素"]
};
