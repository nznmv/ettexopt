(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{223:function(e,t,r){var content=r(258);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(55).default)("fe7f2f28",content,!0,{sourceMap:!1})},257:function(e,t,r){"use strict";r(223)},258:function(e,t,r){var n=r(54)(!1);n.push([e.i,'.custom-select[data-v-122023f0]{position:relative;height:2em;width:3.5em;text-align:left;outline:none;line-height:2em;cursor:pointer;z-index:10}.custom-select .selected[data-v-122023f0]{background-color:#362d5f;border-radius:6px;border:none;font-family:StratosLCWeb-Bold,Arial,sans-serif;font-size:1em;text-transform:uppercase;color:#fff;padding-left:.4em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.custom-select .selected.open[data-v-122023f0]{border:none;border-radius:6px 6px 0 0}.custom-select .selected.open[data-v-122023f0]:after{top:.55em;transform:rotate(180deg)}.custom-select .selected.open[data-v-122023f0]:after,.custom-select .selected[data-v-122023f0]:after{transition:transform .5s;position:absolute;content:"";right:.4em;width:0;height:0;border:5px solid transparent;border-top-color:#fff}.custom-select .selected[data-v-122023f0]:after{top:.95em}.custom-select .items[data-v-122023f0]{color:#fff;border-radius:0 0 6px 6px;overflow:hidden;font-family:StratosLCWeb-Bold,Arial,sans-serif;font-size:1em;text-transform:uppercase;position:absolute;background-color:#362d5f;left:0;right:0;z-index:1}.custom-select .items div[data-v-122023f0]{color:#fff;padding-left:1em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.3s}.custom-select .items div[data-v-122023f0]:hover{background-color:#211b40}.selectHide[data-v-122023f0]{display:none}',""]),e.exports=n},259:function(e,t,r){"use strict";r.r(t);r(217);var n={props:{options:{type:Array,required:!0},default:{type:String,required:!1,default:null},tabindex:{type:Number,required:!1,default:0}},data:function(){return{selected:this.default?this.default:this.options.length>0?this.options[0]:null,open:!1}},mounted:function(){this.$emit("input",this.selected)}},o=(r(257),r(22)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"custom-select",attrs:{tabindex:e.tabindex},on:{blur:function(t){e.open=!1}}},[r("div",{staticClass:"selected",class:{open:e.open},on:{click:function(t){e.open=!e.open}}},[e._v("\n\t\t\t"+e._s(e.selected)+"\n\t\t")]),e._v(" "),r("div",{staticClass:"items",class:{selectHide:!e.open}},e._l(e.options,(function(option,i){return r("div",{key:i,on:{click:function(t){e.selected=option,e.open=!1,e.$emit("input",option)}}},[e._v("\n\t\t\t\t"+e._s(option)+"\n\t\t\t")])})),0)])}),[],!1,null,"122023f0",null);t.default=component.exports},268:function(e,t,r){var content=r(331);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(55).default)("47cadc0b",content,!0,{sourceMap:!1})},330:function(e,t,r){"use strict";r(268)},331:function(e,t,r){var n=r(54),o=r(142),c=r(332),l=n(!1),d=o(c);l.push([e.i,".header{display:flex;justify-content:space-between;align-items:center;height:8.125em;max-width:68.75em;margin:0 auto;padding:0 1em}@media (max-width:992px){.header{justify-content:center;height:6em}}.header .logo{width:7em;height:3.75em;background:url("+d+') 50% no-repeat;cursor:pointer}.header .burgerMenu{display:none}.header .burgerMenu .bm-burger-button{top:2.2em;left:1em}.header .burgerMenu .bm-burger-bars{background-color:#362d5f}.header .burgerMenu .cross-style{right:1em;top:1.5em}.header .burgerMenu .cross-style:before{content:"";position:absolute;left:-.8em;top:-.5em;width:2em;height:2em}.header .burgerMenu .bm-cross{background:#fff}.header .burgerMenu .bm-menu{background-color:#362d5f;transition:.3s}.header .burgerMenu .bm-item-list{color:#fff;margin-left:10%;font-family:StratosLCWeb-Medium,Arial,sans-serif;font-size:1.25em;line-height:2.75em;text-decoration:none;text-transform:uppercase}.header .burgerMenu .bm-item-list>*{display:flex;text-decoration:none;padding:.7em}.header .burgerMenu .bm-item-list>*>span{margin-left:10px;font-weight:700;color:#fff;overflow:hidden;white-space:nowrap}@media (max-width:992px){.header .burgerMenu{display:block}}.header .menu{display:flex;align-items:center}.header .menu .navigation{display:flex;justify-content:space-between;width:33em;color:#362d5f;font-family:StratosLCWeb-Medium,Arial,sans-serif;font-size:1.25em;line-height:2.75em}@media (max-width:992px){.header .menu .navigation{display:none;position:absolute;right:1em}}.header .menu .navigation>li>a{text-decoration:none;text-transform:uppercase}.header .menu .navigation>li>a:hover{text-decoration:underline}.header .menu .navigation>li>a:active,.header .menu .navigation>li>a:link,.header .menu .navigation>li>a:visited{color:#362d5f}.header .menu .additional{margin-left:3em}@media (max-width:992px){.header .menu .additional{position:absolute;right:1em}}',""]),e.exports=l},332:function(e,t,r){e.exports=r.p+"img/logo.03d7011.svg"},344:function(e,t,r){"use strict";r.r(t);r(45),r(27),r(20),r(21),r(11),r(37);var n=r(14),o=(r(259),r(46));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"Header",components:{Slide:r(329).Slide},methods:l({},Object(o.b)(["setTextConfig"])),computed:l({},Object(o.c)(["getHeaderText"]))},f=(r(330),r(22)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"logo"}),e._v(" "),r("div",{staticClass:"menu"},[r("ul",{staticClass:"navigation"},[r("li",[r("a",{attrs:{href:"#aboutProducts"}},[e._v(e._s(e.getHeaderText.aboutProduct))])]),e._v(" "),r("li",[r("a",{attrs:{href:"#advantages"}},[e._v(e._s(e.getHeaderText.advantages))])]),e._v(" "),r("li",[r("a",{attrs:{href:"#review"}},[e._v(e._s(e.getHeaderText.review))])]),e._v(" "),r("li",[r("a",{attrs:{href:"#cooperation"}},[e._v(e._s(e.getHeaderText.cooperation))])]),e._v(" "),r("li",[r("a",{attrs:{href:"#contacts"}},[e._v(e._s(e.getHeaderText.contact))])])]),e._v(" "),r("div",{staticClass:"additional"},[r("LanguageChanger",{staticClass:"select",attrs:{options:["ру","укр"],default:"ру"},on:{input:function(t){return e.setTextConfig(t)}}})],1)]),e._v(" "),r("Slide",{staticClass:"burgerMenu",attrs:{closeOnNavigation:!0,noOverlay:""}},[r("a",{attrs:{href:"#aboutProducts"}},[r("span",[e._v(e._s(e.getHeaderText.aboutProduct))])]),e._v(" "),r("a",{attrs:{href:"#advantages"}},[r("span",[e._v(e._s(e.getHeaderText.advantages))])]),e._v(" "),r("a",{attrs:{href:"#review"}},[r("span",[e._v(e._s(e.getHeaderText.review))])]),e._v(" "),r("a",{attrs:{href:"#cooperation"}},[r("span",[e._v(e._s(e.getHeaderText.cooperation))])]),e._v(" "),r("a",{attrs:{href:"#contacts"}},[r("span",[e._v(e._s(e.getHeaderText.contact))])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LanguageChanger:r(259).default})}}]);