(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{473:function(s,t,a){"use strict";a.r(t);var r=a(14),e=a(146);var o=(s,t=100)=>{if(void 0===s)throw new TypeError("Hex color is not defined");if(!s.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error(s+" is not a valid hex color");let a,r,e;return 7===s.length?(a=parseInt(s.slice(1,3),16),r=parseInt(s.slice(3,5),16),e=parseInt(s.slice(5,7),16)):(a=parseInt(s.slice(1,2),16),r=parseInt(s.slice(2,3),16),e=parseInt(s.slice(3,5),16)),`rgba(${a}, ${r}, ${e}, ${t/100})`};function i(s,t){return Math.floor(Math.random()*(t-s+1)+s)}var l={name:"MainChartExample",components:{CChartLine:r.CChartLine},computed:{defaultDatasets:function(){for(var s=Object(e.a)("success2")||"#4dbd74",t=Object(e.a)("info")||"#20a8d8",a=Object(e.a)("danger")||"#f86c6b",r=[],l=[],n=[],c=0;c<=27;c++)r.push(i(50,200)),l.push(i(80,100)),n.push(65);return[{label:"My First dataset",backgroundColor:o(t,10),borderColor:t,pointHoverBackgroundColor:t,borderWidth:2,data:r},{label:"My Second dataset",backgroundColor:"transparent",borderColor:s,pointHoverBackgroundColor:s,borderWidth:2,data:l},{label:"My Third dataset",backgroundColor:"transparent",borderColor:a,pointHoverBackgroundColor:a,borderWidth:1,borderDash:[8,5],data:n}]},defaultOptions:function(){return{maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}}}},n=a(0),c=Object(n.a)(l,(function(){var s=this.$createElement;return(this._self._c||s)("CChartLine",{attrs:{datasets:this.defaultDatasets,options:this.defaultOptions,labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"]}})}),[],!1,null,null,null).exports,v=a(75),g=a(76),u={name:"Dashboard",components:{MainChartExample:c,WidgetsDropdown:v.a,WidgetsBrand:g.a},data:function(){return{selected:"Month",tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"cif-us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"cib-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"cif-br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"cib-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"cif-in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"cib-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"cif-fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"cib-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"cif-es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"cib-google-pay"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"cif-pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"cib-cc-amex"},activity:"Last week"}],tableFields:[{key:"avatar",label:"",_classes:"text-center"},{key:"user"},{key:"country",_classes:"text-center"},{key:"usage"},{key:"payment",label:"Payment method",_classes:"text-center"},{key:"activity"}]}},methods:{color:function(s){var t;return s<=25?t="info":s>25&&s<=50?t="success":s>50&&s<=75?t="warning":s>75&&s<=100&&(t="danger"),t}}},p=Object(n.a)(u,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("WidgetsDropdown"),s._v(" "),a("CCard",[a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"5"}},[a("h4",{staticClass:"card-title mb-0",attrs:{id:"traffic"}},[s._v("Traffic")]),s._v(" "),a("div",{staticClass:"small text-muted"},[s._v("November 2017")])]),s._v(" "),a("CCol",{staticClass:"d-none d-md-block",attrs:{sm:"7"}},[a("CButton",{staticClass:"float-right",attrs:{color:"primary"}},[a("CIcon",{attrs:{name:"cil-cloud-download"}})],1),s._v(" "),a("CButtonGroup",{staticClass:"float-right mr-3"},s._l(["Day","Month","Year"],(function(t,r){return a("CButton",{key:r,staticClass:"mx-0",attrs:{color:"outline-secondary",pressed:t===s.selected},on:{click:function(a){s.selected=t}}},[s._v("\n                            "+s._s(t)+"\n                        ")])})),1)],1)],1),s._v(" "),a("MainChartExample",{staticStyle:{height:"300px","margin-top":"40px"}})],1),s._v(" "),a("CCardFooter",[a("CRow",{staticClass:"text-center"},[a("CCol",{staticClass:"mb-sm-2 mb-0",attrs:{md:"",sm:"12"}},[a("div",{staticClass:"text-muted"},[s._v("Visits")]),s._v(" "),a("strong",[s._v("29.703 Users (40%)")]),s._v(" "),a("CProgress",{staticClass:"progress-xs mt-2",attrs:{precision:1,color:"success",value:40}})],1),s._v(" "),a("CCol",{staticClass:"mb-sm-2 mb-0 d-md-down-none",attrs:{md:"",sm:"12"}},[a("div",{staticClass:"text-muted"},[s._v("Unique")]),s._v(" "),a("strong",[s._v("24.093 Users (20%)")]),s._v(" "),a("CProgress",{staticClass:"progress-xs mt-2",attrs:{precision:1,color:"info",value:20}})],1),s._v(" "),a("CCol",{staticClass:"mb-sm-2 mb-0",attrs:{md:"",sm:"12"}},[a("div",{staticClass:"text-muted"},[s._v("Pageviews")]),s._v(" "),a("strong",[s._v("78.706 Views (60%)")]),s._v(" "),a("CProgress",{staticClass:"progress-xs mt-2",attrs:{precision:1,color:"warning",value:60}})],1),s._v(" "),a("CCol",{staticClass:"mb-sm-2 mb-0",attrs:{md:"",sm:"12"}},[a("div",{staticClass:"text-muted"},[s._v("New Users")]),s._v(" "),a("strong",[s._v("22.123 Users (80%)")]),s._v(" "),a("CProgress",{staticClass:"progress-xs mt-2",attrs:{precision:1,color:"danger",value:80}})],1),s._v(" "),a("CCol",{staticClass:"mb-sm-2 mb-0 d-md-down-none",attrs:{md:"",sm:"12"}},[a("div",{staticClass:"text-muted"},[s._v("Bounce Rate")]),s._v(" "),a("strong",[s._v("Average Rate (40.15%)")]),s._v(" "),a("CProgress",{staticClass:"progress-xs mt-2",attrs:{precision:1,value:40}})],1)],1)],1)],1),s._v(" "),a("WidgetsBrand"),s._v(" "),a("CRow",[a("CCol",{attrs:{md:"12"}},[a("CCard",[a("CCardHeader",[s._v("\n                    Traffic & Sales\n                ")]),s._v(" "),a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"12",lg:"6"}},[a("CRow",[a("CCol",{attrs:{sm:"6"}},[a("CCallout",{attrs:{color:"info"}},[a("small",{staticClass:"text-muted"},[s._v("New Clients")]),a("br"),s._v(" "),a("strong",{staticClass:"h4"},[s._v("9,123")])])],1),s._v(" "),a("CCol",{attrs:{sm:"6"}},[a("CCallout",{attrs:{color:"danger"}},[a("small",{staticClass:"text-muted"},[s._v("Recurring Clients")]),a("br"),s._v(" "),a("strong",{staticClass:"h4"},[s._v("22,643")])])],1)],1),s._v(" "),a("hr",{staticClass:"mt-0"}),s._v(" "),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v("\n                  Monday\n                ")])]),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{color:"info",value:34}}),s._v(" "),a("CProgress",{staticClass:"progress-xs",attrs:{color:"danger",value:78}})],1)]),s._v(" "),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v("\n                  Tuesday\n                ")])]),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:56,color:"info"}}),s._v(" "),a("CProgress",{staticClass:"progress-xs",attrs:{value:94,color:"danger"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v("\n                  Wednesday\n                ")])]),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:12,color:"info"}}),s._v(" "),a("CProgress",{staticClass:"progress-xs",attrs:{value:67,color:"danger"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v("\n                  Thursday\n                ")])]),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:43,color:"info"}}),s._v(" "),a("CProgress",{staticClass:"progress-xs",attrs:{value:91,color:"danger"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v("\n                  Friday\n                ")])]),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:22,color:"info"}}),s._v(" "),a("CProgress",{staticClass:"progress-xs",attrs:{value:73,color:"danger"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v("\n                  Saturday\n                ")])]),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:53,color:"info"}}),s._v(" "),a("CProgress",{staticClass:"progress-xs",attrs:{value:82,color:"danger"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group mb-4"},[a("div",{staticClass:"progress-group-prepend"},[a("span",{staticClass:"progress-group-text"},[s._v("\n                  Sunday\n                ")])]),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:9,color:"info"}}),s._v(" "),a("CProgress",{staticClass:"progress-xs",attrs:{value:69,color:"danger"}})],1)]),s._v(" "),a("div",{staticClass:"legend text-center"},[a("small",[a("sup",[a("CBadge",{attrs:{shape:"pill",color:"info"}},[s._v(" ")])],1),s._v("\n                                    New clients\n                                      \n                                    "),a("sup",[a("CBadge",{attrs:{shape:"pill",color:"danger"}},[s._v(" ")])],1),s._v("\n                                    Recurring clients\n                                ")])])],1),s._v(" "),a("CCol",{attrs:{sm:"12",lg:"6"}},[a("CRow",[a("CCol",{attrs:{sm:"6"}},[a("CCallout",{attrs:{color:"warning"}},[a("small",{staticClass:"text-muted"},[s._v("Pageviews")]),a("br"),s._v(" "),a("strong",{staticClass:"h4"},[s._v("78,623")])])],1),s._v(" "),a("CCol",{attrs:{sm:"6"}},[a("CCallout",{attrs:{color:"success"}},[a("small",{staticClass:"text-muted"},[s._v("Organic")]),a("br"),s._v(" "),a("strong",{staticClass:"h4"},[s._v("49,123")])])],1)],1),s._v(" "),a("hr",{staticClass:"mt-0"}),s._v(" "),a("ul",{staticClass:"horizontal-bars type-2"},[a("div",{staticClass:"progress-group"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cil-user"}}),s._v(" "),a("span",{staticClass:"title"},[s._v("Male")]),s._v(" "),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v("43%")])],1),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:43,color:"warning"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group mb-5"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cil-user-female"}}),s._v(" "),a("span",{staticClass:"title"},[s._v("Female")]),s._v(" "),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v("37%")])],1),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:37,color:"warning"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cil-globe-alt"}}),s._v(" "),a("span",{staticClass:"title"},[s._v("Organic Search")]),s._v(" "),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v("\n                    191,235 "),a("span",{staticClass:"text-muted small"},[s._v("(56%)")])])],1),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:56,color:"success"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cib-facebook",height:"17"}}),s._v(" "),a("span",{staticClass:"title"},[s._v("Facebook")]),s._v(" "),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v("\n                    51,223 "),a("span",{staticClass:"text-muted small"},[s._v("(15%)")])])],1),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:15,color:"success"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cib-twitter",height:"17"}}),s._v(" "),a("span",{staticClass:"title"},[s._v("Twitter")]),s._v(" "),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v("\n                    37,564 "),a("span",{staticClass:"text-muted small"},[s._v("(11%)")])])],1),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:11,color:"success"}})],1)]),s._v(" "),a("div",{staticClass:"progress-group"},[a("div",{staticClass:"progress-group-header"},[a("CIcon",{staticClass:"progress-group-icon",attrs:{name:"cib-linkedin",height:"17"}}),s._v(" "),a("span",{staticClass:"title"},[s._v("LinkedIn")]),s._v(" "),a("span",{staticClass:"ml-auto font-weight-bold"},[s._v("\n                    27,319 "),a("span",{staticClass:"text-muted small"},[s._v(" (8%)")])])],1),s._v(" "),a("div",{staticClass:"progress-group-bars"},[a("CProgress",{staticClass:"progress-xs",attrs:{value:8,color:"success"}})],1)]),s._v(" "),a("div",{staticClass:"divider text-center"},[a("CButton",{staticClass:"text-muted",attrs:{color:"link",size:"sm"}},[a("CIcon",{attrs:{name:"cil-options"}})],1)],1)])],1)],1),s._v(" "),a("br"),s._v(" "),a("CDataTable",{staticClass:"mb-0 table-outline",attrs:{hover:"",items:s.tableItems,fields:s.tableFields,"head-color":"light","no-sorting":""},scopedSlots:s._u([{key:"avatar",fn:function(t){var r=t.item;return a("td",{staticClass:"text-center"},[a("div",{staticClass:"c-avatar"},[a("img",{staticClass:"c-avatar-img",attrs:{src:r.avatar.url,alt:""}}),s._v(" "),a("span",{staticClass:"c-avatar-status",class:"bg-"+(r.avatar.status||"secondary")})])])}},{key:"user",fn:function(t){var r=t.item;return a("td",{},[a("div",[s._v(s._s(r.user.name))]),s._v(" "),a("div",{staticClass:"small text-muted"},[a("span",[r.user.new?[s._v("New")]:[s._v("Recurring")]],2),s._v(" | Registered: "+s._s(r.user.registered)+"\n                            ")])])}},{key:"country",fn:function(s){var t=s.item;return a("td",{staticClass:"text-center"},[a("CIcon",{attrs:{name:t.country.flag,height:"25"}})],1)}},{key:"usage",fn:function(t){var r=t.item;return a("td",{},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"float-left"},[a("strong",[s._v(s._s(r.usage.value)+"%")])]),s._v(" "),a("div",{staticClass:"float-right"},[a("small",{staticClass:"text-muted"},[s._v(s._s(r.usage.period))])])]),s._v(" "),a("CProgress",{staticClass:"progress-xs",attrs:{color:s.color(r.usage.value)},model:{value:r.usage.value,callback:function(t){s.$set(r.usage,"value",t)},expression:"item.usage.value"}})],1)}},{key:"payment",fn:function(s){var t=s.item;return a("td",{staticClass:"text-center"},[a("CIcon",{attrs:{name:t.payment.icon,height:"25"}})],1)}},{key:"activity",fn:function(t){var r=t.item;return a("td",{},[a("div",{staticClass:"small text-muted"},[s._v("Last login")]),s._v(" "),a("strong",[s._v(s._s(r.activity))])])}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=p.exports}}]);