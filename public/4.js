(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{133:function(e,t,n){var a=n(207);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(26)(a,o);a.locals&&(e.exports=a.locals)},134:function(e,t,n){var a=n(209);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(26)(a,o);a.locals&&(e.exports=a.locals)},206:function(e,t,n){"use strict";n(133)},207:function(e,t,n){(e.exports=n(25)(!1)).push([e.i,"\n.c-icon[data-v-77a195ec] {\n    margin-right: 0.3rem;\n}\n",""])},208:function(e,t,n){"use strict";n(134)},209:function(e,t,n){(e.exports=n(25)(!1)).push([e.i,"\n.fade-enter-active[data-v-4ec717d1],\n.fade-leave-active[data-v-4ec717d1] {\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n}\n.fade-enter[data-v-4ec717d1],\n.fade-leave-to[data-v-4ec717d1] {\n    opacity: 0;\n}\n",""])},471:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r={name:"TheSidebar",data:function(){return{nav:[],buffor:[]}},computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}},methods:{dropdown:function(e){for(var t={_name:"CSidebarNavDropdown",name:e.name,route:e.href,icon:e.icon,_children:[]},n=0;n<e.elements.length;n++)"dropdown"===e.elements[n].slug?t._children.push(this.dropdown(e.elements[n])):t._children.push({_name:"CSidebarNavItem",name:e.elements[n].name,to:e.elements[n].href,icon:e.elements[n].icon});return t},rebuildData:function(e){this.buffor=[{_name:"CSidebarNav",_children:[]}];for(var t=0;t<e.length;t++)switch(e[t].slug){case"link":-1!==e[t].href.indexOf("http")?this.buffor[0]._children.push({_name:"CSidebarNavItem",name:e[t].name,href:e[t].href,icon:e[t].icon,target:"_blank"}):this.buffor[0]._children.push({_name:"CSidebarNavItem",name:e[t].name,to:e[t].href,icon:e[t].icon});break;case"title":this.buffor[0]._children.push({_name:"CSidebarNavTitle",_children:[e[t].name]});break;case"dropdown":this.buffor[0]._children.push(this.dropdown(e[t]))}return this.buffor}},mounted:function(){var e=this;this.$root.$on("toggle-sidebar",(function(){var t=!0===e.show||"responsive"===e.show;e.show=!t&&"responsive"})),this.$root.$on("toggle-sidebar-mobile",(function(){var t="responsive"===e.show||!1===e.show;e.show=!!t||"responsive"}));var t=this;o.a.get("/api/menu?token="+localStorage.getItem("api_token")).then((function(e){t.nav=t.rebuildData(e.data)})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},s=n(0),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CSidebar",{attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[n("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/"}},[n("CIcon",{staticClass:"d-block",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 "+(e.minimize?110:556)+" 134"}})],1),e._v(" "),n("CRenderFunction",{attrs:{flat:"","content-to-render":e.nav}}),e._v(" "),n("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(t){return e.$store.commit("set",["sidebarMinimize",!e.minimize])}}})],1)}),[],!1,null,null,null).exports,c={name:"Menu",data:function(){return{nav:[],buffor:[]}},methods:{dropdown:function(e){for(var t={_name:"CSidebarNavDropdown",name:e.name,route:e.href,icon:e.icon,_children:[]},n=0;n<e.elements.length;n++)"dropdown"===e.elements[n].slug?t._children.push(this.dropdown(e.elements[n])):t._children.push({_name:"CSidebarNavItem",name:e.elements[n].name,to:e.elements[n].href,icon:e.elements[n].icon});return t},rebuildData:function(e){this.buffor=[];for(var t=0;t<e.length;t++)switch(e[t].slug){case"link":-1!==e[t].href.indexOf("http")?this.buffor.push({_name:"CSidebarNavItem",name:e[t].name,href:e[t].href,icon:e[t].icon,target:"_blank"}):this.buffor.push({_name:"CSidebarNavItem",name:e[t].name,to:e[t].href,icon:e[t].icon});break;case"title":this.buffor.push({_name:"CSidebarNavTitle",_children:[e[t].name]});break;case"dropdown":this.buffor.push(this.dropdown(e[t]))}return this.buffor}},mounted:function(){var e=this;o.a.get("/api/menu?token="+localStorage.getItem("api_token")+"&menu=top_menu").then((function(t){e.nav=e.rebuildData(t.data)})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},l=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CHeaderNav",{staticClass:"d-md-down-none mr-auto"},e._l(e.nav,(function(t){return n("CHeaderNavItem",{key:t.name},["CSidebarNavItem"===t._name?n("CHeaderNavLink",{attrs:{href:t.href}},[e._v("\n            "+e._s(t.name)+"\n        ")]):e._e(),e._v(" "),"CSidebarNavDropdown"===t._name?n("CDropdown",{attrs:{color:"link",caret:!1},scopedSlots:e._u([{key:"toggler-content",fn:function(){return[n("a",{staticClass:"c-header-nav-link"},[e._v("\n                    "+e._s(t.name)+"\n                ")])]},proxy:!0}],null,!0)},[e._v(" "),e._l(t._children,(function(t){return n("CDropdownItem",{key:t.name,attrs:{to:t.to}},[e._v("\n                "+e._s(t.name)+"\n            ")])}))],2):e._e()],1)})),1)}),[],!1,null,null,null).exports,d={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42}},methods:{logout:function(){var e=this;o.a.post("/api/logout?token="+localStorage.getItem("api_token"),{}).then((function(t){e.$router.push({path:"/login"})})).catch((function(e){console.log(e)}))}}},m=(n(206),{name:"TheHeader",components:{TheHeaderDropdownAccnt:Object(s.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:e._u([{key:"toggler",fn:function(){return[n("CHeaderNavLink",[n("div",{staticClass:"c-avatar"},[n("img",{staticClass:"c-avatar-img ",attrs:{src:"img/avatars/4.jpg"}})])])]},proxy:!0}])},[e._v(" "),n("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[n("strong",[e._v("Account")])]),e._v(" "),n("CDropdownItem",[n("CIcon",{attrs:{name:"cil-bell"}}),e._v("\n        Updates\n        "),n("CBadge",{staticClass:"ml-auto",attrs:{color:"info"}},[e._v(e._s(e.itemsCount))])],1),e._v(" "),n("CDropdownItem",[n("CIcon",{attrs:{name:"cil-envelope-open"}}),e._v("\n        Messages\n        "),n("CBadge",{staticClass:"ml-auto",attrs:{color:"success"}},[e._v(e._s(e.itemsCount))])],1),e._v(" "),n("CDropdownItem",[n("CIcon",{attrs:{name:"cil-task"}}),e._v("\n        Tasks\n        "),n("CBadge",{staticClass:"ml-auto",attrs:{color:"danger"}},[e._v(e._s(e.itemsCount))])],1),e._v(" "),n("CDropdownItem",[n("CIcon",{attrs:{name:"cil-comment-square"}}),e._v("\n        Comments\n        "),n("CBadge",{staticClass:"ml-auto",attrs:{color:"warning"}},[e._v(e._s(e.itemsCount))])],1),e._v(" "),n("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[n("strong",[e._v("Settings")])]),e._v(" "),n("CDropdownItem",[n("CIcon",{attrs:{name:"cil-user"}}),e._v("\n        Profile\n    ")],1),e._v(" "),n("CDropdownItem",[n("CIcon",{attrs:{name:"cil-settings"}}),e._v("\n        Settings\n    ")],1),e._v(" "),n("CDropdownItem",[n("CIcon",{attrs:{name:"cil-dollar"}}),e._v("\n        Payments\n        "),n("CBadge",{staticClass:"ml-auto",attrs:{color:"secondary"}},[e._v(e._s(e.itemsCount))])],1),e._v(" "),n("CDropdownItem",[n("CIcon",{attrs:{name:"cil-file"}}),e._v("\n        Projects\n        "),n("CBadge",{staticClass:"ml-auto",attrs:{color:"primary"}},[e._v(e._s(e.itemsCount))])],1),e._v(" "),n("CDropdownDivider"),e._v(" "),n("CDropdownItem",[n("CIcon",{attrs:{name:"cil-shield-alt"}}),e._v("\n        Lock Account\n    ")],1),e._v(" "),n("CDropdownItem",{on:{click:function(t){return e.logout()}}},[n("CIcon",{attrs:{name:"cil-lock-locked"}}),e._v("\n        Logout\n    ")],1)],1)}),[],!1,null,"77a195ec",null).exports,CMenu:l}}),u={name:"TheFooter"},h={name:"TheContainer",components:{TheSidebar:i,TheHeader:Object(s.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[n("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarMobile")}}}),e._v(" "),n("CToggler",{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarDesktop")}}}),e._v(" "),n("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[n("CIcon",{attrs:{name:"logo",height:"48",alt:"Logo"}})],1),e._v(" "),n("CMenu"),e._v(" "),n("CHeaderNav",{staticClass:"mr-4"},[n("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[n("CHeaderNavLink",[n("CIcon",{attrs:{name:"cil-bell"}})],1)],1),e._v(" "),n("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[n("CHeaderNavLink",[n("CIcon",{attrs:{name:"cil-list"}})],1)],1),e._v(" "),n("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[n("CHeaderNavLink",[n("CIcon",{attrs:{name:"cil-envelope-open"}})],1)],1),e._v(" "),n("TheHeaderDropdownAccnt")],1),e._v(" "),n("CSubheader",{staticClass:"px-3"},[n("CBreadcrumbRouter",{staticClass:"border-0 mb-0"})],1)],1)}),[],!1,null,null,null).exports,TheFooter:Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CFooter",{attrs:{fixed:!1}},[n("div",[n("a",{attrs:{href:"#",target:"_blank"}},[e._v("Arma")]),e._v(" "),n("span",{staticClass:"ml-1"},[e._v("© "+e._s((new Date).getFullYear())+" ESCod")])]),e._v(" "),n("div",{staticClass:"ml-auto"},[n("span",{staticClass:"mr-1"},[e._v("Powered by")]),e._v(" "),n("a",{attrs:{href:"https://escodgt.com",target:"_blank"}},[e._v("ESCod")])])])}),[],!1,null,null,null).exports}},v=(n(208),Object(s.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"c-app"},[t("TheSidebar"),this._v(" "),t("CWrapper",[t("TheHeader"),this._v(" "),t("div",{staticClass:"c-body"},[t("main",{staticClass:"c-main"},[t("CContainer",{attrs:{fluid:""}},[t("transition",{attrs:{name:"fade"}},[t("router-view")],1)],1)],1),this._v(" "),t("TheFooter")],1)],1)],1)}),[],!1,null,"4ec717d1",null));t.default=v.exports}}]);