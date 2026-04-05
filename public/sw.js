// @ts-nocheck
// Service Worker for caching and performance optimization
const CACHE_NAME = 'wixwave-v1.0.0';
const STATIC_CACHE = 'wixwave-static-v1.0.0';
const DYNAMIC_CACHE = 'wixwave-dynamic-v1.0.0';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/assets/index-BzluDPnX.css',
  '/assets/vendor-react-DJG_os-6.js',
  '/assets/index-BeiCInEa.js',
  'https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png',
  'https://fonts.gstatic.com/s/josefinsans/v32/Qw3aZQNVED7rKGKxtqIqX5EUDXx9.ttf'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests except for our allowed domains
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin &&
      !url.origin.includes('cloudinary.com') &&
      !url.origin.includes('fonts.gstatic.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response.ok) return response;

            // Clone the response for caching
            const responseClone = response.clone();

            // Cache successful responses
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(event.request, responseClone));

            return response;
          })
          .catch(() => {
            // Return offline fallback for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Background sync for offline analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any background sync tasks here
  console.log('Background sync triggered');
}