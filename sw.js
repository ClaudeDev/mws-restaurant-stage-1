importScripts('./cache-polyfill.js');

const CACHE_NAME = 'restaurant-reviews-v2';

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('CACHE_NAME').then(function(cache) {
            return cache.addAll([
                './',
                './index.html',
                './css/styles.css',
                './data/restaurants.json',
                './js/dbhelper.js',
                './js/main.js',
                './js/restaurant_info.js',
                './restaurant.html',
                './img/1.jpg',
                './img/2.jpg',
                './img/3.jpg',
                './img/4.jpg',
                './img/5.jpg',
                './img/6.jpg',
                './img/7.jpg',
                './img/8.jpg',
                './img/9.jpg',
                './img/10.jpg',
                './Restaurant-Reviews-App/restaurant.html?id=1',
                './Restaurant-Reviews-App/restaurant.html?id=2',
                './Restaurant-Reviews-App/restaurant.html?id=3',
                './Restaurant-Reviews-App/restaurant.html?id=4',
                './Restaurant-Reviews-App/restaurant.html?id=5',
                './Restaurant-Reviews-App/restaurant.html?id=6',
                './Restaurant-Reviews-App/restaurant.html?id=7',
                './Restaurant-Reviews-App/restaurant.html?id=8',
                './Restaurant-Reviews-App/restaurant.html?id=9',
                './Restaurant-Reviews-App/restaurant.html?id=10',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
            .catch(function(error) {
                console.log('Error fetching and caching new data', error);
            })
    );
});
