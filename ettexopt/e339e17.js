(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,8,9,10],{217:function(e,t,o){var content=o(223);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("fe7f2f28",content,!0,{sourceMap:!1})},218:function(e,t,o){"use strict";o.r(t);o(219);var r={props:{options:{type:Array,required:!0},default:{type:String,required:!1,default:null},tabindex:{type:Number,required:!1,default:0}},data:function(){return{selected:this.default?this.default:this.options.length>0?this.options[0]:null,open:!1}},mounted:function(){this.$emit("input",this.selected)}},n=(o(222),o(23)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"custom-select",attrs:{tabindex:e.tabindex},on:{blur:function(t){e.open=!1}}},[o("div",{staticClass:"selected",class:{open:e.open},on:{click:function(t){e.open=!e.open}}},[e._v("\n\t\t\t"+e._s(e.selected)+"\n\t\t")]),e._v(" "),o("div",{staticClass:"items",class:{selectHide:!e.open}},e._l(e.options,(function(option,i){return o("div",{key:i,on:{click:function(t){e.selected=option,e.open=!1,e.$emit("input",option)}}},[e._v("\n\t\t\t\t"+e._s(option)+"\n\t\t\t")])})),0)])}),[],!1,null,"122023f0",null);t.default=component.exports},219:function(e,t,o){"use strict";var r=o(5),n=o(29),d=o(30),c=o(144),l=o(70),v=o(11),h=o(56).f,f=o(71).f,m=o(13).f,w=o(220).trim,y="Number",M=r.Number,j=M,I=M.prototype,x=d(o(92)(I))==y,C="trim"in String.prototype,T=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var o,r,n,d=(t=C?t.trim():w(t,3)).charCodeAt(0);if(43===d||45===d){if(88===(o=t.charCodeAt(2))||120===o)return NaN}else if(48===d){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var code,c=t.slice(2),i=0,v=c.length;i<v;i++)if((code=c.charCodeAt(i))<48||code>n)return NaN;return parseInt(c,r)}}return+t};if(!M(" 0o1")||!M("0b1")||M("+0x1")){M=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof M&&(x?v((function(){I.valueOf.call(o)})):d(o)!=y)?c(new j(T(t)),o,M):T(t)};for(var N,_=o(8)?h(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;_.length>O;O++)n(j,N=_[O])&&!n(M,N)&&m(M,N,f(j,N));M.prototype=I,I.constructor=M,o(16)(r,y,M)}},220:function(e,t,o){var r=o(4),n=o(38),d=o(11),c=o(221),l="["+c+"]",v=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),f=function(e,t,o){var n={},l=d((function(){return!!c[e]()||"​"!="​"[e]()})),v=n[e]=l?t(m):c[e];o&&(n[o]=v),r(r.P+r.F*l,"String",n)},m=f.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(v,"")),2&t&&(e=e.replace(h,"")),e};e.exports=f},221:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},222:function(e,t,o){"use strict";o(217)},223:function(e,t,o){var r=o(54)(!1);r.push([e.i,'.custom-select[data-v-122023f0]{position:relative;height:2em;width:3.5em;text-align:left;outline:none;line-height:2em;cursor:pointer;z-index:10}.custom-select .selected[data-v-122023f0]{background-color:#362d5f;border-radius:6px;border:none;font-family:StratosLCWeb-Bold,Arial,sans-serif;font-size:1em;text-transform:uppercase;color:#fff;padding-left:.4em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.custom-select .selected.open[data-v-122023f0]{border:none;border-radius:6px 6px 0 0}.custom-select .selected.open[data-v-122023f0]:after{top:.55em;transform:rotate(180deg)}.custom-select .selected.open[data-v-122023f0]:after,.custom-select .selected[data-v-122023f0]:after{transition:transform .5s;position:absolute;content:"";right:.4em;width:0;height:0;border:5px solid transparent;border-top-color:#fff}.custom-select .selected[data-v-122023f0]:after{top:.95em}.custom-select .items[data-v-122023f0]{color:#fff;border-radius:0 0 6px 6px;overflow:hidden;font-family:StratosLCWeb-Bold,Arial,sans-serif;font-size:1em;text-transform:uppercase;position:absolute;background-color:#362d5f;left:0;right:0;z-index:1}.custom-select .items div[data-v-122023f0]{color:#fff;padding-left:1em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.3s}.custom-select .items div[data-v-122023f0]:hover{background-color:#211b40}.selectHide[data-v-122023f0]{display:none}',""]),e.exports=r},224:function(e,t,o){var content=o(236);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("41f3d659",content,!0,{sourceMap:!1})},225:function(e,t,o){var content=o(243);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("005e015e",content,!0,{sourceMap:!1})},229:function(e,t,o){var content=o(296);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("0a59b5fe",content,!0,{sourceMap:!1})},230:function(e,t,o){var content=o(303);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("b2c2d29e",content,!0,{sourceMap:!1})},231:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjM0NjcgMTcuNjEzNkwxOS45OTc1IDE0LjI2NDNDMTguODAxMyAxMy4wNjgxIDE2Ljc2NzggMTMuNTQ2NyAxNi4yODkzIDE1LjEwMTZDMTUuOTMwNSAxNi4xNzgyIDE0LjczNDMgMTYuNzc2MyAxMy42NTc4IDE2LjUzN0MxMS4yNjU0IDE1LjkzODkgOC4wMzU3OCAxMi44Mjg5IDcuNDM3NjkgMTAuMzE3QzcuMDc4ODQgOS4yNDAzNiA3Ljc5NjU0IDguMDQ0MTkgOC44NzMwOSA3LjY4NTM4QzEwLjQyODEgNy4yMDY5MSAxMC45MDY2IDUuMTczNDMgOS43MTA0MSAzLjk3NzI2TDYuMzYxMTQgMC42Mjc5ODlDNS40MDQyIC0wLjIwOTMyOSAzLjk2ODggLTAuMjA5MzI5IDMuMTMxNDggMC42Mjc5ODlMMC44NTg3NjUgMi45MDA3MUMtMS40MTM5NiA1LjI5MzA1IDEuMDk4IDExLjYzMjcgNi43MTk5OSAxNy4yNTQ3QzEyLjM0MiAyMi44NzY3IDE4LjY4MTcgMjUuNTA4MyAyMS4wNzQgMjMuMTE2TDIzLjM0NjcgMjAuODQzMkMyNC4xODQxIDE5Ljg4NjMgMjQuMTg0MSAxOC40NTA5IDIzLjM0NjcgMTcuNjEzNloiIGZpbGw9IiMzNjJENUYiLz4KPC9zdmc+Cg=="},235:function(e,t,o){"use strict";o(224)},236:function(e,t,o){var r=o(54),n=o(143),d=o(237),c=r(!1),l=n(d);c.push([e.i,".header[data-v-560adce5]{display:flex;justify-content:space-between;align-items:center;height:8.125em;max-width:68.75em;margin:0 auto}.header .logo[data-v-560adce5]{width:7em;height:3.75em;background:url("+l+") 50% no-repeat;cursor:pointer}.header .menu[data-v-560adce5]{display:flex;align-items:center}.header .menu .navigation[data-v-560adce5]{display:flex;justify-content:space-between;width:31em;color:#362d5f;font-family:StratosLCWeb-Medium,Arial,sans-serif;font-size:1.25em;line-height:2.75em}.header .menu .navigation>li>a[data-v-560adce5]{text-decoration:none;text-transform:uppercase}.header .menu .navigation>li>a[data-v-560adce5]:hover{text-decoration:underline}.header .menu .navigation>li>a[data-v-560adce5]:active,.header .menu .navigation>li>a[data-v-560adce5]:link,.header .menu .navigation>li>a[data-v-560adce5]:visited{color:#362d5f}.header .menu .additional[data-v-560adce5]{margin-left:3em}",""]),e.exports=c},237:function(e,t,o){e.exports=o.p+"img/logo.03d7011.svg"},238:function(e,t,o){e.exports=o.p+"img/1.6c3c7bc.jpg"},239:function(e,t,o){e.exports=o.p+"img/2.55b0d69.jpg"},240:function(e,t,o){e.exports=o.p+"img/3.b88cd4b.jpg"},241:function(e,t,o){e.exports=o.p+"img/4.d249e76.jpg"},242:function(e,t,o){"use strict";o(225)},243:function(e,t,o){var r=o(54)(!1);r.push([e.i,'.ads .content-wrapper{background:rgba(54,45,95,.858824);width:50vw;height:39.125em;position:absolute;top:8.125em;z-index:3;display:flex;align-items:center;justify-content:flex-end}.ads .content-wrapper .content{display:flex;flex-direction:column;justify-content:space-between;height:22.375em;margin-right:3em}.ads .content-wrapper .content .title{font-family:StratosLCWeb-Medium,Arial,sans-serif;font-size:2.25em;line-height:1.35em;color:#fff;max-width:14em}.ads .agile{width:100%;height:39.125em;position:relative;background:rgba(54,45,95,.858824)}.ads .agile__nav-button{background:transparent;border:none;color:hsla(0,0%,100%,.278431);cursor:pointer;font-size:24px;height:100%;position:absolute;top:0;transition-duration:.3s;width:80px;z-index:4}.ads .agile__nav-button:hover{background-color:rgba(0,0,0,.3);opacity:1}.ads .agile__nav-button--prev{left:0}.ads .agile__nav-button--next{right:0}.ads .agile__dots{bottom:10px;left:50%;position:absolute;transform:translate(-470%,-2600%);display:flex;justify-content:space-between;z-index:4}.ads .agile__dot{margin:0 10px;position:relative}.ads .agile__dot button{border:none;background-color:hsla(0,0%,100%,.278431);border-radius:50%;cursor:pointer;display:block;height:10px;font-size:0;line-height:0;margin:0;padding:0;transition-duration:.3s;width:10px}.ads .agile__dot:before{content:"";position:absolute;width:1.5em;height:1.5em;top:-6px;left:-6px}.ads .agile__dot--current button,.ads .agile__dot:hover button{background-color:#fff}.ads .agile .slide{display:block;height:100%;-o-object-fit:contain;object-fit:contain;width:100%}.ads .agile .slide .content{max-width:68.75em;height:100%;margin:0 auto;z-index:4;position:absolute;top:0}.ads .agile .slide .image{-o-object-fit:cover;object-fit:cover;height:39.125em;width:100%}',""]),e.exports=r},295:function(e,t,o){"use strict";o(229)},296:function(e,t,o){var r=o(54),n=o(143),d=o(297),c=o(231),l=o(298),v=o(299),h=o(300),f=o(301),m=r(!1),w=n(d),y=n(c),M=n(l),j=n(v),I=n(h),x=n(f);m.push([e.i,'.advantages-wrapper{width:100vw;background:#595675;height:40em}.advantages-wrapper .advantages{max-width:68.75em;height:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;position:relative}.advantages-wrapper .advantages .advantagesHeader{display:flex;justify-content:space-between;align-items:center}.advantages-wrapper .advantages .advantagesHeader .advantagesTitle{font-family:StratosLCWeb-Bold,Arial,sans-serif;font-size:3em;color:#fff;line-height:1em}.advantages-wrapper .advantages .advantagesHeader .advantagesDivider{width:50%;height:1px;background:hsla(0,0%,100%,.278431)}.advantages-wrapper .advantages .advantagesMain{display:flex;justify-content:space-evenly;flex-wrap:wrap;margin-top:5em}.advantages-wrapper .advantages .advantagesMain .advantage{width:33%;max-width:17em;height:11em;color:#fff;font-family:StratosLCWeb-Regular,Arial,sans-serif;font-size:1.125em;line-height:1.35em;text-align:center;display:flex;flex-direction:column;align-items:center}.advantages-wrapper .advantages .advantagesMain .advantage:last-child{width:25em;max-width:none}.advantages-wrapper .advantages .button{position:absolute;bottom:-1.4em;right:0}.icon{transition:.3s}.icon-heart:before{width:4em;height:4em;content:"";display:inline-block;background:url('+w+') no-repeat 50%}.icon-heart:hover{transform:scale(1.1)}.icon-callback:before{width:4em;height:4em;content:"";display:inline-block;background:url('+y+') no-repeat 50%}.icon-callback:hover{transform:scale(1.1)}.icon-guard:before{width:4em;height:4em;content:"";display:inline-block;background:url('+M+') no-repeat 50%}.icon-guard:hover{transform:scale(1.1)}.icon-location:before{width:4em;height:4em;content:"";display:inline-block;background:url('+j+') no-repeat 50%}.icon-location:hover{transform:scale(1.1)}.icon-part:before{width:4em;height:4em;content:"";display:inline-block;background:url('+I+') no-repeat 50%}.icon-part:hover{transform:scale(1.1)}.icon-rocket:before{width:4em;height:4em;content:"";display:inline-block;background:url('+x+") no-repeat 50%}.icon-rocket:hover{transform:scale(1.1)}",""]),e.exports=m},297:function(e,t,o){e.exports=o.p+"img/heart.4ba6c99.svg"},298:function(e,t,o){e.exports=o.p+"img/guard.54c1ac9.svg"},299:function(e,t,o){e.exports=o.p+"img/location.aa2ac12.svg"},300:function(e,t,o){e.exports=o.p+"img/part.0688a88.svg"},301:function(e,t,o){e.exports=o.p+"img/rocket.789eb03.svg"},302:function(e,t,o){"use strict";o(230)},303:function(e,t,o){var r=o(54),n=o(143),d=o(304),c=o(305),l=o(306),v=r(!1),h=n(d),f=n(c),m=n(l);v.push([e.i,'.videoReview-wrapper{position:relative;width:100vw}.videoReview-wrapper .videoReview{max-width:68.75em;height:50em;margin:0 auto;display:flex;flex-direction:column;justify-content:center}.videoReview-wrapper .videoReview .blockTitle{max-width:10em;margin-bottom:2em}.videoReview-wrapper .videoReview .videos-wrapper{width:100%;display:flex;height:25em}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos{width:70%}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile{width:100%;max-width:45em;height:25em;position:relative}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__nav-button{background:transparent;border:none;color:#211b40;cursor:pointer;font-size:24px;height:100%;position:absolute;top:0;transition-duration:.3s;width:80px;z-index:4}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__nav-button:before{width:4rem;height:4rem;content:"";display:inline-block;background:url('+h+') no-repeat 50%}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__nav-button:hover{transform:scale(1.1);background-color:rgba(0,0,0,.3);opacity:1}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__nav-button--prev{visibility:hidden;left:-1.5em;display:flex;align-items:center}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__nav-button--prev:before{visibility:visible;transform:rotate(-180deg)}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__nav-button--next{right:-2em;visibility:hidden;display:flex;align-items:center}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__nav-button--next:before{visibility:visible}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__dots{bottom:10px;left:50%;position:absolute;transform:translate(-50%);display:flex;justify-content:space-between;z-index:4}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__dot{margin:0 10px;position:relative}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__dot button{border:none;background-color:hsla(0,0%,100%,.278431);border-radius:50%;cursor:pointer;display:block;height:10px;font-size:0;line-height:0;margin:0;padding:0;transition-duration:.3s;width:10px}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__dot:before{content:"";position:absolute;width:1.5em;height:1.5em;top:-6px;left:-6px;z-index:auto}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__dot--current button,.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile__dot:hover button{background-color:#fff}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile .slide{display:block;width:100%;height:25em;-o-object-fit:contain;object-fit:contain}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile .slide .videoThumb{width:100%;height:25em;overflow:hidden;position:relative;cursor:pointer}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile .slide .videoThumb img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%;max-width:none;max-height:none}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile .slide .videoThumb:before{content:"";display:inline-block;width:3em;height:3em;background:url('+f+") no-repeat 50%;background-size:100%;position:absolute;left:50%;top:50%;transform:translate(-1.5em,-1.5em);transition:.3s}.videoReview-wrapper .videoReview .videos-wrapper .bigVideos .agile .slide .videoThumb:hover:before{background:url("+m+') no-repeat 50%;background-size:100%}.videoReview-wrapper .videoReview .videos-wrapper .smallVideos{width:30%;display:flex;flex-direction:column;justify-content:space-between}.videoReview-wrapper .videoReview .videos-wrapper .smallVideos .videoThumb{width:100%;height:12em;overflow:hidden;position:relative;cursor:pointer}.videoReview-wrapper .videoReview .videos-wrapper .smallVideos .videoThumb img{-o-object-fit:cover;object-fit:cover;width:140%;height:100%;max-width:none;max-height:none}.videoReview-wrapper .videoReview .videos-wrapper .smallVideos .videoThumb:before{content:"";display:inline-block;width:3em;height:3em;background:url('+f+") no-repeat 50%;background-size:100%;position:absolute;left:50%;top:50%;transform:translate(-1.5em,-1.5em);transition:.3s}.videoReview-wrapper .videoReview .videos-wrapper .smallVideos .videoThumb:hover:before{background:url("+m+') no-repeat 50%;background-size:100%}.icon-youtube:before{width:4em;height:4em;content:"";display:inline-block;background:url('+f+") no-repeat 50%}.icon-youtube:hover{transform:scale(1.1)}",""]),e.exports=v},304:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgZmlsbD0id2hpdGUiLz4KPC9nPgo8cGF0aCBkPSJNMjggMjVMMzMgMzBMMjggMzQuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLW9wYWNpdHk9IjAuMjQiIHN0cm9rZS13aWR0aD0iMiIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo="},305:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNTA2LjcgMTQ1LjdzLTUuMy0zOC0yMC4zLTU0LjdjLTE5LjQtMjIuMS00MS41LTIyLjEtNTEuMi0yMy03MS41LTUuMy0xNzkuMi02LjItMTc5LjItNi4ycy0xMDcuNy45LTE3OS4yIDYuMmMtOS43LjktMzEuOCAxLjgtNTEuMiAyMy0xNS45IDE2LjctMjAuMyA1NC43LTIwLjMgNTQuN3MtNS4zIDQ1LTUuMyA5MHY0MS41YzAgNDUgNS4zIDg5LjIgNS4zIDg5LjJzNS4zIDM4IDIwLjMgNTQuN2MxOS40IDIyLjEgNDUgMjEuMiA1Ni41IDIzLjggNDAuNiA0LjQgMTczLjkgNS4zIDE3My45IDUuM3MxMDcuNyAwIDE3OS4yLTYuMmM5LjctLjkgMzEuOC0xLjggNTEuMi0yMyAxNS0xNi44IDIwLjMtNTQuNyAyMC4zLTU0LjdzNS4zLTQ1IDUuMy04OS4ydi00MS41YzAtNDQuOS01LjMtODkuOS01LjMtODkuOSIgb3BhY2l0eT0iLjY1Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5NC4yIDE2Ni44djE5MS42bDE2Ny43LTkzLjZ6Ii8+PC9zdmc+"},306:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNTA2LjcgMTQ1LjdzLTUuMy0zOC0yMC4zLTU0LjdjLTE5LjQtMjIuMS00MS41LTIyLjEtNTEuMi0yMy03MS41LTUuMy0xNzkuMi02LjItMTc5LjItNi4ycy0xMDcuNy45LTE3OS4yIDYuMmMtOS43LjktMzEuOCAxLjgtNTEuMiAyMy0xNS45IDE2LjctMjAuMyA1NC43LTIwLjMgNTQuN3MtNS4zIDQ1LTUuMyA5MHY0MS41YzAgNDUgNS4zIDg5LjIgNS4zIDg5LjJzNS4zIDM4IDIwLjMgNTQuN2MxOS40IDIyLjEgNDUgMjEuMiA1Ni41IDIzLjggNDAuNiA0LjQgMTczLjkgNS4zIDE3My45IDUuM3MxMDcuNyAwIDE3OS4yLTYuMmM5LjctLjkgMzEuOC0xLjggNTEuMi0yMyAxNS0xNi44IDIwLjMtNTQuNyAyMC4zLTU0LjdzNS4zLTQ1IDUuMy04OS4ydi00MS41YzAtNDQuOS01LjMtODkuOS01LjMtODkuOSIgb3BhY2l0eT0iLjg1IiBmaWxsPSIjZDgzNjJhIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5NC4yIDE2Ni44djE5MS42bDE2Ny43LTkzLjZ6Ii8+PC9zdmc+"},307:function(e,t,o){var content=o(318);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("03ce8e0b",content,!0,{sourceMap:!1})},310:function(e,t,o){"use strict";o.r(t);o(45),o(28),o(21),o(22),o(10),o(37);var r=o(15),n=o(46),d={1:"UhUDJVwHdSg",2:"R5LOsplXbis",3:"Eus21QKg3-k",4:"C4wDgRzRx78",5:"ULW3a7lF7fA",6:"_R3fYfAKqgg",7:"5cgKabB1Yk0",8:"n476BHlgAcA",9:"xIAqif7VyAY",10:"5p2V04dqmfw",11:"GjDJteqm1wA",12:"c_gHhxr7Hpw",13:"E1cKm-VuSPE",14:"njdz9YDUnE4",15:"QudDF2MyzYk",16:"AZZOOKOUONI",17:"M5TqfuiS46E",18:"aZhlVEd42Nc",19:"OK7l00bLfDk",20:"ckfAmqOZV38",21:"T6Ro-Gh7rrg"};function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"Video",data:function(){return{youtube:d}},methods:l(l({},Object(n.b)(["setModalShow"])),{},{selectVideo:function(e){return"https://img.youtube.com/vi/".concat(this.youtube[e],"/sddefault.jpg")},setVideoId:function(e){return"".concat(this.youtube[e])},showThisVideo:function(e){"IMG"===e.target.nodeName?this.setModalShow({modal:!0,id:e.target.id}):this.setModalShow({modal:!0,id:e.target.childNodes[0].id})}}),computed:l({},Object(n.d)(["modal_show"]))},h=(o(302),o(23)),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"videoReview-wrapper"},[o("div",{staticClass:"videoReview"},[o("h2",{staticClass:"blockTitle"},[e._v("Видеообзоры нашей продукции")]),e._v(" "),o("div",{staticClass:"videos-wrapper"},[o("div",{staticClass:"bigVideos"},[o("agile",{attrs:{slidesToShow:1,autoplay:!1}},[o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(1),alt:"you tube videos screen",id:e.setVideoId(1)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(2),alt:"you tube videos screen",id:e.setVideoId(2)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(3),alt:"you tube videos screen",id:e.setVideoId(3)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(4),alt:"you tube videos screen",id:e.setVideoId(4)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(5),alt:"you tube videos screen",id:e.setVideoId(5)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(6),alt:"you tube videos screen",id:e.setVideoId(6)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(7),alt:"you tube videos screen",id:e.setVideoId(7)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(8),alt:"you tube videos screen",id:e.setVideoId(8)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(9),alt:"you tube videos screen",id:e.setVideoId(9)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(10),alt:"you tube videos screen",id:e.setVideoId(10)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(11),alt:"you tube videos screen",id:e.setVideoId(11)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(12),alt:"you tube videos screen",id:e.setVideoId(12)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(13),alt:"you tube videos screen",id:e.setVideoId(13)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(14),alt:"you tube videos screen",id:e.setVideoId(14)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(15),alt:"you tube videos screen",id:e.setVideoId(15)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(16),alt:"you tube videos screen",id:e.setVideoId(16)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(17),alt:"you tube videos screen",id:e.setVideoId(17)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(18),alt:"you tube videos screen",id:e.setVideoId(18)}})])]),e._v(" "),o("div",{staticClass:"slide"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(19),alt:"you tube videos screen",id:e.setVideoId(19)}})])])])],1),e._v(" "),o("div",{staticClass:"smallVideos"},[o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(20),alt:"you tube videos screen",id:e.setVideoId(20)}})]),e._v(" "),o("div",{staticClass:"videoThumb",on:{click:e.showThisVideo}},[o("img",{attrs:{src:e.selectVideo(21),alt:"you tube videos screen",id:e.setVideoId(21)}})])])]),e._v(" "),e.modal_show?o("LazyVideoModal"):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports},311:function(e,t,o){"use strict";o.r(t);o(45),o(28),o(21),o(22),o(10),o(37);var r=o(15),n=o(218),d=o(46);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"Header",components:{LanguageChanger:n.default},methods:l({},Object(d.b)(["setTextConfig"])),computed:l({},Object(d.c)(["getHeaderText"]))},h=(o(235),o(23)),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header"},[o("div",{staticClass:"logo"}),e._v(" "),o("div",{staticClass:"menu"},[o("ul",{staticClass:"navigation"},[o("li",[o("a",{attrs:{href:"#aboutProducts"}},[e._v(e._s(e.getHeaderText.aboutProduct))])]),e._v(" "),o("li",[o("a",{attrs:{href:"#advantages"}},[e._v(e._s(e.getHeaderText.advantages))])]),e._v(" "),o("li",[o("a",{attrs:{href:"#review"}},[e._v(e._s(e.getHeaderText.review))])]),e._v(" "),o("li",[o("a",{attrs:{href:"#cooperation"}},[e._v(e._s(e.getHeaderText.cooperation))])])]),e._v(" "),o("div",{staticClass:"additional"},[o("LanguageChanger",{staticClass:"select",attrs:{options:["ру","укр"],default:"ру"},on:{input:function(t){return e.setTextConfig(t)}}})],1)])])}),[],!1,null,"560adce5",null);t.default=component.exports;installComponents(component,{LanguageChanger:o(218).default})},312:function(e,t,o){"use strict";o.r(t);o(45),o(28),o(21),o(22),o(10),o(37);var r=o(15),n=o(46);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var c={name:"Ads",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)(["getAdsText","getButtonText"]))},l=(o(242),o(23)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ads"},[r("agile",{attrs:{autoplay:!0,"autoplay-speed":5e3,"pause-on-hover":!0,speed:500}},[r("div",{staticClass:"slide"},[r("img",{staticClass:"image",attrs:{src:o(238),alt:"kitchen"}})]),e._v(" "),r("div",{staticClass:"slide"},[r("img",{staticClass:"image",attrs:{src:o(239),alt:"kitchen"}})]),e._v(" "),r("div",{staticClass:"slide"},[r("img",{staticClass:"image",attrs:{src:o(240),alt:"kitchen"}})]),e._v(" "),r("div",{staticClass:"slide"},[r("img",{staticClass:"image",attrs:{src:o(241),alt:"kitchen"}})])]),e._v(" "),r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content"},[r("p",{staticClass:"title"},[e._v("\n\t\t\t\t"+e._s(e.getAdsText.aboutUs)+"\n\t\t\t")]),e._v(" "),r("a",{staticClass:"button",attrs:{href:""}},[e._v(e._s(e.getButtonText.contactUs))])])])],1)}),[],!1,null,null,null);t.default=component.exports},316:function(e,t,o){"use strict";o.r(t);o(45),o(28),o(21),o(22),o(10),o(37);var r=o(15),n=o(46);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var c={name:"Advantages",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)(["getAdvantagesText","getButtonText"]))},l=(o(295),o(23)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"advantages-wrapper",attrs:{id:"advantages"}},[o("div",{staticClass:"advantages"},[o("div",{staticClass:"advantagesHeader"},[o("h2",{staticClass:"advantagesTitle"},[e._v(e._s(e.getAdvantagesText.title))]),e._v(" "),o("div",{staticClass:"advantagesDivider"})]),e._v(" "),o("div",{staticClass:"advantagesMain"},[o("div",{staticClass:"advantage"},[o("i",{staticClass:"icon-heart"}),e._v(" "),o("p",[e._v(e._s(e.getAdvantagesText.text1))])]),e._v(" "),o("div",{staticClass:"advantage"},[o("i",{staticClass:"icon-guard"}),e._v(" "),o("p",[e._v(e._s(e.getAdvantagesText.text2))])]),e._v(" "),o("div",{staticClass:"advantage"},[o("i",{staticClass:"icon-location"}),e._v(" "),o("p",[e._v(e._s(e.getAdvantagesText.text3))])]),e._v(" "),o("div",{staticClass:"advantage"},[o("i",{staticClass:"icon-part"}),e._v(" "),o("p",[e._v(e._s(e.getAdvantagesText.text4))])]),e._v(" "),o("div",{staticClass:"advantage"},[o("i",{staticClass:"icon-rocket"}),e._v(" "),o("p",[e._v(e._s(e.getAdvantagesText.text5))])])]),e._v(" "),o("a",{staticClass:"button",attrs:{href:""}},[e._v(e._s(e.getButtonText.contactUs))])])])}),[],!1,null,null,null);t.default=component.exports},317:function(e,t,o){"use strict";o(307)},318:function(e,t,o){var r=o(54),n=o(143),d=o(231),c=r(!1),l=n(d);c.push([e.i,'.dot{height:300px;background:#faebd7}.dot:first-child{background:#fff}.blockTitle{color:#362d5f;font-family:StratosLCWeb-Bold,Arial,sans-serif;font-size:3em;line-height:1.4em}.blockTitleWhite{color:#fff}.callback{width:4em;height:4em;border-radius:3em;background:rgba(54,45,95,.101961);position:fixed;bottom:3em;right:3em;cursor:pointer;mix-blend-mode:multiply;z-index:99}.callback:after{content:"";background:url('+l+") 50% no-repeat;width:3em;height:3em;position:absolute;left:.5em;top:.5em;transition:.3s}.callback:hover{background:rgba(54,45,95,.4);mix-blend-mode:hard-light}.callback:hover:after{transform:rotate(-90deg)}",""]),e.exports=c},326:function(e,t,o){"use strict";o.r(t);o(45),o(28),o(21),o(22),o(10),o(37);var r=o(15),n=o(46);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={name:"_main",computed:c({},Object(n.d)(["modal_show"])),methods:c({},Object(n.b)(["setTextConfig"]))},v=(o(317),o(23)),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("Header"),e._v(" "),o("Ads"),e._v(" "),o("Brands"),e._v(" "),o("Advantages"),e._v(" "),o("Video"),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("a",{staticClass:"callback",attrs:{href:"tel:11111"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:o(311).default,Ads:o(312).default,Brands:o(325).default,Advantages:o(316).default,Video:o(310).default})}}]);