(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cceb9b4","chunk-6e4932a1","chunk-1cffb580","chunk-1a94d93a","chunk-1d8ec86c","chunk-2d216417"],{"07eb":function(e,t,n){"use strict";n("8116")},"2a40":function(e,t,n){"use strict";n("47ab")},"47ab":function(e,t,n){},5130:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-avatar-dropdown"},[n("a-dropdown",{staticClass:"user-avatar",on:{"on-click":e.handleClick}},[e.userInfo.headimg?n("a-avatar",{attrs:{src:e.userInfo.headimg,size:"large"}}):e.userInfo.nickname?n("a-avatar",{attrs:{size:"large"}},[e._v(e._s(e.userInfo.nickname))]):n("a-avatar",{attrs:{icon:"user",size:"large"}}),n("a-icon",{attrs:{size:18,type:"md-arrow-dropdown"}}),e.userInfo.status?n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"logout"},[e._v("退出登录")])],1):e._e()],1)],1)},i=[],s=n("c24f"),r={computed:{userInfo:function(){return this.$store.state.user.userInfo}},methods:{handleClick:function(e){switch(e){case"logout":this.logout();break}},logout:function(){var e=this;Object(s["logout"])((function(t){e.$store.commit("initUserInfo",e)}),(function(t){e.$store.commit("initUserInfo",e)}))}}},u=r,o=(n("ca7d"),n("2877")),l=Object(o["a"])(u,a,i,!1,null,null,null);t["default"]=l.exports},"5f04":function(e,t,n){},6156:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-bar"},[n("div",{staticClass:"header-bar-left"},[n("a-icon",{style:{margin:"15px 25px",fontSize:"20px"},attrs:{type:e.rotateIcon,"font-size":"40px"},nativeOn:{click:function(t){return e.collapsedSider.apply(null,arguments)}}})],1),n("div",{staticClass:"header-bar-left"},[n("custom-bread-crumb",{attrs:{list:e.$route.matched}})],1)])},i=[],s=n("9593"),r={components:{CustomBreadCrumb:s["default"]},props:{isCollapsed:Boolean},computed:{rotateIcon:function(){return this.isCollapsed?"menu-unfold":"menu-fold"}},methods:{collapsedSider:function(){this.$emit("on-collapsed-sider")}}},u=r,o=(n("f4e9"),n("2877")),l=Object(o["a"])(u,a,i,!1,null,null,null);t["default"]=l.exports},"64a5":function(e,t,n){"use strict";n.r(t);var a=n("6156");t["default"]=a["default"]},8116:function(e,t,n){},"8fc8":function(e,t,n){},"93ea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",{staticClass:"main"},[n("a-layout-sider",{ref:"mainSider",staticClass:"side-menu",model:{value:e.isCollapsed,callback:function(t){e.isCollapsed=t},expression:"isCollapsed"}},[n("side-menu",{attrs:{"active-name":e.$route.name,"is-collapsed":e.isCollapsed,"menu-list":e.menuList}})],1),n("a-layout",[n("a-layout-header",{staticClass:"header-con"},[n("header-bar",{attrs:{"is-collapsed":e.isCollapsed},on:{"on-collapsed-sider":e.collapsedSider}})],1),n("a-layout-content",{staticClass:"main-content"},[n("div",{staticStyle:{height:"100%"}},[n("router-view")],1)])],1)],1)},i=[],s=n("b784"),r=n("64a5"),u={components:{SideMenu:s["default"],HeaderBar:r["default"]},data:function(){return{isCollapsed:!1}},computed:{menuList:function(){return this.$store.state.routesConfig}},methods:{collapsedSider:function(){this.isCollapsed=!this.isCollapsed}}},o=u,l=(n("9b75"),n("2877")),c=Object(l["a"])(o,a,i,!1,null,null,null);t["default"]=c.exports},9593:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-bread-crumb"},[n("a-breadcrumb",[e.homeRoute?n("a-breadcrumb-item",[n("router-link",{attrs:{to:{name:e.homeRoute.name}}},[n("i",{class:e.homeRoute.meta.icon}),n("span",[e._v(e._s(e.homeRoute.meta.title))])])],1):e._e(),e._l(e.breadCrumbList,(function(t){return n("a-breadcrumb-item",{key:"bread-crumb-"+t.name},[n("router-link",{attrs:{to:{name:t.name}}},[n("i",{class:t.meta.icon}),n("span",[e._v(e._s(t.meta.title))])])],1)}))],2)],1)},i=[],s=(n("d25f"),n("d76c")),r={name:"CustomBreadCrumb",props:{list:{type:Array,default:function(){return[]}}},computed:{breadCrumbList:function(){return this.list.filter((function(e){return e.meta&&1!==e.meta.hideInBread}))},homeRoute:function(){return Object(s["getHomeRoute"])(this.$store.state.routesConfig,this.$config.homeRouteName)}}},u=r,o=(n("2a40"),n("2877")),l=Object(o["a"])(u,a,i,!1,null,null,null);t["default"]=l.exports},9733:function(e,t,n){},"9b75":function(e,t,n){"use strict";n("8fc8")},a1e1:function(e,t,n){},a481:function(e,t,n){"use strict";var a=n("cb7c"),i=n("4bf8"),s=n("9def"),r=n("4588"),u=n("0390"),o=n("5f1b"),l=Math.max,c=Math.min,d=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,(function(e,t,n,p){return[function(a,i){var s=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,s,i):n.call(String(s),a,i)},function(e,t){var i=p(n,e,this,t);if(i.done)return i.value;var d=a(e),m=String(this),f="function"===typeof t;f||(t=String(t));var y=d.global;if(y){var b=d.unicode;d.lastIndex=0}var C=[];while(1){var g=o(d,m);if(null===g)break;if(C.push(g),!y)break;var k=String(g[0]);""===k&&(d.lastIndex=u(m,s(d.lastIndex),b))}for(var _="",K=0,$=0;$<C.length;$++){g=C[$];for(var I=String(g[0]),N=l(c(r(g.index),m.length),0),S=[],x=1;x<g.length;x++)S.push(h(g[x]));var w=g.groups;if(f){var M=[I].concat(S,N,m);void 0!==w&&M.push(w);var E=String(t.apply(void 0,M))}else E=v(I,m,N,S,w,t);N>=K&&(_+=m.slice(K,N)+E,K=N+I.length)}return _+m.slice(K)}];function v(e,t,a,s,r,u){var o=a+e.length,l=s.length,c=f;return void 0!==r&&(r=i(r),c=m),n.call(u,c,(function(n,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(o);case"<":u=r[i.slice(1,-1)];break;default:var c=+i;if(0===c)return n;if(c>l){var m=d(c/10);return 0===m?n:m<=l?void 0===s[m-1]?i.charAt(1):s[m-1]+i.charAt(1):n}u=s[c-1]}return void 0===u?"":u}))}}))},b554:function(e,t,n){"use strict";n("5f04")},b784:function(e,t,n){"use strict";n.r(t);var a=n("c0af");t["default"]=a["default"]},c0af:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",{staticClass:"side-menu-wrapper"},[n("a-layout-header",{staticClass:"header"},[n("div",{staticClass:"h1"},[e._v(e._s(e.appNameCh))]),n("div",{staticClass:"divider"},[e._v(e._s(e.appNameEn))])]),n("div",{staticClass:"center"},[n("user")],1),n("a-layout-content",{staticClass:"content"},[n("side-menu-item",{attrs:{isCollapsed:e.isCollapsed,"menu-list":e.menuList}})],1)],1)},i=[],s=(n("7f7f"),n("d6e0")),r=n("5130"),u={name:"SideMenu",components:{SideMenuItem:s["default"],User:r["default"]},props:{menuList:{type:Array,default:function(){return[]}},isCollapsed:Boolean},computed:{appNameEn:function(){return this.$config.appNameEn},appNameCh:function(){return this.$config.appNameCh},activeName:function(){return this.$route.name},openNames:function(){for(var e=[],t=0;t<this.$route.matched.length;t++)e.push(this.$route.matched[t].name);return e}}},o=u,l=(n("b554"),n("2877")),c=Object(l["a"])(o,a,i,!1,null,null,null);t["default"]=c.exports},c24f:function(e,t,n){"use strict";n.r(t),n.d(t,"login",(function(){return i})),n.d(t,"logout",(function(){return s})),n.d(t,"queryUser",(function(){return r})),n.d(t,"delUser",(function(){return u}));var a=n("4020"),i=function(e,t,n){a["default"].send("login",e,t,n)},s=function(e,t){a["default"].send("logout",null,e,t)},r=function(e,t,n){a["default"].send("userManage/queryUser",e,t,n)},u=function(e,t,n){a["default"].send("userManage/delUser",{ids:e},t,n)}},ca7d:function(e,t,n){"use strict";n("a1e1")},d6e0:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-menu",{staticClass:"side-menu-item",attrs:{"inline-collapsed":e.isCollapsed,openKeys:e.openKeys,selectedKeys:e.selectedKeys,mode:"inline"}},[e._l(e.filterMenuList,(function(t){return[t.children&&t.children.length>1?n("a-sub-menu",{key:e.itemKeyName+t.name,attrs:{name:t.name},on:{titleClick:e.handleTitleClick}},[n("template",{slot:"title"},[n("router-link",{attrs:{to:{name:t.name}}},[n("a-icon",{attrs:{type:t.meta.icon}}),n("span",{staticClass:"item-title"},[e._v(e._s(t.meta.title))])],1)],1),e._l(t.children,(function(t){return[n("a-menu-item",{key:e.itemKeyName+t.name,attrs:{name:t.name,to:{name:t.name}}},[n("router-link",{attrs:{to:{name:t.name}}},[n("a-icon",{attrs:{type:t.meta.icon}}),n("span",{staticClass:"item-title"},[e._v(e._s(t.meta.title))])],1)],1)]}))],2):t.children&&1===t.children.length?n("a-menu-item",{key:e.itemKeyName+t.children[0].name,attrs:{name:t.children[0].name,to:{name:t.children[0].name}}},[n("router-link",{attrs:{to:{name:t.children[0].name}}},[n("a-icon",{attrs:{type:t.children[0].meta.icon}}),n("span",{staticClass:"item-title"},[e._v(e._s(t.children[0].meta.title))])],1)],1):n("a-menu-item",{key:e.itemKeyName+t.name,attrs:{name:t.name,to:{name:t.name}}},[n("router-link",{attrs:{to:{name:t.name}}},[n("a-icon",{attrs:{type:t.meta.icon}}),n("span",{staticClass:"item-title"},[e._v(e._s(t.meta.title))])],1)],1)]}))],2)},i=[],s=(n("57e7"),n("a481"),n("7f7f"),n("d25f"),n("ac6a"),n("f3e2"),{name:"SideMenuItem",props:{menuList:{type:Array,default:function(){return[]}},isCollapsed:{type:Boolean,default:!1}},computed:{filterMenuList:function(){function e(t){return t.forEach((function(t){t.children&&t.children.length>0&&(t.children=e(t.children))})),t.filter((function(e){return 1!==e.meta.hideInMenu}))}return e(this.menuList)}},data:function(){return{selectedKeys:[],openKeys:[],itemKeyName:"a-menu-"}},watch:{$route:{handler:function(e,t){this.selectedKeys=[],1!==e.meta.hideInMenu&&this.selectedKeys.push(this.itemKeyName+e.name)},deep:!0}},methods:{addOpenKeys:function(){var e=this;this.openKeys=[],this.selectedKeys.forEach((function(t){e.openKeys=e.searchChildKey(e.menuList,t.replace(e.itemKeyName,""))}))},searchChildKey:function(e,t){var n=this,a=[];return e.forEach((function(e){e.children&&e.children.length>1?(a=n.searchChildKey(e.children,t),a.length>0&&a.push(n.itemKeyName+e.name)):e.name===t&&a.push(n.itemKeyName+e.name)})),a},handleTitleClick:function(e,t,n){-1===this.openKeys.indexOf(e.key)?this.openKeys.push(e.key):this.openKeys=this.openKeys.filter((function(t){return e.key!==t}))}},mounted:function(){this.selectedKeys.push(this.itemKeyName+this.$route.name),this.addOpenKeys()}}),r=s,u=(n("07eb"),n("2877")),o=Object(u["a"])(r,a,i,!1,null,null,null);t["default"]=o.exports},f4e9:function(e,t,n){"use strict";n("9733")}}]);