(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{438:function(e,t,o){"use strict";o.r(t);var n=o(4),a=o.n(n),s={data:function(){return{name:"",email:"",password:"",password_confirmation:""}},methods:{goBack:function(){this.$router.go(-1)},register:function(){var e=this;a.a.post("/api/register",{name:e.name,email:e.email,password:e.password,password_confirmation:e.password_confirmation}).then((function(t){e.name="",e.email="",e.password="",e.password_confirmation="",console.log(t),e.$router.push({path:"/login"})})).catch((function(e){console.log(e)}))}}},r=o(3),c=Object(r.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"d-flex align-items-center min-vh-100"},[o("CContainer",{attrs:{fluid:""}},[o("CRow",{staticClass:"justify-content-center"},[o("CCol",{attrs:{md:"6"}},[o("CCard",{staticClass:"mx-4 mb-0"},[o("CCardBody",{staticClass:"p-4"},[o("CForm",{attrs:{method:"POST"},on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[o("h1",[e._v("Register")]),e._v(" "),o("p",{staticClass:"text-muted"},[e._v("Create your account")]),e._v(" "),o("CInput",{attrs:{placeholder:"Username",prependHtml:"<i class='cui-user'></i>",autocomplete:"username"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),o("CInput",{attrs:{placeholder:"Email",prepend:"@",autocomplete:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),o("CInput",{attrs:{placeholder:"Password",type:"password",prependHtml:"<i class='cui-lock-locked'></i>",autocomplete:"new-password"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),o("CInput",{staticClass:"mb-4",attrs:{placeholder:"Repeat password",type:"password",prependHtml:"<i class='cui-lock-locked'></i>",autocomplete:"new-password"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:e.password_confirmation,callback:function(t){e.password_confirmation=t},expression:"password_confirmation"}}),e._v(" "),o("CButton",{attrs:{type:"submit",color:"success",block:""}},[e._v("Create Account")])],1),e._v(" "),o("CButton",{attrs:{color:"link",block:""},on:{click:e.goBack}},[e._v(" Login ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);