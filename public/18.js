(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{439:function(t,e,n){"use strict";n.r(e);var s=n(4),o=n.n(s),r={name:"Users",data:function(){return{items:[],fields:["id","name","registered","roles","status","show","edit","delete"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:3,dismissCountDown:0,showDismissibleAlert:!1}},paginationProps:{align:"center",doubleArrows:!1,previousButtonHtml:"prev",nextButtonHtml:"next"},methods:{getBadge:function(t){return"Active"===t?"success":"Inactive"===t?"secondary":"Pending"===t?"warning":"Banned"===t?"danger":"primary"},userLink:function(t){return"users/".concat(t.toString())},editLink:function(t){return"users/".concat(t.toString(),"/edit")},showUser:function(t){var e=this.userLink(t);this.$router.push({path:e})},editUser:function(t){var e=this.editLink(t);this.$router.push({path:e})},deleteUser:function(t){var e=this;o.a.post("/api/users/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.message="Successfully deleted user.",e.showAlert(),e.getUsers()})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getUsers:function(){var t=this;o.a.get("/api/users?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data.users,t.you=e.data.you})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},mounted:function(){this.getUsers()}},i=n(3),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CRow",[n("CCol",{attrs:{col:"12",xl:"8"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardHeader",[t._v("\n          Users\n      ")]),t._v(" "),n("CCardBody",[n("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v("\n          ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n        ")]),t._v(" "),n("CDataTable",{attrs:{hover:"",striped:"",items:t.items,fields:t.fields,"items-per-page":5,pagination:""},scopedSlots:t._u([{key:"status",fn:function(e){var s=e.item;return[n("td",[n("CBadge",{attrs:{color:t.getBadge(s.status)}},[t._v(t._s(s.status))])],1)]}},{key:"show",fn:function(e){var s=e.item;return[n("td",[n("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.showUser(s.id)}}},[t._v("Show")])],1)]}},{key:"edit",fn:function(e){var s=e.item;return[n("td",[n("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.editUser(s.id)}}},[t._v("Edit")])],1)]}},{key:"delete",fn:function(e){var s=e.item;return[n("td",[t.you!=s.id?n("CButton",{attrs:{color:"danger"},on:{click:function(e){return t.deleteUser(s.id)}}},[t._v("Delete")]):t._e()],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);