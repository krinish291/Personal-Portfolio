// Polyfill for Chrome caching
//importScripts('scripts/cache-polyfill.js');
'use strict';
// Install the ServiceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(

    // Open a cache
    caches.open('v1').then(function(cache) {

      // Define what we want to cache
      return cache.addAll([
        '/offline.html',
        
      ]);
    })
  );
});

//service worker actived
self.addEventListener('activate',evt => {
  console.log("service worker actived");
})

// Use ServiceWorker (or not) to fetch data
self.addEventListener('fetch', function(event) {

  event.respondWith(

    // Look for something in the cache that matches the request
    caches.match(event.request).then(function(response) {

      // If we find something, return it
      // Otherwise, use the network instead
      return response || fetch(event.request);
    })
  );
});