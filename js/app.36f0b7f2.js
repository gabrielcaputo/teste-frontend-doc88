(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-fe9006e8":"7f4bda07"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-fe9006e8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-fe9006e8":"0d91eda1"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ae7":function(e,t,n){"use strict";var r=n("8b5a"),a=n.n(r);a.a},1211:function(e,t,n){e.exports=n.p+"img/pastel-02.351b1bc9.png"},5387:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("layout",[n("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("kinesis-container",[r("div",{attrs:{id:"layout"}},[r("header",[r("div",{staticClass:"container"},[r("div",{staticClass:"pastel-01"},[r("kinesis-element",{attrs:{strength:20,type:"translate",transformOrigin:"50% 100%"}},[r("img",{attrs:{src:n("eb3b")}})])],1),r("div",{staticClass:"logo"},[r("kinesis-element",{attrs:{strength:3,type:"rotate",transformOrigin:"50% 100%"}},[r("img",{attrs:{src:n("e81d")}})]),r("img",{attrs:{src:n("6be8")}})],1),r("img",{staticClass:"pastel-02",attrs:{src:n("1211")}})])]),r("main",{staticClass:"container"},[e._t("default")],2)])])},s=[],u={name:"Layout"},c=u,l=(n("0ae7"),n("2877")),f=Object(l["a"])(c,i,s,!1,null,"307855c2",null),p=f.exports,d={name:"App",components:{Layout:p},watch:{$route:function(e){document.title=void 0!=e.meta.title?"Pastel de ideias - "+e.meta.title:"Pastel de ideias"}}},m=d,h=(n("5c0b"),Object(l["a"])(m,a,o,!1,null,null,null)),g=h.exports,v=n("09fd"),b=n.n(v),y=(n("d3b7"),n("8c4f"));r["a"].use(y["a"]);var w=[{path:"/",name:"home",component:function(){return n.e("chunk-fe9006e8").then(n.bind(null,"1c62"))}}],O=new y["a"]({mode:"history",base:"/",routes:w}),k=O;r["a"].use(b.a),r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5387"),a=n.n(r);a.a},"6be8":function(e,t,n){e.exports=n.p+"img/logo-text.cbc7568c.svg"},"8b5a":function(e,t,n){},e81d:function(e,t,n){e.exports=n.p+"img/logo-character.8e37799f.svg"},eb3b:function(e,t,n){e.exports=n.p+"img/pastel-01.5af73e8b.png"}});
//# sourceMappingURL=app.36f0b7f2.js.map