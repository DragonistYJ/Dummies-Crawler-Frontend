(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b65c8c6","chunk-719926b2","chunk-2d0e26e0"],{"1f06":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",[a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{icon:"plus",type:"primary"},on:{click:function(t){return e.openDetail()}}},[e._v("添加数据源")])],1),a("a-table",{attrs:{columns:e.columns,"data-source":e.data.records,pagination:e.pagination,rowKey:"id"},on:{change:e.handleChange},scopedSlots:e._u([{key:"operation",fn:function(t){return[a("a",{on:{click:function(a){return e.openDetail(t)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{"cancel-text":"取消","ok-text":"确定",placement:"topRight",title:"您确定要删除此数据源吗？"},on:{confirm:function(a){return e.deleteAction(t)}}},[a("a",[e._v("删除")])])]}}])}),a("detail-model",{ref:"detailModel",on:{ok:e.listAction}})],1)},r=[],o=a("7f50"),n=a("eccf"),l={components:{detailModel:n["default"]},data:function(){return{columns:[{title:"序号",width:60,customRender:function(e,t,a){return"".concat(a+1)}},{title:"数据源名称",dataIndex:"name"},{title:"驱动",dataIndex:"driverClassName"},{title:"创建时间",dataIndex:"createDate"},{title:"操作",dataIndex:"id",width:120,scopedSlots:{customRender:"operation"}}],data:{current:1,pages:1,records:[],searchCount:!0,size:10,total:1},queryParam:{page:1,limit:10},pagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30","40","50"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},detailVisible:!1}},methods:{listAction:function(){var e=this;Object(o["listRequest"])(this.queryParam,(function(t){e.data=t,e.pagination.total=e.data.total,e.pagination.pageSize=e.data.size}))},deleteAction:function(e){var t=this;Object(o["deleteRequest"])(e,(function(e){t.$message.success(e.message),t.listAction()}),(function(e){t.$message.error(e.message),t.listAction()}))},handleChange:function(e){this.pagination=e,this.queryParam.page=this.pagination.current,this.queryParam.limit=this.pagination.pageSize,this.listAction()},openDetail:function(e){this.$refs.detailModel.showDetail(e)}},mounted:function(){this.listAction()}},s=l,c=a("2877"),d=Object(c["a"])(s,i,r,!1,null,null,null);t["default"]=d.exports},"7f50":function(e,t,a){"use strict";a.r(t),a.d(t,"listRequest",(function(){return r})),a.d(t,"deleteRequest",(function(){return o})),a.d(t,"detailRequest",(function(){return n})),a.d(t,"saveRequest",(function(){return l})),a.d(t,"testRequest",(function(){return s})),a.d(t,"allRequest",(function(){return c}));var i=a("4020"),r=function(e,t,a){i["default"].send("datasource/list",e,t,a)},o=function(e,t,a){i["default"].send("datasource/delete",{id:e},t,a)},n=function(e,t,a){i["default"].send("datasource/get",{id:e},t,a)},l=function(e,t,a){delete e.createDate,i["default"].send("datasource/save",e,t,a)},s=function(e,t,a){delete e.createDate,i["default"].send("datasource/test",e,t,a)},c=function(e,t){i["default"].send("datasource/all",null,e,t)}},eccf:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,width:700,title:"数据源"},on:{cancel:e.closeDetail}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"数据源名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.detail.name,rules:[{required:!0,message:"请输入数据源名称"}]}],expression:"[\n        'name',\n        { initialValue: detail.name, rules: [{ required: true, message: '请输入数据源名称' }] },\n      ]"}],attrs:{placeholder:"请输入数据源名称"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"驱动"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["driverClassName",{initialValue:e.detail.driverClassName,rules:[{required:!0,message:"请选择驱动"}]}],expression:"[\n        'driverClassName',\n        { initialValue: detail.driverClassName, rules: [{ required: true, message: '请选择驱动' }] },\n      ]"}],attrs:{placeholder:"请选择驱动"}},[a("a-select-option",{attrs:{value:"com.mysql.jdbc.Driver"}},[e._v("com.mysql.jdbc.Driver")]),a("a-select-option",{attrs:{value:"org.hsqldb.jdbcDriver"}},[e._v("org.hsqldb.jdbcDriver")]),a("a-select-option",{attrs:{value:"org.postgresql.Driver"}},[e._v("org.postgresql.Driver")]),a("a-select-option",{attrs:{value:"oracle.jdbc.driver.OracleDriver"}},[e._v("oracle.jdbc.driver.OracleDriver")]),a("a-select-option",{attrs:{value:"com.ibm.db2.jcc.DB2Driver"}},[e._v("com.ibm.db2.jcc.DB2Driver")]),a("a-select-option",{attrs:{value:"com.microsoft.sqlserver.jdbc.SQLServerDriver"}},[e._v("com.microsoft.sqlserver.jdbc.SQLServerDriver")]),a("a-select-option",{attrs:{value:"com.sybase.jdbc3.jdbc.SybDriver"}},[e._v("com.sybase.jdbc3.jdbc.SybDriver")])],1)],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"数据库连接"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jdbcUrl",{initialValue:e.detail.jdbcUrl,rules:[{required:!0,message:"请输入数据库连接"}]}],expression:"[\n        'jdbcUrl',\n        { initialValue: detail.jdbcUrl, rules: [{ required: true, message: '请输入数据库连接' }] },\n      ]"}],attrs:{placeholder:"请输入数据库连接"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"用户名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{initialValue:e.detail.username,rules:[{required:!0,message:"请输入用户名"}]}],expression:"[\n        'username',\n        { initialValue: detail.username, rules: [{ required: true, message: '请输入用户名' }] },\n      ]"}],attrs:{placeholder:"请输入用户名"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"密码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{initialValue:e.detail.password,rules:[{required:!0,message:"请输入密码"}]}],expression:"[\n        'password',\n        { initialValue: detail.password, rules: [{ required: true, message: '请输入密码' }] },\n      ]"}],attrs:{placeholder:"请输入密码"}})],1)],1),a("template",{slot:"footer"},[a("a-button",{on:{click:e.closeDetail}},[e._v("取消")]),a("a-button",{attrs:{loading:e.testLoading,type:"primary"},on:{click:e.handleTest}},[e._v("测试连接")]),a("a-button",{attrs:{loading:e.confirmLoading,type:"primary"},on:{click:e.handleOk}},[e._v("确定")])],1)],2)},r=[],o=a("7f50"),n={name:"detailModel",data:function(){return{confirmLoading:!1,testLoading:!1,visible:!1,detail:{id:null,name:"",value:"",description:""},form:this.$form.createForm(this,{name:"detailFrom"}),formItemLayout:{labelCol:{span:6},wrapperCol:{span:14}}}},methods:{showDetail:function(e){this.visible=!0,this.detail={id:null,name:"",driverClassName:"",jdbcUrl:"",username:"",password:""},e&&(this.detail.id=e,this.detailAction())},closeDetail:function(){this.visible=!1,this.confirmLoading=!1,this.testLoading=!1,this.form=this.$form.createForm(this,{name:"detailFrom"}),this.$emit("ok")},handleOk:function(e){var t=this;this.form.validateFields((function(e,a){e||(t.confirmLoading=!0,Object.assign(t.detail,a),Object(o["saveRequest"])(t.detail,(function(e){t.$message.success("成功"),t.closeDetail()}),t.closeDetail))}))},detailAction:function(){var e=this;Object(o["detailRequest"])(this.detail.id,(function(t){e.detail=t}))},handleTest:function(){var e=this;this.form.validateFields((function(t,a){t||(e.testLoading=!0,Object.assign(e.detail,a),Object(o["testRequest"])(e.detail,(function(t){e.$notification.info({message:"测试结果",description:t.message,duration:5}),e.testLoading=!1}),(function(t){e.testLoading=!1})))}))}}},l=n,s=a("2877"),c=Object(s["a"])(l,i,r,!1,null,null,null);t["default"]=c.exports}}]);