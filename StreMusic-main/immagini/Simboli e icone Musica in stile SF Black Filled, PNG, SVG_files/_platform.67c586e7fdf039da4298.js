(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1026:function(t,e,o){var content=o(1417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("5b8b6200",content,!0,{sourceMap:!1})},1027:function(t,e,o){var content=o(1419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("64061e12",content,!0,{sourceMap:!1})},1416:function(t,e,o){"use strict";o(1026)},1417:function(t,e,o){var r=o(9)((function(i){return i[1]}));r.push([t.i,".category-section[data-v-4126ae38]{margin-top:20px}.category-section__title[data-v-4126ae38]{margin:20px 0 24px}",""]),r.locals={},t.exports=r},1418:function(t,e,o){"use strict";o(1027)},1419:function(t,e,o){var r=o(9)((function(i){return i[1]}));r.push([t.i,'@keyframes spin-744a3cfb{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.platform-page[data-v-744a3cfb]{position:relative}.platform-page__skeletons[data-v-744a3cfb]{background:#fff;bottom:0;min-height:100vh;padding-top:16px;position:absolute;top:0;width:100%;z-index:2}@media(min-width:768px){.platform-page__skeletons[data-v-744a3cfb]{padding-top:32px}}.platform-page__header[data-v-744a3cfb]{margin-top:12px}.platform-page__popular-request-banner[data-v-744a3cfb]{margin:24px 0}.platform-page .search-tags[data-v-744a3cfb]{margin-bottom:8px}.platform-page__header+.platform-page__content[data-v-744a3cfb]{margin-top:16px}.container[data-v-744a3cfb]{padding:0 32px}@media(max-width:768px){.container[data-v-744a3cfb]{padding:0 10px 0 20px}}.is-loading[data-v-744a3cfb]{height:100px;position:relative}.is-loading[data-v-744a3cfb]:after{animation:spin-744a3cfb 1s linear infinite;border:2px solid hsla(0,0%,67%,.2);border-radius:50%;border-top-color:hsla(0,0%,67%,.8);content:"";height:3rem;left:50%;margin-left:-1.5rem;margin-top:-1.5rem;position:absolute;top:50%;width:3rem}.icons-descr-wrap[data-v-744a3cfb]{grid-row-gap:24px;border-bottom:1px solid var(--c-transparent-black_200);border-top:1px solid var(--c-transparent-black_200);display:grid;grid-template:repeat(2,max-content)/none;margin:32px 0;padding:24px 0;row-gap:24px}.item-category[data-v-744a3cfb]{margin-top:20px}@media(min-width:768px){.page-descr[data-v-744a3cfb]{border-left:1px solid var(--c-transparent-black_200);padding-left:32px}.icons-descr-wrap[data-v-744a3cfb]{grid-template:none/repeat(2,1fr);padding:32px 0}.missing-icon[data-v-744a3cfb]{margin-right:32px}}@media(min-width:1024px){.platform-page__popular-request-banner[data-v-744a3cfb]{margin:32px 0}}',""]),r.locals={},t.exports=r},1756:function(t,e,o){"use strict";o.r(e);var r=o(12),n=o(58),c=o(785),l=o(148),d=o(909),m=o(8),h={name:"PackPlatformPage",components:{ShutterstockAds:l.a,searchNothingFound:d.a,appPageSectionTitle:c.a},props:{category:{type:Object,default:()=>{}},pack:{type:Object,default:()=>{}},platform:{type:Object,default:()=>{}}},computed:{shutterQuery(){const t=this.category.name,style=this.platform.title;let e="";return e+="Popular"!==t?t:style.replace(/ .*/,""),{query:e,platform:this.platform.apiCode}}},methods:{uppercaseFirstLetter:m.uppercaseFirstLetter}},f=(o(1416),o(6)),_=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",[t.category?t._l(t.category.subcategory,(function(o,r){return e("div",{key:r,class:{"category-section":0!==r}},[e("appPageSectionTitle",{staticClass:"category-section__title"},[t._v("\n        "+t._s(t.uppercaseFirstLetter(o.name.toLowerCase()))+"\n      ")]),t._v(" "),e("icon-grid",{key:"grid"+r,attrs:{id:o.name,icons:o.icons,action:"select","ads-params-two":1===r?{rowAds:3}:{},"carbon-ad":0===r}}),t._v(" "),1===r?e("client-only",{key:o.name+r},[t.pack&&t.platform?e("div",{staticClass:"ads"},[e("ShutterstockAds",{attrs:{"ad-params":t.shutterQuery}})],1):t._e()]):t._e()],1)})):e("search-nothing-found")],2)}),[],!1,null,"4126ae38",null).exports,v=o(1182),y=o(907),C=o(1183),x=o(768),w=o(767),L=o(778),A=o(774),P=o(16),k={name:"SearchPage",components:{packPlatformPage:_,searchNothingFound:d.a,requestIcon:v.a,CrossSearchBar:y.a,SeoBlock:C.a,bySellAds:x.a,appPopularRequestBanner:()=>o.e(31).then(o.bind(null,849))},layout:"app",scrollToTop:!0,async asyncData(t){const{app:e,params:o,store:r,redirect:c,res:l,route:d}=t;if(!o.platform)return void c(301,encodeURI(`/icons/set/${o.term}`));const m=Object(n.a)(o.platform),h=Object(A.a)(r,e).beautifyMadeIn(Object(w.b)(o.term)),f=m.$rootPath;"style"===m.type?r.dispatch("setPlatform",f):r.commit(P.SET_GROUP,f),r.dispatch("setFilterAuthors",Object(w.d)(o.platform)),r.dispatch("setFilterIsAnimated",Object(w.c)(o.platform)),r.dispatch("setFilterColor",Object(w.e)(o.platform).code||Object(w.e)(o.platform).value),r.dispatch("setFilterFlags",Object(w.f)(o.platform)),r.dispatch("setSearchColor",Object(w.e)(o.platform)),r.dispatch("icon/changeColor",Object(w.e)(o.platform).value||"000000"),r.commit("IS_CONTENT_LOADED",!1),r.commit("SET_PLACEHOLDER_TYPE","icon"),r.commit("SET_FILTER_AUTHOR_NAME",null);const{fetchDataCategory:_,fetchDataIcons:v}=Object(L.a)(r,e,d),y={term:o.term,beautyTerm:h,parsedParams:m},C=await v(y,t);if(!C)return;const x=await _(y);let k;if(x&&x.category&&(k=!!x.category.subcategory&&!!x.category.subcategory.length),x&&k){const{pageSubtitle:t,descriptionPage:e}=C;return{pageSubtitle:t,descriptionPage:e,...x}}return l&&!C.isFound&&(l.statusCode=404),C},data:()=>({term:"",icons:[],countAll:0,isFound:!1,page:1,isLoaded:!1,isLoadedAll:!1,parsedParams:null,searchTemplate:null,category:null,pageSubtitle:null,similarTags:null,isPageLoading:!0}),head(){return this.seo},computed:{...Object(r.e)({isContentLoaded:t=>t.ui.isContentLoaded,isPageLoaded:t=>t.ui.isPageLoaded,platform:t=>t.platform,user:t=>t.auth.user,pack:t=>t.pack,packs:t=>t.appInfo.packs,isAnimated:t=>t.filters.isAnimated,platforms:t=>t.appInfo.platforms,iconsResponse:t=>t.iconsResponse}),isColor(){return this.platforms[this.platform.apiCode].isColor}},watch:{isPageLoaded(t){t&&this.sendGA()},user(t){t&&this.$analytics.trackSearchEvent({userId:t.id,platform:this.platform.apiCode,isPaidUser:!!t.activeLicense,type:"icon",term:this.term,ip:t.ip})},iconsResponse:{handler(t,e){t.correctedPath===e.correctedPath&&this.setContentLoaded(500)}}},mounted(){this.setContentLoaded(500),this.setFilters(),this.sendGA(),this.isPageLoading=!1},methods:{...Object(r.b)(["setFilterColorGradient"]),fetchNext(t){const e=this.searchTemplate;"icons"===e&&this.fetchNextIcons(t),"category"===e&&this.fetchNextCategory(t)},async fetchNextIcons(t){var e;const{isColorFilters:o}=Object(L.a)(this.$store),r=this.$i18n.localeProperties.iso,n=this.$store.state.currentPlatforms,c=this.$route.params.term,l=null!==(e=this.isAnimated)&&void 0!==e?e:null,d=`${this.beautyTerm}`.toLowerCase(),m=this.page+1,h=o();if(this.icons.length>=this.countAll)return t.complete(),void(this.isLoadedAll=!0);const f={term:c,beautyTerm:d,page:m,isAnimated:l,isColor:h,platform:n};try{const e=await Object(L.a)(this.$store).getIcons(f,r);if(!e.success)throw e;e.icons.length?(this.icons=this.icons.concat(e.icons),this.page=this.page+1,t.loaded()):(t.complete(),this.isLoadedAll=!0)}catch(e){t.complete(),this.isLoadedAll=!0,console.error("fetchNextIcons",e)}},async fetchNextCategory(t){var e;if(this.isLoadedAll)return void t.complete();const o={pack:this.pack.code,platform:this.platform.apiCode,page:this.page+1,isAnimated:null!==(e=this.isAnimated)&&void 0!==e?e:null},{getCategory:r}=Object(L.a)(this.$store,this);try{const e=await r(o);e.success?(this.mergeCategories(this.category,e.category),this.page++,t.loaded()):(t.complete(),this.isLoadedAll=!0)}catch(e){t.complete(),this.isLoadedAll=!0,console.error("fetchNextCategory",e)}},mergeCategories(t,e){e.subcategory.forEach((e=>{const sub=t.subcategory.find((t=>t.code===e.code));sub?sub.icons.push(...e.icons):t.subcategory.push(e)}))},setFilters(){this.parsedParams&&this.platform&&"nolan"!==this.platform.apiCode&&this.setFilterColorGradient(void 0)},sendGA(){window.ga&&window.ga("send","pageview"),this.$analytics.trackIconSearch({term:this.term}),this.isFound||this.$analytics.track({event:"Nothing found",category:this.$route.params.platform})},setContentLoaded(t){setTimeout((()=>{this.$store.commit("IS_CONTENT_LOADED",!0)}),t)}}},O=(o(1418),Object(f.a)(k,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"platform-page"},[t.isContentLoaded?t._e():e("div",{staticClass:"platform-page__skeletons container"},[e("icon-placeholder",{attrs:{type:t.$store.state.ui.placeholderType,"aggregated-tags":!0,"short-bottom-margin":!0,"icons-heading":!1}})],1),t._v(" "),[e("div",{staticClass:"platform-page__header container"},["emoji"!==t.term?e("bySellAds"):t._e()],1),t._v(" "),e("div",{staticClass:"platform-page__content container"},["emoji"===t.term?e("appPopularRequestBanner",{staticClass:"platform-page__popular-request-banner",attrs:{request:t.term}}):t._e(),t._v(" "),"emoji"===t.term?e("bySellAds"):t._e(),t._v(" "),t.isFound?t._e():e("search-nothing-found",{attrs:{"is-page-loading":t.isPageLoading}}),t._v(" "),t.category&&"category"===t.searchTemplate?e("packPlatformPage",{staticClass:"is-body",attrs:{category:t.category,pack:t.pack,platform:t.platform}}):t._e(),t._v(" "),"icons"===t.searchTemplate?e("div",[e("icon-grid",{attrs:{icons:t.icons,"ads-params":{rowAds:5,term:t.term,platform:t.platform.apiCode},"carbon-ad":!0,"found-language":t.foundLanguage,action:"select"}})],1):t._e(),t._v(" "),e("client-only",[e("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!t.isLoadedAll&&t.isFound,expression:"!isLoadedAll && isFound"}],attrs:{distance:1300},on:{infinite:t.fetchNext}},[e("div",{staticClass:"is-loading",attrs:{slot:"spinner"},slot:"spinner"})])],1),t._v(" "),t.isFound?e("div",{staticClass:"icons-descr-wrap"},[e("request-icon",{staticClass:"missing-icon"}),t._v(" "),e("app-bottom-info",{staticClass:"page-descr",attrs:{subtitle:t.pageSubtitle,description:t.descriptionPage}})],1):t._e(),t._v(" "),t.isLoadedAll&&t.isFound?e("client-only",[e("CrossSearchBar",{attrs:{"search-query":t.beautyTerm.toLowerCase()}})],1):t._e(),t._v(" "),t.similarTags?e("SeoBlock",{attrs:{loading:!t.isContentLoaded,"similar-tags":t.similarTags}}):t._e()],1)]],2)}),[],!1,null,"744a3cfb",null));e.default=O.exports}}]);
//# sourceMappingURL=_platform.67c586e7fdf039da4298.js.map