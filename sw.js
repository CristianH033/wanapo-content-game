if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const a=e=>l(e,r),o={module:{uri:r},exports:u,require:a};s[r]=Promise.all(i.map((e=>o[e]||a(e)))).then((e=>(n(...e),u)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"ee03dc161daa08a2a3c5ba2f22a976a8"},{url:"assets/404NotFound-C3ucFUPa.js",revision:null},{url:"assets/a1-CMPTDTNs.webp",revision:null},{url:"assets/a2-Dyz-08VQ.webp",revision:null},{url:"assets/a3-Dg1hkLv6.webp",revision:null},{url:"assets/AboutView-GdDDtlei.js",revision:null},{url:"assets/b1-CZHu3UDB.webp",revision:null},{url:"assets/b2-Bdvbfp0z.webp",revision:null},{url:"assets/b3-CdpNXUf9.webp",revision:null},{url:"assets/c1-CxKBrPCu.webp",revision:null},{url:"assets/c2-BIZCMhpo.webp",revision:null},{url:"assets/c3-CUwkJUtq.webp",revision:null},{url:"assets/ConfigView-qr3DCzB6.js",revision:null},{url:"assets/CongratsView-BRV6u-3A.js",revision:null},{url:"assets/content-logo-Bcq7sQ7q.svg",revision:null},{url:"assets/d1-Bbqb_tpO.webp",revision:null},{url:"assets/d2-DbRRbbq3.webp",revision:null},{url:"assets/d3-B8MS9NoE.webp",revision:null},{url:"assets/doctor-BGlZScQh.webp",revision:null},{url:"assets/e1-B0WbrwM1.webp",revision:null},{url:"assets/e2-e0TrTJGX.webp",revision:null},{url:"assets/e3-N-cKllaK.webp",revision:null},{url:"assets/f1-C1H5S7Ca.webp",revision:null},{url:"assets/f2-DEe0KJ7x.webp",revision:null},{url:"assets/f3-Ce82tsbw.webp",revision:null},{url:"assets/g1-DcbnfbCH.webp",revision:null},{url:"assets/g2-B7ZpJ0Qe.webp",revision:null},{url:"assets/g3-BnD2CGid.webp",revision:null},{url:"assets/GameView-DH9oiQup.js",revision:null},{url:"assets/GameView-DhbBJyc_.css",revision:null},{url:"assets/green-arc-DcS84_O9.webp",revision:null},{url:"assets/grey-arc-Bs1BwXmH.webp",revision:null},{url:"assets/h1-1wqv0Aid.webp",revision:null},{url:"assets/h2-OM9UUYhd.webp",revision:null},{url:"assets/h3-qRsE0BfE.webp",revision:null},{url:"assets/i1-BKsnQv16.webp",revision:null},{url:"assets/i2-CC-qdCCk.webp",revision:null},{url:"assets/i3-CnGHaX3Z.webp",revision:null},{url:"assets/index-DuqPy4ee.css",revision:null},{url:"assets/index-wkeG2wSr.js",revision:null},{url:"assets/nurse-Cw4TmybK.webp",revision:null},{url:"assets/QR-BuFl1SPz.js",revision:null},{url:"assets/ResultsView-BEJC5PvL.js",revision:null},{url:"favicon.ico",revision:"6f659e8aeee15a09ab02700e9a8a9a2f"},{url:"favicon.svg",revision:"1516ba6490450296f5db016426ad319e"},{url:"index.html",revision:"b1b373a63d66ba1fe6d585e5c67a4aea"},{url:"maskable-icon-512x512.png",revision:"926e4cd57c5041bee37096f771133214"},{url:"pwa-192x192.png",revision:"dae549ce71c397b4b450459f6a39cd5c"},{url:"pwa-512x512.png",revision:"d6db75daa78fa4883673ceb16c830822"},{url:"pwa-64x64.png",revision:"8c20f74b22210216da0b87b243d5be31"},{url:"registerSW.js",revision:"a96a640aba958fec5abc1ef94ce38fcb"},{url:"pwa-64x64.png",revision:"8c20f74b22210216da0b87b243d5be31"},{url:"pwa-192x192.png",revision:"dae549ce71c397b4b450459f6a39cd5c"},{url:"pwa-512x512.png",revision:"d6db75daa78fa4883673ceb16c830822"},{url:"maskable-icon-512x512.png",revision:"926e4cd57c5041bee37096f771133214"},{url:"manifest.webmanifest",revision:"265cfb957c3b22c8e1b962aede4fb573"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
