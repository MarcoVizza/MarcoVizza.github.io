(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1074:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return w}));var o=n(19),r=n.n(o),c=n(894),l=n(143);let d;const m={};async function f(){if(d)return d;const{data:data}=await r.a.get("https://maxst.icons8.com/vue-static/icon/sfSymbolsTemplate.svg");return d=data,data}async function w(e,t){const n=Object.entries(e).map((e=>{let[n,o]=e;return t?async function(e,t,n){let{userEmail:o,apiToken:r}=n;const{data:data}=await Object(c.a)(e,{format:"svg.editable",isSimplified:"false",name:e},o,r,"text");return{[t]:data}}(o,n,t):async function(e,t){if(m[e])return{[t]:m[e]};const{icon:n}=await Object(l.b)({id:e,svg:!0});n&&(m[e]=n.svg);return{[t]:n.svg}}(o,n)})),o=await Promise.all(n);return Object.assign({},...o)}},1076:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var o=n(21),r=n(855);async function c(svg,e,t,n,o){const{format:r,size:c,color:d}=e;return await l(svg,r,c,d,t,n,o)}function l(svg,e,t,n,c,l,d){const data={svg:svg,format:e,size:t};l&&(data.id=l),n&&"000000"!==n&&"#000000"!==n&&!n.includes(",")&&(data.color=n);const m={fromSite:!0,format:e,size:t};return l&&(m.id=l),n&&"000000"!==n&&"#000000"!==n&&!n.includes(",")&&(m.color=n),c&&!Object(r.e)(d,t,e)&&(m.token=c),o.a.request({url:`${Object(r.c)(t,e)}plainConverter`,method:"POST",data:data,params:m,responseType:"blob"})}},1521:function(e,t,n){(function(n){var o,r,c;r=[],void 0===(c="function"==typeof(o=function(){"use strict";function b(a,b){return void 0===b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}function t(a,b,e){var t=new XMLHttpRequest;t.open("GET",a),t.responseType="blob",t.onload=function(){g(t.response,b,e)},t.onerror=function(){console.error("could not download file")},t.send()}function o(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function r(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(e){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,e){var i=c.URL||c.webkitURL,n=document.createElement("a");g=g||b.name||"download",n.download=g,n.rel="noopener","string"==typeof b?(n.href=b,n.origin===location.origin?r(n):o(n.href)?t(b,g,e):r(n,n.target="_blank")):(n.href=i.createObjectURL(b),setTimeout((function(){i.revokeObjectURL(n.href)}),4e4),setTimeout((function(){r(n)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,g,n){if(g=g||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(b(e,n),g);else if(o(e))t(e,g,n);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(b,e,n,g){if((g=g||open("","_blank"))&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return t(b,e,n);var o="application/octet-stream"===b.type,i=/constructor/i.test(c.HTMLElement)||c.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||o&&i||a)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var a=l.result;a=r?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},l.readAsDataURL(b)}else{var d=c.URL||c.webkitURL,m=d.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout((function(){d.revokeObjectURL(m)}),4e4)}});c.saveAs=g.saveAs=g,e.exports=g})?o.apply(t,r):o)||(e.exports=c)}).call(this,n(35))},818:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"h",(function(){return f})),n.d(t,"g",(function(){return w})),n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return y})),n.d(t,"b",(function(){return M})),n.d(t,"a",(function(){return j})),n.d(t,"j",(function(){return h})),n.d(t,"i",(function(){return I})),n.d(t,"m",(function(){return z})),n.d(t,"l",(function(){return N})),n.d(t,"k",(function(){return A}));var o=n(8),r=n(1076),c=n(79);const l={},d='<img src="https://img.icons8.com/material-sharp/96/1FB141/icons8-new-logo.png"/>',m='<img src="data:image/png;base64,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">',f='<svg\nxmlns="http://www.w3.org/2000/svg"\nx="0px" y="0px"\nwidth="100" height="100"\nviewBox="0 0 172 172"\nstyle=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1fb141"><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></g></g></svg>',w='<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMjZlMDdmOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjMWZiMTQxIj48cGF0aCBkPSJNMjEuNSwyMS41djEyOWg2NC41di0zMi4yNXYtNjQuNXYtMzIuMjV6TTg2LDUzLjc1YzAsMTcuNzgwNSAxNC40Njk1LDMyLjI1IDMyLjI1LDMyLjI1YzE3Ljc4MDUsMCAzMi4yNSwtMTQuNDY5NSAzMi4yNSwtMzIuMjVjMCwtMTcuNzgwNSAtMTQuNDY5NSwtMzIuMjUgLTMyLjI1LC0zMi4yNWMtMTcuNzgwNSwwIC0zMi4yNSwxNC40Njk1IC0zMi4yNSwzMi4yNXpNMTE4LjI1LDg2Yy0xNy43ODA1LDAgLTMyLjI1LDE0LjQ2OTUgLTMyLjI1LDMyLjI1YzAsMTcuNzgwNSAxNC40Njk1LDMyLjI1IDMyLjI1LDMyLjI1YzE3Ljc4MDUsMCAzMi4yNSwtMTQuNDY5NSAzMi4yNSwtMzIuMjVjMCwtMTcuNzgwNSAtMTQuNDY5NSwtMzIuMjUgLTMyLjI1LC0zMi4yNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>',v='<div class="icons8-icons8"></div>',y=".icons8-icons8 { \ndisplay: inline-block;\nwidth: 100px;\nheight: 100px;\nbackground: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMjZlMDdmOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjMWZiMTQxIj48cGF0aCBkPSJNMjEuNSwyMS41djEyOWg2NC41di0zMi4yNXYtNjQuNXYtMzIuMjV6TTg2LDUzLjc1YzAsMTcuNzgwNSAxNC40Njk1LDMyLjI1IDMyLjI1LDMyLjI1YzE3Ljc4MDUsMCAzMi4yNSwtMTQuNDY5NSAzMi4yNSwtMzIuMjVjMCwtMTcuNzgwNSAtMTQuNDY5NSwtMzIuMjUgLTMyLjI1LC0zMi4yNWMtMTcuNzgwNSwwIC0zMi4yNSwxNC40Njk1IC0zMi4yNSwzMi4yNXpNMTE4LjI1LDg2Yy0xNy43ODA1LDAgLTMyLjI1LDE0LjQ2OTUgLTMyLjI1LDMyLjI1YzAsMTcuNzgwNSAxNC40Njk1LDMyLjI1IDMyLjI1LDMyLjI1YzE3Ljc4MDUsMCAzMi4yNSwtMTQuNDY5NSAzMi4yNSwtMzIuMjVjMCwtMTcuNzgwNSAtMTQuNDY5NSwtMzIuMjUgLTMyLjI1LC0zMi4yNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==') 50% 50% no-repeat;\nbackground-size: 100%; }";function M(e,t){const n=t.filter((e=>"Android Chrome"===e.category));if(n.length>0){const t={name:"App",icons:[]};return n.forEach((n=>{36===n.width?t.icons.push({src:`/${e}-36.png`,sizes:`${n.size}`,type:"image/png",density:"0.75"}):48===n.width?t.icons.push({src:`/${e}-48.png`,sizes:`${n.size}`,type:"image/png",density:"1.0"}):72===n.width?t.icons.push({src:`/${e}-72.png`,sizes:`${n.size}`,type:"image/png",density:"1.5"}):96===n.width?t.icons.push({src:`/${e}-96.png`,sizes:`${n.size}`,type:"image/png",density:"2.0"}):144===n.width?t.icons.push({src:`/${e}-144.png`,sizes:`${n.size}`,type:"image/png",density:"3.0"}):192===n.width?t.icons.push({src:`/${e}-192.png`,sizes:`${n.size}`,type:"image/png",density:"4.0"}):t.icons.push({src:`/${e}-${n.width}.png`,sizes:`${n.size}`,type:"image/png"})})),JSON.stringify(t,null," ")}}function j(e,t,n,o){let r,html;return"Web"===n?(html=[`<link type="image/png" sizes="${e}x${t}" rel="icon" href=".../${o}-${e}.png">`],r=["png"]):"Android Chrome"===n?(html=[`<link rel="icon" type="image/png" sizes="${e}x${t}" href=".../${o}-${e}.png">`],r=["png"]):"iOS Safari Web Clip"===n?(html=[`<link rel="apple-touch-icon" type="image/png" sizes="${e}x${t}" href=".../${o}-${e}.png">`],r=["png"]):"macOS"===n?(r=["svg"],html=[`<link color="#26E07F" rel="mask-icon" href=".../${o}-${e}.svg">`]):"Windows"===n&&(r=["png"],144===e?html=[`<meta name="msapplication-TileImage" content=".../${o}-${e}.png">`]:70===e?html=[`<meta name="msapplication-square70x70logo" content=".../${o}-${e}.png">`]:150===e?html=[`<meta name="msapplication-square150x150logo" content=".../${o}-${e}.png">`]:310===e&&310===t?html=[`<meta name="msapplication-square310x310logo" content=".../${o}-${e}.png">`]:310===e&&150===t&&(html=[`<meta name="msapplication-wide310x150logo" content=".../${o}-${e}.png">`])),{formats:r,html:html}}function h(e,t,n){const content={preview:void 0,result:void 0,html:void 0,css:void 0},o=n[e.platform],r=o?o.seoCode:e.platform;let c=`https://img.icons8.com/${r}/${t}${e.color?`/${e.color}`:""}/${e.commonName}.png`;if("nolan"===e.platform)if(e.colorGradient){c=`https://img.icons8.com/${r}/${t}/${e.colorGradient.start.replace("#","")}/${e.colorGradient.end.replace("#","")}/${e.commonName}.png`}else c=`https://img.icons8.com/${r}/${t}/${e.commonName}.png`;return content.result=`<img width="${t}" height="${t}" src="${c}" alt="${e.commonName}"/>`,content}function I(e,t,n,o){return void 0===o&&(o=""),new Promise(((n,c)=>{const content={preview:void 0,result:void 0,html:void 0,css:void 0};let d;e.svgEffect||(d=e.color,"nolan"===e.platform&&e.colorGradient&&(d=void 0));const m=`${e.id}_${t}_${d}`;if(!e.svgEffect&&l[m])return content.preview=l[m].preview,content.result=content.preview,void n(content);Object(r.b)(e.svgEffect||e.svg,"png",t,d,o,e.id,e.free||e.isFree).then((t=>{const o=new FileReader;o.onloadend=()=>{content.preview=`<img src="${o.result}">`,content.result=content.preview,e.svgEffect||(l[m]={preview:content.preview}),n(content)},o.readAsDataURL(t.data)})).catch(c)}))}function z(e,t){const content={preview:void 0,result:void 0,html:void 0,css:void 0};return content.result=function(e,t){const svg=e.svgEffect||e.svg;if(!svg)return console.warn("getIconSVG: svg is not defined"),"";const n=c.a.getSVGNode(svg);!function(svg,e){if(svg.children){const t={},n=svg.querySelectorAll("linearGradient, radialGradient"),o=svg.querySelectorAll("[fill^=url]");n.forEach(((n,o)=>{const r=`${n.id}_${e.id}_gr${o+1}`;t[n.id]=r,n.id=r})),o.forEach((element=>{element.outerHTML=element.outerHTML.replace(/fill="(.+?)"/gim,((e,n)=>{const o=n.split("(#")[1].slice(0,-1),r=t[o];return r?`fill="url(#${r})"`:`fill="${n}"`}))}))}}(n,e);const o=n.innerHTML,r=n.getAttribute("viewBox"),l=n.getAttribute("style"),d=o.split("\n").join(""),m=l||e.color?`style="${l?l+"; ":""}${e.color?`fill:#${e.color};`:""}"`:"";return`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="${t}" height="${t}" viewBox="${r}"${m?"\n"+m:""}>\n`+d+"\n</svg>"}(e,t),content}function N(e,t){return new Promise((n=>{const content={preview:void 0,result:void 0,html:void 0,css:void 0};content.result=`<img alt="svgImg" src="data:image/svg+xml;base64,${window.btoa(z(e,t).result)}"/>`,n(content)}))}function A(e,t){return new Promise((n=>{const content={preview:void 0,result:void 0,html:void 0,css:void 0};content.result=z(e,t).result;const style=`\ndisplay: inline-block;\nwidth: ${t}px;\nheight: ${t}px;\nbackground: url('data:image/svg+xml;base64,${window.btoa(content.result)}') 50% 50% no-repeat;\nbackground-size: 100%;`;content.preview=`<div style="${style}"></div>`;const r=Object(o.normalizeValue)(e.name);content.html=`<div class="icons8-${r}"></div>`,content.css=`.icons8-${r} { ${style} }`,n(content)}))}},842:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n(1521),r=n.n(o),c=n(8),l=n(894),d=n(1076),m=n(855),f=n(161),w=n(79),v=n(818),y=n(1074),M=n(897),j=n(143);function h(e,t){function o(e,t,n,o,r){const c=Object(m.b)(e,t);return function(e,t,n,o,r){if(e.sfSymbolsSvg)return svg=e.sfSymbolsSvg,{data:new Blob([svg],{type:"image/svg+xml"})};var svg;if(e.svgEffect){const n=t.size||e.pngSize,c=e.isFree||e.free;return Object(m.e)(c,n,t.format)&&h(e,t,r),Object(d.a)(e.svgEffect,t,o,e.id,e.free||e.isFree)}if(e.svgCurrentResolution)return Object(d.a)(e.svgCurrentResolution,t,o,e.id,e.free||e.isFree);if(e.id){const c=t.size||e.pngSize,d=e.isFree||e.free;return Object(m.e)(d,c,t.format)&&h(e,t,r),Object(l.a)(e.id,{...e,...t},n,o,r)}return Object(d.a)(e.svg,t,o,void 0,e.free||e.isFree)}(e,{...t,name:c},n,o,r)}function h(e,n,o){Object(f.a)(t).iconDownload({icon:e,format:n.format,size:n.size||e.pngSize,searchTerm:o,color:n.color?n.color.toLowerCase():void 0})}return{downloadAndSaveIcon:async function(e,t,n,r,c){const l=Object(m.b)(e,t),d=await o(e,t,n,r,c);return await Object(m.g)(d.data,l)},downloadCollection:async function(t){let{collection:l,options:d,sizes:m,userEmail:f,apiToken:v}=t;const y=new(0,(await Promise.all([n.e(5),n.e(66)]).then(n.t.bind(null,1150,7))).default),M=new w.a.UniqueNames;e.dispatch("collections/download/resetDownloadProgress");let j=0;const h=l.icons.map((e=>m.map((t=>({...e,size:t.title,postfix:t.postfix,folderName:t.folderName}))))).reduce(((e,t)=>e.concat(t)),[]);if(await Promise.all(h.map((async(t,n)=>{const r={id:h[n].id,size:h[n].size,format:d.format,color:d.color,userLicense:d.userLicense,isSimplified:d.isSimplified};let l;t.formats.includes(d.format)||(l="png");try{const n=await o(t,r,f,v);let m=Object(c.normalizeValue)(t.name).replace(".svg","");return t.filled&&!m.endsWith("-filled")&&(m+="-filled"),t.size&&(m+=`-${t.size}`),m.startsWith("icons8")||(m="icons8-"+m),t.postfix&&(m+=`(${t.postfix})`),t.folderName&&(m=`${t.folderName}/`+m),m=M.getName(m),y.file(`${m}.${l||d.format}`,n.data)}catch(n){e.dispatch("collections/download/addDownloadError",{error:n,icon:t}),j++}finally{e.dispatch("collections/download/incrementProgress")}}))),j!==h.length){const e=await y.generateAsync({type:"blob"});r.a.saveAs(e,`${l.name}.zip`)}},downloadSfSymbols:async function(e,t,o){const r=function(e){let{platform:t,id:n,variants:o}=e;const r=new RegExp(/filled/),c=r.test(t)?"-filled":"",l=Object.assign({},...M.a.map((e=>({[e]:void 0}))));for(const e in l){if(new RegExp(`/${e}/`).test(e))l[e]=n;else{const t=o.find((t=>t.platform===`sf-${e}${c}`));l[e]=t.id}}return l}(e),c=Promise.all([n.e(65),n.e(35)]).then(n.bind(null,1739)),d=async function(e,t,n){const o=Object.entries(e).map((e=>{let[o,r]=e;return t?async function(e,t,n,o){let{userEmail:r,apiToken:c}=n;const{data:data}=await Object(l.a)(e,{format:"svg.editable",isSimplified:"false",name:e},r,c,o,"text");return{[t]:data}}(r,o,t,n):async function(e,t){const n={};if(n[e])return{[t]:n[e]};const{icon:o}=await Object(j.b)({id:e,svg:!0});o&&(n[e]=o.svg);return{[t]:o.svg}}(r,o)})),r=await Promise.all(o);return Object.assign({},...r)}(r,t,o),m=Object(y.b)(),[f,w,v]=await Promise.all([c,d,m]);return f.generateTemplate(...Object.values(w),v)},downloadFavicons:async function(t){let{icon:l,options:d,selectedSizes:m,userEmail:f,apiToken:w}=t;const y=new(0,(await Promise.all([n.e(5),n.e(66)]).then(n.t.bind(null,1150,7))).default);e.dispatch("collections/download/resetDownloadProgress");const M={id:l.id,color:d.color,userLicense:d.userLicense,isSimplified:!0},j=`icons8-${Object(c.normalizeValue)(l.name+" "+l.platformName)}`;let h=0;await Promise.all(m.map((async t=>{for await(const n of t.formats)try{const r=await o(l,{...M,size:t.width,format:n},f,w);y.file(`${t.category}/${j}-${t.width}.${n}`,r.data)}catch(t){console.error(t),e.dispatch("collections/download/addDownloadError",{error:t,icon:l}),h++}finally{e.dispatch("collections/download/incrementProgress")}})));const I=Object(v.b)(j,m);if(I&&y.file("Android Chrome/manifest.json",I),h!==m.length){const e=await y.generateAsync({type:"blob"});r.a.saveAs(e,`${j}-favicons.zip`)}},downloadIcon:o,buyIcon:function(e,t,n){return o(e,{...e,format:"svg",size:e.pngSize,userLicense:n,isSimplified:!0},null==t?void 0:t.email,n&&(null==t?void 0:t.publicApiKey)||"")}}}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=["ultralight","regular","black"]}}]);
//# sourceMappingURL=DownloadModal.15f17e03fb5680491034.js.map