webpackJsonp([3],{"4pf/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},a,!1,function(e){n("4pf/")},null,null).exports,o=n("/ocq");s.default.use(o.a);var u=new o.a({mode:"history",routes:[{id:1,component:function(){return n.e(0).then(n.bind(null,"lO7g"))},hidden:!0,name:"主页",path:"/",redirect:"/article"},{id:11,children:[{id:101,component:function(){return n.e(1).then(n.bind(null,"6l6t"))},hidden:!1,icon:"el-icon-user",name:"文章打分",path:"/article"}],component:function(){return n.e(0).then(n.bind(null,"lO7g"))},hidden:!1,icon:"el-icon-document",name:"稿件管理",path:"/manuscript"}]}),i=n("NYxO");s.default.use(i.a);var c=new i.a.Store({state:{indexPaths:[]}}),d=n("zL8q"),p=n.n(d),l=(n("tvR6"),n("mtWM")),f=n.n(l),m="";m="http://172.16.8.253:8080",f.a.defaults.timeout=1e4,f.a.interceptors.request.use(function(e){return e},function(){d.Message.error({message:"请求超时!"})}),f.a.interceptors.response.use(function(e){return e.status&&200===e.status&&(e.data&&e.data.success&&e.data.message?d.Message.success({message:e.data.message}):e.data&&!e.data.success&&e.data.message&&d.Message.error({message:e.data.message})),e},function(e){504===e.response.status?d.Message.error({message:"服务器异常"}):404===e.response.status?d.Message.error({message:"请求不存在"}):403===e.response.status?d.Message.error({message:"权限不足,请联系管理员!"}):d.Message.error({message:"未知错误!"})});s.default.config.productionTip=!1,s.default.use(p.a),s.default.prototype.getRequest=function(e,t){return f()({method:"get",params:t,url:""+m+e})},s.default.prototype.postRequest=function(e,t){return f()({method:"post",url:""+m+e,data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})},s.default.prototype.deleteRequest=function(e){return f()({method:"delete",url:""+m+e})},s.default.prototype.putRequest=function(e,t){return f()({method:"put",url:""+m+e,data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})},u.beforeEach(function(e,t,n){c.state.indexPaths=e.matched,n()}),new s.default({el:"#app",router:u,store:c,components:{App:r},template:"<App/>"})},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6980804ae96306f804c2.js.map