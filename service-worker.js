const CACHE_NAME = 'offline-v1'
const PRECACHE_ASSETS = [
  '/assets/'
]

self.addEventListener('install', event => {
  event.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(PRECACHE_ASSETS);
  })());
});