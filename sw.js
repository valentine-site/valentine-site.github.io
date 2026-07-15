self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('app-store').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/icon-112.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
