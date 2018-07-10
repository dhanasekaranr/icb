/**
<<<<<<< HEAD
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
=======
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
<<<<<<< HEAD
    './build/vendor.js',
=======
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
<<<<<<< HEAD
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
=======
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
