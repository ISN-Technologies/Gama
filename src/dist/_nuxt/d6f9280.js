(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{153:function(t,e,n){"use strict";var r={name:"NavBar",data:function(){return{mobileToggle:!1}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-area header-3-area"},[t._m(0),t._v(" "),n("div",{staticClass:"main-header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"main-header-item"},[n("div",{staticClass:"main-header-menus  d-flex justify-content-between align-items-center"},[t._m(1),t._v(" "),n("div",{staticClass:"toggle-btn ml-30 canvas_open"},[n("i",{staticClass:"fa fa-bars",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}})]),t._v(" "),n("div",{staticClass:"header-menu d-none d-lg-block"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])]),t._v(" "),n("div",{class:"offcanvas_menu_wrapper "+(t.mobileToggle?"active":"")},[n("div",{staticClass:"canvas_close"},[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[n("i",{staticClass:"fa fa-times"})])]),t._v(" "),n("div",{staticClass:"text-left ",attrs:{id:"menu"}},[n("ul",{staticClass:"offcanvas_main_menu"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-top-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"header-top-item"},[e("div",{staticClass:"header-info"},[e("ul",[e("li",[e("a",{attrs:{href:"mailto:info@gama.co.tz?subject=Mail from  our Website"}},[e("i",{staticClass:"flaticon-email-2"}),this._v(" info@gama.co.tz")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"flaticon-call"}),this._v("+255 71 564 4006")])])])]),this._v(" "),e("div",{staticClass:"social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://facebook.com/gamainctz"}},[e("i",{staticClass:"fa fa-facebook-f"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/gamainctz"}},[e("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://instagram.com/gamainctz"}},[e("i",{staticClass:"fa fa-instagram"})])])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:"/assets/images/logo-corporate.png",alt:""}})])])}],!1,null,"b21f4c42",null);e.a=component.exports},155:function(t,e,n){"use strict";var r={name:"FooterTwo",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{staticClass:"footer-area"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"footer-copyright align-items-left"},[n("p",[t._v("© Copyright "+t._s((new Date).getFullYear())+" Gama Incorporation Ltd. All rights reserved.")])])])]),t._v(" "),n("div",{staticClass:"go-top-area"},[n("div",{staticClass:"go-top-wrap"},[n("div",{staticClass:"go-top-btn-wrap"},[n("div",{class:"go-top go-top-btn "+(t.scrollBtn?"active":""),on:{click:t.scrollTop}},[n("i",{staticClass:"fa fa-angle-double-up"}),t._v(" "),n("i",{staticClass:"fa fa-angle-double-up"})])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-main"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-6"},[n("div",{staticClass:"footer-widget mt-30"},[n("div",{staticClass:"footer-title pb-30"},[n("img",{attrs:{src:"/assets/images/logo-4.png",alt:"gama"}})]),t._v(" "),n("div",{staticClass:"footer-about-content"},[n("p",[t._v("Gama Incorporation Ltd")]),t._v(" "),n("p",[t._v("1 Nyalali Curve Masaki,"),n("br"),t._v(" Dar es Salaam, Tanzania")]),t._v(" "),n("div",{staticClass:"email"},[n("a",{attrs:{href:"mailto:info@gama.co.tz?subject=Mail from  our Website"}},[t._v("info@gama.co.tz")])]),t._v(" "),n("div",{staticClass:"call"},[n("a",{attrs:{href:"tel:+255715644006"}},[t._v("+255 71 564 4006")])])])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[n("div",{staticClass:"footer-widget mt-30 ml-30"},[n("div",{staticClass:"footer-title pb-20"},[n("h4",{staticClass:"title"},[t._v("Useful Links")])]),t._v(" "),n("div",{staticClass:"footer-about-list d-flex"},[n("ul",{staticClass:"mr-70"},[n("li",[n("a",{attrs:{href:"/"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" Home")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/about"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" About")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" Products")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/contact"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" Contact")])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[n("div",{staticClass:"footer-widget mt-30 ml-30"},[n("div",{staticClass:"footer-title pb-20"},[n("h4",{staticClass:"title"},[t._v("Resources")])]),t._v(" "),n("div",{staticClass:"footer-about-list d-flex"},[n("ul",{staticClass:"mr-70"},[n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" Services & Warranty")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" Return Policy")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" Shipping & Delivery")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" Secure Payment")])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 col-sm-7"},[n("div",{staticClass:"footer-widget footer-news mt-30"},[n("div",{staticClass:"footer-title pb-40"},[n("h4",{staticClass:"title"},[t._v("Let's Connect")])]),t._v(" "),n("div",{staticClass:"footer-news-content"},[n("div",{staticClass:"news-item d-flex align-items-left"},[n("div",{staticClass:"news-item-content"},[n("p",[t._v("We are available on these platforms")])])]),t._v(" "),n("div",{staticClass:"news-item d-flex align-items-center mt-20 social"},[n("ul",[n("li",[n("a",{attrs:{href:"https://facebook.com/gamainctz"}},[n("i",{staticClass:"fa fa-facebook-f"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/gamainctz"}},[n("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://instagram.com/gamainctz"}},[n("i",{staticClass:"fa fa-instagram"})])])])])])])])])])}],!1,null,"8f20e9a8",null);e.a=component.exports},158:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!o);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},159:function(t,e,n){"use strict";(function(t){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return f}));var c=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.observer=null,this.frozen=!1,this.createObserver(n,r)}var e,n,r;return e=t,(n=[{key:"createObserver",value:function(t,e){var n=this;if(this.observer&&this.destroyObserver(),!this.frozen){var r;if(this.options="function"==typeof(r=t)?{callback:r}:r,this.callback=function(t,e){n.options.callback(t,e),t&&n.options.once&&(n.frozen=!0,n.destroyObserver())},this.callback&&this.options.throttle){var o=(this.options.throttleOptions||{}).leading;this.callback=function(t,e){var n,r,o,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},d=function(d){for(var v=arguments.length,f=new Array(v>1?v-1:0),h=1;h<v;h++)f[h-1]=arguments[h];if(o=f,!n||d!==r){var m=c.leading;"function"==typeof m&&(m=m(d,r)),n&&d===r||!m||t.apply(void 0,[d].concat(l(o))),r=d,clearTimeout(n),n=setTimeout((function(){t.apply(void 0,[d].concat(l(o))),n=0}),e)}};return d._clear=function(){clearTimeout(n),n=null},d}(this.callback,this.options.throttle,{leading:function(t){return"both"===o||"visible"===o&&t||"hidden"===o&&!t}})}this.oldResult=void 0,this.observer=new IntersectionObserver((function(t){var e=t[0];if(t.length>1){var r=t.find((function(t){return t.isIntersecting}));r&&(e=r)}if(n.callback){var o=e.isIntersecting&&e.intersectionRatio>=n.threshold;if(o===n.oldResult)return;n.oldResult=o,n.callback(o,e)}}),this.options.intersection),e.context.$nextTick((function(){n.observer&&n.observer.observe(n.el)}))}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&this.options.intersection.threshold||0}}])&&o(e.prototype,n),r&&o(e,r),t}();function d(t,e,n){var r=e.value;if(r)if("undefined"==typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var o=new c(t,r,n);t._vue_visibilityState=o}}function v(t){var e=t._vue_visibilityState;e&&(e.destroyObserver(),delete t._vue_visibilityState)}var f={bind:d,update:function(t,e,n){var o=e.value;if(!function t(e,n){if(e===n)return!0;if("object"===r(e)){for(var o in e)if(!t(e[o],n[o]))return!1;return!0}return!1}(o,e.oldValue)){var l=t._vue_visibilityState;o?l?l.createObserver(o,n):d(t,{value:o},n):v(t)}},unbind:v};var h={version:"0.4.6",install:function(t){t.directive("observe-visibility",f)}},m=null;"undefined"!=typeof window?m=window.Vue:void 0!==t&&(m=t.Vue),m&&m.use(h)}).call(this,n(27))},168:function(t,e,n){"use strict";n.r(e);var r=n(155),o=n(105),l={name:"AboutPage"},c=n(7),d=Object(c.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-area about-page"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"about-main-content"},[n("div",{staticClass:"about-title"},[n("h3",{staticClass:"title"},[t._v("Get to Know Us. ")]),t._v(" "),n("p",[t._v("\n              We are an Innovative tech firm that deals with designing and assembling electronic products.\n              We offer technology solutions in the manufacturing of electronics and networking equipment.\n            ")]),t._v(" "),n("p",[t._v("\n              We,ve managed to design and assemble the best and affordable electronic devices\n              including pre-paid energy meters, networking devices, computers, POS solutions and much more.\n            ")])]),t._v(" "),n("div",{staticClass:"about-btns mt-60 d-block d-sm-flex  align-items-center"},[n("a",{staticClass:"main-btn",attrs:{href:"/Gama Company Profile 2021.pdf",target:"_blank"}},[t._v("Download our Profile")])])])]),t._v(" "),n("div",{staticClass:"col-lg-5"},[n("div",{staticClass:"about-right-content"},[n("div",{staticClass:"about-thumb animated wow fadeInRight",attrs:{"data-wow-duration":"1500ms","data-wow-delay":"0ms"}},[n("img",{attrs:{src:"/assets/images/ab.jpg",alt:""}})])])])])]),t._v(" "),n("div",{staticClass:"shape"},[n("img",{attrs:{src:"/assets/images/shape/shape-13.png",alt:""}})])])}],!1,null,"ee7dc23e",null).exports,v=n(153),f={name:"WhyUs"},h=Object(c.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"industri-services-area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"services-title text-center"},[n("h3",{staticClass:"title"},[t._v("Why we Stand Out")])])])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-4 col-md-6 col-sm-9"},[n("div",{staticClass:"services-item mt-30"},[n("div",{staticClass:"services-thumb"},[n("img",{attrs:{src:"/assets/images/what.jpeg",alt:""}})]),t._v(" "),n("div",{staticClass:"services-content"},[n("h4",{staticClass:"title"},[t._v("What We Do")]),t._v(" "),n("p",[t._v("\n                At Gama™ we are dedicated to finding the right solution, using the right technology, for the right client.\n                This includes getting to know you (our client) better and define the best, innovative custom solution for you.\n              ")])])])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-6 col-sm-9"},[n("div",{staticClass:"services-item mt-30"},[n("div",{staticClass:"services-thumb"},[n("img",{attrs:{src:"/assets/images/what1.jpeg",alt:""}})]),t._v(" "),n("div",{staticClass:"services-content"},[n("h4",{staticClass:"title"},[t._v("How we Do It")]),t._v(" "),n("p",[t._v("\n                We employ proven technologies to offer quality products and services.\n                From discovering your unique pain spots, developing a product roadmap to promoting a relationship with you,\n                YOU are top of mind every step of the way.\n              ")])])])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-md-6 col-sm-9"},[n("div",{staticClass:"services-item mt-30"},[n("div",{staticClass:"services-thumb"},[n("img",{attrs:{src:"/assets/images/what2.jpeg",alt:""}})]),t._v(" "),n("div",{staticClass:"services-content"},[n("h4",{staticClass:"title"},[t._v("Why we Do What we Do")]),t._v(" "),n("p",[t._v("\n                We are proud of our commitment and delivery of our core values and our day-to-day services to our clients.\n                Our goal is to provide quality products and services to our customers and to do so with integrity, honour and team work.\n              ")])])])])])])])}],!1,null,"6f0c7979",null).exports,m=n(158),_=n.n(m),C=n(159),w={name:"Stats",components:{countTo:_.a},directives:{ObserveVisibility:C.a},data:function(){return{startCounter:!1}},methods:{onVisibilityChange:function(t){t&&(this.startCounter=!0)}}},y=Object(c.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onVisibilityChange,expression:"onVisibilityChange"}],staticClass:"stats-area bg_cover",staticStyle:{"background-image":"url(/assets/images/ban.jpg)"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"stats-item d-block d-md-flex justify-content-between align-items-center"},[n("div",{staticClass:"item animated wow fadeInUp",attrs:{"data-wow-duration":"1500ms","data-wow-delay":"0ms"}},[n("h3",{staticClass:"title odometer"},[n("countTo",{attrs:{startVal:0,endVal:t.startCounter?20:0,duration:3e3}})],1),t._v(" "),n("p",[t._v("Products")])]),t._v(" "),n("div",{staticClass:"item animated wow fadeInUp",attrs:{"data-wow-duration":"1500ms","data-wow-delay":"300ms"}},[n("h3",{staticClass:"title odometer"},[n("countTo",{attrs:{startVal:0,endVal:t.startCounter?100:0,duration:3e3}})],1),t._v(" "),n("p",[t._v("Clients are happy and satisfied")])])])])])])])}),[],!1,null,"caf694ce",null).exports,k={name:"OurMission"},V={components:{OurMission:Object(c.a)(k,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ourmission-area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"ourmission-item"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"ourmission-content"},[n("h6",{staticClass:"title"},[t._v(" Our Mission ")]),t._v(" "),n("p",[t._v("\n                    Deliver the best solutions in the technology industry by developing high quality products to solve technological problems.\n                  ")]),t._v(" "),n("ul",[n("li",[n("i",{staticClass:"fa fa-check-circle"}),t._v(" Quality Products. ")]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check-circle"}),t._v(" Best Warranty Plans. ")]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check-circle"}),t._v(" After-Sales Services. ")])]),t._v(" "),n("div",{staticClass:"skills"},[n("div",{staticClass:"skill-item"},[n("div",{staticClass:"skill-header"},[n("h3",{staticClass:"skill-title"},[t._v("Top Quality")])]),t._v(" "),n("div",{staticClass:"skill-bar"},[n("div",{staticClass:"bar-inner"},[n("div",{staticClass:"bar bar1 progress-line",attrs:{"data-width":"100"}})])])]),t._v(" "),n("div",{staticClass:"skill-item"},[n("div",{staticClass:"skill-header"},[n("h3",{staticClass:"skill-title"},[t._v("Reliable")])]),t._v(" "),n("div",{staticClass:"skill-bar"},[n("div",{staticClass:"bar-inner"},[n("div",{staticClass:"bar bar2 progress-line",attrs:{"data-width":"100"}})])])])])])])])])])])])])}],!1,null,"708c3552",null).exports,Stats:y,WhyUs:h,NavBar:v.a,AboutPage:d,PageHeader:o.a,FooterTwo:r.a},head:function(){return{title:"Gama | About Us"}}},A=Object(c.a)(V,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavBar"),this._v(" "),e("PageHeader",{attrs:{title:"About Us"}}),this._v(" "),e("AboutPage"),this._v(" "),e("WhyUs"),this._v(" "),e("Stats"),this._v(" "),e("OurMission"),this._v(" "),e("FooterTwo")],1)}),[],!1,null,null,null);e.default=A.exports}}]);