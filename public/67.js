(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{559:function(e,n,t){"use strict";t.r(n);var o=t(2),a=t.n(o),s={name:"CreateMenuElement",data:function(){return{role:[],menulist:[],parents:[],types:[{label:"Link",value:"link"},{label:"Title",value:"title"},{label:"Dropdown",value:"dropdown"}],menuelement:{menu:0,name:"",role:[],type:"link",href:"",icon:"",parent:0},message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1,divHref:!1,divDropdownParent:!1,divIcon:!1}},methods:{goBack:function(){this.$router.go(-1)},selectRadioSelectRole:function(e){var n=this.menuelement.role.indexOf(e);n>-1?this.menuelement.role.splice(n,1):this.menuelement.role.push(e)},changeType:function(){var e=this.menuelement.type;"title"==e?(this.divHref=!1,this.divDropdownParent=!1,this.divIcon=!1):"link"==e?(this.divHref=!0,this.divDropdownParent=!0,this.divIcon=!0):(this.divHref=!1,this.divDropdownParent=!0,this.divIcon=!0)},updateSelectParent:function(){var e=this;a.a.get("/api/menu/element/get-parents?token="+localStorage.getItem("api_token")+"&menu="+e.menuelement.menu).then((function(n){e.parents=[{label:"Has no parent",value:"none"}];for(var t=0;t<n.data.length;t++)e.parents.push(n.data[t])})).catch((function(n){console.log(n),e.$router.push({path:"login"})}))},store:function(){var e=this;console.log(e.menuelement),a.a.post("/api/menu/element/store?token="+localStorage.getItem("api_token"),e.menuelement).then((function(n){e.name="",e.message="Successfully created menu element.",e.showAlert()})).catch((function(n){if("The given data was invalid."==n.response.data.message){for(var t in e.message="",n.response.data.errors)n.response.data.errors.hasOwnProperty(t)&&(e.message+=n.response.data.errors[t][0]+"  ");e.showAlert()}else console.log(n),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},getData:function(){var e=this;a.a.get("/api/menu/element/create?token="+localStorage.getItem("api_token")+"&id="+e.$route.params.menu).then((function(n){e.role=n.data.roles,e.menulist=n.data.menulist})).catch((function(n){console.log(n),e.$router.push({path:"/login"})}))}},mounted:function(){this.getData(),this.menuelement.menu=this.$route.params.menu,this.updateSelectParent(),this.changeType()}},l=t(0),r=Object(l.a)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",{attrs:{"no-header":""}},[t("CCardBody",[t("h3",[e._v("\n          Create Menu Element\n        ")]),e._v(" "),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(n){e.dismissCountDown=n}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),t("CSelect",{attrs:{label:"Menu",value:e.menuelement.menu,plain:!0,options:e.menulist},on:{"update:value":[function(n){return e.$set(e.menuelement,"menu",n)},function(n){return e.updateSelectParent()}]}}),e._v(" "),t("p",[e._v("Roles")]),e._v(" "),t("div",{staticClass:"m-3"},e._l(e.role,(function(n){return t("CInputCheckbox",{key:n,attrs:{label:n,name:"selectRoles"},on:{"update:checked":function(t){return e.selectRadioSelectRole(n)}}})})),1),e._v(" "),t("CInput",{attrs:{label:"Name",type:"text",placeholder:"Name"},model:{value:e.menuelement.name,callback:function(n){e.$set(e.menuelement,"name",n)},expression:"menuelement.name"}}),e._v(" "),t("CSelect",{attrs:{label:"Type",value:e.menuelement.type,plain:!0,options:e.types},on:{"update:value":[function(n){return e.$set(e.menuelement,"type",n)},function(n){return e.changeType()}]}}),e._v(" "),t("p",[e._v("Other")]),e._v(" "),e.divHref?t("div",[t("CInput",{attrs:{label:"Href",type:"text",placeholder:"Href"},model:{value:e.menuelement.href,callback:function(n){e.$set(e.menuelement,"href",n)},expression:"menuelement.href"}})],1):e._e(),e._v(" "),e.divDropdownParent?t("div",[t("CSelect",{attrs:{label:"Dropdown parent",value:e.menuelement.parent,plain:!0,options:e.parents},on:{"update:value":function(n){return e.$set(e.menuelement,"parent",n)}}})],1):e._e(),e._v(" "),e.divIcon?t("div",[e._v("\n            Icon - Find icon class in: \n            "),t("a",{attrs:{href:"https://coreui.io/docs/icons/icons-list/#coreui-icons-free-502-icons",target:"_blank"}},[e._v("\n              CoreUI icons documentation\n            ")]),e._v(" "),t("br"),e._v(" "),t("CInput",{attrs:{type:"text",placeholder:"CoreUI Icon class - example: cil-bell"},model:{value:e.menuelement.icon,callback:function(n){e.$set(e.menuelement,"icon",n)},expression:"menuelement.icon"}})],1):e._e(),e._v(" "),t("CButton",{attrs:{color:"primary"},on:{click:function(n){return e.store()}}},[e._v("Create")]),e._v(" "),t("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=r.exports}}]);