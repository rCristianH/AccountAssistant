//quiero que cuando se instale la app se guarde en cache los archivos que estan en la carpeta dist html, js, css, json, svg

const CACHE_NAME = "offline-v1";
const PRECACHE_ASSETS = ["./"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(PRECACHE_ASSETS);
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })()
  );
});
