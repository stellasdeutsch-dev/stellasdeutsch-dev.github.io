// generated at build time
const CACHE = 'study-cabinet-muwjzdkj';
const SHELL = ["./","./assets/pdf.worker.min-yatZIOMy.mjs","./assets/index-Dq0_ZK8e.css","./assets/index-CWuizox-.js","./assets/pdf-BnPRJEQ6.js","./assets/pdf.worker.min-DgRcL-GR.js","./manifest.webmanifest","./icon-192.png","./icon-512.png","./apple-touch-icon.png"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith('study-cabinet-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Supabase and links go straight to the network

  // pages: fresh from the network, cached copy when offline
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((r) => {
          const copy = r.clone();
          caches.open(CACHE).then((c) => c.put('./', copy));
          return r;
        })
        .catch(() => caches.match('./').then((r) => r || caches.match(req))),
    );
    return;
  }

  // built files have hashed names, so the cached copy is always right
  e.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((r) => {
          if (r.ok) {
            const copy = r.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return r;
        }),
    ),
  );
});
