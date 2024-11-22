'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e32cdddcfe36f212d98e2f37a69f420e",
"assets/AssetManifest.bin.json": "40853bb25d35fc096f526a518d071022",
"assets/AssetManifest.json": "9d77f5fff61851a5d0e153d30be52a56",
"assets/assets/images/Bean%2520Bagss%2520Logo-%2520svg.svg": "e458abbda782de090d35d6f31efd79fe",
"assets/assets/images/Bean%2520Bagss%2520logo.png": "bc5fe33cc30563098426e1321bdc7f1b",
"assets/assets/images/beanbags1.jpg": "bb55ecf00d2a587c6ee6d05cb1ed1ff1",
"assets/assets/images/comp222.jpg": "dade6d05d958de0fe666ced73263e937",
"assets/assets/images/comp333.jpg": "ffd7385a096bd57739a7925e5d7f35ca",
"assets/assets/images/Companynamepage.jpg": "faa6f5adf2991ae8a91c45da9b553f19",
"assets/assets/images/Corporate%2520Cotton%2520Black.png": "88ab8dc31e87df943fa76b7e6ed9f1fc",
"assets/assets/images/Corporate%2520Cotton%2520Black2.png": "1ac32823a1814328770e8567585327e7",
"assets/assets/images/Corporate%2520Cotton%2520Logo%2520cp%2520svg.svg": "0612eff0921b6266b3d6269c0646fdf8",
"assets/assets/images/Fatbag%2520Logo%2520-svg.svg": "c687ee94ffb56a20ee00487cc4f2eea1",
"assets/assets/images/Fatbag%2520Logo%2520Black.png": "c517bffd9da0c8f1a59737b10050ea89",
"assets/assets/images/Fatbag%2520Logo.png": "9f85052a6e399c94e90377648f6dce7b",
"assets/assets/images/fsh1.jpg": "db606ff4fb570773517195503b79137f",
"assets/assets/images/graph.jpg": "011c58697dd145b702d577c9c13522f7",
"assets/assets/images/graph1.jpg": "dabae27fffbc9264dd19aed3e3c52613",
"assets/assets/images/Homepafe%2520Category%2520Spices.jpg": "b2388737fc3b7bffcd99a26c45daa2fb",
"assets/assets/images/Homepage%2520Category%2520Home.jpg": "41c9a9b98fa4d9e0679ad5c500fa5f22",
"assets/assets/images/Homepage%2520Comfort.jpg": "22d79da9619a62594190cdfdc5d34d72",
"assets/assets/images/Homepage%2520LifeStyle.jpg": "26054a223685772e3c6e562a98fdab71",
"assets/assets/images/HomePAGE%2520Main%2520Banner.jpg": "8bb0e8362e14ca15862315c492bd1703",
"assets/assets/images/img1.png": "8b67062e8e5543ef51e80d16323c2bba",
"assets/assets/images/img11.jpg": "d7c6d2793043643de3bd28c4a044b0e9",
"assets/assets/images/img12.jpg": "7382c2dd108aad72090b5bf30bdb08f2",
"assets/assets/images/img13.jpg": "72fc85fdf88e2df632757786129b83f9",
"assets/assets/images/img2.jpg": "daef5ed8a9216b4de6fa7732d28154c8",
"assets/assets/images/img3%2520-%2520Copy.png": "dde3d34079403c768ed8d7b265d99368",
"assets/assets/images/img3.png": "d3bbe27ff68a39057a978f690d9ed2f6",
"assets/assets/images/img4.png": "f41c48ee483ea0e18fe5eb732913e462",
"assets/assets/images/img444.jpg": "5410bd3160b122a07bf1eebe75ca1f26",
"assets/assets/images/img5.jpg": "f1bfc72f92038dd4d619e13644c12207",
"assets/assets/images/img55.png": "19a943c248f944798c47fdf1c8230f3b",
"assets/assets/images/img6.png": "72246e9bb0261f4d31ae30f88968cfcc",
"assets/assets/images/img7.png": "bb54156beea91e0271089ae9cb9bdbe8",
"assets/assets/images/img8.png": "439c5ebf84c55f18afbcfb03e41576ae",
"assets/assets/images/interior.jpg": "59cfb4f203ca8a30dc5af0ddab80787f",
"assets/assets/images/Jumbble%2520logo%2520-svg.svg": "d8e7f54b9273c69cc4fa12f60e2703d0",
"assets/assets/images/Jumbble%2520logo%2520Black%2520-cp%2520svg.svg": "acea051d9d5c56fbd18f76be349a08ba",
"assets/assets/images/Jumbble%2520Logo%2520Black%252055.png": "f7add1b058a163f708525a14811b01d1",
"assets/assets/images/Jumbble%2520Logo%2520Black.png": "f7add1b058a163f708525a14811b01d1",
"assets/assets/images/Jumbble%2520Logo.png": "f2bd27ae65023aec3772ad6a54354f54",
"assets/assets/images/jumbble.jpg": "5f107acedcbc0d2f52f56f0a7a999e28",
"assets/assets/images/La%2520Chariot%2520Logo%2520-svg.svg": "e4f8a71d0fa526afc90b7aa28aa6fbbd",
"assets/assets/images/La%2520Chariot.png": "f7f05e0f4308e0ceb375292881974663",
"assets/assets/images/LOGO1.png": "30c8dba0e20951e68978adb12a99f66b",
"assets/assets/images/LOGO11.png": "9935ed4161e52f6a9cc2de8768dca5e7",
"assets/assets/images/LOGO111.png": "552b634a972dda39f451e68777d3a21c",
"assets/assets/images/logo2.png": "3c572004cf33eef61fcff40e34984b9d",
"assets/assets/images/LUXE%2520DECORA%2520Logo%2520-svg.svg": "57341e2880f884296ae5d42c941a7c78",
"assets/assets/images/Luxe%2520Decora%2520Logo%252055.png": "1e75d3b87490d94876e0bb1a2ec6341d",
"assets/assets/images/LUXE%2520DECORA%2520Logo%2520cp%2520svg.svg": "57341e2880f884296ae5d42c941a7c78",
"assets/assets/images/Luxe%2520Decora%2520Logo.png": "1e75d3b87490d94876e0bb1a2ec6341d",
"assets/assets/images/Map.jpg": "fe9a2d383090ba358182ee975e973db1",
"assets/assets/images/Norbond%2520Black.png": "8404ef1a7c2b097ef40e0366efc3cb07",
"assets/assets/images/Norbond%2520Logo%2520cp%2520svg.svg": "5d5ad90fe8399d0fa64cf53565535951",
"assets/assets/images/pexels-pixabay-37347.jpg": "caa77962b19c04018ada1d40502457b5",
"assets/assets/images/polarbr.jpg": "5bcb1d4e227403f7849da626a836f478",
"assets/assets/images/sam1.jpg": "c7fa228c98a6cdf6fbe717a8024d39ff",
"assets/assets/images/Signatures%2520Fatbag.jpg": "f9f6d234d7672bb53bc8eb26d30651fb",
"assets/assets/images/Signatures%2520La%2520Cahriot.jpg": "887caf0e704a822c9650b52a1939795d",
"assets/assets/images/Signatures%2520Luxe%2520Decora.jpg": "452563509e3964bbac65d600bf0d9165",
"assets/assets/images/spices.jpg": "0130427dfa66c06545875069ddcbf19a",
"assets/assets/images/tea.jpg": "e625444589f62b5d9f49603545e101f0",
"assets/assets/images/verora1.jpg": "4eccc79c129639ecff40fbfd1c459277",
"assets/assets/images/Verraura%2520Logo.png": "b8ff357699115a805f93e9719c6c52aa",
"assets/assets/images/Verraura1234.svg": "8633e0dc4c79202ab5ce0b3fb5557a0c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "8985965062964a79bcba5cdec26c9d0d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "72db14158d8a1f8d65eb69236cc29c19",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "767bb2ac1e8b7a8034697df24642b691",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
