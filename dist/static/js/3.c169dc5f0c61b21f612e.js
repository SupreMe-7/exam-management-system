webpackJsonp([3],{"6j9G":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Dd8w"),l=a.n(s),n=a("NYxO"),i={data:function(){return{allLoading:!0,loading:!0,radio:"1",addVisible:!1,dialogType:"",dialogVisible:!1,stuId:"",grade:"",type:null,currentPage:1,tableData:[],scoreData:[],stuAddMsg:{stuId:"",name:"",phone:"",grade:"",type:""}}},computed:l()({},Object(n.c)({typeList:"typeList",gradeList:"gradeList"})),methods:{handleClose:function(){this.stuAddMsg={stuId:"",name:"",phone:"",grade:"",type:""};var e=document.getElementById("fileupload");e&&(e.outerHTML=e.outerHTML)},searchStudent:function(){var e=this;this.stuId&&10===this.stuId.length?this.$ajax.get("/hmu/tea/getStudentByStuId/"+this.stuId).then(function(t){0===t.result?e.tableData=[t.data]:e.$message({type:"error",message:"查询失败"})}).catch(function(t){e.$message({type:"error",message:t})}):this.getStudentMsg()},checkStudent:function(e){var t=this;this.loading=!0,this.dialogVisible=!0,this.$ajax.get("/hmu/tea/getGradeByStuId/"+e.stuId).then(function(e){e.result||(t.scoreData=e.data,t.loading=!1)}).catch(function(e){t.$message({type:"error",message:e})})},handleCurrentChange:function(e){console.log("当前页: "+e)},getStudentMsg:function(){var e=this;this.$ajax.post("/hmu/tea/getStudents",{grade:this.grade,type:""===this.type?null:this.type}).then(function(t){0===t.result?(e.tableData=t.data,e.allLoading=!1):e.$message({type:"error",message:"获取学生列表失败, 请刷新重试"})}).catch(function(t){e.$message({type:"error",message:t})})},addStudent:function(){this.dialogType="add",this.addVisible=!0},uploadExcel:function(){var e=this,t=this.$refs.input.files,a=t[0].name.substring(t[0].name.lastIndexOf("."));if(".xls"===a||".xlsx"===a){if(t.length>0){var s=new FormData;s.append("file",t[0]),s.append("type",this.stuAddMsg.type),s.append("grade",this.stuAddMsg.grade),this.$ajax({url:"/hmu/tea/uploadStu",method:"post",data:s}).then(function(t){t.result?e.$message({type:"error",message:t.data.errMsg}):(e.$message({type:"success",message:"通过excel表格导入学生成功"}),e.addVisible=!1)}).catch(function(t){e.$message({type:"error",message:t})})}}else this.$message({type:"error",message:"导入数据格式必须是xls格式文件，请您调整格式后重新上传"})},addStu:function(){var e=this;for(var t in this.stuAddMsg)if(""===this.stuAddMsg[t])return void this.$message({type:"error",message:"学生信息不完整, 请填写完整"});this.$ajax.post("/hmu/tea/insertStu",this.stuAddMsg).then(function(t){t.result?e.$message({type:"error",message:"添加学生信息失败!"}):(e.addVisible=!1,e.$message({type:"success",message:"添加学生信息成功!"}),e.getStudentMsg())}).catch(function(t){e.$message({type:"error",message:t})})},editStudent:function(e){this.dialogType="edit",this.radio="1",this.addVisible=!0,this.stuAddMsg={stuId:e.stuId,name:e.name,phone:e.phone,grade:e.grade,type:e.type}},updateStu:function(){var e=this;this.$ajax.put("/hmu/tea/updateStu",this.stuAddMsg).then(function(t){t.result||(e.addVisible=!1,e.$message({type:"success",message:"更新学生信息成功"}),e.getStudentMsg())}).catch(function(t){e.$message({type:"error",message:t})})},removeStudent:function(e){var t=this;this.$confirm("此操作将永久删除该学生信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$ajax.delete("/hmu/tea/deleteStu/"+e.stuId).then(function(a){a.result?t.$message({type:"error",message:"删除失败!"}):(t.tableData=t.tableData.filter(function(t){return t.stuId!==e.stuId}),t.$message({type:"success",message:"删除成功!"}))}).catch(function(e){t.$message({type:"error",message:e})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}},mounted:function(){this.grade=(new Date).getFullYear(),this.allLoading=!0,this.getStudentMsg()}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"student-msg"},[a("el-row",{staticClass:"student-option"},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{placeholder:"请输入所查询学生学号"},model:{value:e.stuId,callback:function(t){e.stuId=t},expression:"stuId"}})],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-select",{attrs:{placeholder:"请选择学生类别",clearable:""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.typeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-select",{attrs:{placeholder:"请选择实习年份"},model:{value:e.grade,callback:function(t){e.grade=t},expression:"grade"}},e._l(e.gradeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.searchStudent}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addStudent}},[e._v("添加学生")])],1)],1),e._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.allLoading,expression:"allLoading"}],staticClass:"student-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":{background:"rgb(235,244,248)"},"row-style":{background:"rgb(240,248,250)"},size:"small",height:"500px"}},[a("el-table-column",{attrs:{label:"学号",width:"200",prop:"stuId",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"姓名",width:"200",prop:"name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"类别",width:"200",prop:"type",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"入学年份",width:"200",prop:"grade",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"联系方式",width:"200",prop:"phone",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.checkStudent(t.row)}}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.editStudent(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.removeStudent(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"total, prev, pager, next",total:50},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"学生详细考试成绩",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"score-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.scoreData,border:""}},[a("el-table-column",{attrs:{prop:"examTime",label:"考试时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"examName",label:"科目",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"成绩",width:"100",align:"center"}})],1)],1)]),e._v(" "),a("el-dialog",{attrs:{title:"add"===e.dialogType?"添加学生":"编辑学生",visible:e.addVisible,width:"30%"},on:{"update:visible":function(t){e.addVisible=t},close:e.handleClose}},["add"===e.dialogType?a("p",{staticClass:"chose-method"},[e._v("\n      请选择添加学生方式:\n      "),a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("直接添加")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("通过excel导入")])],1):e._e(),e._v(" "),"1"===e.radio?a("div",{staticClass:"add-in"},[a("el-row",[e._v("\n        学生类别:\n        "),a("el-select",{attrs:{placeholder:"请选择学生类别"},model:{value:e.stuAddMsg.type,callback:function(t){e.$set(e.stuAddMsg,"type",t)},expression:"stuAddMsg.type"}},e._l(e.typeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-row",[e._v("\n        入学年份:\n        "),a("el-select",{attrs:{placeholder:"请选择学生入学年份"},model:{value:e.stuAddMsg.grade,callback:function(t){e.$set(e.stuAddMsg,"grade",t)},expression:"stuAddMsg.grade"}},e._l(e.gradeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-row",[e._v("\n        学生学号:\n        "),a("el-input",{attrs:{placeholder:"请输入所添加学生学号",disabled:"edit"===e.dialogType},model:{value:e.stuAddMsg.stuId,callback:function(t){e.$set(e.stuAddMsg,"stuId",t)},expression:"stuAddMsg.stuId"}})],1),e._v(" "),a("el-row",[e._v("\n        学生姓名:\n        "),a("el-input",{attrs:{placeholder:"请输入所添加学生姓名"},model:{value:e.stuAddMsg.name,callback:function(t){e.$set(e.stuAddMsg,"name",t)},expression:"stuAddMsg.name"}})],1),e._v(" "),a("el-row",[e._v("\n        联系方式:\n        "),a("el-input",{attrs:{placeholder:"请输入所添加学生联系方式"},model:{value:e.stuAddMsg.phone,callback:function(t){e.$set(e.stuAddMsg,"phone",t)},expression:"stuAddMsg.phone"}})],1),e._v(" "),a("el-row",{attrs:{type:"flex",justify:"end"}},["add"===e.dialogType?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addStu}},[e._v("添加")]):e._e(),e._v(" "),"edit"===e.dialogType?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.updateStu}},[e._v("更新")]):e._e()],1)],1):a("div",{staticClass:"excel-in"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-select",{attrs:{placeholder:"请选择学生类别"},model:{value:e.stuAddMsg.type,callback:function(t){e.$set(e.stuAddMsg,"type",t)},expression:"stuAddMsg.type"}},e._l(e.typeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-select",{attrs:{placeholder:"请选择学生入学年份"},model:{value:e.stuAddMsg.grade,callback:function(t){e.$set(e.stuAddMsg,"grade",t)},expression:"stuAddMsg.grade"}},e._l(e.gradeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("div",{staticClass:"upload"},[a("input",{ref:"input",attrs:{type:"file",id:"fileupload"}}),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:""===e.stuAddMsg.grade||""===e.stuAddMsg.type,size:"mini"},on:{click:e.uploadExcel}},[e._v("上传")])],1)],1)])],1)},staticRenderFns:[]};var d=a("VU/8")(i,r,!1,function(e){a("tFv4"),a("iyZk")},"data-v-e8382d10",null);t.default=d.exports},iyZk:function(e,t){},tFv4:function(e,t){}});
//# sourceMappingURL=3.c169dc5f0c61b21f612e.js.map