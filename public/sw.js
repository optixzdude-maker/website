self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // Keeps the app responsive
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
