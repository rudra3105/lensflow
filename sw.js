const CACHE_NAME = 'lensflow-v1.0.0';
const ASSETS = [
  '/',
  '/index.html',
];

// Install
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      }).catch(() => caches.match('/index.html'));
    })
  );
});

// Background Sync
self.addEventListener('sync', e => {
  if (e.tag === 'sync-data') {
    e.waitUntil(syncData());
  }
});

async function syncData() {
  // In a real app, sync queued data to backend
  console.log('[SW] Background sync triggered');
}

// Push Notifications
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const options = {
    body: data.body || 'You have a new notification from LensFlow',
    icon: '/icons/icon-192.png',
    badge: '/icons/badge-72.png',
    vibrate: [100, 50, 100],
    data: { url: data.url || '/' },
    actions: [
      { action: 'view', title: 'View Event' },
      { action: 'dismiss', title: 'Dismiss' }
    ]
  };
  e.waitUntil(
    self.registration.showNotification(data.title || 'LensFlow Reminder', options)
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action === 'dismiss') return;
  e.waitUntil(
    clients.openWindow(e.notification.data.url || '/')
  );
});
