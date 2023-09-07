'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3c26f85907045e138fda40d62f6d1c7a",
"index.html": "ffd76a31a7f36bc732104a611afab731",
"/": "ffd76a31a7f36bc732104a611afab731",
"main.dart.js": "822527a1e4310d03264a7844ad24c15d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "ef11f057f66131daedc2116d4c063b70",
"icons/android-chrome-192x192.png": "ef11f057f66131daedc2116d4c063b70",
"icons/apple-touch-icon.png": "b75fd5ce4830dbe34644ff0a2197ae7a",
"icons/android-chrome-512x512.png": "41b73a77ea78b46e826f99fe84cc2eee",
"manifest.json": "dcc3d0a8fd596930a8fc2d4bbc48de0f",
"assets/AssetManifest.json": "2e0e70da084fafdcf2f19e1f5d9f00ee",
"assets/loading.gif": "54c9af226721e95539a5cd9592d635bb",
"assets/NOTICES": "33a80d0d6e1430d5bdacec64303fa328",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "187e677a891c0b8c7f89c4439c676220",
"assets/fonts/MaterialIcons-Regular.otf": "455b645d95424d7a283365fd06ba7b98",
"assets/assets/web/images/FotoWisuda.jpg": "17621fad08b3e869e9727da24d8102b8",
"assets/assets/web/images/FotoHeader.png": "116a85438f8ed45f58f9c21eeedf8c75",
"assets/assets/web/images/MountainBackground.jpg": "0d37754f916a2ff6317263f092eaa8c2",
"assets/assets/web/images/Portofolio/IG/8.jpg": "3cb285c69877e5d95543155686fe8652",
"assets/assets/web/images/Portofolio/IG/9.jpg": "d6c1fe17afe78f9852d179e30d0286c7",
"assets/assets/web/images/Portofolio/IG/4.jpg": "1496dd2672687cb5860302feaa1c7ffc",
"assets/assets/web/images/Portofolio/IG/5.jpg": "d52623d9966eb4a636ee9264aee9e2b0",
"assets/assets/web/images/Portofolio/IG/7.jpg": "540b31877b176a6efa1a3e0a039a734f",
"assets/assets/web/images/Portofolio/IG/6.jpg": "4fdd8e0f207f0ce7efe0af4462adf735",
"assets/assets/web/images/Portofolio/IG/2.jpg": "22efa5c12b5ebeefeae25831b11b9d66",
"assets/assets/web/images/Portofolio/IG/3.jpg": "30ffe5cdf5ea392b8ef2b521674a16ca",
"assets/assets/web/images/Portofolio/IG/1.jpg": "97a40bc4c9f1ca13767b57eadc8a816e",
"assets/assets/web/images/Portofolio/Poster/fix.jpg": "2de5ac7c8de667b01c2d6055ff557fc5",
"assets/assets/web/images/Portofolio/Poster/Untitled-16.jpg": "73bc10e3341a4d9cde1f90fad5900137",
"assets/assets/web/images/Portofolio/Poster/posterfinal.jpg": "0d903e3799841bca435801dafb1b3aa1",
"assets/assets/web/images/Portofolio/Poster/poste+medarr3.jpg": "b603e2e97874a4c2caa296bad9c811db",
"assets/assets/web/icons/Connect.svg": "bb265be0087075fef745724ca77571e3",
"assets/assets/web/icons/Intagram.svg": "0bf5e1534bb6a2a624123b7b3a229679",
"assets/assets/web/icons/Github.svg": "6c0845834c0b9de3575466ef18f7236b",
"assets/assets/web/icons/WebDevLogo.svg": "f31c02c667f65e6b6b1223a2501c6aba",
"assets/assets/web/icons/DesignLogo.svg": "596023e769a1907bcb1fb93d7f1a0c26",
"assets/assets/web/icons/MyName.svg": "2e7dfaeea45b31b9430438a432b13ba4",
"assets/assets/web/icons/flutter-icon.svg": "553dbe36b493f7b287c85eddfc67cb5e",
"assets/assets/web/icons/SoftwareEngineer.svg": "7fb28b44109f2e89c0167c3318101cce",
"assets/assets/web/icons/Email.svg": "4034670c2db91f8ed51eff072a71ed30",
"assets/assets/web/icons/Facebook.svg": "4c0df89524e8be6fb2229e2577190c08",
"assets/assets/web/icons/Whatsapp.svg": "ccc40c1d1b2669874fe114f31d4ce874",
"assets/assets/web/icons/MobileDevLogo.svg": "e1364e8d025abb69909af12662f499b3",
"assets/assets/web/icons/Linkedin.svg": "f36314640ca69962240feed0e4e65456",
"assets/assets/web/icons/Paperplane.svg": "45e63c14082614193d06a39f87bc5f5c",
"assets/assets/web/icons/Behance.svg": "3e43898d9621b884f3d96b81a9450886",
"assets/assets/web/lottie/success.json": "a1a8d0fbe6ed7b9f25b3921cf5c35d99",
"assets/assets/web/lottie/failed.json": "6e855bbc6829b3bc20778f85c51e8ddd",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
