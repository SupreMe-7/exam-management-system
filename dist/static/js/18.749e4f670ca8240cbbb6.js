webpackJsonp([18],{"9GhO":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{leftBarList:[{icon:"el-icon-user-solid",message:"学生信息",pathName:"studentMsg"},{icon:"el-icon-document",message:"试卷分析",pathName:"testMsg"},{icon:"el-icon-edit-outline",message:"试卷管理",pathName:"paperMaintenance"},{icon:"el-icon-folder",message:"题库维护",pathName:"questionsMaintenance"},{icon:"el-icon-s-order",message:"课程管理",pathName:"courseManagement"}]}},props:["currentBar"],methods:{toMsgPage:function(e,t){this.$emit("changeCurrent",t),sessionStorage.setItem("currentBar",t),this.$router.push({name:e})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left-bar"},e._l(e.leftBarList,function(t,n){return a("div",{key:n,class:t.message===e.currentBar?"item active":"item",on:{click:function(a){return e.toMsgPage(t.pathName,t.message)}}},[a("i",{class:t.icon}),e._v(" "),a("p",{staticClass:"nav"},[e._v(e._s(t.message))])])}),0)},staticRenderFns:[]};var r=a("VU/8")(n,s,!1,function(e){a("rva2")},"data-v-8180fca0",null);t.default=r.exports},rva2:function(e,t){}});
//# sourceMappingURL=18.749e4f670ca8240cbbb6.js.map