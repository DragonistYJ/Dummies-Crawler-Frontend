(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51266f28","chunk-2d0aeeba"],{"0bb4":function(e,t,i){"use strict";i.r(t),i.d(t,"getNoticeWayRequest",(function(){return n})),i.d(t,"findRequest",(function(){return l})),i.d(t,"saveRequest",(function(){return c}));var a=i("4020"),o="flowNotice/",n=function(e,t){a["default"].send(o+"getNoticeWay",null,e,t)},l=function(e,t,i){a["default"].send(o+"find",{id:e},t,i)},c=function(e,t,i){a["default"].send(o+"save",e,t,i)}},ff78:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{"confirm-loading":e.confirmLoading,visible:e.visible,width:800,title:"流程通知设置"},on:{cancel:e.closeDetail,ok:e.handleOk}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,help:"收件人,多个收件人用','隔开，每个收件人可添加单独通知标记,如不添加通知标记则使用默认配置通知方式，例：sms:13012345678,email:12345678@qq.com,13012345670",label:"收件人"}},[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["recipients",{initialValue:e.detail.recipients,rules:[{required:!0,message:"请输入收件人"}]}],expression:"[\n        'recipients',\n        { initialValue: detail.recipients, rules: [{ required: true, message: '请输入收件人' }] },\n      ]"}],attrs:{"auto-size":{minRows:4,maxRows:6},placeholder:"请输入收件人"}})],1),i("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"通知方式"}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["noticeWay",{initialValue:e.detail.noticeWay,rules:[{required:!0,message:"请选择通知方式"}]}],expression:"[\n        'noticeWay',\n        { initialValue: detail.noticeWay, rules: [{ required: true, message: '请选择通知方式' }] },\n      ]"}],attrs:{placeholder:"请选择通知方式"}},e._l(e.noticeSelectList,(function(t,a){return i("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(t))])})),1)],1),i("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"通知类型"}},[i("a-checkbox-group",{attrs:{options:e.checkboxOptions,value:e.checkboxValue},on:{change:e.onCheckboxChange}})],1)],1)],1)},o=[],n=(i("57e7"),i("ac6a"),i("f3e2"),i("0bb4")),l={name:"NoticeModel",data:function(){return{confirmLoading:!1,visible:!1,detail:{id:null,recipients:"",noticeWay:"",startNotice:0,exceptionNotice:0,endNotice:0},form:this.$form.createForm(this,{name:"detailFrom"}),formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}},noticeSelectList:{},checkboxOptions:[{label:"流程开始",value:"startNotice"},{label:"流程异常",value:"exceptionNotice"},{label:"流程结束",value:"endNotice"}],checkboxValue:[]}},methods:{showDetail:function(e){this.visible=!0,this.checkboxValue=[],this.detail={id:null,recipients:"",noticeWay:"",startNotice:0,exceptionNotice:0,endNotice:0},e&&(this.detail.id=e,this.detailAction())},closeDetail:function(){this.visible=!1,this.confirmLoading=!1,this.form=this.$form.createForm(this,{name:"detailFrom"})},handleOk:function(e){var t=this;this.form.validateFields((function(e,i){e||(t.confirmLoading=!0,Object.assign(t.detail,i),Object(n["saveRequest"])(t.detail,(function(e){t.$message.success(e.message),t.closeDetail()}),t.closeDetail))}))},getNoticeWayAction:function(){var e=this;Object(n["getNoticeWayRequest"])((function(t){e.noticeSelectList=t.data}),(function(t){e.$message.error("获取通知方式类型失败")}))},detailAction:function(){var e=this;Object(n["findRequest"])(this.detail.id,(function(t){e.detail=t.data,e.checkboxOptions.forEach((function(t){"1"===e.detail[t.value]&&e.checkboxValue.push(t.value)}))}))},onCheckboxChange:function(e){var t=this;this.checkboxValue=e,this.checkboxOptions.forEach((function(i){t.detail[i.value]=e.indexOf(i.value)>-1?"1":"0"}))}},mounted:function(){this.getNoticeWayAction()}},c=l,r=i("2877"),s=Object(r["a"])(c,a,o,!1,null,null,null);t["default"]=s.exports}}]);