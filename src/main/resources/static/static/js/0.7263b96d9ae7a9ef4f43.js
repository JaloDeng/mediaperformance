webpackJsonp([0],{Gms4:function(e,t){},OQQf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{appSearchTime:[],articles:[],article:{id:"",type:"",newsType:"",newsSourceId:"",newsTransferId:"",paperPublishTime:"",appPublishTime:"",pageName:"",category:"",paperTitle:"",appTitle:"",author:"",editor:"",wordCount:"",url:"",createUser:"",createTime:"",updateUser:"",updateTime:"",articleScoreRecord:{},articleScoreRecordAuthors:[]},articleScoreRecord:{id:"",scoreId:"",score:"",remark:""},innerNewPreviewVisible:!1,isDisabledEditArticle:!0,banEditScoreId:!1,banEditScore:!0,dialogTitle:"",outerDialogVisible:!1,paperSearchTime:[],sizes:[100,200,500],searchParams:{type:1,paperStartTime:"",paperEndTime:"",appStartTime:"",appEndTime:"",paperTitle:"",appTitle:"",author:"",isScore:"",scoreId:"",pageNum:1,pageSize:100,orderBy:""},selectIsScore:[{value:"",label:"全部"},{value:-1,label:"未打分"},{value:1,label:"已打分"}],selectScore:[],selectType:[{label:"只发APP",value:1},{label:"先发APP再发纸媒",value:2},{label:"先发纸媒再发APP",value:3},{label:"只发报纸",value:4}],tableLoading:!1,total:1}},methods:{addScoreRecordAuthorRow:function(e,t){e.push({id:"",author:"",percent:0})},appSearchTimeChange:function(){this.appSearchTime&&this.appSearchTime.length>0?(this.searchParams.appStartTime=this.appSearchTime[0].substring(0,10)+" 00:00:00",this.searchParams.appEndTime=this.appSearchTime[1].substring(0,10)+" 23:59:59"):(this.searchParams.appStartTime="",this.searchParams.appEndTime="")},cancelEdit:function(){this.outerDialogVisible=!1,this.emptyData(),this.load()},changeEditScoreId:function(e){if("手动打分"===e)this.banEditScore=!1,this.articleScoreRecord.score="";else{for(var t=this.selectScore,a=0;a<t.length;a++){var r=t[a];if(r.value===e){this.articleScoreRecord.score=r.score;break}}this.banEditScore=!0}},changeType:function(){this.currentTime(),this.searchParams.pageNum=1,this.load()},currentChange:function(e){this.searchParams.pageNum=e,this.load()},currentTime:function(){var e=new Date,t=new Date(e.getTime()-1728e5),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())).toISOString().slice(0,10),r=this.searchParams.type;r&&1!==r&&2!==r?(this.appSearchTime=[],this.paperSearchTime=[a,a]):(this.appSearchTime=[a+" 00:00:00",a+" 23:59:59"],this.paperSearchTime=[]),this.appSearchTimeChange(),this.paperSearchTimeChange()},del:function(e){var t=this;this.$confirm("此操作将永久删除["+e.appTitle+"]，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRequest("/article/"+e.id).then(function(e){e&&200===e.status&&e.data.success&&t.load()})}).catch(function(){})},delScoreRecordAuthorRow:function(e,t){t.splice(e,1)},emptyData:function(){this.article={id:"",type:"",newsType:"",newsSourceId:"",newsTransferId:"",paperPublishTime:"",appPublishTime:"",pageName:"",category:"",paperTitle:"",appTitle:"",author:"",editor:"",wordCount:"",url:"",createUser:"",createTime:"",updateUser:"",updateTime:"",articleScoreRecord:{},articleScoreRecordAuthors:[]},this.articleScoreRecord={id:"",scoreId:"",score:"",remark:""},this.isDisabledEditArticle=!0,this.banEditScoreId=!1},getScoreData:function(){var e=this;this.getRequest("/article/score").then(function(t){if(t.data&&t.data.data)for(var a=t.data.data,r=0;r<a.length;r++){var i=a[r].id,l=a[r].score;"手动打分"===i&&(l="");var c={label:i+" "+l,value:i,score:l};e.selectScore.push(c)}})},isAuthorPercentSum100:function(){var e=this.article.articleScoreRecordAuthors,t=0;if(0===e.length)return!0;for(var a=0;a<e.length;a++){var r=e[a];t+=parseFloat(r.percent)}return 100===t},load:function(){var e=this,t=this;this.tableLoading=!0,this.getRequest("/article",t.searchParams).then(function(a){e.tableLoading=!1,t.total=a.data.total,t.articles=a.data.data})},paperSearchTimeChange:function(){this.paperSearchTime&&this.paperSearchTime.length>0?(this.searchParams.paperStartTime=this.paperSearchTime[0],this.searchParams.paperEndTime=this.paperSearchTime[1]):(this.searchParams.paperStartTime="",this.searchParams.paperEndTime="")},save:function(e){var t=this;t.tableLoading=!0,"手动打分"!==t.articleScoreRecord.scoreId||""!==t.articleScoreRecord.score?(t.article.articleScoreRecord=t.articleScoreRecord,this.isAuthorPercentSum100()?this.putRequest("/article",t.article).then(function(e){t.tableLoading=!1,t.outerDialogVisible=!1,t.emptyData(),t.load()}):this.$message("请输入正确的分数占比")):this.$message("手动打分时请输入分数")},search:function(){this.searchParams.pageNum=1,this.load()},sizeChange:function(e){this.searchParams.pageSize=e,this.load()},showAddView:function(){this.dialogTitle="添加",this.outerDialogVisible=!0,this.isDisabledEditArticle=!1,this.banEditScoreId=!1},showEditView:function(e){var t=this,a=this;this.tableLoading=!0,this.isDisabledEditArticle=!0,this.getRequest("/article/"+e.id).then(function(e){a.article=e.data.data,a.article.articleScoreRecord&&(a.articleScoreRecord=a.article.articleScoreRecord,a.articleScoreRecord.scoreId&&""!==a.articleScoreRecord.scoreId&&(t.banEditScoreId=!0))}),a.tableLoading=!1,a.dialogTitle="编辑详情",a.outerDialogVisible=!0},tableSortChange:function(e){"descending"===e.order?this.searchParams.orderBy=e.prop+" DESC":this.searchParams.orderBy=e.prop+" ASC",this.load()}},mounted:function(){this.currentTime(),this.load(),this.getScoreData()}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("新媒体绩效考核系统")]),e._v(" "),a("el-container",[a("el-header",[a("div",[e._v("\n        类型：\n        "),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择",size:"mini"},on:{change:e.changeType},model:{value:e.searchParams.type,callback:function(t){e.$set(e.searchParams,"type",t)},expression:"searchParams.type"}},e._l(e.selectType,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n        打分状态：\n        "),a("el-select",{staticStyle:{width:"90px"},attrs:{placeholder:"请选择",size:"mini"},on:{change:e.search},model:{value:e.searchParams.isScore,callback:function(t){e.$set(e.searchParams,"isScore",t)},expression:"searchParams.isScore"}},e._l(e.selectIsScore,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n        APP时间：\n        "),a("el-date-picker",{staticStyle:{width:"210px"},attrs:{type:"daterange","range-separator":"-","start-placeholder":e.searchParams.appStartTime,"end-placeholder":e.searchParams.appEndTime,size:"mini",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},on:{change:e.appSearchTimeChange},model:{value:e.appSearchTime,callback:function(t){e.appSearchTime=t},expression:"appSearchTime"}}),e._v("\n        见报日期：\n        "),a("el-date-picker",{staticStyle:{width:"210px"},attrs:{type:"daterange","range-separator":"-","start-placeholder":e.searchParams.paperStartTime,"end-placeholder":e.searchParams.paperEndTime,size:"mini",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},on:{change:e.paperSearchTimeChange},model:{value:e.paperSearchTime,callback:function(t){e.paperSearchTime=t},expression:"paperSearchTime"}}),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v("APP标题：\n        "),a("el-input",{staticStyle:{width:"330px"},attrs:{clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchParams.appTitle,callback:function(t){e.$set(e.searchParams,"appTitle",t)},expression:"searchParams.appTitle"}}),e._v("\n        纸媒标题：\n        "),a("el-input",{staticStyle:{width:"330px"},attrs:{clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchParams.paperTitle,callback:function(t){e.$set(e.searchParams,"paperTitle",t)},expression:"searchParams.paperTitle"}}),e._v("\n        作者：\n        "),a("el-input",{staticStyle:{width:"160px"},attrs:{clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchParams.author,callback:function(t){e.$set(e.searchParams,"author",t)},expression:"searchParams.author"}})],1)]),e._v(" "),a("el-main",{staticStyle:{"padding-left":"0px","padding-top":"30px"}},[a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.articles,size:"mini",border:"","default-sort":{prop:"appPublishTime",order:"descending"}},on:{"sort-change":e.tableSortChange}},[a("el-table-column",{attrs:{align:"center",width:"50",label:"序号",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"120",prop:"paperPublishTime",label:"见报日期",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"150",prop:"appPublishTime",label:"APP发布时间",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"350",prop:"paperTitle",label:"纸媒标题"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"350",prop:"appTitle",label:"APP标题"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"90",prop:"author",label:"作者",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"90",prop:"editor",label:"编辑",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"80",prop:"wordCount",label:"字数",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"90",prop:"clickCount",label:"浏览量",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"80",prop:"articleScoreRecord.scoreId",label:"等级"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"80",prop:"articleScoreRecord.score",label:"分数",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"500",prop:"articleScoreRecord.remark",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"150",label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.showEditView(t.row)}}},[e._v("详情")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.del(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("br"),e._v(" "),a("div",{staticStyle:{"justify-content":"space-between"}},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{background:"","page-sizes":e.sizes,"page-size":e.searchParams.pageSize,"current-page":e.searchParams.pageNum,layout:"sizes, prev, pager, next, jumper, ->, total",total:e.total},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)],1)])],1),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,"close-on-click-modal":!1,visible:e.outerDialogVisible,"before-close":e.cancelEdit,width:"80%",center:""},on:{"update:visible":function(t){e.outerDialogVisible=t}}},[a("el-dialog",{attrs:{width:"30%",title:"新闻预览",visible:e.innerNewPreviewVisible,"append-to-body":"",center:""},on:{"update:visible":function(t){e.innerNewPreviewVisible=t}}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("iframe",{attrs:{src:e.article.url,frameborder:"0",width:"100%",height:"500px"}})])],1)],1),e._v(" "),a("el-form",{ref:"saveForm",attrs:{model:e.article}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类别","label-width":"120px"}},[a("el-select",{staticClass:"input_width",attrs:{placeholder:"请选择",size:"mini"},model:{value:e.article.type,callback:function(t){e.$set(e.article,"type",t)},expression:"article.type"}},e._l(e.selectType,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:e.isDisabledEditArticle}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"链接","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入链接",readonly:e.isDisabledEditArticle},model:{value:e.article.url,callback:function(t){e.$set(e.article,"url",t)},expression:"article.url"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"纸媒标题","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入纸媒标题",readonly:e.isDisabledEditArticle},model:{value:e.article.paperTitle,callback:function(t){e.$set(e.article,"paperTitle",t)},expression:"article.paperTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"APP标题","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入APP标题",readonly:e.isDisabledEditArticle},model:{value:e.article.appTitle,callback:function(t){e.$set(e.article,"appTitle",t)},expression:"article.appTitle"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"作者","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入作者"},model:{value:e.article.author,callback:function(t){e.$set(e.article,"author",t)},expression:"article.author"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"编辑","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入编辑",readonly:e.isDisabledEditArticle},model:{value:e.article.editor,callback:function(t){e.$set(e.article,"editor",t)},expression:"article.editor"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"纸媒发布时间","label-width":"120px"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",size:"mini",placeholder:"选择日期","value-format":"yyyy-MM-dd",readonly:e.isDisabledEditArticle},model:{value:e.article.paperPublishTime,callback:function(t){e.$set(e.article,"paperPublishTime",t)},expression:"article.paperPublishTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"APP发布时间","label-width":"120px"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"datetime",size:"mini",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss",readonly:e.isDisabledEditArticle},model:{value:e.article.appPublishTime,callback:function(t){e.$set(e.article,"appPublishTime",t)},expression:"article.appPublishTime"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"字数","label-width":"120px"}},[a("el-input",{staticClass:"input_width",attrs:{type:"number",min:0,size:"mini",readonly:e.isDisabledEditArticle},model:{value:e.article.wordCount,callback:function(t){e.$set(e.article,"wordCount",t)},expression:"article.wordCount"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"浏览量","label-width":"120px"}},[a("el-input",{staticClass:"input_width",attrs:{type:"number",size:"mini",readonly:e.isDisabledEditArticle},model:{value:e.article.clickCount,callback:function(t){e.$set(e.article,"clickCount",t)},expression:"article.clickCount"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"等级分","label-width":"120px"}},[a("el-select",{staticClass:"select-uplift-height input_width",attrs:{placeholder:"请选择",size:"mini","popper-append-to-body":!1},on:{change:e.changeEditScoreId},model:{value:e.articleScoreRecord.scoreId,callback:function(t){e.$set(e.articleScoreRecord,"scoreId",t)},expression:"articleScoreRecord.scoreId"}},e._l(e.selectScore,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分数","label-width":"120px"}},[a("el-input",{staticClass:"input_width",attrs:{type:"number",size:"mini",readonly:e.banEditScore},model:{value:e.articleScoreRecord.score,callback:function(t){e.$set(e.articleScoreRecord,"score",t)},expression:"articleScoreRecord.score"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分数占比","label-width":"120px"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addScoreRecordAuthorRow(e.article.articleScoreRecordAuthors)}}},[e._v("添加")]),e._v(" "),a("el-table",{attrs:{data:e.article.articleScoreRecordAuthors,size:"mini",border:""}},[a("el-table-column",{attrs:{align:"center",width:"50",label:"序号",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"author",label:"作者"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini"},model:{value:t.row.author,callback:function(a){e.$set(t.row,"author",a)},expression:"scope.row.author"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"percent",label:"占比(%)"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticStyle:{width:"50%"},attrs:{size:"mini",max:"100",min:"0"},model:{value:t.row.percent,callback:function(a){e.$set(t.row,"percent",a)},expression:"scope.row.percent"}}),e._v(" %\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"150",label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},nativeOn:{click:function(a){return a.preventDefault(),e.delScoreRecordAuthorRow(t.$index,e.article.articleScoreRecordAuthors)}}},[e._v("删除")])]}}])})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"备注","label-width":"120px"}},[a("el-input",{attrs:{type:"textarea",rows:"5",size:"mini",placeholder:"请输入备注"},model:{value:e.articleScoreRecord.remark,callback:function(t){e.$set(e.articleScoreRecord,"remark",t)},expression:"articleScoreRecord.remark"}})],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(t){e.innerNewPreviewVisible=!0}}},[e._v("预览")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.save("saveForm")}}},[e._v("确认")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:e.cancelEdit}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(r,i,!1,function(e){a("Gms4")},null,null);t.default=l.exports}});
//# sourceMappingURL=0.7263b96d9ae7a9ef4f43.js.map