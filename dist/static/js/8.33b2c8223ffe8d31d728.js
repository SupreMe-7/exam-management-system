webpackJsonp([8],{"993D":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),r=a.n(n),s=a("NYxO"),i={data:function(){return{currentBar:"学生信息",user:""}},methods:r()({},Object(s.b)(["setTypeList","setAllDepartment"]),{changeCurrent:function(t){this.currentBar=t},getAllData:function(){var t=this;this.$ajax.get("/hmu/tea/getType").then(function(e){e.result||t.setTypeList(e.data)}).catch(function(e){t.$message({type:"error",message:e})}),this.$ajax.get("/hmu/tea/getAllDepartment").then(function(e){e.result||t.setAllDepartment(e.data)}).catch(function(e){t.$message({type:"error",message:e})})}}),components:{leftBar:function(t){return a.e(18).then(function(){var e=[a("9GhO")];t.apply(null,e)}.bind(this)).catch(a.oe)},headerBar:function(t){return a.e(19).then(function(){var e=[a("DQxd")];t.apply(null,e)}.bind(this)).catch(a.oe)}},created:function(){null!==sessionStorage.getItem("currentBar")&&(this.currentBar=sessionStorage.getItem("currentBar")),null!==sessionStorage.getItem("user")&&(this.user=sessionStorage.getItem("user"))},mounted:function(){this.getAllData()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"default-page"},[a("div",{staticClass:"msg-title"},[a("div",{staticClass:"my-header"},[t._m(0),t._v(" "),a("div",{staticClass:"user-name"},[a("i",{staticClass:"el-icon-user"}),t._v(" "),a("span",[t._v(t._s(t.user))]),t._v(" "),a("el-button",{attrs:{type:"text"}},[t._v("退出")])],1)])]),t._v(" "),a("el-container",{style:{padding:"56px 0 0 0"}},[a("el-aside",{attrs:{width:"100px"}},[a("left-bar",{attrs:{currentBar:t.currentBar},on:{changeCurrent:t.changeCurrent}})],1),t._v(" "),a("el-container",[a("el-header",{style:{padding:"0"}},[a("header-bar",{attrs:{currentBar:t.currentBar}})],1),t._v(" "),a("el-main",[a("router-view")],1)],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-logo"},[e("span",{staticClass:"logo"},[this._v("Logo")]),this._v(" "),e("span",{staticClass:"logo-name"},[this._v("考试信息后台管理系统")])])}]};var u=a("VU/8")(i,c,!1,function(t){a("grvX")},"data-v-b1bf80fa",null);e.default=u.exports},grvX:function(t,e){}});
//# sourceMappingURL=8.33b2c8223ffe8d31d728.js.map