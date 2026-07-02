/* Build a site's data.js from a source file:
   - resolves real poster images from Wikipedia REST (cached)
   - assigns fallback gradient by index
   - auto-generates "where to watch" links (JustWatch + YouTube)
   Usage: node build-site.mjs <src.mjs> <out data.js>  */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const UA = "StellasDeutschPosterBot/1.0 (https://stellasdeutsch-dev.github.io; narseyitshyngys@gmail.com)";
const CACHE = "/tmp/poster_cache.json";
const GRADS = [
  "linear-gradient(160deg,#6f9bff,#1b3a8f)","linear-gradient(160deg,#8e5bef,#3a1b8f)",
  "linear-gradient(160deg,#ef9a5b,#8f4a1b)","linear-gradient(160deg,#5bef8e,#1b8f52)",
  "linear-gradient(160deg,#ff5b9c,#8f1b52)","linear-gradient(160deg,#5bd6ef,#1b6f8f)",
  "linear-gradient(160deg,#efc15b,#8f6a1b)","linear-gradient(160deg,#c15bef,#5f1b8f)",
  "linear-gradient(160deg,#ff8e5b,#8f3a1b)","linear-gradient(160deg,#5b6eef,#1b2a8f)",
  "linear-gradient(160deg,#2ec5b6,#0a5d54)","linear-gradient(160deg,#ef5b5b,#8f1b3a)",
  "linear-gradient(160deg,#8eef5b,#4a8f1b)","linear-gradient(160deg,#b06ab3,#3a1b6e)",
];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function resolvePoster(title, cache) {
  if (!title) return null;
  if (title in cache) return cache[title];
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, "_"))}?redirect=true`;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA } });
      if (res.status === 429) { await sleep(5000 * (attempt + 1)); continue; }
      if (!res.ok) { cache[title] = null; return null; }
      const d = await res.json();
      const img = (d.originalimage && d.originalimage.source) || (d.thumbnail && d.thumbnail.source) || null;
      cache[title] = img;
      return img;
    } catch { await sleep(1500); }
  }
  cache[title] = null;
  return null;
}

const enc = (s) => encodeURIComponent(s);
function autoLinks(f) {
  const q = f.titleDe || f.title;
  return [
    { name: "Где смотреть", url: `https://www.justwatch.com/de/suche?q=${enc(q)}` },
    { name: "Трейлер", url: `https://www.youtube.com/results?search_query=${enc(q + " trailer deutsch")}` },
  ];
}

async function main() {
  const [, , srcPath, outPath] = process.argv;
  const mod = await import(pathToFileURL(path.resolve(srcPath)).href);
  const FILMS = mod.FILMS, LEVELS = mod.LEVELS;
  const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, "utf8")) : {};

  let hit = 0;
  for (let i = 0; i < FILMS.length; i++) {
    const f = FILMS[i];
    const img = await resolvePoster(f.wiki, cache);
    if (img) hit++;
    f.poster = { icon: f.icon, grad: GRADS[i % GRADS.length], img: img || null };
    f.links = f.links && f.links.length ? f.links : autoLinks(f);
    delete f.icon; delete f.wiki;
    fs.writeFileSync(CACHE, JSON.stringify(cache));
    process.stderr.write(`${img ? "OK" : "--"} [${f.level}] ${f.titleDe}\n`);
    await sleep(cache.__justCached === f.wiki ? 0 : 350);
  }

  const UNITS = mod.UNITS || ["мультфильм", "мультфильма", "мультфильмов"];
  const out =
    `/* Stellas Deutsch — авто-сборка. Постеры: Wikipedia. Не редактировать вручную. */\n` +
    `const FILMS = ${JSON.stringify(FILMS, null, 2)};\n\n` +
    `const LEVELS = ${JSON.stringify(LEVELS, null, 2)};\n\n` +
    `const UNITS = ${JSON.stringify(UNITS)};\n\n` +
    `if (typeof module !== "undefined") module.exports = { FILMS, LEVELS, UNITS };\n`;
  fs.writeFileSync(outPath, out);
  process.stderr.write(`\n${hit}/${FILMS.length} real posters -> ${outPath}\n`);
}
main();
