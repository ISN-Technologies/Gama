(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(t,e,l){"use strict";var c={name:"NavBar",data:function(){return{mobileToggle:!1}}},o=l(7),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header-area header-3-area"},[t._m(0),t._v(" "),l("div",{staticClass:"main-header"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"main-header-item"},[l("div",{staticClass:"main-header-menus  d-flex justify-content-between align-items-center"},[t._m(1),t._v(" "),l("div",{staticClass:"toggle-btn ml-30 canvas_open"},[l("i",{staticClass:"fa fa-bars",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}})]),t._v(" "),l("div",{staticClass:"header-menu d-none d-lg-block"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])]),t._v(" "),l("div",{class:"offcanvas_menu_wrapper "+(t.mobileToggle?"active":"")},[l("div",{staticClass:"canvas_close"},[l("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[l("i",{staticClass:"fa fa-times"})])]),t._v(" "),l("div",{staticClass:"text-left ",attrs:{id:"menu"}},[l("ul",{staticClass:"offcanvas_main_menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-top-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"header-top-item"},[e("div",{staticClass:"header-info"},[e("ul",[e("li",[e("a",{attrs:{href:"mailto:info@gama.co.tz?subject=Mail from  our Website"}},[e("i",{staticClass:"flaticon-email-2"}),this._v(" info@gama.co.tz")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"flaticon-call"}),this._v("+255 71 564 4006")])])])]),this._v(" "),e("div",{staticClass:"social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://facebook.com/gamainctz"}},[e("i",{staticClass:"fa fa-facebook-f"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/gamainctz"}},[e("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://instagram.com/gamainctz"}},[e("i",{staticClass:"fa fa-instagram"})])])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:"/assets/images/logo-corporate.png",alt:""}})])])}],!1,null,"b21f4c42",null);e.a=component.exports},155:function(t,e,l){"use strict";var c={name:"FooterTwo",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},o=l(7),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("footer",{staticClass:"footer-area"},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"footer-copyright align-items-left"},[l("p",[t._v("© Copyright "+t._s((new Date).getFullYear())+" Gama Incorporation Ltd. All rights reserved.")])])])]),t._v(" "),l("div",{staticClass:"go-top-area"},[l("div",{staticClass:"go-top-wrap"},[l("div",{staticClass:"go-top-btn-wrap"},[l("div",{class:"go-top go-top-btn "+(t.scrollBtn?"active":""),on:{click:t.scrollTop}},[l("i",{staticClass:"fa fa-angle-double-up"}),t._v(" "),l("i",{staticClass:"fa fa-angle-double-up"})])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-main"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-3 col-md-6"},[l("div",{staticClass:"footer-widget mt-30"},[l("div",{staticClass:"footer-title pb-30"},[l("img",{attrs:{src:"/assets/images/logo-4.png",alt:"gama"}})]),t._v(" "),l("div",{staticClass:"footer-about-content"},[l("p",[t._v("Gama Incorporation Ltd")]),t._v(" "),l("p",[t._v("1 Nyalali Curve Masaki,"),l("br"),t._v(" Dar es Salaam, Tanzania")]),t._v(" "),l("div",{staticClass:"email"},[l("a",{attrs:{href:"mailto:info@gama.co.tz?subject=Mail from  our Website"}},[t._v("info@gama.co.tz")])]),t._v(" "),l("div",{staticClass:"call"},[l("a",{attrs:{href:"tel:+255715644006"}},[t._v("+255 71 564 4006")])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[l("div",{staticClass:"footer-widget mt-30 ml-30"},[l("div",{staticClass:"footer-title pb-20"},[l("h4",{staticClass:"title"},[t._v("Useful Links")])]),t._v(" "),l("div",{staticClass:"footer-about-list d-flex"},[l("ul",{staticClass:"mr-70"},[l("li",[l("a",{attrs:{href:"/"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Home")])]),t._v(" "),l("li",[l("a",{attrs:{href:"/about"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" About")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Products")])]),t._v(" "),l("li",[l("a",{attrs:{href:"/contact"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Contact")])])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[l("div",{staticClass:"footer-widget mt-30 ml-30"},[l("div",{staticClass:"footer-title pb-20"},[l("h4",{staticClass:"title"},[t._v("Resources")])]),t._v(" "),l("div",{staticClass:"footer-about-list d-flex"},[l("ul",{staticClass:"mr-70"},[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Services & Warranty")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Return Policy")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Shipping & Delivery")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Secure Payment")])])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-7"},[l("div",{staticClass:"footer-widget footer-news mt-30"},[l("div",{staticClass:"footer-title pb-40"},[l("h4",{staticClass:"title"},[t._v("Let's Connect")])]),t._v(" "),l("div",{staticClass:"footer-news-content"},[l("div",{staticClass:"news-item d-flex align-items-left"},[l("div",{staticClass:"news-item-content"},[l("p",[t._v("We are available on these platforms")])])]),t._v(" "),l("div",{staticClass:"news-item d-flex align-items-center mt-20 social"},[l("ul",[l("li",[l("a",{attrs:{href:"https://facebook.com/gamainctz"}},[l("i",{staticClass:"fa fa-facebook-f"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://twitter.com/gamainctz"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://instagram.com/gamainctz"}},[l("i",{staticClass:"fa fa-instagram"})])])])])])])])])])}],!1,null,"8f20e9a8",null);e.a=component.exports},169:function(t,e,l){"use strict";l.r(e);var c=l(155),o=l(105),n={name:"ContactPage"},r=l(7),v=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"conatct-area pb-115"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-5"},[l("div",{staticClass:"conatct-info"},[l("h3",{staticClass:"title"},[t._v("Get In Touch")]),t._v(" "),l("p",[t._v("Interested in doing business with us? We've made it simple for you to reach us.")])]),t._v(" "),l("div",{staticClass:"conatct-info-item"},[l("div",{staticClass:"item"},[l("i",{staticClass:"flaticon-email"}),t._v(" "),l("span",[t._v("Email")]),t._v(" "),l("p",[t._v("info@gama.co.tz")])]),t._v(" "),l("div",{staticClass:"item center"},[l("i",{staticClass:"flaticon-calling"}),t._v(" "),l("span",[t._v("Phone")]),t._v(" "),l("p",[t._v("+255 71 564 4006")])]),t._v(" "),l("div",{staticClass:"item"},[l("i",{staticClass:"flaticon-address"}),t._v(" "),l("span",[t._v("Visit")]),t._v(" "),l("p",[t._v("1 Nyalali Curve Masaki,"),l("br"),t._v(" Dar Es Salaam. Tanzania")])])])]),t._v(" "),l("div",{staticClass:"col-lg-7"},[l("div",{staticClass:"comment-form"},[l("form",{staticClass:"contact-one__form",attrs:{action:"#",method:"POST",id:"contact-form"}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"input-box"},[l("input",{attrs:{type:"text",placeholder:"Your name",name:"name"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"input-box"},[l("input",{attrs:{type:"email",placeholder:"Email Address",name:"email"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"input-box"},[l("input",{attrs:{type:"text",placeholder:"Phone number",name:"number"}})])]),t._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"input-box"},[l("input",{attrs:{type:"text",placeholder:"Subject",name:"subject"}})])]),t._v(" "),l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"input-box"},[l("textarea",{attrs:{placeholder:"Write Message",name:"message"}})])]),t._v(" "),l("div",{staticClass:"col-lg-12 text-left"},[l("div",{staticClass:"input-box"},[l("button",{staticClass:"main-btn",attrs:{type:"submit"}},[t._v("Send us a Message")])])])])]),t._v(" "),l("p",{staticClass:"form-message"})])])])])])}],!1,null,"383c9dc0",null).exports,f={components:{NavBar:l(153).a,ContactPage:v,PageHeader:o.a,FooterTwo:c.a},head:function(){return{title:"Gama | Contact Us"}}},d=Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavBar"),this._v(" "),e("PageHeader",{attrs:{title:"Contact us"}}),this._v(" "),e("ContactPage"),this._v(" "),e("FooterTwo")],1)}),[],!1,null,null,null);e.default=d.exports}}]);