"use strict";

// Incrementing CACHE_VERSION will kick off the install event and force previously cached
// resources to be cached again.
const CACHE_VERSION = 1;
let CURRENT_CACHES = {
  offline: "offline-v" + CACHE_VERSION,
};
const OFFLINE_URL = "./offline.html";

function createCacheBustedRequest(url) {
  let request = new Request(url, { cache: "reload" });

  if ("cache" in request) {
    return request;
  }

  let bustedUrl = new URL(url, self.location.href);
  bustedUrl.search += (bustedUrl.search ? "&" : "") + "cachebust=" + Date.now();
  return new Request(bustedUrl);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CURRENT_CACHES.offline).then(function (cache) {
      return Promise.all([
        cache.put(OFFLINE_URL, fetch(createCacheBustedRequest(OFFLINE_URL))),
        cache.add("./script.js"),
        cache.add("./style.css"),
        cache.add("./assets/1fad3.svg"),
        // Agrega aquí otros recursos que necesites cachear
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  let expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            console.log("Deleting out of date cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (
    event.request.mode === "navigate" ||
    (event.request.method === "GET" &&
      event.request.headers.get("accept").includes("text/html"))
  ) {
    console.log("Handling fetch event for", event.request.url);
    event.respondWith(
      fetch(event.request).catch((error) => {
        console.log("Fetch failed; returning offline page instead.", error);
        return caches.match(OFFLINE_URL);
      })
    );
  } else if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").includes("text/css")
  ) {
    // Si la solicitud es para un archivo CSS, intenta recuperarlo de la caché
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  } else if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").includes("text/javascript")
  ) {
    // Si la solicitud es para un archivo JavaScript, intenta recuperarlo de la caché
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});