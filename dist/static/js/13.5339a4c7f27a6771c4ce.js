webpackJsonp([13],{"2dZj":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{allLoading:!1,tableData:[],checkedStu:[],row:{}}},watch:{row:function(){this.getStudentMsg()}},methods:{goBack:function(){this.$router.push({name:"paperMaintenance"})},getStudentMsg:function(){var e=this;this.allLoading=!0,this.$ajax.post("/hmu/tea/getStudents",{grade:this.row.grade,type:this.row.type}).then(function(t){t.result?e.$message({type:"error",message:"获取学生列表失败, 请刷新重试"}):(e.tableData=t.data,e.getCheckedStu())}).catch(function(t){e.$message({type:"error",message:t})})},getCheckedStu:function(){var e=this;this.allLoading=!0,this.$ajax.get("/hmu/tea/getGradeByExam/"+this.row.examName).then(function(t){t.result?(e.$message({type:"error",message:"获取考试学生失败！"}),e.allLoading=!1):(e.tableData.forEach(function(a){for(var n=0;n<t.data.length;n++)a.stuId===t.data[n].stuId&&e.checkedStu.push(a)}),e.toggleSelection(e.checkedStu),e.allLoading=!1)}).catch(function(t){e.$message({type:"error",message:t})})},handleSelectionChange:function(e){this.checkedStu=e,console.log(this.checkedStu)},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},setStu:function(){var e=this,t=[];this.checkedStu.forEach(function(a){var n={stuId:a.stuId,examName:e.row.examName};t.push(n)}),this.$ajax.post("/hmu/tea/insertStuToExam",t).then(function(t){t.result?e.$message({type:"error",message:"安排考试学生失败！"}):(e.$message({type:"success",message:"安排考试学生成功！"}),e.goBack())}).catch(function(t){e.$message({type:"error",message:t})})}},beforeRouteEnter:function(e,t,a){a(function(t){e.params.row&&(t._data.row=e.params.row)})}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"set-stu"},[a("el-page-header",{attrs:{content:e.row.examName+"安排考试学生"},on:{back:e.goBack}}),e._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.toggleSelection()}}},[e._v("清空选择")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.setStu}},[e._v("保存")])],1),e._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.allLoading,expression:"allLoading"}],staticClass:"student-table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":{background:"rgb(235,244,248)"},"row-style":{background:"rgb(240,248,250)"},size:"small",height:"500px"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"学号",width:"200",prop:"stuId",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"姓名",width:"200",prop:"name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"类别",width:"200",prop:"type",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"入学年份",width:"200",prop:"grade",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"联系方式",prop:"phone"}})],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,s,!1,function(e){a("iis6")},"data-v-24b5825b",null);t.default=l.exports},iis6:function(e,t){}});
//# sourceMappingURL=13.5339a4c7f27a6771c4ce.js.map