(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{215:function(e,t,r){"use strict";var o=r(5),n=r(28),c=r(29),l=r(139),d=r(76),f=r(9),m=r(56).f,h=r(57).f,v=r(11).f,x=r(216).trim,z="Number",_=o.Number,B=_,w=_.prototype,j=c(r(97)(w))==z,y="trim"in String.prototype,O=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,o,n,c=(t=y?t.trim():x(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,o)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof _&&(j?f((function(){w.valueOf.call(r)})):c(r)!=z)?l(new B(O(t)),r,_):O(t)};for(var N,C=r(7)?m(B):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;C.length>I;I++)n(B,N=C[I])&&!n(_,N)&&v(_,N,h(B,N));_.prototype=w,w.constructor=_,r(15)(o,z,_)}},216:function(e,t,r){var o=r(4),n=r(35),c=r(9),l=r(217),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(e,t,r){var n={},d=c((function(){return!!l[e]()||"​"!="​"[e]()})),f=n[e]=d?t(v):l[e];r&&(n[r]=f),o(o.P+o.F*d,"String",n)},v=h.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(m,"")),e};e.exports=h},217:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},233:function(e,t,r){e.exports=r.p+"img/seaBreeze.66b01f9.svg"},266:function(e,t,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(55).default)("d17816de",content,!0,{sourceMap:!1})},322:function(e,t,r){e.exports=r.p+"img/1.452c8b6.jpg"},323:function(e,t,r){e.exports=r.p+"img/2.1970505.png"},324:function(e,t,r){e.exports=r.p+"img/3.7af0675.jpeg"},325:function(e,t,r){e.exports=r.p+"img/4.5d00cf0.jpg"},326:function(e,t,r){e.exports=r.p+"img/5.9e51dd8.jpg"},327:function(e,t,r){e.exports=r.p+"img/6.dce102c.jpg"},328:function(e,t,r){e.exports=r.p+"img/7.5ac2b69.jpg"},329:function(e,t,r){e.exports=r.p+"img/8.2921a1e.jpg"},330:function(e,t,r){e.exports=r.p+"img/9.b95dd2b.jpg"},331:function(e,t,r){e.exports=r.p+"img/10.a4534cd.jpg"},332:function(e,t,r){e.exports=r.p+"img/11.134452a.jpg"},333:function(e,t,r){"use strict";r(266)},334:function(e,t,r){var o=r(54),n=r(138),c=r(233),l=o(!1),d=n(c);l.push([e.i,".seaBreeze{max-width:68.75em;margin:0 auto;padding:0 1em 3em;border-bottom:2px solid rgba(54,45,95,.4)}.seaBreeze .seaBreezeTitle{height:18em;padding-bottom:3em;display:flex;justify-content:space-between;align-items:center}@media(max-width:992px){.seaBreeze .seaBreezeTitle{padding-bottom:2em}}@media(max-width:768px){.seaBreeze .seaBreezeTitle{height:25em;flex-direction:column-reverse;justify-content:space-evenly;height:22em}}.seaBreeze .seaBreezeTitle .seaBreezeSubtitle{font-size:1.5em;line-height:1.4em;max-width:50%}@media(max-width:768px){.seaBreeze .seaBreezeTitle .seaBreezeSubtitle{max-width:100%;font-size:1.25em;text-align:center}}.seaBreeze .seaBreezeTitle .linkSeaBreeze{width:13em;height:5em;background:url("+d+') 50% no-repeat;background-size:100%}.seaBreeze .agile{width:100%;height:16.8em;position:relative}@media(max-width:768px){.seaBreeze .agile{height:20em}}@media(max-width:576px){.seaBreeze .agile{height:18.5em}}.seaBreeze .agile__nav-button{background:transparent;border:none;color:#211b40;cursor:pointer;font-size:24px;height:100%;position:absolute;top:0;transition-duration:.3s;width:80px;z-index:4}.seaBreeze .agile__nav-button:hover{background-color:rgba(0,0,0,.3);opacity:1}.seaBreeze .agile__nav-button--prev{left:0}.seaBreeze .agile__nav-button--next{right:0}.seaBreeze .agile__dots{bottom:10px;left:50%;position:absolute;transform:translate(-620%,-2600%);display:flex;justify-content:space-between;z-index:4}.seaBreeze .agile__dot{margin:0 10px;position:relative}.seaBreeze .agile__dot button{border:none;background-color:hsla(0,0%,100%,.27843);border-radius:50%;cursor:pointer;display:block;height:10px;font-size:0;line-height:0;margin:0;padding:0;transition-duration:.3s;width:10px}.seaBreeze .agile__dot:before{content:"";position:absolute;width:1.5em;height:1.5em;top:-6px;left:-6px}.seaBreeze .agile__dot--current button,.seaBreeze .agile__dot:hover button{background-color:#fff}.seaBreeze .agile .slide{display:flex;align-items:center;justify-content:center;height:100%;max-height:16.8em;width:33.3%;-o-object-fit:contain;object-fit:contain}@media(max-width:768px){.seaBreeze .agile .slide{max-height:20em}}@media(max-width:576px){.seaBreeze .agile .slide{height:18.5em}}.seaBreeze .agile .slide>img{-o-object-fit:cover;object-fit:cover;height:100%;width:auto;border-right:2px solid #fff;border-left:2px solid #fff}',""]),e.exports=l},372:function(e,t,r){"use strict";r.r(t);r(27),r(22),r(26),r(43),r(44);var o=r(14),n=(r(215),r(45));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={name:"BrandsseaBreeze",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)(["getBrandsText"])),props:{numberSlides:Number}},d=l,f=(r(333),r(23)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"seaBreeze",attrs:{id:"seaBreeze"}},[o("div",{staticClass:"seaBreezeTitle"},[o("p",{staticClass:"seaBreezeSubtitle"},[e._v(e._s(e.getBrandsText.seaBreeze))]),e._v(" "),o("a",{staticClass:"linkSeaBreeze"})]),e._v(" "),o("agile",{attrs:{slidesToShow:e.numberSlides,autoplay:!0,"autoplay-speed":7e3,"pause-on-hover":!0,speed:700}},[o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(322),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(323),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(324),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(325),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(326),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(327),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(328),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(329),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(330),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(331),alt:"product photo"}})]),e._v(" "),o("div",{staticClass:"slide"},[o("img",{attrs:{src:r(332),alt:"product photo"}})])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);