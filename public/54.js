(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{546:function(t,o,e){"use strict";e.r(o);var n=e(2),s=e.n(n),r={name:"DeleteBread",data:function(){return{message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},deleteBread:function(){var t=this;s.a.post("/api/bread/"+t.$route.params.id+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(o){t.$router.go(-1)})).catch((function(o){console.log(o),t.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){}},i=e(0),a=Object(i.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("CRow",[e("CCol",{attrs:{col:"6",lg:"6"}},[e("CCard",[e("CCardBody",[e("h4",[t._v("Delete BREAD")]),t._v(" "),e("p",[t._v("Are you sure?")]),t._v(" "),e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(o){t.dismissCountDown=o}}},[t._v("\n          ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n        ")]),t._v(" "),e("CButton",{attrs:{color:"danger"},on:{click:function(o){return t.deleteBread()}}},[t._v("Delete")]),t._v(" "),e("CButton",{attrs:{color:"primary"},on:{click:t.goBack}},[t._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);o.default=a.exports}}]);