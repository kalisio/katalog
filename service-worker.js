/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cf47cdd91de1552ae909da828f0ef624"
  },
  {
    "url": "about/contact.html",
    "revision": "8640d777e4a55879309a6da88bf8138b"
  },
  {
    "url": "about/index.html",
    "revision": "3d3ccad2f7f77978c3d182e6afa4b6e5"
  },
  {
    "url": "about/license.html",
    "revision": "62c077bcdbdfd8b418016caa64005825"
  },
  {
    "url": "assets/css/0.styles.f13a9f01.css",
    "revision": "c1c4ccc41008994d2bc6e037b2902afa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8e9b01b2.js",
    "revision": "0c25cfee970195fb1f11603e6826ffce"
  },
  {
    "url": "assets/js/11.dedb216e.js",
    "revision": "66a31eadac2731d0e79f518c82fa5a4c"
  },
  {
    "url": "assets/js/12.9b07e227.js",
    "revision": "f9fd6b78b4fea3f653a82c2455563df5"
  },
  {
    "url": "assets/js/13.93469989.js",
    "revision": "393a6d848eca2ff16c6c8b4f4858713b"
  },
  {
    "url": "assets/js/14.9657ef9b.js",
    "revision": "674663433d8afdb3ad83d08f4dfe307a"
  },
  {
    "url": "assets/js/15.ce67f05e.js",
    "revision": "b5050c06b6d36c46d7e2101e6ba1c39d"
  },
  {
    "url": "assets/js/16.845fa888.js",
    "revision": "27a365e33b82a908bc9fe4253d2ef1a3"
  },
  {
    "url": "assets/js/17.73ef6f65.js",
    "revision": "0c5383fb641dc8a11a8b02dd5f9be420"
  },
  {
    "url": "assets/js/18.bb08bade.js",
    "revision": "64daa38673fd4013c10437ac962848f2"
  },
  {
    "url": "assets/js/19.7a93a70c.js",
    "revision": "85c0ed6015abc14c8c6b35c0dec15841"
  },
  {
    "url": "assets/js/2.184b21c4.js",
    "revision": "5ef0a88216768896f2ff9d66d330693b"
  },
  {
    "url": "assets/js/20.ef53f3c6.js",
    "revision": "cbebbc34fda7530046b1213675038a10"
  },
  {
    "url": "assets/js/21.85596cda.js",
    "revision": "34d199e70b824afb3a5f6a322b1ccfda"
  },
  {
    "url": "assets/js/22.a29614bc.js",
    "revision": "0f3b30c1569b9a78006f97d2a4c9b406"
  },
  {
    "url": "assets/js/23.0221d880.js",
    "revision": "4efb2b5896d374e4b2ceabb7b4b9e7f4"
  },
  {
    "url": "assets/js/24.279f823d.js",
    "revision": "d5d4d88b701faa132dbe1afdbed3b731"
  },
  {
    "url": "assets/js/25.a6136196.js",
    "revision": "4b00ab36baa5f6a5c1a5d72fcf5ff863"
  },
  {
    "url": "assets/js/26.89d173c6.js",
    "revision": "3b38450b125c01d95ab086dc0f4fe24a"
  },
  {
    "url": "assets/js/27.7f48517b.js",
    "revision": "3f79dfdf139afc4b2e45d127f1701512"
  },
  {
    "url": "assets/js/28.702066a2.js",
    "revision": "abbf21a1b317942a497ccfcf44d62cb8"
  },
  {
    "url": "assets/js/29.02986b80.js",
    "revision": "2fdc043fe4b8fa432f6d6118b748b7fe"
  },
  {
    "url": "assets/js/3.74d99ad2.js",
    "revision": "1cff1698c87725976ab17019d0fdb414"
  },
  {
    "url": "assets/js/30.770d723e.js",
    "revision": "64a1d7e86f9cb2bddaabfcd29a401512"
  },
  {
    "url": "assets/js/31.5b289fa3.js",
    "revision": "eea5209b1189e10a0cf31e13293c4459"
  },
  {
    "url": "assets/js/32.7525a536.js",
    "revision": "9657f236d1d8792884ad1fb7d94629fb"
  },
  {
    "url": "assets/js/33.1927e6e2.js",
    "revision": "604373d1db34769b59ada5920ee607d8"
  },
  {
    "url": "assets/js/34.7d097f69.js",
    "revision": "914e895dde36f0a5ff530b40d421acd7"
  },
  {
    "url": "assets/js/35.f7bab0b7.js",
    "revision": "85e6f2edb61d5b089506011178a168a2"
  },
  {
    "url": "assets/js/36.3f32aaa8.js",
    "revision": "cfa1d2562ba6d17d749a0d614e4ef557"
  },
  {
    "url": "assets/js/37.06da024d.js",
    "revision": "45111f90373c353a9d4bed8dd08c2e80"
  },
  {
    "url": "assets/js/38.df2d312d.js",
    "revision": "9f2fce5356f40eaab0f3a92f4930b322"
  },
  {
    "url": "assets/js/4.7e3815cb.js",
    "revision": "13324a3c7c3b53292321f858703b2fc3"
  },
  {
    "url": "assets/js/5.b08738c0.js",
    "revision": "a33acba62fb4ecb03d0a85a765842fd2"
  },
  {
    "url": "assets/js/6.4f2f841e.js",
    "revision": "a19d2a99f1a1419b159bab57d89b6a11"
  },
  {
    "url": "assets/js/7.9b73c296.js",
    "revision": "bd9ae8dbd9a8627f9dc37caa0fc9351d"
  },
  {
    "url": "assets/js/8.f6ca2862.js",
    "revision": "c65c364c1566ad464272c91adc494410"
  },
  {
    "url": "assets/js/9.ddef9d5e.js",
    "revision": "4afd96b0e55f8f87bbe48bd0b51edd58"
  },
  {
    "url": "assets/js/app.119a17ef.js",
    "revision": "be6b5b791214e54db41689e489e76a39"
  },
  {
    "url": "guides/faq.html",
    "revision": "76a3e14a4fa533c93481733387f13f34"
  },
  {
    "url": "guides/index.html",
    "revision": "ac9bd09980f0a0c150d2e16a781e9a85"
  },
  {
    "url": "guides/step-by-step.html",
    "revision": "238a013022c24533609444c734244211"
  },
  {
    "url": "index.html",
    "revision": "ec648adc2228b2e649802ea55cc70336"
  },
  {
    "url": "ressources/index.html",
    "revision": "80d0cd352b1f2a5d20a3fd8a632f503d"
  },
  {
    "url": "ressources/issues/communications.html",
    "revision": "717cde5a46f5cf7cc3aef22b02f2ab4b"
  },
  {
    "url": "ressources/issues/index.html",
    "revision": "1370c3cc0d9ac9dbaafbc5614620c467"
  },
  {
    "url": "ressources/issues/population.html",
    "revision": "cd974cfc3eac7c20628f78040094d8f0"
  },
  {
    "url": "ressources/natural_risks/clay.html",
    "revision": "40b9fdfefb02d886249587a7a590761f"
  },
  {
    "url": "ressources/natural_risks/earthquakes.html",
    "revision": "c3f1fea2a52b63d633284346b9c8c3a5"
  },
  {
    "url": "ressources/natural_risks/floods.html",
    "revision": "61bf79c4acba955d6d513894da154519"
  },
  {
    "url": "ressources/natural_risks/forest_fires.html",
    "revision": "052f7d326b40ec106f1095a806aa497c"
  },
  {
    "url": "ressources/natural_risks/ground_movements.html",
    "revision": "62e2ebcd08abe8dbc94d97a0cfa84262"
  },
  {
    "url": "ressources/natural_risks/index.html",
    "revision": "e92d10ad8ad52ee7ae720037e66fc15e"
  },
  {
    "url": "ressources/natural_risks/radon.html",
    "revision": "ce2206cb0f67f3c294dc16ab2e863e15"
  },
  {
    "url": "ressources/natural_risks/underground_cavities.html",
    "revision": "6a6ada2628c2efc4af7f5e8553d02c94"
  },
  {
    "url": "ressources/natural_risks/volcanism.html",
    "revision": "f5812ccca61660a8fe37967a235205d4"
  },
  {
    "url": "ressources/technological_risks/classified_installations.html",
    "revision": "f5600005738ea1c418f6a23923cf595f"
  },
  {
    "url": "ressources/technological_risks/index.html",
    "revision": "8a5fd80324fad766955b52f2dc67c36e"
  },
  {
    "url": "ressources/technological_risks/pipe_networks.html",
    "revision": "442e00decda85732303bafc7a581b8f4"
  },
  {
    "url": "ressources/technological_risks/pollutant_emissions.html",
    "revision": "3b8d2deb2d8acfdb0799eeb27f0126b3"
  },
  {
    "url": "ressources/technological_risks/soils_industrial_sites.html",
    "revision": "bce663045c0447b3a7640b4be09eb192"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
