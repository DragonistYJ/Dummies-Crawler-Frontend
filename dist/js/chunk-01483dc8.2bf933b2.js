(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01483dc8","chunk-51266f28","chunk-2d0aeeba","chunk-2d0ab68f"],{"0bb4":function(e,t,n){"use strict";n.r(t),n.d(t,"getNoticeWayRequest",(function(){return o})),n.d(t,"findRequest",(function(){return r})),n.d(t,"saveRequest",(function(){return c}));var i=n("4020"),a="flowNotice/",o=function(e,t){i["default"].send(a+"getNoticeWay",null,e,t)},r=function(e,t,n){i["default"].send(a+"find",{id:e},t,n)},c=function(e,t,n){i["default"].send(a+"save",e,t,n)}},"14c9":function(e,t,n){"use strict";n.r(t),n.d(t,"listRequest",(function(){return o})),n.d(t,"startStopRequest",(function(){return r})),n.d(t,"cronRequest",(function(){return c})),n.d(t,"removeRequest",(function(){return s})),n.d(t,"runRequest",(function(){return l})),n.d(t,"logDownloadRequest",(function(){return u})),n.d(t,"otherRequest",(function(){return d})),n.d(t,"xmlRequest",(function(){return f})),n.d(t,"saveRequest",(function(){return m})),n.d(t,"historyRequest",(function(){return p})),n.d(t,"recoverHistoryRequest",(function(){return h}));n("7f7f");var i=n("4020"),a="spider/",o=function(e,t,n){i["default"].send(a+"list",e,t,n)},r=function(e,t,n,o){i["default"].send(a+(e?"start":"stop"),{id:t},n,o)},c=function(e,t,n){i["default"].send(a+"cron",e,t,n)},s=function(e,t,n){i["default"].send(a+"remove",{id:e},t,n)},l=function(e,t,n){i["default"].send(a+"run",{id:e},t,n)},u=function(e,t){window.open(a+"log/download?id="+e+"&taskId="+(t||""))},d=function(e,t,n){i["default"].send(a+"other",{id:e},t,n)},f=function(e,t,n){i["default"].send(a+"xml",{id:e},t,n,{responseType:"text"})},m=function(e,t,n){e.name=e.name||"未定义名称",i["default"].send(a+"save",e,t,n,{responseType:"text"})},p=function(e,t,n){i["default"].send(a+"history",{id:e},t,n)},h=function(e,t,n,o){i["default"].send(a+"history",{id:e,timestamp:t},n,o)}},c8b0:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",[n("div",{staticClass:"table-operator"},[n("a-form",{attrs:{layout:"inline"}},[n("a-form-item",{attrs:{label:"爬虫名称"}},[n("a-input",{attrs:{placeholder:"请输入爬虫名称"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1),n("a-form-item",[n("a-button",{attrs:{icon:"search",type:"primary"},on:{click:function(t){return e.listAction(1)}}},[e._v("查询")]),n("a-button",{attrs:{icon:"plus",type:"primary"},on:{click:function(t){return e.goSpiderDetailPage("")}}},[e._v("添加爬虫")])],1)],1)],1),n("a-table",{attrs:{columns:e.columns,"data-source":e.data.records,pagination:e.pagination,rowKey:"id"},on:{change:e.handleChange},scopedSlots:e._u([{key:"name",fn:function(t,i){return[n("a",{on:{click:function(t){return e.goSpiderDetailPage(i.id)}}},[e._v(e._s(t))])]}},{key:"cron",fn:function(t,i){return[n("a",{on:{click:function(n){return e.openCronModal(t,i)}}},[e._v(e._s(t||"编辑cron"))])]}},{key:"enabled",fn:function(t,i){return[n("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v(e._s(e.$set(i,"cronChecked","1"===t)))]),n("a-switch",{attrs:{loading:i.loading,"checked-children":"定时","un-checked-children":"长任务"},on:{change:function(t){return e.handleSwitch(t,i)}},model:{value:i.cronChecked,callback:function(t){e.$set(i,"cronChecked",t)},expression:"row.cronChecked"}})]}},{key:"runFinish",fn:function(t,i){return[n("a",{on:{click:function(t){return e.goTaskListPage(i.id)}}},[e._v(e._s(i.running)+"/"+e._s(i.executeCount?i.executeCount:0))])]}},{key:"operation",fn:function(t){return[n("a-tooltip",{attrs:{placement:"top",title:"通知设置"}},[n("a",{on:{click:function(n){return e.$refs.noticeModel.showDetail(t)}}},[n("a-icon",{attrs:{type:"bell"}})],1)]),n("a-divider",{attrs:{type:"vertical"}}),n("a-tooltip",{attrs:{placement:"top",title:"手动运行"}},[n("a-popconfirm",{attrs:{"cancel-text":"取消","ok-text":"确定",placement:"topRight",title:"您确定要手动运行一次该爬虫吗？"},on:{confirm:function(n){return e.runAction(t)}}},[n("a",[n("a-icon",{attrs:{type:"play-circle"}})],1)])],1),n("a-divider",{attrs:{type:"vertical"}}),n("a-tooltip",{attrs:{placement:"top",title:"日志"}},[n("a",{on:{click:function(n){return e.logDownloadAction(t)}}},[n("a-icon",{attrs:{type:"history"}})],1)]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{"cancel-text":"取消","ok-text":"确定",placement:"topRight",title:"您确定要删除此爬虫吗？"},on:{confirm:function(n){return e.removeAction(t)}}},[n("a-tooltip",{attrs:{placement:"top",title:"删除"}},[n("a",[n("a-icon",{attrs:{type:"delete"}})],1)])],1)]}}])}),n("cron-modal",{ref:"cronModal",attrs:{data:e.cron.value},on:{ok:e.handleCronModal}}),n("notice-model",{ref:"noticeModel"})],1)},a=[],o=n("14c9"),r=n("43f1"),c=n("ff78"),s={components:{CronModal:r["default"],NoticeModel:c["default"]},data:function(){return{columns:[{title:"序号",width:60,customRender:function(e,t,n){return"".concat(n+1)}},{title:"爬虫名称",width:100,dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"cron",dataIndex:"cron",width:80,scopedSlots:{customRender:"cron"}},{title:"定时/长任务",dataIndex:"enabled",width:110,scopedSlots:{customRender:"enabled"}},{title:"创建时间",dataIndex:"createDate",width:130},{title:"上次执行时间",dataIndex:"lastExecuteTime",width:130},{title:"运行中/已完成",dataIndex:"runFinish",width:130,scopedSlots:{customRender:"runFinish"}},{title:"下次执行时间",dataIndex:"nextExecuteTime",width:160},{title:"操作",dataIndex:"id",width:140,scopedSlots:{customRender:"operation"}}],data:{current:1,pages:1,records:[],searchCount:!0,size:10,total:1},queryParam:{page:1,limit:10,name:""},pagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30","40","50"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},cron:{value:"",row:{}}}},methods:{listAction:function(e){var t=this;e&&(this.queryParam.page=e,this.pagination.current=e),Object(o["listRequest"])(this.queryParam,(function(e){t.data=e,t.pagination.total=t.data.total,t.pagination.pageSize=t.data.size}))},handleChange:function(e){this.pagination=e,this.queryParam.page=this.pagination.current,this.queryParam.limit=this.pagination.pageSize,this.listAction()},handleSwitch:function(e,t){var n=this;if(t.cron){this.$set(t,"loading",!0);var i=this;Object(o["startStopRequest"])(e,t.id,(function(t){i.$message.success((e?"切换为定时任务":"切换为长任务")+"成功"),n.listAction(n.queryParam.page)}),(function(a){i.$message.error((e?"切换为定时任务":"切换为长任务")+"失败"),i.$set(t,"loading",!1),n.listAction(n.queryParam.page)}))}else this.$message.warn("cron表达式不能为空！"),this.$set(t,"cronChecked",!1)},openCronModal:function(e,t){this.cron.value=e,this.cron.row=t,this.$refs.cronModal.show()},handleCronModal:function(e){var t=this,n={id:this.cron.row.id,cron:e};Object(o["cronRequest"])(n,(function(e){t.$message.success("修改成功"),t.listAction(t.queryParam.page)}),(function(e){t.$message.error("修改失败")}))},removeAction:function(e){var t=this;Object(o["removeRequest"])(e,(function(e){t.$message.success("删除成功"),t.listAction(t.queryParam.page)}),(function(e){t.$message.error("删除失败")}))},runAction:function(e){var t=this;Object(o["runRequest"])(e,(function(e){t.$message.success("手动运行成功,后台运行中..."),t.listAction(t.queryParam.page)}),(function(e){t.$message.error("手动运行失败")}))},goTaskListPage:function(e){this.$router.push("/task_list/"+e)},logDownloadAction:function(e){Object(o["logDownloadRequest"])(e)},goSpiderDetailPage:function(e){this.$router.push("/spider_detail/"+e)}},mounted:function(){this.listAction(this.queryParam.page)}},l=s,u=n("2877"),d=Object(u["a"])(l,i,a,!1,null,null,null);t["default"]=d.exports},ff78:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{"confirm-loading":e.confirmLoading,visible:e.visible,width:800,title:"流程通知设置"},on:{cancel:e.closeDetail,ok:e.handleOk}},[n("a-form",{attrs:{form:e.form}},[n("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,help:"收件人,多个收件人用','隔开，每个收件人可添加单独通知标记,如不添加通知标记则使用默认配置通知方式，例：sms:13012345678,email:12345678@qq.com,13012345670",label:"收件人"}},[n("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["recipients",{initialValue:e.detail.recipients,rules:[{required:!0,message:"请输入收件人"}]}],expression:"[\n        'recipients',\n        { initialValue: detail.recipients, rules: [{ required: true, message: '请输入收件人' }] },\n      ]"}],attrs:{"auto-size":{minRows:4,maxRows:6},placeholder:"请输入收件人"}})],1),n("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"通知方式"}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["noticeWay",{initialValue:e.detail.noticeWay,rules:[{required:!0,message:"请选择通知方式"}]}],expression:"[\n        'noticeWay',\n        { initialValue: detail.noticeWay, rules: [{ required: true, message: '请选择通知方式' }] },\n      ]"}],attrs:{placeholder:"请选择通知方式"}},e._l(e.noticeSelectList,(function(t,i){return n("a-select-option",{key:i,attrs:{value:i}},[e._v(e._s(t))])})),1)],1),n("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"通知类型"}},[n("a-checkbox-group",{attrs:{options:e.checkboxOptions,value:e.checkboxValue},on:{change:e.onCheckboxChange}})],1)],1)],1)},a=[],o=(n("57e7"),n("ac6a"),n("f3e2"),n("0bb4")),r={name:"NoticeModel",data:function(){return{confirmLoading:!1,visible:!1,detail:{id:null,recipients:"",noticeWay:"",startNotice:0,exceptionNotice:0,endNotice:0},form:this.$form.createForm(this,{name:"detailFrom"}),formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},noticeSelectList:{},checkboxOptions:[{label:"流程开始",value:"startNotice"},{label:"流程异常",value:"exceptionNotice"},{label:"流程结束",value:"endNotice"}],checkboxValue:[]}},methods:{showDetail:function(e){this.visible=!0,this.checkboxValue=[],this.detail={id:null,recipients:"",noticeWay:"",startNotice:0,exceptionNotice:0,endNotice:0},e&&(this.detail.id=e,this.detailAction())},closeDetail:function(){this.visible=!1,this.confirmLoading=!1,this.form=this.$form.createForm(this,{name:"detailFrom"})},handleOk:function(e){var t=this;this.form.validateFields((function(e,n){e||(t.confirmLoading=!0,Object.assign(t.detail,n),Object(o["saveRequest"])(t.detail,(function(e){t.$message.success(e.message),t.closeDetail()}),t.closeDetail))}))},getNoticeWayAction:function(){var e=this;Object(o["getNoticeWayRequest"])((function(t){e.noticeSelectList=t.data}),(function(t){e.$message.error("获取通知方式类型失败")}))},detailAction:function(){var e=this;Object(o["findRequest"])(this.detail.id,(function(t){e.detail=t.data,e.checkboxOptions.forEach((function(t){"1"===e.detail[t.value]&&e.checkboxValue.push(t.value)}))}))},onCheckboxChange:function(e){var t=this;this.checkboxValue=e,this.checkboxOptions.forEach((function(n){t.detail[n.value]=e.indexOf(n.value)>-1?"1":"0"}))}},mounted:function(){this.getNoticeWayAction()}},c=r,s=n("2877"),l=Object(s["a"])(c,i,a,!1,null,null,null);t["default"]=l.exports}}]);