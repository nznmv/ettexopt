(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12],{219:function(e,t,n){var content=n(232);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("fe7f2f28",content,!0,{sourceMap:!1})},228:function(e,t,n){"use strict";var r=n(5),o=n(29),c=n(30),l=n(144),d=n(70),f=n(11),v=n(56).f,m=n(71).f,h=n(13).f,x=n(229).trim,_="Number",y=r.Number,w=y,O=y.prototype,C=c(n(92)(O))==_,N="trim"in String.prototype,I=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,c=(t=N?t.trim():x(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof y&&(C?f((function(){O.valueOf.call(n)})):c(n)!=_)?l(new w(I(t)),n,y):I(t)};for(var j,E=n(8)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;E.length>k;k++)o(w,j=E[k])&&!o(y,j)&&h(y,j,m(w,j));y.prototype=O,O.constructor=y,n(16)(r,_,y)}},229:function(e,t,n){var r=n(4),o=n(38),c=n(11),l=n(230),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(e,t,n){var o={},d=c((function(){return!!l[e]()||"​"!="​"[e]()})),f=o[e]=d?t(h):l[e];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},h=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(v,"")),e};e.exports=m},230:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},231:function(e,t,n){"use strict";n(219)},232:function(e,t,n){var r=n(54)(!1);r.push([e.i,'.custom-select[data-v-122023f0]{position:relative;height:2em;width:3.5em;text-align:left;outline:none;line-height:2em;cursor:pointer;z-index:10}.custom-select .selected[data-v-122023f0]{background-color:#362d5f;border-radius:6px;border:none;font-family:StratosLCWeb-Bold,Arial,sans-serif;font-size:1em;text-transform:uppercase;color:#fff;padding-left:.4em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.custom-select .selected.open[data-v-122023f0]{border:none;border-radius:6px 6px 0 0}.custom-select .selected.open[data-v-122023f0]:after{top:.55em;transform:rotate(180deg)}.custom-select .selected.open[data-v-122023f0]:after,.custom-select .selected[data-v-122023f0]:after{transition:transform .5s;position:absolute;content:"";right:.4em;width:0;height:0;border:5px solid transparent;border-top-color:#fff}.custom-select .selected[data-v-122023f0]:after{top:.95em}.custom-select .items[data-v-122023f0]{color:#fff;border-radius:0 0 6px 6px;overflow:hidden;font-family:StratosLCWeb-Bold,Arial,sans-serif;font-size:1em;text-transform:uppercase;position:absolute;background-color:#362d5f;left:0;right:0;z-index:1}.custom-select .items div[data-v-122023f0]{color:#fff;padding-left:1em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.3s}.custom-select .items div[data-v-122023f0]:hover{background-color:#211b40}.selectHide[data-v-122023f0]{display:none}',""]),e.exports=r},233:function(e,t,n){"use strict";n.r(t);n(228);var r={props:{options:{type:Array,required:!0},default:{type:String,required:!1,default:null},tabindex:{type:Number,required:!1,default:0}},data:function(){return{selected:this.default?this.default:this.options.length>0?this.options[0]:null,open:!1}},mounted:function(){this.$emit("input",this.selected)}},o=(n(231),n(23)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-select",attrs:{tabindex:e.tabindex},on:{blur:function(t){e.open=!1}}},[n("div",{staticClass:"selected",class:{open:e.open},on:{click:function(t){e.open=!e.open}}},[e._v("\n\t\t\t"+e._s(e.selected)+"\n\t\t")]),e._v(" "),n("div",{staticClass:"items",class:{selectHide:!e.open}},e._l(e.options,(function(option,i){return n("div",{key:i,on:{click:function(t){e.selected=option,e.open=!1,e.$emit("input",option)}}},[e._v("\n\t\t\t\t"+e._s(option)+"\n\t\t\t")])})),0)])}),[],!1,null,"122023f0",null);t.default=component.exports},243:function(e,t,n){var content=n(322);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("bfeec2b2",content,!0,{sourceMap:!1})},321:function(e,t,n){"use strict";n(243)},322:function(e,t,n){var r=n(54),o=n(143),c=n(323),l=r(!1),d=o(c);l.push([e.i,".header[data-v-dce7cf76]{display:flex;justify-content:space-between;align-items:center;height:8.125em;max-width:68.75em;margin:0 auto}.header .logo[data-v-dce7cf76]{width:7em;height:3.75em;background:url("+d+") 50% no-repeat;cursor:pointer}.header .menu[data-v-dce7cf76]{display:flex;align-items:center}.header .menu .navigation[data-v-dce7cf76]{display:flex;justify-content:space-between;width:33em;color:#362d5f;font-family:StratosLCWeb-Medium,Arial,sans-serif;font-size:1.25em;line-height:2.75em}.header .menu .navigation>li>a[data-v-dce7cf76]{text-decoration:none;text-transform:uppercase}.header .menu .navigation>li>a[data-v-dce7cf76]:hover{text-decoration:underline}.header .menu .navigation>li>a[data-v-dce7cf76]:active,.header .menu .navigation>li>a[data-v-dce7cf76]:link,.header .menu .navigation>li>a[data-v-dce7cf76]:visited{color:#362d5f}.header .menu .additional[data-v-dce7cf76]{margin-left:3em}",""]),e.exports=l},323:function(e,t,n){e.exports=n.p+"img/logo.03d7011.svg"},342:function(e,t,n){"use strict";n.r(t);n(45),n(28),n(21),n(22),n(10),n(37);var r=n(15),o=n(233),c=n(46);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"Header",components:{LanguageChanger:o.default},methods:d({},Object(c.b)(["setTextConfig"])),computed:d({},Object(c.c)(["getHeaderText"]))},v=(n(321),n(23)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo"}),e._v(" "),n("div",{staticClass:"menu"},[n("ul",{staticClass:"navigation"},[n("li",[n("a",{attrs:{href:"#aboutProducts"}},[e._v(e._s(e.getHeaderText.aboutProduct))])]),e._v(" "),n("li",[n("a",{attrs:{href:"#advantages"}},[e._v(e._s(e.getHeaderText.advantages))])]),e._v(" "),n("li",[n("a",{attrs:{href:"#review"}},[e._v(e._s(e.getHeaderText.review))])]),e._v(" "),n("li",[n("a",{attrs:{href:"#cooperation"}},[e._v(e._s(e.getHeaderText.cooperation))])]),e._v(" "),n("li",[n("a",{attrs:{href:"#contacts"}},[e._v(e._s(e.getHeaderText.contact))])])]),e._v(" "),n("div",{staticClass:"additional"},[n("LanguageChanger",{staticClass:"select",attrs:{options:["ру","укр"],default:"ру"},on:{input:function(t){return e.setTextConfig(t)}}})],1)])])}),[],!1,null,"dce7cf76",null);t.default=component.exports;installComponents(component,{LanguageChanger:n(233).default})}}]);