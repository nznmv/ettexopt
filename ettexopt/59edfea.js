(window.webpackJsonp=window.webpackJsonp||[]).push([[8,10],{219:function(e,t,o){var content=o(236);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("56f324b9",content,!0,{sourceMap:!1})},220:function(e,t,o){"use strict";o.r(t);o(45),o(28),o(21),o(22),o(10),o(37);var r=o(15),n=(o(18),o(46)),c=o(53),m=o.n(c);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var f={name:"Form",data:function(){return{email:"",name:"",phone:"",message:"",isSuccess:!1}},methods:{onSubmit:function(){var e=this,data={name:this.name,email:this.email,phone:this.phone,message:this.message};m.a.post("https://formsubmit.co/157b55c2d6b2d2863b004bc3bdb69141",data).then((function(t){e.isSuccess=200===t.status}),(function(e){}))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)(["getCoopText"]))},d=(o(235),o(23)),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"form",attrs:{method:"POST","accept-charset":"UTF-8",id:"ajaxForm"},on:{submit:function(t){return t.preventDefault(),e.onSubmit()}}},[o("p",{staticClass:"formTitle"},[e._v(e._s(e.getCoopText.formTitle))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:e.getCoopText.formName,required:"",name:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:e.getCoopText.formEmail,name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"input",attrs:{type:"tel",placeholder:e.getCoopText.formPhone,required:"",name:"phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"input textarea",attrs:{type:"text",placeholder:e.getCoopText.formText,required:"",name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),e.isSuccess?o("div",{staticClass:"success"},[o("i",{staticClass:"icon-done"}),e._v(" "),o("p",{staticClass:"successText"},[e._v(e._s(e.getCoopText.formSuccess))])]):e._e(),e._v(" "),e.isSuccess?e._e():o("button",{staticClass:"buttonSubmit",attrs:{type:"submit"}},[e._v("\n\t\t"+e._s(e.getCoopText.formButton)+"\n\t")])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Form:o(220).default})},234:function(e,t,o){var content=o(315);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("3d187d71",content,!0,{sourceMap:!1})},235:function(e,t,o){"use strict";o(219)},236:function(e,t,o){var r=o(54),n=o(143),c=o(237),m=r(!1),l=n(c);m.push([e.i,'.form{display:flex;flex-direction:column;justify-content:space-evenly;padding:2em 0 6em;align-items:center;height:35em;width:35.5em;background:#fff;position:relative;bottom:-5em}.form .formTitle{font-size:1.25em;color:rgba(54,45,95,.4);text-transform:uppercase;letter-spacing:.1em;position:absolute;top:1em;left:1em}.form .formTitle,.form .input{font-family:StratosLCWeb-Regular,Arial,sans-serif;line-height:1.35em}.form .input{border:none;border-bottom:1px solid rgba(54,45,95,.4);width:90%;font-size:1.125em;outline:none}.form .success{width:100%;height:100%;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;background:#fff}.form .successText{max-width:80%;color:#362d5f;text-align:center;font-family:StratosLCWeb-Regular,Arial,sans-serif;font-size:1.5em;line-height:1.5em;z-index:2}.form .success .icon-done{position:absolute;bottom:2em;z-index:1}.form .success .icon-done:before{width:7em;height:7em;content:"";display:inline-block;background:url('+l+") no-repeat 50%}.form .success .icon-done:hover{transform:scale(1.1)}.form .buttonSubmit{margin-top:0;position:absolute;bottom:3em;right:0;transform:translate(20%);border:none;outline:none}.form .textarea{max-width:90%;min-width:90%;max-height:9em;min-height:3em}",""]),e.exports=m},237:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMjM0LjcgNDkwLjNDMTA1LjMgNDkwLjMgMCAzODUuMSAwIDI1NS43UzEwNS4zIDIxIDIzNC43IDIxYzQ1IDAgODguOCAxMi44IDEyNi42IDM3LjEgNy40IDQuOCA5LjYgMTQuNyA0LjggMjIuMVMzNTEuNCA4OS44IDM0NCA4NWMtMzIuNi0yMS03MC40LTMyLTEwOS4zLTMyQzEyMi45IDUzIDMyIDE0My45IDMyIDI1NS43YzAgMTExLjcgOTAuOSAyMDIuNyAyMDIuNyAyMDIuNyAxMTEuNyAwIDIwMi43LTkwLjkgMjAyLjctMjAyLjcgMC02LjctLjMtMTMuMy0uOS0xOS44LS45LTguOCA1LjYtMTYuNiAxNC40LTE3LjUgOC44LS44IDE2LjYgNS42IDE3LjUgMTQuNC43IDcuNSAxLjEgMTUuMiAxLjEgMjIuOS0uMiAxMjkuNC0xMDUuNSAyMzQuNi0yMzQuOCAyMzQuNnpNMjYxLjMgMzA5Yy00LjEgMC04LjItMS42LTExLjMtNC43bC05Ni05NmMtNi4yLTYuMy02LjItMTYuNCAwLTIyLjZzMTYuNC02LjIgMjIuNiAwbDg0LjcgODQuN0w0ODQuNyA0N2M2LjMtNi4yIDE2LjQtNi4yIDIyLjYgMHM2LjIgMTYuNCAwIDIyLjZMMjcyLjcgMzA0LjNjLTMuMiAzLjEtNy4zIDQuNy0xMS40IDQuN3oiIGZpbGw9IiM1OTU2NzUiLz48aW1hZ2Ugd2lkdGg9IjIyNiIgaGVpZ2h0PSIxNjgiIHhsaW5rOmhyZWY9IkE1MDcxMDZDMTQ5QTQwMjgucG5nIiB0cmFuc2Zvcm09Im1hdHJpeCguNSAwIDAgLjUgLTE3Ny41IDE4MC4yNTIpIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvc3ZnPg=="},314:function(e,t,o){"use strict";o(234)},315:function(e,t,o){var r=o(54),n=o(143),c=o(316),m=r(!1),l=n(c);m.push([e.i,'.coop-wrapper{width:100vw;height:39em;background:#595675}.coop-wrapper .coop{max-width:68.75em;height:100%;margin:0 auto;display:flex;justify-content:space-between;align-items:center;position:relative}.coop-wrapper .coop .coopText{width:50%}.coop-wrapper .coop .coopText .coopTextParagraph{color:#fff;font-family:StratosLCWeb-Regular,Arial,sans-serif;font-size:1.5em;line-height:1.5em;text-align:left;max-width:19em;margin-top:2em}.coop-wrapper .coop .coopText .icon-logoWhite{position:absolute;bottom:-4.8em;left:0}.coop-wrapper .coop .coopText .icon-logoWhite:before{width:10em;height:10em;content:"";display:inline-block;background:url('+l+") no-repeat 50%}.coop-wrapper .coop .coopText .icon-logoWhite:hover{transform:scale(1.1)}.coop-wrapper .coop .coopForm{width:50%}",""]),e.exports=m},316:function(e,t,o){e.exports=o.p+"img/logo-white.ae081a6.svg"},331:function(e,t,o){"use strict";o.r(t);o(45),o(28),o(21),o(22),o(10),o(37);var r=o(15),n=o(46);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var m={name:"Cooperation",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)(["getCoopText"]))},l=(o(314),o(23)),component=Object(l.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"coop-wrapper",attrs:{id:"cooperation"}},[o("div",{staticClass:"coop"},[o("div",{staticClass:"coopText"},[o("h2",{staticClass:"blockTitleWhite"},[e._v(" "+e._s(e.getCoopText.title))]),e._v(" "),o("p",{staticClass:"coopTextParagraph"},[e._v(e._s(e.getCoopText.text))]),e._v(" "),o("i",{staticClass:"icon-logoWhite"})]),e._v(" "),o("div",{staticClass:"coopForm"},[o("Form")],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Form:o(220).default})}}]);