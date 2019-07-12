webpackJsonp([0],{OQQf:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){return{appSearchTime:[],articles:[],article:{id:"",type:"",newsSourceId:"",paperPublishTime:"",appPublishTime:"",page:"",category:"",articleType:"",paperTitle:"",appTitle:"",author:"",editor:"",wordCount:"",clickCount:"",url:"",level:"",score:"",createUser:"",createTime:"",updateUser:"",updateTime:""},dialogTitle:"",dialogVisible:!1,paperSearchTime:[],sizes:[100,200,500],searchParams:{appTitle:"",paperTitle:"",author:"",isScore:"",appStartTime:"",appEndTime:"",paperStartTime:"",paperEndTime:"",pageNum:1,pageSize:100,orderBy:"",type:1},selectIsScore:[{value:"",label:"全部"},{value:0,label:"未打分"},{value:1,label:"已打分"}],tableLoading:!1,total:1,urlSrc:""}},methods:{appSearchTimeChange:function(){this.appSearchTime&&this.appSearchTime.length>0?(this.searchParams.appStartTime=this.appSearchTime[0],this.searchParams.appEndTime=this.appSearchTime[1]):(this.searchParams.appStartTime="",this.searchParams.appEndTime="")},cancelEdit:function(){this.dialogVisible=!1,this.emptyData(),this.load()},currentChange:function(e){this.searchParams.pageNum=e,this.load()},del:function(e){this.$confirm("此操作将永久删除["+e.appTitle+"]，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){alert("点击删除")}).catch(function(){})},emptyData:function(){this.article={id:"",type:"",newsSourceId:"",paperPublishTime:"",appPublishTime:"",page:"",category:"",articleType:"",paperTitle:"",appTitle:"",author:"",editor:"",wordCount:"",clickCount:"",url:"",level:"",score:"",createUser:"",createTime:"",updateUser:"",updateTime:""}},load:function(){var e=this,a=this;this.tableLoading=!0,this.postRequest("/article/find",a.searchParams).then(function(t){e.tableLoading=!1,a.total=t.data.total,a.articles=t.data.data})},paperSearchTimeChange:function(){this.paperSearchTime&&this.paperSearchTime.length>0?(this.searchParams.paperStartTime=this.paperSearchTime[0],this.searchParams.paperEndTime=this.paperSearchTime[1]):(this.searchParams.paperStartTime="",this.searchParams.paperEndTime="")},save:function(e){this.dialogVisible=!1,this.emptyData(),this.load()},search:function(){this.searchParams.pageNum=1,this.load()},sizeChange:function(e){this.searchParams.pageSize=e,this.load()},showEditView:function(e){this.urlSrc=e.url,this.dialogTitle="详情",this.dialogVisible=!0},tableSortChange:function(e){"paperPublishTime"===e.prop?this.searchParams.orderBy="paper_publish_time":"appPublishTime"===e.prop?this.searchParams.orderBy="app_publish_time":"wordCount"===e.prop?this.searchParams.orderBy="word_count":this.searchParams.orderBy=e.prop,"descending"===e.order?this.searchParams.orderBy=this.searchParams.orderBy+" DESC":this.searchParams.orderBy=this.searchParams.orderBy+" ASC",this.load()}},mounted:function(){this.load()}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",[e._v("新媒体绩效考核系统")]),e._v(" "),t("el-container",[t("el-header",{staticStyle:{padding:"0px","justify-content":"space-between","align-items":"center"}},[t("div",{staticStyle:{display:"inline","text-align":"center"}},[t("el-radio-group",{attrs:{size:"small"},on:{change:e.search},model:{value:e.searchParams.type,callback:function(a){e.$set(e.searchParams,"type",a)},expression:"searchParams.type"}},[t("el-radio-button",{attrs:{label:"1"}},[e._v("只发APP")]),e._v(" "),t("el-radio-button",{attrs:{label:"2"}},[e._v("先发纸媒再发APP")]),e._v(" "),t("el-radio-button",{attrs:{label:"3"}},[e._v("先发APP再发纸媒")]),e._v(" "),t("el-radio-button",{attrs:{label:"4"}},[e._v("只发报纸")])],1),e._v("\n        　　"),t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),t("br"),t("br"),e._v("APP发布时间：\n        "),t("el-date-picker",{attrs:{type:"datetimerange","range-separator":"-","start-placeholder":e.searchParams.appStartTime,"end-placeholder":e.searchParams.appEndTime,size:"small",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.appSearchTimeChange},model:{value:e.appSearchTime,callback:function(a){e.appSearchTime=a},expression:"appSearchTime"}}),e._v("\n        纸媒发布日期：\n        "),t("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":e.searchParams.paperStartTime,"end-placeholder":e.searchParams.paperEndTime,size:"small",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},on:{change:e.paperSearchTimeChange},model:{value:e.paperSearchTime,callback:function(a){e.paperSearchTime=a},expression:"paperSearchTime"}}),e._v(" "),t("br"),t("br"),e._v("APP标题：\n        "),t("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",size:"mini"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.search(a)}},model:{value:e.searchParams.appTitle,callback:function(a){e.$set(e.searchParams,"appTitle",a)},expression:"searchParams.appTitle"}}),e._v("\n        纸媒标题：\n        "),t("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",size:"mini"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.search(a)}},model:{value:e.searchParams.paperTitle,callback:function(a){e.$set(e.searchParams,"paperTitle",a)},expression:"searchParams.paperTitle"}}),e._v("\n        作者：\n        "),t("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",size:"mini"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.search(a)}},model:{value:e.searchParams.author,callback:function(a){e.$set(e.searchParams,"author",a)},expression:"searchParams.author"}}),e._v("\n        打分状态：\n        "),t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.search},model:{value:e.searchParams.isScore,callback:function(a){e.$set(e.searchParams,"isScore",a)},expression:"searchParams.isScore"}},e._l(e.selectIsScore,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)]),e._v(" "),t("el-main",{staticStyle:{"padding-left":"0px","padding-top":"100px"}},[t("div",[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.articles,size:"mini",border:"","default-sort":{prop:"appPublishTime",order:"descending"}},on:{"sort-change":e.tableSortChange}},[t("el-table-column",{attrs:{align:"center",type:"index",width:"50",prop:"no",label:"序号"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",width:"150",prop:"paperPublishTime",label:"纸媒发布时间",sortable:"custom"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",width:"150",prop:"appPublishTime",label:"APP发布时间",sortable:"custom"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"paperTitle",label:"纸媒标题"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",prop:"appTitle",label:"APP标题"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",width:"130",prop:"author",label:"作者",sortable:"custom"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",width:"130",prop:"editor",label:"编辑",sortable:"custom"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",width:"130",prop:"wordCount",label:"字数",sortable:"custom"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.showEditView(a.row)}}},[e._v("详情")]),e._v(" "),t("el-button",{attrs:{hidden:"hidden",size:"small",type:"danger"},on:{click:function(t){return e.del(a.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("br"),e._v(" "),t("div",{staticStyle:{"justify-content":"space-between"}},[t("el-pagination",{staticStyle:{"text-align":"center"},attrs:{background:"","page-sizes":e.sizes,"page-size":e.searchParams.pageSize,"current-page":e.searchParams.pageNum,layout:"sizes, prev, pager, next, ->, total",total:e.total},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)],1)])],1),e._v(" "),t("el-dialog",{staticStyle:{padding:"0px"},attrs:{title:e.dialogTitle,"close-on-click-modal":!1,visible:e.dialogVisible,"before-close":e.cancelEdit,width:"80%"},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("el-form",{ref:"saveForm",staticStyle:{margin:"0px",padding:"0px"},attrs:{model:e.article}}),e._v(" "),t("div",[t("iframe",{attrs:{src:e.urlSrc,frameborder:"0",width:"90%",height:"500px"}})]),e._v(" "),t("span",{staticClass:"dialog-footer",staticStyle:{"text-align":"center",display:"block"},attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.save("saveForm")}}},[e._v("确认")]),e._v(" "),t("el-button",{attrs:{size:"mini"},on:{click:e.cancelEdit}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var s=t("VU/8")(r,i,!1,function(e){t("fCvm")},null,null);a.default=s.exports},fCvm:function(e,a){}});
//# sourceMappingURL=0.e91b99cd09ee7c71e7ec.js.map