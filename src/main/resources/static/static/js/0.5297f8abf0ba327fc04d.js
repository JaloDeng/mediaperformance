webpackJsonp([0],{"4CyK":function(e,t){},E83B:function(e,t){},OQQf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={methods:{closeDialog:function(){this.$emit("closeNewsPreview")}},props:{dialogVisible:Boolean,url:String}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{width:"30%",title:"新闻预览",visible:e.dialogVisible,"before-close":e.closeDialog,"append-to-body":"",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("iframe",{attrs:{src:e.url,frameborder:"0",width:"100%",height:"500px"}})])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(r,i,!1,function(e){a("4CyK")},null,null).exports,s={data:function(){return{banEditScore:!0}},methods:{closeDialog:function(){this.$emit("closeAddView")},changeEditScoreId:function(e){if("手动打分"===e)this.banEditScore=!1,this.article.articleScoreRecord.score="";else{for(var t=this.selectScore,a=0;a<t.length;a++){var r=t[a];if(r.value===e){this.article.articleScoreRecord.score=r.score;break}}this.banEditScore=!0}},changeNewsTransferId:function(e){this.article.url="http://59.38.110.226:8086/ycAppService/preview.do?id="+e},save:function(){var e=this;this.article.newsTransferId&&""!==this.article.newsTransferId?this.putRequest("/article",this.article).then(function(t){e.closeDialog()}):this.$message("请选择素材")}},props:{article:Object,dialogVisible:Boolean,selectNewsType:Array,selectScore:Array}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{width:"60%",title:"添加",visible:e.dialogVisible,"before-close":e.closeDialog,"append-to-body":"",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"saveForm",attrs:{model:e.article}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{type:"flex"}},[a("el-form-item",{attrs:{label:"文章类型","label-width":"120px"}},[a("el-select",{staticClass:"input_width",attrs:{placeholder:"请选择",size:"mini"},model:{value:e.article.newsType,callback:function(t){e.$set(e.article,"newsType",t)},expression:"article.newsType"}},e._l(e.selectNewsType,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-form-item",{attrs:{label:"作者","label-width":"120px"}},[a("el-input",{staticClass:"input_width",attrs:{size:"mini"},model:{value:e.article.author,callback:function(t){e.$set(e.article,"author",t)},expression:"article.author"}})],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-form-item",{attrs:{label:"素材","label-width":"120px"}},[a("el-select",{staticClass:"input_width",attrs:{placeholder:"请选择",size:"mini"},on:{change:e.changeNewsTransferId},model:{value:e.article.newsTransferId,callback:function(t){e.$set(e.article,"newsTransferId",t)},expression:"article.newsTransferId"}},e._l(e.article.selectNewsTransferId,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-form-item",{attrs:{label:"等级分","label-width":"120px"}},[a("el-select",{staticClass:"select-uplift-height input_width",attrs:{placeholder:"请选择",size:"mini","popper-append-to-body":!1},on:{change:e.changeEditScoreId},model:{value:e.article.articleScoreRecord.scoreId,callback:function(t){e.$set(e.article.articleScoreRecord,"scoreId",t)},expression:"article.articleScoreRecord.scoreId"}},e._l(e.selectScore,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-form-item",{attrs:{label:"分数","label-width":"120px"}},[a("el-input",{staticClass:"input_width",attrs:{type:"number",size:"mini",readonly:e.banEditScore},model:{value:e.article.articleScoreRecord.score,callback:function(t){e.$set(e.article.articleScoreRecord,"score",t)},expression:"article.articleScoreRecord.score"}})],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-form-item",{attrs:{label:"备注","label-width":"120px"}},[a("el-input",{staticClass:"input_width",attrs:{type:"textarea",rows:"5",size:"mini",placeholder:"请输入备注"},model:{value:e.article.articleScoreRecord.remark,callback:function(t){e.$set(e.article.articleScoreRecord,"remark",t)},expression:"article.articleScoreRecord.remark"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("iframe",{attrs:{src:e.article.url,frameborder:"0",width:"100%",height:"500px"}})])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.save()}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.closeDialog()}}},[e._v("取消")])],1)],1)},staticRenderFns:[]};var o={components:{newsPreview:l,articleAdd:a("VU/8")(s,c,!1,function(e){a("SAnu")},null,null).exports},data:function(){return{newArticle:{id:"",exportType:"",newsType:"",newsSourceId:"",newsTransferId:"",newsTransferIds:"",paperPublishTime:"",appPublishTime:"",pageName:"",category:"",paperTitle:"",appTitle:"",author:"",editor:"",wordCount:"",url:"",authorScore:"",createUser:"",createTime:"",updateUser:"",updateTime:"",articleScoreRecord:{id:"",scoreId:"",score:"",remark:""},selectNewsTransferId:[]},addVisible:!1,banEditScore:!0,innerNewPreviewVisible:!1,isDisabledEditArticle:!0}},props:{article:Object,outerDialogVisible:Boolean,selectExportType:Array,selectNewsType:Array,selectScore:Array},methods:{addScoreRecordAuthorRow:function(e,t){e.push({id:"",author:"",percent:0})},closeAddView:function(){this.addVisible=!1,this.emptyNewArticle()},closeEdit:function(){this.$emit("closeEdit")},closeNewsPreview:function(){this.innerNewPreviewVisible=!1},changeEditScoreId:function(e){if("手动打分"===e)this.banEditScore=!1,this.article.articleScoreRecord.score="";else{for(var t=this.selectScore,a=0;a<t.length;a++){var r=t[a];if(r.value===e){this.article.articleScoreRecord.score=r.score;break}}this.banEditScore=!0}},emptyNewArticle:function(){this.newArticle={id:"",exportType:"",newsType:"",newsSourceId:"",newsTransferId:"",newsTransferIds:"",paperPublishTime:"",appPublishTime:"",pageName:"",category:"",paperTitle:"",appTitle:"",author:"",editor:"",wordCount:"",url:"",authorScore:"",createUser:"",createTime:"",updateUser:"",updateTime:"",articleScoreRecord:{id:"",scoreId:"",score:"",remark:""},selectNewsTransferId:[]}},delScoreRecordAuthorRow:function(e,t){t.splice(e,1)},formatAuthorScore:function(e,t,a,r){return e.percent&&this.article.articleScoreRecord.score?parseFloat(e.percent)*parseFloat(this.article.articleScoreRecord.score)*.01:""},isAuthorPercentSum100:function(){var e=this.article.articleScoreRecordAuthors,t=0;if(0===e.length)return!0;for(var a=0;a<e.length;a++){var r=e[a];t+=parseFloat(r.percent)}return 100===t},save:function(e){var t=this;"手动打分"!==this.article.articleScoreRecord.scoreId||""!==this.article.articleScoreRecord.score?this.isAuthorPercentSum100()?this.putRequest("/article",this.article).then(function(e){t.closeEdit()}):this.$message("请输入正确的分数占比"):this.$message("手动打分时请输入分数")},showAddView:function(){if(this.emptyNewArticle(),this.newArticle.exportType=this.article.exportType,this.newArticle.newsSourceId=this.article.newsSourceId,this.newArticle.paperPublishTime=this.article.paperPublishTime,this.newArticle.appPublishTime=this.article.appPublishTime,this.newArticle.pageName=this.article.pageName,this.newArticle.category=this.article.category,this.newArticle.paperTitle=this.article.paperTitle,this.newArticle.appTitle=this.article.appTitle,this.newArticle.editor=this.article.editor,this.newArticle.wordCount=0,this.article.newsTransferIds&&""!==this.article.newsTransferIds){for(var e=this.article.newsTransferIds.split(","),t=0;t<e.length;t++){var a=e[t],r={label:a,value:a};this.newArticle.selectNewsTransferId.push(r)}this.addVisible=!0}else this.$message("该记录不能添加素材")}},mounted:function(){}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"编辑","close-on-click-modal":!1,visible:e.outerDialogVisible,"before-close":e.closeEdit,width:"80%",center:""},on:{"update:visible":function(t){e.outerDialogVisible=t}}},[a("newsPreview",{attrs:{dialogVisible:e.innerNewPreviewVisible,url:e.article.url},on:{closeNewsPreview:e.closeNewsPreview}}),e._v(" "),a("el-form",{ref:"saveForm",attrs:{model:e.article}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类别","label-width":"120px"}},[a("el-select",{staticClass:"input_width",attrs:{placeholder:"请选择",size:"mini"},model:{value:e.article.exportType,callback:function(t){e.$set(e.article,"exportType",t)},expression:"article.exportType"}},e._l(e.selectExportType,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:e.isDisabledEditArticle}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文章类型","label-width":"120px"}},[a("el-select",{staticClass:"input_width",attrs:{placeholder:"请选择",size:"mini"},model:{value:e.article.newsType,callback:function(t){e.$set(e.article,"newsType",t)},expression:"article.newsType"}},e._l(e.selectNewsType,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:e.isDisabledEditArticle}})}),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"纸媒标题","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入纸媒标题",readonly:e.isDisabledEditArticle},model:{value:e.article.paperTitle,callback:function(t){e.$set(e.article,"paperTitle",t)},expression:"article.paperTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"APP标题","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入APP标题",readonly:e.isDisabledEditArticle},model:{value:e.article.appTitle,callback:function(t){e.$set(e.article,"appTitle",t)},expression:"article.appTitle"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"作者","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入作者"},model:{value:e.article.author,callback:function(t){e.$set(e.article,"author",t)},expression:"article.author"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"编辑","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入编辑",readonly:e.isDisabledEditArticle},model:{value:e.article.editor,callback:function(t){e.$set(e.article,"editor",t)},expression:"article.editor"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"纸媒发布时间","label-width":"120px"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",size:"mini",placeholder:"选择日期","value-format":"yyyy-MM-dd",readonly:e.isDisabledEditArticle},model:{value:e.article.paperPublishTime,callback:function(t){e.$set(e.article,"paperPublishTime",t)},expression:"article.paperPublishTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"APP发布时间","label-width":"120px"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"datetime",size:"mini",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss",readonly:e.isDisabledEditArticle},model:{value:e.article.appPublishTime,callback:function(t){e.$set(e.article,"appPublishTime",t)},expression:"article.appPublishTime"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"字数","label-width":"120px"}},[a("el-input",{staticClass:"input_width",attrs:{type:"number",min:0,size:"mini",readonly:e.isDisabledEditArticle},model:{value:e.article.wordCount,callback:function(t){e.$set(e.article,"wordCount",t)},expression:"article.wordCount"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"浏览量","label-width":"120px"}},[a("el-input",{staticClass:"input_width",attrs:{type:"number",size:"mini",readonly:e.isDisabledEditArticle},model:{value:e.article.clickCount,callback:function(t){e.$set(e.article,"clickCount",t)},expression:"article.clickCount"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"链接","label-width":"120px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入链接",readonly:e.isDisabledEditArticle},model:{value:e.article.url,callback:function(t){e.$set(e.article,"url",t)},expression:"article.url"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"等级分","label-width":"120px"}},[a("el-select",{staticClass:"select-uplift-height input_width",attrs:{placeholder:"请选择",size:"mini","popper-append-to-body":!1},on:{change:e.changeEditScoreId},model:{value:e.article.articleScoreRecord.scoreId,callback:function(t){e.$set(e.article.articleScoreRecord,"scoreId",t)},expression:"article.articleScoreRecord.scoreId"}},e._l(e.selectScore,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分数","label-width":"120px"}},[a("el-input",{staticClass:"input_width",attrs:{type:"number",size:"mini",readonly:e.banEditScore},model:{value:e.article.articleScoreRecord.score,callback:function(t){e.$set(e.article.articleScoreRecord,"score",t)},expression:"article.articleScoreRecord.score"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分数占比","label-width":"120px"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addScoreRecordAuthorRow(e.article.articleScoreRecordAuthors)}}},[e._v("添加")]),e._v(" "),a("el-table",{attrs:{data:e.article.articleScoreRecordAuthors,size:"mini",border:""}},[a("el-table-column",{attrs:{align:"center",width:"50",label:"序号",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"author",label:"作者"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini"},model:{value:t.row.author,callback:function(a){e.$set(t.row,"author",a)},expression:"scope.row.author"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"percent",label:"占比(%)"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticStyle:{width:"50%"},attrs:{size:"mini",max:"100",min:"0"},model:{value:t.row.percent,callback:function(a){e.$set(t.row,"percent",a)},expression:"scope.row.percent"}}),e._v(" %\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"分数",formatter:e.formatAuthorScore}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"150",label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},nativeOn:{click:function(a){return a.preventDefault(),e.delScoreRecordAuthorRow(t.$index,e.article.articleScoreRecordAuthors)}}},[e._v("删除")])]}}])})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"备注","label-width":"120px"}},[a("el-input",{attrs:{type:"textarea",rows:"5",size:"mini",placeholder:"请输入备注"},model:{value:e.article.articleScoreRecord.remark,callback:function(t){e.$set(e.article.articleScoreRecord,"remark",t)},expression:"article.articleScoreRecord.remark"}})],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(t){e.innerNewPreviewVisible=!0}}},[e._v("预览")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.showAddView()}}},[e._v("添加素材")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.save("saveForm")}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:e.closeEdit}},[e._v("取消")])],1)],1),e._v(" "),a("articleAdd",{attrs:{article:e.newArticle,dialogVisible:e.addVisible,selectNewsType:e.selectNewsType,selectScore:e.selectScore},on:{closeAddView:e.closeAddView}})],1)},staticRenderFns:[]};var p={components:{articleEditor:a("VU/8")(o,n,!1,function(e){a("E83B")},null,null).exports},data:function(){return{appSearchTime:[],articles:[],article:{id:"",exportType:"",newsType:"",newsSourceId:"",newsTransferId:"",newsTransferIds:"",paperPublishTime:"",appPublishTime:"",pageName:"",category:"",paperTitle:"",appTitle:"",author:"",editor:"",wordCount:"",url:"",authorScore:"",createUser:"",createTime:"",updateUser:"",updateTime:"",articleScoreRecord:{id:"",scoreId:"",score:"",remark:""},articleScoreRecordAuthors:[]},outerDialogVisible:!1,paperSearchTime:[],sizes:[100,200,500],searchParams:{exportType:"APP",newsType:"",paperStartTime:"",paperEndTime:"",appStartTime:"",appEndTime:"",paperTitle:"",appTitle:"",author:"",isScore:"",scoreId:"",pageNum:1,pageSize:100,orderBy:""},selectIsScore:[{value:"",label:"全部"},{value:-1,label:"未打分"},{value:1,label:"已打分"}],selectNewsType:[],selectScore:[],selectExportType:[],tableLoading:!1,total:1}},methods:{appSearchTimeChange:function(){this.appSearchTime&&this.appSearchTime.length>0?(this.searchParams.appStartTime=this.appSearchTime[0].substring(0,10)+" 00:00:00",this.searchParams.appEndTime=this.appSearchTime[1].substring(0,10)+" 23:59:59"):(this.searchParams.appStartTime="",this.searchParams.appEndTime="")},closeEdit:function(){this.outerDialogVisible=!1,this.emptyData(),this.load()},changeExportType:function(){this.currentTime(),this.searchParams.pageNum=1,this.load()},currentChange:function(e){this.searchParams.pageNum=e,this.load()},currentTime:function(){var e=new Date,t=new Date(e.getTime()-1728e5),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())).toISOString().slice(0,10),r=this.searchParams.exportType;r&&"APP"!==r&&"APPTOPAPER"!==r?(this.appSearchTime=[],this.paperSearchTime=[a,a]):(this.appSearchTime=[a+" 00:00:00",a+" 23:59:59"],this.paperSearchTime=[]),this.appSearchTimeChange(),this.paperSearchTimeChange()},del:function(e){var t=this;this.$confirm("此操作将永久删除["+e.appTitle+"]，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRequest("/article/"+e.id).then(function(e){e&&200===e.status&&e.data.success&&t.load()})}).catch(function(){})},emptyData:function(){this.article={id:"",exportType:"",newsType:"",newsSourceId:"",newsTransferId:"",newsTransferIds:"",paperPublishTime:"",appPublishTime:"",pageName:"",category:"",paperTitle:"",appTitle:"",author:"",editor:"",wordCount:"",url:"",authorScore:"",createUser:"",createTime:"",updateUser:"",updateTime:"",articleScoreRecord:{id:"",scoreId:"",score:"",remark:""},articleScoreRecordAuthors:[]}},exportExcel:function(){var e="/article/export/excel?";for(var t in this.searchParams)e=e+t+"="+this.searchParams[t]+"&";window.open(e)},getExportType:function(){var e=this;this.getRequest("/article/exportType").then(function(t){t.data&&t.data.data&&(e.selectExportType=t.data.data)})},getNewsType:function(){var e=this;this.getRequest("/article/newsType").then(function(t){t.data&&t.data.data&&(e.selectNewsType=t.data.data)})},getScore:function(){var e=this;this.getRequest("/article/score").then(function(t){if(t.data&&t.data.data)for(var a=t.data.data,r=0;r<a.length;r++){var i=a[r].id,l=a[r].score;"手动打分"===i&&(l="");var s={label:i+" "+l,value:i,score:l};e.selectScore.push(s)}})},load:function(){var e=this,t=this;this.tableLoading=!0,this.getRequest("/article",t.searchParams).then(function(a){e.tableLoading=!1,t.total=a.data.total,t.articles=a.data.data})},paperSearchTimeChange:function(){this.paperSearchTime&&this.paperSearchTime.length>0?(this.searchParams.paperStartTime=this.paperSearchTime[0],this.searchParams.paperEndTime=this.paperSearchTime[1]):(this.searchParams.paperStartTime="",this.searchParams.paperEndTime="")},search:function(){this.searchParams.pageNum=1,this.load()},sizeChange:function(e){this.searchParams.pageSize=e,this.load()},showEditView:function(e){var t=this;this.tableLoading=!0,this.getRequest("/article/"+e.id).then(function(e){t.article=e.data.data,t.article.articleScoreRecord||(t.article.articleScoreRecord={id:"",scoreId:"",score:"",remark:""})}),t.tableLoading=!1,t.outerDialogVisible=!0},tableSortChange:function(e){"descending"===e.order?this.searchParams.orderBy=e.prop+" DESC":this.searchParams.orderBy=e.prop+" ASC",this.load()}},mounted:function(){this.currentTime(),this.load(),this.getExportType(),this.getScore(),this.getNewsType()}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("新媒体绩效考核系统")]),e._v(" "),a("el-container",[a("el-header",[a("div",[e._v("\n        类型：\n        "),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择",size:"mini"},on:{change:e.changeExportType},model:{value:e.searchParams.exportType,callback:function(t){e.$set(e.searchParams,"exportType",t)},expression:"searchParams.exportType"}},e._l(e.selectExportType,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n        打分状态：\n        "),a("el-select",{staticStyle:{width:"90px"},attrs:{placeholder:"请选择",size:"mini"},on:{change:e.search},model:{value:e.searchParams.isScore,callback:function(t){e.$set(e.searchParams,"isScore",t)},expression:"searchParams.isScore"}},e._l(e.selectIsScore,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n        APP时间：\n        "),a("el-date-picker",{staticStyle:{width:"210px"},attrs:{type:"daterange","range-separator":"-","start-placeholder":e.searchParams.appStartTime,"end-placeholder":e.searchParams.appEndTime,size:"mini",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},on:{change:e.appSearchTimeChange},model:{value:e.appSearchTime,callback:function(t){e.appSearchTime=t},expression:"appSearchTime"}}),e._v("\n        见报日期：\n        "),a("el-date-picker",{staticStyle:{width:"210px"},attrs:{type:"daterange","range-separator":"-","start-placeholder":e.searchParams.paperStartTime,"end-placeholder":e.searchParams.paperEndTime,size:"mini",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},on:{change:e.paperSearchTimeChange},model:{value:e.paperSearchTime,callback:function(t){e.paperSearchTime=t},expression:"paperSearchTime"}}),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-download"},on:{click:e.exportExcel}},[e._v("导出")]),e._v(" "),a("br"),a("br"),e._v("\n        文章类型：\n        "),a("el-select",{staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:"请选择",size:"mini"},on:{change:e.search},model:{value:e.searchParams.newsType,callback:function(t){e.$set(e.searchParams,"newsType",t)},expression:"searchParams.newsType"}},e._l(e.selectNewsType,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n        APP标题：\n        "),a("el-input",{staticStyle:{width:"330px"},attrs:{clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchParams.appTitle,callback:function(t){e.$set(e.searchParams,"appTitle",t)},expression:"searchParams.appTitle"}}),e._v("\n        纸媒标题：\n        "),a("el-input",{staticStyle:{width:"330px"},attrs:{clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchParams.paperTitle,callback:function(t){e.$set(e.searchParams,"paperTitle",t)},expression:"searchParams.paperTitle"}}),e._v("\n        作者：\n        "),a("el-input",{staticStyle:{width:"160px"},attrs:{clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchParams.author,callback:function(t){e.$set(e.searchParams,"author",t)},expression:"searchParams.author"}})],1)]),e._v(" "),a("el-main",{staticStyle:{"padding-left":"0px","padding-top":"30px"}},[a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.articles,size:"mini",border:"","default-sort":{prop:"appPublishTime",order:"descending"}},on:{"sort-change":e.tableSortChange}},[a("el-table-column",{attrs:{align:"center",width:"50",label:"序号",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"120",prop:"paperPublishTime",label:"见报日期",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"150",prop:"appPublishTime",label:"APP发布时间",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",prop:"newsTypeLabel",label:"文章类型"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"350",prop:"paperTitle",label:"纸媒标题"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"350",prop:"appTitle",label:"APP标题"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"90",prop:"author",label:"作者",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"90",prop:"editor",label:"编辑",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"80",prop:"wordCount",label:"字数",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"90",prop:"clickCount",label:"浏览量",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"80",prop:"articleScoreRecord.scoreId",label:"等级"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",prop:"articleScoreRecord.score",label:"文章分数",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",prop:"authorScore",label:"作者分数"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"500",prop:"articleScoreRecord.remark",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"150",label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.showEditView(t.row)}}},[e._v("详情")]),e._v(" "),a("el-button",{attrs:{disabled:t.row.canDelete,size:"mini",type:"danger"},on:{click:function(a){return e.del(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("br"),e._v(" "),a("div",{staticStyle:{"justify-content":"space-between"}},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{background:"","page-sizes":e.sizes,"page-size":e.searchParams.pageSize,"current-page":e.searchParams.pageNum,layout:"sizes, prev, pager, next, jumper, ->, total",total:e.total},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)],1)])],1),e._v(" "),a("articleEditor",{attrs:{article:e.article,outerDialogVisible:e.outerDialogVisible,selectExportType:e.selectExportType,selectNewsType:e.selectNewsType,selectScore:e.selectScore},on:{closeEdit:e.closeEdit}})],1)},staticRenderFns:[]};var u=a("VU/8")(p,d,!1,function(e){a("yTP+")},null,null);t.default=u.exports},SAnu:function(e,t){},"yTP+":function(e,t){}});
//# sourceMappingURL=0.5297f8abf0ba327fc04d.js.map