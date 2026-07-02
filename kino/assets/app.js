/* Stellas Deutsch — общий скрипт: волшебные звёзды, рендер карточек, фильтр, сортировка */

/* ---------- Волшебное небо: золотые искры + падающая звезда ---------- */
(function starfield() {
  const c = document.getElementById("stars");
  if (!c) return;
  const ctx = c.getContext("2d");
  let w, h, stars, raf;
  const DENSITY = 0.00018;
  const COLORS = ["#ffffff", "#ffe6a8", "#ffd86b", "#cfe3ff"];

  function resize() {
    w = c.width = window.innerWidth * devicePixelRatio;
    h = c.height = window.innerHeight * devicePixelRatio;
    c.style.width = window.innerWidth + "px";
    c.style.height = window.innerHeight + "px";
    const n = Math.floor(window.innerWidth * window.innerHeight * DENSITY);
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.4 + 0.25) * devicePixelRatio,
      base: Math.random() * 0.5 + 0.35,
      tw: Math.random() * 0.025 + 0.005,
      ph: Math.random() * Math.PI * 2,
      col: COLORS[(Math.random() * COLORS.length) | 0]
    }));
  }

  function paint(s, a) {
    ctx.globalAlpha = Math.max(0.05, Math.min(1, a));
    ctx.fillStyle = s.col;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    if (s.r > 1.4 * devicePixelRatio) {
      ctx.globalAlpha *= 0.4;
      ctx.fillRect(s.x - s.r * 3, s.y - s.r * 0.18, s.r * 6, s.r * 0.36);
      ctx.fillRect(s.x - s.r * 0.18, s.y - s.r * 3, s.r * 0.36, s.r * 6);
    }
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    resize();
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) paint(s, s.base);
    window.addEventListener("resize", () => { resize(); ctx.clearRect(0, 0, w, h); for (const s of stars) paint(s, s.base); });
    return;
  }

  // падающая звезда
  let shoot = null, nextShoot = 120;
  function spawnShoot() {
    shoot = { x: Math.random() * w * 0.5, y: Math.random() * h * 0.35, len: (120 + Math.random() * 90) * devicePixelRatio, life: 0, max: 45, sp: (9 + Math.random() * 5) * devicePixelRatio };
  }

  let t = 0;
  function draw() {
    t += 1;
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) paint(s, s.base + Math.sin(t * s.tw + s.ph) * 0.4);

    if (!shoot && --nextShoot <= 0) { spawnShoot(); nextShoot = 260 + Math.random() * 320; }
    if (shoot) {
      const p = shoot.life / shoot.max;
      const x = shoot.x + shoot.sp * shoot.life, y = shoot.y + shoot.sp * shoot.life * 0.55;
      const g = ctx.createLinearGradient(x, y, x - shoot.len, y - shoot.len * 0.55);
      g.addColorStop(0, "rgba(255,230,160," + (1 - p) + ")");
      g.addColorStop(1, "rgba(255,230,160,0)");
      ctx.strokeStyle = g; ctx.lineWidth = 2 * devicePixelRatio; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - shoot.len, y - shoot.len * 0.55); ctx.stroke();
      if (++shoot.life > shoot.max) shoot = null;
    }
    raf = requestAnimationFrame(draw);
  }
  resize();
  draw();
  let to;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(raf);
    clearTimeout(to);
    to = setTimeout(() => { resize(); draw(); }, 150);
  });
})();

/* ---------- Утилиты ---------- */
function starsHTML(rating) {
  const full = Math.round(rating);
  let out = '<span class="stars">';
  for (let i = 1; i <= 5; i++) {
    out += `<span class="s${i <= full ? "" : " off"}">★</span>`;
  }
  return out + "</span>";
}

function cardHTML(f, i) {
  const links = f.links
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.name} ↗</a>`)
    .join("");
  const meta = [f.kind, ...f.genre, f.duration]
    .map((m) => `<span class="m">${m}</span>`)
    .join("");
  const img = f.poster.img
    ? `<img class="poster-img" src="${f.poster.img}" alt="Постер: ${f.title}" loading="lazy" decoding="async" onerror="this.remove()">`
    : "";
  return `
  <article class="card" style="animation-delay:${Math.min(i * 40, 320)}ms">
    <div class="poster" style="background:${f.poster.grad}">
      <span class="icon">${f.poster.icon}</span>
      ${img}
      <span class="lvl-tag">${f.level}</span>
      <span class="rating-badge">★ ${f.rating.toFixed(1)}</span>
    </div>
    <div class="card-body">
      <div class="title-row">
        <h3>${f.title}</h3>
        <span class="year">${f.year}</span>
      </div>
      <div class="de">${f.titleDe}</div>
      <div style="margin-top:10px">${starsHTML(f.rating)} <span style="color:var(--text-faint);font-size:12.5px;margin-left:6px">${f.rating.toFixed(1)} / 5</span></div>
      <div class="meta">${meta}</div>
      <p class="review">${f.review}</p>
      <p class="why"><b style="color:var(--text-dim)">Почему этот уровень:</b> ${f.why}</p>
      <div class="links">${links}</div>
    </div>
  </article>`;
}

/* ---------- Каталог с фильтром и сортировкой ---------- */
function initCatalog(opts) {
  const { level } = opts; // null = все уровни
  const grid = document.getElementById("grid");
  const countEl = document.getElementById("resultCount");
  const searchEl = document.getElementById("search");
  const sortEl = document.getElementById("sort");
  const chipRow = document.getElementById("chips");

  let pool = level ? FILMS.filter((f) => f.level === level) : FILMS.slice();

  // собрать жанры
  const genres = Array.from(new Set(pool.flatMap((f) => f.genre))).sort();
  const state = { genre: "Все", q: "", sort: sortEl ? sortEl.value : "rating-desc", levelFilter: "Все" };

  // построить чипы
  const chipItems = ["Все", ...genres];
  chipRow.innerHTML = chipItems
    .map(
      (g, i) =>
        `<button class="chip${i === 0 ? " active" : ""}" data-genre="${g}">${g}</button>`
    )
    .join("");

  // на общей странице добавим фильтр по уровню
  const levelChipRow = document.getElementById("levelChips");
  if (levelChipRow) {
    const lvls = ["Все", "A0", "A1", "A2"];
    levelChipRow.innerHTML = lvls
      .map(
        (l, i) =>
          `<button class="chip${i === 0 ? " active" : ""}" data-level="${l}">${l}</button>`
      )
      .join("");
    levelChipRow.addEventListener("click", (e) => {
      const b = e.target.closest("[data-level]");
      if (!b) return;
      state.levelFilter = b.dataset.level;
      levelChipRow.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === b));
      render();
    });
  }

  function apply() {
    let list = pool.slice();
    if (state.levelFilter !== "Все") list = list.filter((f) => f.level === state.levelFilter);
    if (state.genre !== "Все") list = list.filter((f) => f.genre.includes(state.genre));
    if (state.q) {
      const q = state.q.toLowerCase();
      list = list.filter(
        (f) =>
          f.title.toLowerCase().includes(q) ||
          f.titleDe.toLowerCase().includes(q) ||
          f.genre.join(" ").toLowerCase().includes(q)
      );
    }
    switch (state.sort) {
      case "rating-desc": list.sort((a, b) => b.rating - a.rating); break;
      case "rating-asc": list.sort((a, b) => a.rating - b.rating); break;
      case "year-desc": list.sort((a, b) => b.year - a.year); break;
      case "year-asc": list.sort((a, b) => a.year - b.year); break;
      case "az": list.sort((a, b) => a.title.localeCompare(b.title, "ru")); break;
      case "level": list.sort((a, b) => a.level.localeCompare(b.level) || b.rating - a.rating); break;
    }
    return list;
  }

  function render() {
    const list = apply();
    if (!list.length) {
      grid.innerHTML = `<div class="empty"><div class="big">🪄</div>Магия не нашла ничего. Смени фильтр.</div>`;
    } else {
      grid.innerHTML = list.map((f, i) => cardHTML(f, i)).join("");
    }
    if (countEl) {
      const word = pluralFilms(list.length);
      countEl.textContent = `${list.length} ${word}`;
    }
  }

  chipRow.addEventListener("click", (e) => {
    const b = e.target.closest("[data-genre]");
    if (!b) return;
    state.genre = b.dataset.genre;
    chipRow.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === b));
    render();
  });
  if (searchEl)
    searchEl.addEventListener("input", (e) => { state.q = e.target.value.trim(); render(); });
  if (sortEl)
    sortEl.addEventListener("change", (e) => { state.sort = e.target.value; render(); });

  render();
}

function pluralFilms(n) {
  const u = (typeof UNITS !== "undefined" && UNITS) || ["мультфильм", "мультфильма", "мультфильмов"];
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return u[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return u[1];
  return u[2];
}
