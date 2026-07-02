/* Генерирует index + a0/a1/a2 для обоих сайтов из одного шаблона.
   Быстро: preconnect, defer-скрипты, ленивые постеры. */
import fs from "node:fs";

const CASTLE = `    <svg class="castle" viewBox="0 0 1200 260" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="#0b1240" fill-opacity="0.9">
        <rect x="0" y="196" width="1200" height="64" />
        <rect x="150" y="120" width="66" height="140" /><polygon points="146,120 183,66 220,120" />
        <rect x="984" y="120" width="66" height="140" /><polygon points="980,120 1017,66 1054,120" />
        <rect x="360" y="150" width="52" height="110" /><polygon points="356,150 386,102 416,150" />
        <rect x="788" y="150" width="52" height="110" /><polygon points="784,150 814,102 844,150" />
        <rect x="470" y="96" width="58" height="164" /><polygon points="466,96 499,44 532,96" />
        <rect x="672" y="96" width="58" height="164" /><polygon points="668,96 701,44 734,96" />
        <rect x="562" y="60" width="76" height="200" /><polygon points="556,60 600,4 644,60" />
        <path d="M582 260 v-42 a18 18 0 0 1 36 0 v42 z" />
      </g>
      <g stroke="#ffd86b" stroke-width="3" stroke-linecap="round">
        <line x1="600" y1="8" x2="600" y2="-16" /><line x1="499" y1="48" x2="499" y2="30" /><line x1="701" y1="48" x2="701" y2="30" />
      </g>
      <g fill="#ffd86b"><polygon points="600,-16 626,-8 600,0" /><polygon points="499,30 517,35 499,40" /><polygon points="701,30 719,35 701,40" /></g>
      <g fill="#ffe6a8" class="lit">
        <circle cx="600" cy="110" r="4" /><circle cx="600" cy="140" r="4" />
        <circle cx="499" cy="140" r="3.4" /><circle cx="701" cy="140" r="3.4" />
        <circle cx="183" cy="160" r="3.4" /><circle cx="1017" cy="160" r="3.4" />
        <circle cx="386" cy="185" r="3" /><circle cx="814" cy="185" r="3" />
      </g>
    </svg>`;

const SITES = [
  {
    dir: ".", theme: "disney", favicon: "🏰", brand: "· Zeichentrick", fonts: true, castle: true,
    eyebrow: "Es war einmal…", h1: ["Смотри.", "Мечтай.", "Учись."],
    sub: "Мультфильмы — это магия. И лучший способ учить язык. Мы собрали самые волшебные мультики. По уровням. От нуля до <b>A2</b>.",
    levelsHead: ["Выбери свой уровень", "Три уровня. Три страницы. Начни там, где тебе уютно. Растёшь — идёшь дальше."],
    catalogHead: ["Вся подборка", "Все мультфильмы в одном месте. Фильтруй по уровню и жанру. Сортируй как удобно. Ищи по названию."],
    footer: "Мультфильмы для уровней A0–A2 · тексты в стиле Шынгыса",
    cross: { href: "kino/index.html", label: "Фильмы" },
    badge: { A0: "linear-gradient(120deg,#8ec5ff,#c39aff)", A1: "linear-gradient(120deg,#ffd86b,#ff9ad4)", A2: "linear-gradient(120deg,#7fe0c9,#8ec5ff)" },
  },
  {
    dir: "kino", theme: "apple", favicon: "⭐", brand: "· Kino", fonts: false, castle: false,
    eyebrow: "Немецкий через кино", h1: ["Смотри.", "Слушай.", "Понимай."],
    sub: "Учить язык скучно. Смотреть кино — нет. Мы собрали фильмы для начинающих. От нуля до <b>A2</b>. Каждый — под твой уровень.",
    levelsHead: ["Выбери свой уровень", "Три уровня. Три страницы. Начни с того, где тебе комфортно. Растёшь — идёшь дальше."],
    catalogHead: ["Вся подборка", "Все фильмы в одном месте. Фильтруй по уровню и жанру. Сортируй как удобно. Ищи по названию."],
    footer: "Фильмы для уровней A0–A2 · тексты в стиле Шынгыса",
    cross: { href: "../index.html", label: "Мультфильмы" },
    badge: { A0: "linear-gradient(135deg,#6f9bff,#8e5bef)", A1: "linear-gradient(135deg,#ff9d6f,#ef5bc1)", A2: "linear-gradient(135deg,#6fffb0,#5bd6ef)" },
  },
];

const favSvg = (e) => `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${e}</text></svg>`;

function head(s, title, desc) {
  const fonts = s.fonts
    ? `  <link rel="preconnect" href="https://fonts.googleapis.com" />\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n  <link href="https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Fredoka:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />\n`
    : "";
  return `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <link rel="icon" href="${favSvg(s.favicon)}" />
  <link rel="preconnect" href="https://upload.wikimedia.org" crossorigin />
  <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
${fonts}  <link rel="stylesheet" href="assets/styles.css" />
</head>`;
}

function nav(s, active) {
  const link = (href, code) => `        <a href="${href}"${active === code ? ' class="active"' : ""}>${code}</a>`;
  return `  <nav class="nav">
    <div class="nav-inner">
      <a href="index.html" class="brand"><span class="logo">${s.favicon}</span> Stellas Deutsch <small>${s.brand}</small></a>
      <div class="nav-links">
        <a href="index.html"${active === "home" ? ' class="active"' : ""}>Главная</a>
${link("a0.html", "A0")}
${link("a1.html", "A1")}
${link("a2.html", "A2")}
        <a href="${s.cross.href}" class="nav-cross">${s.cross.label} ↗</a>
      </div>
    </div>
  </nav>`;
}

const scripts = (inner) => `  <script defer src="assets/data.js"></script>
  <script defer src="assets/app.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function () {
${inner}
    });
  </script>`;

function indexPage(s) {
  const pitch = ["Постер", "Обзор", "Оценка", "Где смотреть"].map((p) => `        <span>${p}</span>`).join("\n");
  return `<!DOCTYPE html>
<html lang="ru">
${head(s, "Stellas Deutsch — " + (s.theme === "disney" ? "мультфильмы" : "фильмы") + " для немецкого A0·A1·A2", s.sub.replace(/<[^>]+>/g, ""))}
<body>
  <canvas id="stars"></canvas>
${nav(s, "home")}
  <header class="hero">
    <div class="wrap">
      <span class="eyebrow">${s.eyebrow}</span>
      <h1>${s.h1.join("<br />")}</h1>
      <p class="sub">${s.sub}</p>
      <div class="pitch">
${pitch}
      </div>
    </div>
${s.castle ? CASTLE : ""}
  </header>

  <section class="section">
    <div class="wrap">
      <div class="section-head"><h2>${s.levelsHead[0]}</h2><p>${s.levelsHead[1]}</p></div>
      <div class="levels" id="levelCards"></div>
    </div>
  </section>

  <section class="section" id="catalog">
    <div class="wrap">
      <div class="section-head"><h2>${s.catalogHead[0]}</h2><p>${s.catalogHead[1]}</p></div>
      <div class="controls">
        <div class="filters">
          <div id="levelChips" class="filters" style="gap:8px"></div>
          <span style="color:var(--text-faint);padding:0 2px">·</span>
          <div id="chips" class="filters" style="gap:8px"></div>
        </div>
        <div class="control-right">
          <div class="search-box"><span style="color:var(--gold,#9aa)">🔍</span><input id="search" type="text" placeholder="Поиск…" /></div>
          <div class="select-wrap">
            <select id="sort" class="sort">
              <option value="rating-desc">Оценка ↓</option>
              <option value="rating-asc">Оценка ↑</option>
              <option value="year-desc">Новее</option>
              <option value="year-asc">Старее</option>
              <option value="az">А–Я</option>
              <option value="level">По уровню</option>
            </select>
          </div>
        </div>
      </div>
      <div class="result-count" id="resultCount" style="margin-bottom:18px"></div>
      <div class="grid" id="grid"></div>
    </div>
  </section>

  <footer class="footer">
    <div class="wrap"><div class="made"><span>${s.favicon}</span> Stellas Deutsch</div><div>${s.footer}</div></div>
  </footer>

${scripts(`      var order = ["A0", "A1", "A2"];
      document.getElementById("levelCards").innerHTML = order.map(function (code) {
        var lv = LEVELS[code]; var n = FILMS.filter(function (f) { return f.level === code; }).length;
        return '<a class="level-card" href="' + code.toLowerCase() + '.html">' +
          '<div class="halo" style="background:' + lv.grad + '"></div>' +
          '<span class="badge">' + lv.code + '</span><h3>' + lv.name + '</h3>' +
          '<p class="tag">' + lv.tagline + '</p>' +
          '<span class="count">' + n + ' ' + pluralFilms(n) + '</span>' +
          '<span class="go">Открыть <span class="arw">→</span></span></a>';
      }).join("");
      initCatalog({ level: null });`)}
</body>
</html>
`;
}

function levelPage(s, code) {
  const others = ["A0", "A1", "A2"].filter((o) => o !== code);
  const otherLinks = others
    .map((o) => `        <a href="${o.toLowerCase()}.html"><span class="l">Уровень ${o}<small></small></span><span class="arw">→</span></a>`)
    .join("\n");
  return `<!DOCTYPE html>
<html lang="ru">
${head(s, "Уровень " + code + " — " + (s.theme === "disney" ? "мультфильмы" : "фильмы") + " · Stellas Deutsch", "Уровень " + code + ". Постеры, обзоры, оценки, где смотреть. Stellas Deutsch.")}
<body>
  <canvas id="stars"></canvas>
${nav(s, code)}
  <header class="lvl-hero">
    <div class="wrap">
      <span class="badge-lg" style="background:${s.badge[code]}">УРОВЕНЬ ${code}</span>
      <h1 id="lvlName"></h1>
      <p class="tagline" id="lvlTag"></p>
      <p class="desc" id="lvlDesc"></p>
    </div>
${s.castle ? CASTLE : ""}
  </header>

  <section class="section" style="padding-top:24px">
    <div class="wrap">
      <div class="controls">
        <div class="filters" id="chips"></div>
        <div class="control-right">
          <div class="search-box"><span style="color:var(--gold,#9aa)">🔍</span><input id="search" type="text" placeholder="Поиск…" /></div>
          <div class="select-wrap">
            <select id="sort" class="sort">
              <option value="rating-desc">Оценка ↓</option>
              <option value="rating-asc">Оценка ↑</option>
              <option value="year-desc">Новее</option>
              <option value="year-asc">Старее</option>
              <option value="az">А–Я</option>
            </select>
          </div>
        </div>
      </div>
      <div class="result-count" id="resultCount" style="margin-bottom:18px"></div>
      <div class="grid" id="grid"></div>
      <div class="section-head" style="margin-top:24px;margin-bottom:16px"><h2 style="font-size:26px">Другие уровни</h2></div>
      <div class="other-levels">
${otherLinks}
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="wrap"><div class="made"><span>${s.favicon}</span> Stellas Deutsch</div><div>${s.footer}</div></div>
  </footer>

${scripts(`      var lv = LEVELS["${code}"];
      document.getElementById("lvlName").textContent = lv.name;
      document.getElementById("lvlTag").textContent = lv.tagline;
      document.getElementById("lvlDesc").textContent = lv.desc;
      document.querySelectorAll(".other-levels a").forEach(function (a) {
        var m = a.getAttribute("href").replace(".html", "").toUpperCase();
        a.querySelector("small").textContent = LEVELS[m].name;
      });
      initCatalog({ level: "${code}" });`)}
</body>
</html>
`;
}

for (const s of SITES) {
  const base = s.dir === "." ? "." : s.dir;
  fs.writeFileSync(`${base}/index.html`, indexPage(s));
  for (const code of ["A0", "A1", "A2"]) fs.writeFileSync(`${base}/${code.toLowerCase()}.html`, levelPage(s, code));
  console.log("generated", s.dir === "." ? "root (disney)" : s.dir + " (apple)");
}
