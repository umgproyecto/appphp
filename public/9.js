(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{434:function(t,e,s){"use strict";s.r(e);var o=s(4),a=s.n(o),n={name:"CreateSale",props:{caption:{type:String,default:"Sale id"}},data:function(){return{sale:{amount:"",productId:"",statusId:""},statuses:[],message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var t=this;a.a.post("/api/sales?token="+localStorage.getItem("api_token"),t.sale).then((function(e){t.sale={amount:"",productId:"",statusId:""},t.message="Venta generadaa con exitp ",t.showAlert()})).catch((function(t){console.log(t)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var t=this;a.a.get("/api/products/?token="+localStorage.getItem("api_token")).then((function(e){t.statuses=e.data})).catch((function(t){console.log(t)}))}},l=s(3),u=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CRow",[s("CCol",{attrs:{col:"12",lg:"6"}},[s("CCard",{attrs:{"no-header":""}},[s("CCardBody",[s("h3",[t._v("\n          Create Sale\n        ")]),t._v(" "),s("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v("\n          ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n        ")]),t._v(" "),s("CInput",{attrs:{label:"Cantidad",type:"text",placeholder:"Cantidad"},model:{value:t.sale.amount,callback:function(e){t.$set(t.sale,"amount",e)},expression:"sale.amount"}}),t._v(" "),s("CInput",{attrs:{label:"Producto",type:"text",placeholder:"Id de producto"},model:{value:t.sale.productId,callback:function(e){t.$set(t.sale,"productId",e)},expression:"sale.productId"}}),t._v(" "),s("CInput",{attrs:{label:"Estado",type:"text",placeholder:"Estado"},model:{value:t.sale.statusId,callback:function(e){t.$set(t.sale,"statusId",e)},expression:"sale.statusId"}}),t._v(" "),s("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.store()}}},[t._v("Create")]),t._v(" "),s("CButton",{attrs:{color:"primary"},on:{click:t.goBack}},[t._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);