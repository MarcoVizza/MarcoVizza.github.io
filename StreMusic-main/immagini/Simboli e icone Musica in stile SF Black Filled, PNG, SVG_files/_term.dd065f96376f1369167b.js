(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1019:function(t,e,o){var content=o(1405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("5dab93d5",content,!0,{sourceMap:!1})},1020:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var r=o(4),n=o(152);function l(){const t=Object(n.a)(),e=Object(r.computed)((()=>{const e=t.currentRoute.params.term;return"/icons/request-icon"+(e?`?term=${e.split("--")[0]}`:"")}));return{moveToRequestIcon:()=>{t.push(e.value)}}}},1021:function(t,e,o){var content=o(1407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("2f3a285e",content,!0,{sourceMap:!1})},1022:function(t,e,o){var content=o(1409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("05f30547",content,!0,{sourceMap:!1})},1023:function(t,e,o){var content=o(1411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("5cf513c2",content,!0,{sourceMap:!1})},1182:function(t,e,o){"use strict";var r=o(15),n=o(1020),l={name:"RequestIcon",components:{I8Button:r.I8Button},props:{requestTextExtra:{type:String,default:""}},setup(){const{moveToRequestIcon:t}=Object(n.a)();return{moveToRequestIcon:t}},data(){var t;return{staticUrl:null!==(t="https://maxst.icons8.com")?t:""}}},c=(o(1408),o(6)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"request-icon"},[e("div",{staticClass:"title-wrap"},[e("img",{attrs:{src:`${t.staticUrl}/vue-static/icon/search.png`,alt:"magnifier"}}),t._v(" "),e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.$t("REQUEST_ICONS.WEBAPP_REQUEST.TITLE"))}})]),t._v(" "),e("div",{staticClass:"request-text",domProps:{innerHTML:t._s(t.$t("REQUEST_ICONS.WEBAPP_REQUEST.TEXT"))}}),t._v(" "),e("I8Button",{attrs:{size:"large"},on:{click:t.moveToRequestIcon}},[t._v("\n    "+t._s(t.$t("REQUEST_ICONS.TITLE"))+"\n  ")])],1)}),[],!1,null,"0b1aad74",null);e.a=component.exports},1183:function(t,e,o){"use strict";var r=o(15),n={name:"TemplateCategories",components:{SimilarTags:o(821).a,I8Divider:r.I8Divider},props:{loading:{type:Boolean,default:!0},similarTags:{type:Array,default:null}}},l=(o(1410),o(6)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"seo-block"},[e("I8Divider"),t._v(" "),t.loading?e("div",{staticClass:"placeholder-tags animated-background"}):t.similarTags?e("SimilarTags",{staticClass:"search-tags",attrs:{tags:t.similarTags,mode:"chips"}}):t._e()],1)}),[],!1,null,"56396075",null);e.a=component.exports},1404:function(t,e,o){"use strict";o(1019)},1405:function(t,e,o){var r=o(9)((function(i){return i[1]}));r.push([t.i,".cross-search-bar[data-v-49258495]{margin-bottom:24px}.cross-search-title[data-v-49258495]{font:var(--font-bold) var(--font-lg)/var(--h3-line-height) var(--font-family-legacy);font:var(--cross-search-content-font,var(--cross-search-content-font-weight,var(--font-bold)) var(--cross-search-content-font-size,var(--font-lg))/var(--cross-search-content-font-line-height,var(--h3-line-height)) var(--cross-search-content-font-family,var(--font-family-legacy)))}.cross-search-content[data-v-49258495]{grid-gap:16px 24px;display:grid;grid-template:repeat(2,max-content)/none;margin-top:24px}.search-wrap[data-v-49258495]{background:var(--c-transparent-black_100);border:1px solid var(--c-transparent-black_100);border-radius:8px;color:var(--c-black_900);min-height:245px;padding:16px;transition:all .25s ease}.search-wrap[data-v-49258495]:not(.is-placeholder):hover{box-shadow:0 0 1px rgba(96,96,96,.31),0 4px 8px -2px rgba(96,96,96,.15)}.search-title[data-v-49258495]{font:var(--font-bold) var(--h4-font-size)/20px var(--font-family-legacy);font:var(--preview-title-font,var(--preview-title-font-weight,var(--font-bold)) var(--preview-title-font-size,var(--h4-font-size))/var(--preview-title-font-line-height,20px) var(--preview-title-font-family,var(--font-family-legacy)))}.title-placeholder[data-v-49258495]{height:20px;width:200px}.images-wrap[data-v-49258495]{margin-top:8px}.images-grid[data-v-49258495]{grid-gap:4px;display:grid;grid-template:repeat(3,63px)/repeat(4,1fr)}.images-grid.is-hidden[data-v-49258495]{display:none}.icon-preview[data-v-49258495]{border-radius:4px;transition:all .25s ease}.icon-preview[data-v-49258495]:not(.is-placeholder){border:1px solid var(--c-transparent-black_200)}.icon-preview[data-v-49258495]:not(.is-placeholder):hover{border-color:var(--c-transparent-black_300)}.icon-preview[data-v-49258495]:not(.is-placeholder):active{transform:scale(.975)}.icon-preview:not(.is-placeholder) img[data-v-49258495]{border-radius:4px;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center top;object-position:center top;width:100%}.icon-preview.big1[data-v-49258495]{grid-column:1/4;grid-row:1/4}.icon-preview.big2[data-v-49258495]{grid-column:5/8;grid-row:1/4}.icon-preview.is-illustration[data-v-49258495]{background:var(--c-white);padding:16px}.icon-preview.is-illustration img[data-v-49258495]{-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center}@media(min-width:375px){.images-grid[data-v-49258495]{grid-template-rows:repeat(3,74px)}}@media(min-width:500px){.images-grid[data-v-49258495]{grid-template-rows:repeat(3,105px)}}@media(min-width:680px){.images-grid[data-v-49258495]{grid-template-rows:repeat(3,150px)}}@media(min-width:768px){.cross-search-bar[data-v-49258495]{margin-bottom:24px}.cross-search-content[data-v-49258495]{grid-template:none/repeat(2,1fr)}.preview-wrap[data-v-49258495]{min-height:257px}.images-grid[data-v-49258495]{grid-template-rows:repeat(3,74px)}}@media(min-width:1440px){.images-wrap[data-v-49258495]{grid-gap:4px;display:grid;grid-template:none/repeat(2,1fr)}.images-grid.is-hidden[data-v-49258495]{display:grid}}",""]),r.locals={},t.exports=r},1406:function(t,e,o){"use strict";o(1021)},1407:function(t,e,o){var r=o(9)((function(i){return i[1]}));r.push([t.i,'.search-nothing-found[data-v-4505e216]{color:var(--c-black_900);font-size:var(--font-sm);line-height:20px;padding-top:20px}.search-nothing-found .icon[data-v-4505e216]{height:200px;margin-bottom:20px;width:200px}.search-nothing-found .title[data-v-4505e216]{color:#1a1a1a;font-size:var(--font-lg);font-weight:700;line-height:24px;margin:0 0 16px;overflow:hidden;position:relative;text-align:left;white-space:nowrap}.search-nothing-found .title[data-v-4505e216]:after{background:linear-gradient(90deg,hsla(0,0%,100%,.2),#fff);content:"";height:100%;position:absolute;right:0;top:0;width:40px}@media(max-width:480px){.search-nothing-found .title[data-v-4505e216]{font-size:28px;line-height:38px;max-height:86px;white-space:pre-wrap}}.search-nothing-found .text[data-v-4505e216]{letter-spacing:-.006em;margin-bottom:20px;max-width:680px}.search-nothing-found .text[data-v-4505e216] p{margin:0 0 18px}.search-nothing-found .text[data-v-4505e216] p a{border-bottom:1px solid rgba(26,26,26,.26);color:var(--c-black_900);padding-bottom:2px}.search-nothing-found .text .button[data-v-4505e216]{margin-top:5px}.search-nothing-found .ads[data-v-4505e216]{margin-top:32px}.instead-searching[data-v-4505e216]{padding:32px 0;position:relative}.instead-searching .text[data-v-4505e216]{align-items:center;display:flex;font-size:var(--font-sm);font-weight:var(--font-bold);line-height:var(--h4-line-height);max-width:none;text-align:left;white-space:nowrap}.instead-searching .text[data-v-4505e216]:after{background:var(--c-transparent-black_200);bottom:0;content:"";height:1px;margin-left:24px;width:100%}',""]),r.locals={},t.exports=r},1408:function(t,e,o){"use strict";o(1022)},1409:function(t,e,o){var r=o(9)((function(i){return i[1]}));r.push([t.i,".request-icon[data-v-0b1aad74]{font:var(--font-normal) var(--h4-font-size)/20px var(--font-family-legacy);font:var(--request-icon-font,var(--request-icon-font-weight,var(--font-normal)) var(--request-icon-font-size,var(--h4-font-size))/var(--request-icon-font-line-height,20px) var(--request-icon-font-family,var(--font-family-legacy)))}.request-icon img[data-v-0b1aad74]{height:24px;width:24px}.request-icon .title-wrap[data-v-0b1aad74]{align-items:center;display:flex}.request-icon .title[data-v-0b1aad74]{font-size:var(--font-lg);font-weight:var(--font-bold);letter-spacing:-.005em;line-height:24px;margin-left:8px}.request-icon .request-text[data-v-0b1aad74]{margin:16px 0;max-width:576px}",""]),r.locals={},t.exports=r},1410:function(t,e,o){"use strict";o(1023)},1411:function(t,e,o){var r=o(9)((function(i){return i[1]}));r.push([t.i,".seo-block[data-v-56396075]{font:var(--font-ui-14-regular)}.seo-block p[data-v-56396075]{max-width:814px}.search-tags[data-v-56396075]{margin-bottom:24px;margin-top:24px}.placeholder-tags[data-v-56396075]{border-radius:16px;height:24px;margin:24px;width:426px}@media(max-width:767px){.placeholder-tags[data-v-56396075]{width:100%}}.animated-background[data-v-56396075]{animation-duration:1.25s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer;animation-timing-function:linear;background:#a9a9a9;background:linear-gradient(90deg,rgba(0,0,0,.1) 10%,rgba(0,0,0,.05) 18%,rgba(0,0,0,.1) 33%);background-size:800px 104px;position:relative}",""]),r.locals={},t.exports=r},803:function(t,e,o){var content=o(835);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("4b2fc648",content,!0,{sourceMap:!1})},821:function(t,e,o){"use strict";var r=o(4),n=o(12),l=o(58),c=Object(r.defineComponent)({name:"SimilarTags",props:{tags:{type:Array,required:!0,default:()=>[]},mode:{type:String,required:!1,default:"links",validator:t=>["links","chips"].includes(t)},isAvoidPlatform:{type:Boolean,default:!1},isSingleRow:{type:Boolean,default:!0}},computed:{...Object(n.e)({platform:t=>t.platform}),normalizedTags(){var t;return null===(t=this.tags)||void 0===t?void 0:t.map((t=>{var e,o;const label=t.toLowerCase(),r=Object(l.a)(this.$route.fullPath);let n="";r.color&&(n=`--${r.color}`);const c={label:label,url:""};return null!==(e=this.platform)&&void 0!==e&&e.seoCode&&"all"!==(null===(o=this.platform)||void 0===o?void 0:o.seoCode)&&!this.isAvoidPlatform?c.url=`/icon/set/${label.split(" ").join("-")}/${this.platform.seoCode}${n}`:c.url=`/icons/set/${label.split(" ").join("-")}${n}`,c})).filter((t=>t.label&&""!==t.label))}}}),d=(o(834),o(6)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.normalizedTags?e("div",{class:["similar-tags",`${t.mode}-container`,""+(t.isSingleRow?"is-single-row":"")]},t._l(t.normalizedTags,(function(o,i){return e("nuxt-link",{key:i,class:t.mode,attrs:{to:o.url}},[t._v("\n    "+t._s(o.label)+"\n  ")])})),1):t._e()}),[],!1,null,"d634782c",null);e.a=component.exports},834:function(t,e,o){"use strict";o(803)},835:function(t,e,o){var r=o(9)((function(i){return i[1]}));r.push([t.i,".similar-tags[data-v-d634782c]{margin:0}.similar-tags.is-single-row[data-v-d634782c]{overflow:hidden}.similar-tags a[data-v-d634782c]{display:inline-block;font-size:14px;font-weight:400;transition:all .2s}.chips[data-v-d634782c]{border:1px solid var(--c-transparent-black_200);border-radius:100px;color:var(--c-black_900);line-height:1.1;margin:0 8px 8px 0;padding:6px 12px}.chips-container.is-single-row[data-v-d634782c]{height:31px}.links[data-v-d634782c]{color:var(--c-transparent-black_600);margin-right:16px}@media(max-width:600px){.links[data-v-d634782c]{margin-bottom:10px}}.links[data-v-d634782c]:hover{color:var(--c-black_900)}.links-container[data-v-d634782c]{height:24px}",""]),r.locals={},t.exports=r},907:function(t,e,o){"use strict";var r=o(21);async function n(t,e){var o,n;const l={page:1,per_page:8,fields:"id,title,thumb2xWebp,slug",sort_by:"rising",locale:e},c="https://photos.icons8.com/api/frontend/v1/images";let d=await r.b.get(c,{params:Object.assign({},l,{category_id:t})}).then((t=>{var e,o;return{total:null===(e=t.data)||void 0===e?void 0:e.total,images:null===(o=t.data)||void 0===o?void 0:o.images}})).catch((t=>{var e,o,r;console.error(null!==(e=null===(o=t.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.error)&&void 0!==e?e:t)}));return d&&null!==(o=d)&&void 0!==o&&null!==(n=o.images)&&void 0!==n&&n.length||(d=await r.b.get(c,{params:Object.assign({},l,{query:t})}).then((t=>{var e,o;return{total:null===(e=t.data)||void 0===e?void 0:e.total,images:null===(o=t.data)||void 0===o?void 0:o.images}})).catch((t=>{var e,o,r;return console.error("Error during loading cross search photo data:"),console.error(null!==(e=null===(o=t.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.error)&&void 0!==e?e:t),{total:void 0,images:[]}}))),d}async function l(t,e){var o,n;const l={page:1,per_page:8,fields:"id,thumb1x,pretty_id,heading",locale:e},c="https://api-illustrations.icons8.com/api/frontend/v1/illustrations";let d=await r.b.get(c,{params:Object.assign({},l,{subject_pretty_ids:t})}).then((t=>{var e,o;return{total:null===(e=t.data)||void 0===e?void 0:e.total,images:null===(o=t.data)||void 0===o?void 0:o.illustrations}})).catch((t=>{var e,o,r;console.error(null!==(e=null===(o=t.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.error)&&void 0!==e?e:t)}));return d&&null!==(o=d)&&void 0!==o&&null!==(n=o.images)&&void 0!==n&&n.length||(d=await r.b.get(c,{params:Object.assign({},l,{search:t})}).then((t=>{var e,o;return{total:null===(e=t.data)||void 0===e?void 0:e.total,images:null===(o=t.data)||void 0===o?void 0:o.illustrations}})).catch((t=>{var e,o,r;return console.error("Error during loading cross search illustration data:"),console.error(null!==(e=null===(o=t.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.error)&&void 0!==e?e:t),{total:void 0,images:[]}}))),d}var c=o(42),d={name:"CrossSearchBar",props:{searchQuery:{type:String,default:""},nothingFound:{type:Boolean,default:!1}},data:()=>({photos:{total:void 0,images:[]},illustrations:{total:void 0,images:[]},dataLoading:!0}),async fetch(){var t,e;this.searchQuery.length>30?this.dataLoading=!1:(t=this.searchQuery,e=this.$i18n.localeProperties.iso,void 0===t&&(t=""),void 0===e&&(e="en-US"),Promise.all([n(t,e),l(t,e)])).then((t=>{t&&(this.photos=t[0],this.illustrations=t[1])})).catch((t=>{console.error("Loading cross search data error"),console.error(t)})).finally((()=>{this.dataLoading=!1}))},computed:{photosTotalText(){return this.photos&&this.photos.total?Object(c.a)(this.photos.total):void 0},illustrationsTotalText(){return this.illustrations&&this.illustrations.total?Object(c.a)(this.illustrations.total):void 0},titleText(){return this.nothingFound?this.$t("WEB_APP.CROSS_SEARCH_BAR.TITLE_TEXT.NOTHING_FOUND",{searchQuery:this.searchQuery}):this.$t("WEB_APP.CROSS_SEARCH_BAR.TITLE_TEXT.FOUND",{searchQuery:this.searchQuery})},displayedPhotos(){if(!this.photos.images.length)return[];const t=[this.photos.images.slice(0,4)];return t.push(this.photos.images.slice(4)),t},displayedIllustrations(){if(!this.illustrations.images.length)return[];const t=[this.illustrations.images.slice(0,4)];return t.push(this.illustrations.images.slice(4)),t},showBar(){return this.displayedPhotos.length||this.displayedIllustrations.length}},methods:{getIconPreviewClass:t=>[{big1:0===t},{big2:4===t}],getDomain(){return`https://${this.$i18n.localeProperties.domain}`},getSearchLinkUrl(t){return this.getDomain()+("photos"===t?"/photos/s/":"/illustrations/")+this.searchQuery},getImageLinkUrl(img,t){let e=this.getDomain();return e+="photos"===t?`/photos/photo/${function(t){let e="";return t.slug&&(e=t.slug.replace(/[^\w ]+/g,"").trim().replace(/\s+/g,"-").toLowerCase()),`${e?e+"--":""}${t.id}`}(img)}`:`/illustrations/illustration/${img.pretty_id||img.id}`,e},getIllustrationImgAlt(t){return this.$t("WEB_APP.CROSS_SEARCH_BAR.ILLUSTRATION_IMG_ALT",{heading:t})}}},h=(o(1404),o(6)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return t.dataLoading||t.showBar?e("div",{staticClass:"cross-search-bar"},[e("div",{staticClass:"cross-search-title"},[t._v("\n    "+t._s(t.titleText)+"\n  ")]),t._v(" "),e("div",{staticClass:"cross-search-content"},[t.dataLoading?t._l(2,(function(o){return e("div",{key:`phSearchWrap${o}`,staticClass:"search-wrap is-placeholder"},[e("IconPlaceholder",{staticClass:"title-placeholder",attrs:{type:"loading"}}),t._v(" "),e("div",{staticClass:"images-wrap"},t._l(2,(function(o,i){return e("div",{key:`phImgWrap${o}${i}`,class:["images-grid",{"is-hidden":1===i}]},t._l(4,(function(o,r){return e("IconPlaceholder",{key:`phImg${r}`,staticClass:"icon-preview is-placeholder",class:t.getIconPreviewClass(r),attrs:{type:"loading"}})})),1)})),0)],1)})):[t.displayedIllustrations.length?e("a",{staticClass:"search-wrap",attrs:{href:t.getSearchLinkUrl("illustrations")}},[e("div",{staticClass:"search-title"},[t._v("\n          "+t._s(t.$t("WEB_APP.CROSS_SEARCH_BAR.ILLUSTRATION_TITLE",{totalCount:t.illustrationsTotalText,searchQuery:t.searchQuery}))+"\n        ")]),t._v(" "),e("div",{staticClass:"images-wrap"},t._l(t.displayedIllustrations,(function(o,i){return e("div",{key:`illustrationGrid${i}`,class:["images-grid",{"is-hidden":1===i}]},t._l(o,(function(img,o){return e("a",{key:`illustrationPreview${o}`,staticClass:"icon-preview is-illustration",class:t.getIconPreviewClass(o),attrs:{href:t.getImageLinkUrl(img,"illustrations")}},[img.thumb1x?e("img",{attrs:{src:img.thumb1x.url,alt:t.getIllustrationImgAlt(img.heading)}}):t._e()])})),0)})),0)]):t._e(),t._v(" "),t.displayedPhotos.length?e("a",{staticClass:"search-wrap",attrs:{href:t.getSearchLinkUrl("photos")}},[e("div",{staticClass:"search-title"},[t._v("\n          "+t._s(t.$t("WEB_APP.CROSS_SEARCH_BAR.PHOTO_TITLE",{totalCount:t.photosTotalText,searchQuery:t.searchQuery}))+"\n        ")]),t._v(" "),e("div",{staticClass:"images-wrap"},t._l(t.displayedPhotos,(function(o,i){return e("div",{key:`photoGrid${i}`,class:["images-grid",{"is-hidden":1===i}]},t._l(o,(function(img,o){return e("a",{key:`photoPreview${o}`,staticClass:"icon-preview",class:t.getIconPreviewClass(o),attrs:{href:t.getImageLinkUrl(img,"photos")}},[img.thumb2xWebp?e("img",{attrs:{src:img.thumb2xWebp.url,alt:img.title}}):t._e()])})),0)})),0)]):t._e()]],2)]):t._e()}),[],!1,null,"49258495",null);e.a=component.exports},909:function(t,e,o){"use strict";var r=o(12),n=o(8),l=o(15),c=o(148),d=o(58),h=o(907),v=o(775),m=o(1020),f={name:"SearchNothingFound",components:{ShutterstockAds:c.a,CrossSearchBar:h.a,I8Button:l.I8Button},props:{hasOtherIconsSlot:{type:Boolean,default:!1},isPageLoading:{type:Boolean,default:!1},isSearchByAuthor:{type:Boolean,default:!1},isRelevantCount:{type:Boolean,default:!0}},setup(){const{moveToRequestIcon:t}=Object(m.a)();return{moveToRequestIcon:t}},data:()=>({otherIcons:[],allIconsLoaded:!1,page:1,staticUrl:"https://maxst.icons8.com",isPopularIconsTitle:!0,nothingFoundTitle:""}),computed:{...Object(r.e)({isAnimated:t=>t.filters.isAnimated,platform:t=>t.platform}),searchingQuery(){const t=this.$route.params.term.replace(/[<>"]/g,"")||"",e=Object(d.a)(t);return Object(n.prettifyValue)(`${e.$rootPath}`)},nothingFoundText(){return this.$t("NOTHING_FOUND.TEXT_v3",{newIconsLink:"/icons/new",popularIconsLink:"/icons/set/popular"})},requestIcon(){return this.$t("NOTHING_FOUND.LINK_NAME")},otherIconsTitle(){return this.isPopularIconsTitle?this.$t("NOTHING_FOUND.OTHER_ICONS_NAME"):this.$t("NOTHING_FOUND.OTHER_ICONS_NAME_ANIMATED",{term:this.searchingQuery})}},watch:{isAnimated(){this.isPageLoading||this.setTitle()}},created(){this.setTitle(),this.hasOtherIconsSlot&&(this.isPopularIconsTitle=!1)},methods:{setTitle(){this.nothingFoundTitle=this.isAnimated?this.$t("NOTHING_FOUND.TITLE_ANIMATED",{term:this.searchingQuery}):this.$t("NOTHING_FOUND.TITLE_v1",{term:this.searchingQuery})},fetchNext(t){this.isPageLoading||(this.isAnimated?this.getSearchIcons(t):this.getPopularIcons(t))},async getPopularIcons(t){const e={page:this.page,pack:"free-icons",language:this.$i18n.localeProperties.iso};try{const o=await Object(v.a)(e);if(this.isPopularIconsTitle=!0,o.success){const e=[];o.category.subcategory.forEach((t=>{t.icons.forEach((t=>{e.push(t)}))})),this.otherIcons=this.otherIcons.concat(e),this.page++,t.loaded()}else t.complete(),this.allIconsLoaded=!0}catch(e){e.response.data.error&&(t.complete(),this.allIconsLoaded=!0),console.error("page error",e&&e.message?e.message:e)}},getSearchIcons(t){const e=this.isAnimated?Object(n.prettifyValue)(`${this.$route.params.term.split("--")[0]||""}`):Object(n.prettifyValue)(`${this.$route.params.term||""}`);this.$store.dispatch("search",{term:e,platform:"all",page:this.page,amount:100,isAnimated:!1}).then((e=>{if(e.success&&e.icons){if(0===e.countAll)return void this.getPopularIcons(t);e.icons.length&&(this.isPopularIconsTitle=!1,this.otherIcons=this.otherIcons.concat(e.icons),this.page++,t.loaded())}(!e.success||this.otherIcons.length>=e.countAll)&&(t.complete(),this.allIconsLoaded=!0)})).catch((e=>{t.complete(),this.allIconsLoaded=!0,console.error("page error",e&&e.message?e.message:e)}))}}},x=(o(1406),o(6)),component=Object(x.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-nothing-found"},[e("h2",{staticClass:"title",domProps:{innerHTML:t._s(t.nothingFoundTitle)}}),t._v(" "),e("div",{staticClass:"text"},[e("p",{domProps:{innerHTML:t._s(t.$t("NOTHING_FOUND.DESCRIPTION"))}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.nothingFoundText)}}),t._v(" "),e("I8Button",{attrs:{size:"large"},on:{click:t.moveToRequestIcon}},[t._v("\n      "+t._s(t.requestIcon)+"\n    ")])],1),t._v(" "),t.isPageLoading||t.isAnimated&&!t.isPopularIconsTitle?t._e():e("client-only",[e("CrossSearchBar",{attrs:{"search-query":t.searchingQuery.toLowerCase(),"nothing-found":!0}}),t._v(" "),t.searchingQuery&&!t.hasOtherIconsSlot?e("div",{staticClass:"ads"},[e("ShutterstockAds",{attrs:{"ad-params":{query:t.searchingQuery}}})],1):t._e()],1),t._v(" "),t.isRelevantCount&&t.isSearchByAuthor?t._e():e("div",{staticClass:"instead-searching"},[e("div",{staticClass:"text"},[t._v("\n      "+t._s(t.otherIconsTitle)+"\n    ")]),t._v(" "),t._t("otherIcons",(function(){return[t.otherIcons?e("div",{staticClass:"icons"},[e("icon-grid",{attrs:{icons:t.otherIcons,action:"select","carbon-ad":!0}})],1):t._e(),t._v(" "),e("client-only",[e("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!t.allIconsLoaded,expression:"!allIconsLoaded"}],attrs:{distance:1300},on:{infinite:t.fetchNext}},[e("div",{staticClass:"is-loading",attrs:{slot:"spinner"},slot:"spinner"})])],1)]}))],2),t._v(" "),t.isAnimated&&!t.isPopularIconsTitle&&t.allIconsLoaded?e("client-only",[e("CrossSearchBar",{attrs:{"search-query":t.searchingQuery.toLowerCase(),"nothing-found":!1}})],1):t._e()],1)}),[],!1,null,"4505e216",null);e.a=component.exports}}]);
//# sourceMappingURL=_term.dd065f96376f1369167b.js.map