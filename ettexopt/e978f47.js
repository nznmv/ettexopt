(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{218:function(t,e,r){"use strict";var n=r(5),o=r(29),d=r(30),c=r(144),l=r(70),m=r(11),f=r(56).f,h=r(71).f,x=r(13).f,v=r(219).trim,w="Number",_=n.Number,k=_,y=_.prototype,C=d(r(92)(y))==w,O="trim"in String.prototype,j=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,d=(e=O?e.trim():v(e,3)).charCodeAt(0);if(43===d||45===d){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===d){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(C?m((function(){y.valueOf.call(r)})):d(r)!=w)?c(new k(j(e)),r,_):j(e)};for(var P,S=r(8)?f(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;S.length>N;N++)o(k,P=S[N])&&!o(_,P)&&x(_,P,h(k,P));_.prototype=y,y.constructor=_,r(16)(n,w,_)}},219:function(t,e,r){var n=r(4),o=r(38),d=r(11),c=r(220),l="["+c+"]",m=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),h=function(t,e,r){var o={},l=d((function(){return!!c[t]()||"​"!="​"[t]()})),m=o[t]=l?e(x):c[t];r&&(o[r]=m),n(n.P+n.F*l,"String",o)},x=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},220:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},222:function(t,e,r){var content=r(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("4a23b79e",content,!0,{sourceMap:!1})},225:function(t,e,r){t.exports=r.p+"img/magio.642a803.svg"},233:function(t,e,r){t.exports=r.p+"img/satori.efc3325.svg"},234:function(t,e,r){t.exports=r.p+"img/conbrio.631d5ca.svg"},235:function(t,e,r){t.exports=r.p+"img/1.3b868fa.JPG"},236:function(t,e,r){t.exports=r.p+"img/2.6f0931f.JPG"},237:function(t,e,r){t.exports=r.p+"img/3.e64e8aa.JPG"},238:function(t,e,r){t.exports=r.p+"img/4.3074dc2.JPG"},239:function(t,e,r){t.exports=r.p+"img/5.61c5a54.JPG"},240:function(t,e,r){t.exports=r.p+"img/6.7669697.JPG"},241:function(t,e,r){t.exports=r.p+"img/7.8cc3ee2.JPG"},242:function(t,e,r){t.exports=r.p+"img/8.2414d2e.JPG"},243:function(t,e,r){t.exports=r.p+"img/9.7cfafb6.JPG"},244:function(t,e,r){t.exports=r.p+"img/10.ef3f0ea.JPG"},245:function(t,e,r){t.exports=r.p+"img/11.60feb01.JPG"},246:function(t,e,r){t.exports=r.p+"img/12.349d839.JPG"},247:function(t,e,r){t.exports=r.p+"img/13.b19808b.JPG"},248:function(t,e,r){t.exports=r.p+"img/14.5f367f4.JPG"},249:function(t,e,r){t.exports=r.p+"img/15.af269ed.JPG"},250:function(t,e,r){t.exports=r.p+"img/16.bc3adde.JPG"},251:function(t,e,r){t.exports=r.p+"img/17.c4c4160.JPG"},252:function(t,e,r){t.exports=r.p+"img/18.831418e.JPG"},253:function(t,e,r){"use strict";r(222)},254:function(t,e,r){var n=r(54),o=r(143),d=r(225),c=n(!1),l=o(d);c.push([t.i,".magio{max-width:68.75em;margin:0 auto;padding:0 1em 3em;border-bottom:2px solid rgba(54,45,95,.4)}.magio .magioTitle{height:18em;padding-bottom:5em;display:flex;justify-content:space-between;align-items:center}@media (max-width:992px){.magio .magioTitle{padding-bottom:2em}}@media (max-width:768px){.magio .magioTitle{height:25em;flex-direction:column-reverse;justify-content:space-evenly;height:22em}}.magio .magioTitle .magioSubtitle{font-size:1.5em;line-height:1.4em;max-width:50%}@media (max-width:768px){.magio .magioTitle .magioSubtitle{max-width:100%;font-size:1.25em;text-align:center}}.magio .magioTitle .linkMagio{width:13em;height:4em;background:url("+l+') 50% no-repeat;background-size:100%}.magio .agile{width:100%;height:16.8em;position:relative}@media (max-width:768px){.magio .agile{height:20em}}@media (max-width:576px){.magio .agile{height:18.5em}}.magio .agile__nav-button{background:transparent;border:none;color:#211b40;cursor:pointer;font-size:24px;height:100%;position:absolute;top:0;transition-duration:.3s;width:80px;z-index:4}.magio .agile__nav-button:hover{background-color:rgba(0,0,0,.3);opacity:1}.magio .agile__nav-button--prev{left:0}.magio .agile__nav-button--next{right:0}.magio .agile__dots{bottom:10px;left:50%;position:absolute;transform:translate(-620%,-2600%);display:flex;justify-content:space-between;z-index:4}.magio .agile__dot{margin:0 10px;position:relative}.magio .agile__dot button{border:none;background-color:hsla(0,0%,100%,.278431);border-radius:50%;cursor:pointer;display:block;height:10px;font-size:0;line-height:0;margin:0;padding:0;transition-duration:.3s;width:10px}.magio .agile__dot:before{content:"";position:absolute;width:1.5em;height:1.5em;top:-6px;left:-6px}.magio .agile__dot--current button,.magio .agile__dot:hover button{background-color:#fff}.magio .agile .slide{display:block;height:100%;max-height:16.8em;width:33.3%;-o-object-fit:contain;object-fit:contain}@media (max-width:768px){.magio .agile .slide{max-height:20em}}@media (max-width:576px){.magio .agile .slide{height:18.5em}}.magio .agile .slide>img{-o-object-fit:cover;object-fit:cover;height:100%;width:100%;border-right:2px solid #fff;border-left:2px solid #fff}',""]),t.exports=c},264:function(t,e,r){var content=r(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("4cde5f49",content,!0,{sourceMap:!1})},272:function(t,e,r){"use strict";r.r(e);r(45),r(28),r(21),r(22),r(10),r(37),r(218);var n=r(15),o=r(46);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"BrandsMagio",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["getBrandsText"])),props:{numberSlides:Number}},l=(r(253),r(23)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"magio",attrs:{id:"magio"}},[n("div",{staticClass:"magioTitle"},[n("p",{staticClass:"magioSubtitle"},[t._v(t._s(t.getBrandsText.magio))]),t._v(" "),n("a",{staticClass:"linkMagio"})]),t._v(" "),n("agile",{attrs:{slidesToShow:t.numberSlides,autoplay:!0,"autoplay-speed":7e3,"pause-on-hover":!0,speed:700}},[n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(235),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(236),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(237),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(238),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(239),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(240),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(241),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(242),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(243),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(244),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(245),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(246),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(247),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(248),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(249),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(250),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(251),alt:"product photo"}})]),t._v(" "),n("div",{staticClass:"slide"},[n("img",{attrs:{src:r(252),alt:"product photo"}})])])],1)}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,r){"use strict";r(264)},288:function(t,e,r){var n=r(54),o=r(143),d=r(233),c=r(225),l=r(234),m=r(289),f=n(!1),h=o(d),x=o(c),v=o(l),w=o(m);f.push([t.i,".brands-wrapper{color:#362d5f;font-family:StratosLCWeb-Regular,Arial,sans-serif}.brands-wrapper .brands{max-width:68.75em;margin:0 auto;border-bottom:2px solid rgba(54,45,95,.4);height:27.7em;display:flex;flex-direction:column;justify-content:space-evenly;padding:0 1em}@media (max-width:992px){.brands-wrapper .brands{height:35em}}@media (max-width:576px){.brands-wrapper .brands{height:30em}}.brands-wrapper .brands .brandsAbout{display:flex;justify-content:space-between;align-items:center;color:#362d5f;font-family:StratosLCWeb-Regular,Arial,sans-serif;font-size:1.5em;line-height:1.4em;flex-wrap:wrap}.brands-wrapper .brands .brandsAbout .title{font-family:StratosLCWeb-Bold,Arial,sans-serif;font-size:2em}@media (max-width:576px){.brands-wrapper .brands .brandsAbout .title{font-size:1.7em}}@media (max-width:992px){.brands-wrapper .brands .brandsAbout .title{margin-bottom:1em}}.brands-wrapper .brands .brandsAbout .subtitle{max-width:22em}@media (max-width:992px){.brands-wrapper .brands .brandsAbout .subtitle{max-width:100%}}.brands-wrapper .brands .brandsLinks{display:flex;justify-content:space-between;flex-wrap:wrap;align-items:flex-end;height:5em}@media (max-width:992px){.brands-wrapper .brands .brandsLinks{justify-content:space-around;height:10em}}@media (max-width:576px){.brands-wrapper .brands .brandsLinks{flex-direction:column;justify-content:space-between;align-items:center;height:25em;display:none}}.brands-wrapper .brands .brandsLinks .linkSatori{width:13em;height:3em;background:url("+h+") 50% no-repeat;background-size:100%;cursor:pointer;margin:.5em 1em}@media (max-width:992px){.brands-wrapper .brands .brandsLinks .linkSatori{background-size:75%}}@media (max-width:576px){.brands-wrapper .brands .brandsLinks .linkSatori{background-size:100%}}.brands-wrapper .brands .brandsLinks .linkMagio{width:13em;height:4em;background:url("+x+") 50% no-repeat;background-size:100%;cursor:pointer;margin:.5em 0}@media (max-width:992px){.brands-wrapper .brands .brandsLinks .linkMagio{background-size:75%}}@media (max-width:576px){.brands-wrapper .brands .brandsLinks .linkMagio{background-size:100%}}.brands-wrapper .brands .brandsLinks .linkConbrio{width:13em;height:5em;background:url("+v+") 50% no-repeat;background-size:100%;cursor:pointer;margin:.5em 1em}@media (max-width:992px){.brands-wrapper .brands .brandsLinks .linkConbrio{background-size:75%;height:4em}}@media (max-width:576px){.brands-wrapper .brands .brandsLinks .linkConbrio{background-size:100%}}.brands-wrapper .brands .brandsLinks .linkVitek{width:13em;height:3em;background:url("+w+") 50% no-repeat;background-size:100%;cursor:pointer;margin:.5em 0}@media (max-width:992px){.brands-wrapper .brands .brandsLinks .linkVitek{background-size:75%}}@media (max-width:576px){.brands-wrapper .brands .brandsLinks .linkVitek{background-size:100%}}",""]),t.exports=f},289:function(t,e,r){t.exports=r.p+"img/vitek.d2e7a6e.svg"},339:function(t,e,r){"use strict";r.r(e);r(45),r(28),r(21),r(22),r(10),r(37);var n=r(15),o=r(46);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"Brands",computed:c(c({},Object(o.c)(["getBrandsText"])),{},{slideNumber:function(){switch(!0){case window.screen.width>=992:return 3;case window.screen.width>=768:return 2;case window.screen.width<=768:return 1}}})},m=(r(287),r(23)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"brands-wrapper",attrs:{id:"aboutProducts"}},[r("div",{staticClass:"brands"},[r("div",{staticClass:"brandsAbout"},[r("h2",{staticClass:"title"},[t._v(t._s(t.getBrandsText.title))]),t._v(" "),r("div",[r("p",{staticClass:"subtitle"},[t._v(t._s(t.getBrandsText.firstAbout))]),t._v(" "),r("p",{staticClass:"subtitle"},[t._v(t._s(t.getBrandsText.about))])])]),t._v(" "),t._m(0)]),t._v(" "),r("BrandsMagio",{attrs:{numberSlides:t.slideNumber}}),t._v(" "),r("LazyBrandsSatori",{attrs:{numberSlides:t.slideNumber}}),t._v(" "),r("LazyBrandsConbrio",{attrs:{numberSlides:t.slideNumber}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"brandsLinks"},[r("a",{staticClass:"linkMagio",attrs:{href:"#magio"}}),t._v(" "),r("a",{staticClass:"linkSatori",attrs:{href:"#satori"}}),t._v(" "),r("a",{staticClass:"linkConbrio",attrs:{href:"#conbrio"}}),t._v(" "),r("div",{staticClass:"linkVitek"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BrandsMagio:r(272).default})}}]);