(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{217:function(t,e,o){"use strict";var r=o(5),n=o(28),c=o(29),l=o(143),d=o(68),f=o(9),m=o(56).f,h=o(69).f,v=o(12).f,x=o(218).trim,_="Number",w=r.Number,y=w,C=w.prototype,P=c(o(92)(C))==_,O="trim"in String.prototype,j=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,r,n,c=(e=O?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof w&&(P?f((function(){C.valueOf.call(o)})):c(o)!=_)?l(new y(j(e)),o,w):j(e)};for(var N,I=o(7)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)n(y,N=I[E])&&!n(w,N)&&v(w,N,h(y,N));w.prototype=C,C.constructor=w,o(15)(r,_,w)}},218:function(t,e,o){var r=o(4),n=o(38),c=o(9),l=o(219),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t,e,o){var n={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=n[t]=d?e(v):l[t];o&&(n[o]=f),r(r.P+r.F*d,"String",n)},v=h.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},219:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},233:function(t,e,o){t.exports=o.p+"img/conbrio.631d5ca.svg"},264:function(t,e,o){var content=o(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("9931cb5e",content,!0,{sourceMap:!1})},289:function(t,e,o){t.exports=o.p+"img/1.8d3475e.JPG"},290:function(t,e,o){t.exports=o.p+"img/2.198ac88.JPG"},291:function(t,e,o){t.exports=o.p+"img/3.4e67c4c.JPG"},292:function(t,e,o){t.exports=o.p+"img/4.4948558.JPG"},293:function(t,e,o){t.exports=o.p+"img/5.b8dfbcf.JPG"},294:function(t,e,o){t.exports=o.p+"img/6.9d631ab.JPG"},295:function(t,e,o){t.exports=o.p+"img/7.9634657.JPG"},296:function(t,e,o){t.exports=o.p+"img/8.b4df821.JPG"},297:function(t,e,o){t.exports=o.p+"img/10.99f139c.JPG"},298:function(t,e,o){t.exports=o.p+"img/11.58a3fa6.JPG"},299:function(t,e,o){t.exports=o.p+"img/12.efcdbd8.JPG"},300:function(t,e,o){t.exports=o.p+"img/13.448f27a.JPG"},301:function(t,e,o){t.exports=o.p+"img/9.c634e63.JPG"},302:function(t,e,o){"use strict";o(264)},303:function(t,e,o){var r=o(54),n=o(142),c=o(233),l=r(!1),d=n(c);l.push([t.i,".conbrio{max-width:68.75em;margin:0 auto 7em;padding:0 1em}@media (max-width:768px){.conbrio{margin:0 auto 4em}}.conbrio .conbrioTitle{height:18em;padding-bottom:5em;display:flex;justify-content:space-between;align-items:center}@media (max-width:992px){.conbrio .conbrioTitle{padding-bottom:2em}}@media (max-width:768px){.conbrio .conbrioTitle{height:20em;flex-direction:column-reverse;justify-content:space-evenly;height:18em}}.conbrio .conbrioTitle .conbrioSubtitle{font-size:1.5em;line-height:1.4em;max-width:50%}@media (max-width:768px){.conbrio .conbrioTitle .conbrioSubtitle{max-width:100%;font-size:1.25em;text-align:center}}.conbrio .conbrioTitle .linkConbrio{width:13em;height:5em;background:url("+d+') 50% no-repeat;background-size:100%}.conbrio .agile{width:100%;height:16.8em;position:relative}@media (max-width:768px){.conbrio .agile{height:20em}}@media (max-width:576px){.conbrio .agile{height:18.5em}}.conbrio .agile__nav-button{background:transparent;border:none;color:#211b40;cursor:pointer;font-size:24px;height:100%;position:absolute;top:0;transition-duration:.3s;width:80px;z-index:4}.conbrio .agile__nav-button:hover{background-color:rgba(0,0,0,.3);opacity:1}.conbrio .agile__nav-button--prev{left:0}.conbrio .agile__nav-button--next{right:0}.conbrio .agile__dots{bottom:10px;left:50%;position:absolute;transform:translate(-620%,-2600%);display:flex;justify-content:space-between;z-index:4}.conbrio .agile__dot{margin:0 10px;position:relative}.conbrio .agile__dot button{border:none;background-color:hsla(0,0%,100%,.278431);border-radius:50%;cursor:pointer;display:block;height:10px;font-size:0;line-height:0;margin:0;padding:0;transition-duration:.3s;width:10px}.conbrio .agile__dot:before{content:"";position:absolute;width:1.5em;height:1.5em;top:-6px;left:-6px}.conbrio .agile__dot--current button,.conbrio .agile__dot:hover button{background-color:#fff}.conbrio .agile .slide{display:block;height:100%;max-height:16.8em;width:33.3%;-o-object-fit:contain;object-fit:contain}@media (max-width:768px){.conbrio .agile .slide{max-height:20em}}@media (max-width:576px){.conbrio .agile .slide{height:18.5em}}.conbrio .agile .slide>img{-o-object-fit:contain;object-fit:contain;height:100%;width:100%;border-right:2px solid #fff;border-left:2px solid #fff}',""]),t.exports=l},340:function(t,e,o){"use strict";o.r(e);o(45),o(27),o(20),o(21),o(11),o(37),o(217);var r=o(14),n=o(46);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={name:"BrandsConbrio",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)(["getBrandsText"])),props:{numberSlides:Number}},d=(o(302),o(22)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"conbrio",attrs:{id:"conbrio"}},[r("div",{staticClass:"conbrioTitle"},[r("p",{staticClass:"conbrioSubtitle"},[t._v(t._s(t.getBrandsText.conbrio))]),t._v(" "),r("a",{staticClass:"linkConbrio"})]),t._v(" "),r("agile",{attrs:{slidesToShow:t.numberSlides,autoplay:!0,"autoplay-speed":7e3,"pause-on-hover":!0,speed:700}},[r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(289),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(290),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(291),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(292),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(293),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(294),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(295),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(296),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(297),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(298),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(299),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(300),alt:"product photo"}})]),t._v(" "),r("div",{staticClass:"slide"},[r("img",{attrs:{src:o(301),alt:"product photo"}})])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);