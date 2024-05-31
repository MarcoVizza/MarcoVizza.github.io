(window.webpackJsonp=window.webpackJsonp||[]).push([[27,59],{1140:function(t,e,n){var content=n(1653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("54efac27",content,!0,{sourceMap:!1})},1652:function(t,e,n){"use strict";n(1140)},1653:function(t,e,n){var r=n(9)((function(i){return i[1]}));r.push([t.i,".editor-canvas[data-v-5f0bd259]{--canvas-size:256px;align-items:center;display:flex;gap:16px;height:100%;justify-content:center;position:relative;width:100%}@media(max-width:480px){.editor-canvas[data-v-5f0bd259]{flex-direction:column}}.editor-canvas__canvas[data-v-5f0bd259]{background-image:linear-gradient(45deg,#f6f6f6 25%,transparent 0),linear-gradient(-45deg,#f6f6f6 25%,transparent 0),linear-gradient(45deg,transparent 75%,#f6f6f6 0),linear-gradient(-45deg,#fff 75%,#f6f6f6 0);background-position:0 0,0 6px,6px -6px,-6px 0;background-size:12px 12px;border:1px solid var(--c-black_200);display:block;height:var(--canvas-height)!important;width:var(--canvas-width)!important}.editor-canvas__side-left[data-v-5f0bd259],.editor-canvas__side-right[data-v-5f0bd259]{height:100%;max-height:var(--canvas-height);max-width:calc(100% - var(--canvas-width));width:auto}.editor-canvas__side-left[data-v-5f0bd259]:empty,.editor-canvas__side-right[data-v-5f0bd259]:empty{display:none}@media(max-width:480px){.editor-canvas__side-left[data-v-5f0bd259],.editor-canvas__side-right[data-v-5f0bd259]{max-width:100%}}.fade-enter-active[data-v-5f0bd259],.fade-leave-active[data-v-5f0bd259]{transition:opacity .25s ease-out;width:auto}.fade-enter[data-v-5f0bd259],.fade-leave-to[data-v-5f0bd259]{opacity:0;width:0}",""]),r.locals={},t.exports=r},1790:function(t,e,n){"use strict";n.r(e);var r=n(4),d=n(763),o=Object(r.defineComponent)({name:"EditorCanvas",props:{svg:{type:String,require:!0,default:null},whiteBg:{type:Boolean,default:!1},centered:{type:Boolean,default:!0}},data:()=>({project:null,canvas:{}}),mounted(){this.initIcon()},methods:{initIcon(){const t=this.getSvgElement(this.svg);this.canvas={...t,svg:void 0},this.$nextTick((()=>{const canvas=this.$refs.canvas;this.project=Object(d.initPaper)(canvas,t.svg,this.canvas,this.whiteBg,this.centered),null===this.project?this.$emit("loadError"):this.$emit("loaded",{id:this.project,size:this.canvas})}))},getSvgElement(svg,t){if(void 0===svg&&(svg=null),void 0===t&&(t=256),!svg)return null;const div=document.createElement("div");div.innerHTML=svg;const e=div.querySelector("svg");let n=e.getAttribute("width"),r=e.getAttribute("height"),d=null,o=null;const c=e.getAttribute("viewBox");let l=null,v=null,h=null;if(!c)return null;try{l=c.split(" ").map((t=>Number(t)))}catch(t){throw console.error(`Incorrect SVG viewbox: "${c}"`),t}if(n||(n=l[2]+"px"),r||(r=l[3]+"px"),n&&(d=Number(n.replace(/[^0-9.]+/g,""))),r&&(o=Number(r.replace(/[^0-9.]+/g,""))),!r||!n)return console.error("Error size icon!"),null;const f=d>o?"width":d<o?"height":null;if(t&&"width"===f){v=t,h=t*(o/d||1),e.setAttribute("width",v),e.setAttribute("height",h)}if(t&&"height"===f){const n=d/o||1;v=t*n,h=t,e.setAttribute("height",t),e.setAttribute("width",t*n)}return t&&!f&&(e.setAttribute("height",t),e.setAttribute("width",t),v=t,h=t),e.setAttribute("overflow","visible"),{svg:e,iconWidth:n,iconWidthNumber:d,iconHeight:r,iconHeightNumber:o,canvasWidth:v,canvasHeight:h,mainDirection:f,iconViewbox:c,iconViewboxNumber:l}}}}),c=(n(1652),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"editor-canvas",style:{"--canvas-width":`${t.canvas.canvasWidth||0}px`,"--canvas-height":`${t.canvas.canvasHeight||0}px`}},[e("div",{staticClass:"editor-canvas__side-left"},[t._t("side-left")],2),t._v(" "),e("canvas",{ref:"canvas",staticClass:"editor-canvas__canvas"}),t._v(" "),e("div",{staticClass:"editor-canvas__side-right"},[e("transition",{attrs:{name:"fade"}},[t._t("side-right")],2)],1)])}),[],!1,null,"5f0bd259",null);e.default=component.exports},845:function(t,e){},846:function(t,e){}}]);
//# sourceMappingURL=EditorCanvas.5a41a6297e0f58595ce3.js.map