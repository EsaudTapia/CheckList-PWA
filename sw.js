if(!self.define){let e,i={};const r=(r,t)=>(r=new URL(r+".js",t).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(t,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const d=e=>r(e,s),c={module:{uri:s},exports:o,require:d};i[s]=Promise.all(t.map((e=>c[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-b4dd5142"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"CheckList.js",revision:"dd85ab4c6191172a64ae9747db1ed895"},{url:"favicon.png",revision:"f4df7595ca6c358c25dd4db8e2f58414"},{url:"index.html",revision:"9312291df0de54995ca839ce57bf0012"},{url:"README.md",revision:"2ae77a3d731733fa9902908bf7f16a44"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
