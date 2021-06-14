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
    "revision": "797204cd85c659847345130523b4de41"
  },
  {
    "url": "about/contact.html",
    "revision": "f4163f34138b79fcc9cf569ad8e9daae"
  },
  {
    "url": "about/index.html",
    "revision": "4ff46e789a176f46094b11f92ede4f19"
  },
  {
    "url": "about/license.html",
    "revision": "15d21e5dfc5c2019d748d4a93022d3e8"
  },
  {
    "url": "assets/css/0.styles.2184d956.css",
    "revision": "b89428b852ed040f7b89e692b1c899aa"
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
    "url": "assets/js/17.50b1de29.js",
    "revision": "d0212c8a2eafb2fc4599a7a77f51ab0f"
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
    "url": "assets/js/21.011a8222.js",
    "revision": "f1e2156c6f556110d89c3752c07262de"
  },
  {
    "url": "assets/js/22.80d55334.js",
    "revision": "79940271877b53ac1dd721e61bea82d9"
  },
  {
    "url": "assets/js/23.8aa26d94.js",
    "revision": "d3683aeabd3dc03680dfbcc92d822853"
  },
  {
    "url": "assets/js/24.49eb545f.js",
    "revision": "6ee3c30c923960a04e000ba53e81d357"
  },
  {
    "url": "assets/js/25.33177662.js",
    "revision": "f3536172497d7954d1353b0935d12a7e"
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
    "url": "assets/js/30.a00f48ff.js",
    "revision": "5f116442a17c798a12b73347045d97fc"
  },
  {
    "url": "assets/js/31.5b289fa3.js",
    "revision": "eea5209b1189e10a0cf31e13293c4459"
  },
  {
    "url": "assets/js/32.d00e544c.js",
    "revision": "2d15e3befd2adb7f0017b403e0f4e434"
  },
  {
    "url": "assets/js/33.89d56528.js",
    "revision": "e1d77d5d6908fab03c3dde8183dccd08"
  },
  {
    "url": "assets/js/34.33f0f3e0.js",
    "revision": "8a2eee97ac0658699be97f55c9a99528"
  },
  {
    "url": "assets/js/35.baa16485.js",
    "revision": "af31a5ec72b56cd1e67ba32b171eed93"
  },
  {
    "url": "assets/js/36.af67aa57.js",
    "revision": "921c804e062d9d523d50be285436c2b2"
  },
  {
    "url": "assets/js/37.994c4680.js",
    "revision": "34156e9de669de970ece9914d7c21a5d"
  },
  {
    "url": "assets/js/38.79aa26c9.js",
    "revision": "c5ee945df3ce819b5a3f9296d8620def"
  },
  {
    "url": "assets/js/39.307770bd.js",
    "revision": "469e08b56d2708bbf196014e28c5f1ec"
  },
  {
    "url": "assets/js/4.bff79c2a.js",
    "revision": "b26724e67422d68a0a5aa2e062ca0ad9"
  },
  {
    "url": "assets/js/5.2acc77a8.js",
    "revision": "3dfbaf8acbf2da0e9e2177e6dc21f1cb"
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
    "url": "assets/js/9.66b86c3d.js",
    "revision": "532f0da0629b9e43db260c9bfb0c0796"
  },
  {
    "url": "assets/js/app.1b318efa.js",
    "revision": "b57933999d1b670c4328d9319ad2f801"
  },
  {
    "url": "guides/faq.html",
    "revision": "1741334ef9411d4fa435862bcd7526de"
  },
  {
    "url": "guides/index.html",
    "revision": "962da612a8d89f6dc6391c1cc5c2b106"
  },
  {
    "url": "guides/step-by-step.html",
    "revision": "314051953cf8dd84f55a8e1098e4df59"
  },
  {
    "url": "index.html",
    "revision": "3957ffed6620588599bac7de5f74c44b"
  },
  {
    "url": "ressources/index.html",
    "revision": "a9210fb97610d28925c0cae551fada78"
  },
  {
    "url": "ressources/issues/communications.html",
    "revision": "58de70e965002c71b0c54b62bc5cad40"
  },
  {
    "url": "ressources/issues/index.html",
    "revision": "4cc95c4adeea44649be91a1c01f2f49b"
  },
  {
    "url": "ressources/issues/population.html",
    "revision": "71f421bfe9120c1115044f49a3edd337"
  },
  {
    "url": "ressources/natural_risks/clay.html",
    "revision": "f3fd4b6adb73f86324406d4662316a08"
  },
  {
    "url": "ressources/natural_risks/earthquakes.html",
    "revision": "b734f22bb2bccfcaa00bc9f4316e8a20"
  },
  {
    "url": "ressources/natural_risks/floods.html",
    "revision": "75da786467d09d83a800f80132568d26"
  },
  {
    "url": "ressources/natural_risks/forest_fires.html",
    "revision": "7eebe5e3e63ed3e1c12ccbf2b7c3a6b5"
  },
  {
    "url": "ressources/natural_risks/global_information.html",
    "revision": "b4b30f734c69f7af8a54314f2fd20655"
  },
  {
    "url": "ressources/natural_risks/ground_movements.html",
    "revision": "3215920908a9aea3c4ba3eaf044f00c2"
  },
  {
    "url": "ressources/natural_risks/radon.html",
    "revision": "8e9487c3b39d74bd140115a76cd07972"
  },
  {
    "url": "ressources/natural_risks/underground_cavities.html",
    "revision": "342dab30a336a1fe1c08fa221d9d6fd0"
  },
  {
    "url": "ressources/natural_risks/volcanism.html",
    "revision": "a0d9a4d19e3bfb1cdc94d0ccd56e5292"
  },
  {
    "url": "ressources/natural_risks/weather_events.html",
    "revision": "50610c20a41ac49fc9f9d6825574ced5"
  },
  {
    "url": "ressources/technological_risks/classified_installations.html",
    "revision": "779243a582c8bb2f2046997eed042f52"
  },
  {
    "url": "ressources/technological_risks/global_information.html",
    "revision": "7b8777766b4ab1487b3bfb952d4d0771"
  },
  {
    "url": "ressources/technological_risks/pipe_networks.html",
    "revision": "b590c95f4ec3c34dd7421841af41d6d1"
  },
  {
    "url": "ressources/technological_risks/pollutant_emissions.html",
    "revision": "1073cd4f18bd274fcdc67fc470326460"
  },
  {
    "url": "ressources/technological_risks/soils_industrial_sites.html",
    "revision": "8c024d9f47b256ad64b94fabf0a48393"
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
