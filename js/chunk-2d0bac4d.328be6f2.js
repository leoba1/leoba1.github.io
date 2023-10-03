(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bac4d"],{"392c":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{"margin-bottom":"5px"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入名字","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loadPost.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("el-select",{staticStyle:{"margin-left":"5px"},attrs:{filterable:"",placeholder:"请选择性别"},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},e._l(e.sexs,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:e.loadPost}},[e._v("查询")]),t("el-button",{attrs:{type:"success"},on:{click:e.resetParam}},[e._v("重置")]),t("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:e.add}},[e._v("新增")])],1),t("el-table",{attrs:{data:e.tableData,"header-cell-style":{background:"#f2f5fc",color:"#555555"},border:""}},[t("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),t("el-table-column",{attrs:{prop:"no",label:"账号",width:"180"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄",width:"80"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",width:"80"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-tag",{attrs:{type:1===s.row.sex?"primary":"success","disable-transitions":""}},[e._v(e._s(1===s.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"roleId",label:"角色",width:"120"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-tag",{attrs:{type:0===s.row.roleId?"danger":1===s.row.roleId?"primary":"success","disable-transitions":""}},[e._v(e._s(0===s.row.roleId?"超级管理员":1===s.row.roleId?"管理员":"用户"))])]}}])}),t("el-table-column",{attrs:{prop:"phone",label:"电话",width:"180"}}),t("el-table-column",{attrs:{prop:"operate",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{size:"small",type:"success"},on:{click:function(t){return e.mod(s.row)}}},[e._v("编辑")]),t("el-popconfirm",{staticStyle:{"margin-left":"5px"},attrs:{title:"确定删除吗？"},on:{confirm:function(t){return e.del(s.row.id)}}},[t("el-button",{attrs:{slot:"reference",size:"small",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),t("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[5,10,20,30],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),t("el-dialog",{attrs:{title:"提示",visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"账号",prop:"no"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),t("el-form-item",{attrs:{label:"名字",prop:"name"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1)],1),t("el-form-item",{attrs:{label:"性别"}},[t("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-radio",{attrs:{label:"1"}},[e._v("男")]),t("el-radio",{attrs:{label:"0"}},[e._v("女")])],1)],1),t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},r=[],o=(s("d9e2"),{name:"AdminManage",data(){let e=(e,t,s)=>{t>150?s(new Error("年龄输入过大")):s()},t=(e,t,s)=>{if(this.form.id)return s();this.$axios.get(this.$httpUrl+"/user/findByNo?no="+this.form.no).then(e=>e.data).then(e=>{200!=e.code?s():s(new Error("账号已经存在"))})};return{tableData:[],pageSize:10,pageNum:1,total:0,name:"",sex:"",sexs:[{value:"1",label:"男"},{value:"0",label:"女"}],centerDialogVisible:!1,form:{id:"",no:"",name:"",password:"",age:"",phone:"",sex:"0",roleId:"1"},rules:{no:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:8,message:"长度在 3 到 8 个字符",trigger:"blur"},{validator:t,trigger:"blur"}],name:[{required:!0,message:"请输入名字",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:8,message:"长度在 3 到 8 个字符",trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"},{min:1,max:3,message:"长度在 1 到 3 个位",trigger:"blur"},{pattern:/^([1-9][0-9]*){1,3}$/,message:"年龄必须为正整数字",trigger:"blur"},{validator:e,trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{resetForm(){this.$refs.form.resetFields()},del(e){console.log(e),this.$axios.get(this.$httpUrl+"/user/del?id="+e).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.loadPost()):this.$message({message:"操作失败！",type:"error"})})},mod(e){console.log(e),this.centerDialogVisible=!0,this.$nextTick(()=>{this.form.id=e.id,this.form.no=e.no,this.form.name=e.name,this.form.password="",this.form.age=e.age+"",this.form.sex=e.sex+"",this.form.phone=e.phone,this.form.roleId=e.roleId})},add(){this.centerDialogVisible=!0,this.$nextTick(()=>{this.resetForm()})},doSave(){this.$axios.post(this.$httpUrl+"/user/save",this.form).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.centerDialogVisible=!1,this.loadPost(),this.resetForm()):this.$message({message:"操作失败！",type:"error"})})},doMod(){this.$axios.post(this.$httpUrl+"/user/update",this.form).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.$message({message:"操作成功！",type:"success"}),this.centerDialogVisible=!1,this.loadPost(),this.resetForm()):this.$message({message:"操作失败！",type:"error"})})},save(){this.$refs.form.validate(e=>{if(!e)return console.log("error submit!!"),!1;this.form.id?this.doMod():this.doSave()})},handleSizeChange(e){console.log(`每页 ${e} 条`),this.pageNum=1,this.pageSize=e,this.loadPost()},handleCurrentChange(e){console.log("当前页: "+e),this.pageNum=e,this.loadPost()},loadGet(){this.$axios.get(this.$httpUrl+"/user/list").then(e=>e.data).then(e=>{console.log(e)})},resetParam(){this.name="",this.sex=""},loadPost(){this.$axios.post(this.$httpUrl+"/user/listPageC1",{pageSize:this.pageSize,pageNum:this.pageNum,param:{name:this.name,sex:this.sex,roleId:"1"}}).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.tableData=e.data,this.total=e.total):alert("获取数据失败")})}},beforeMount(){this.loadPost()}}),l=o,i=s("2877"),n=Object(i["a"])(l,a,r,!1,null,"6023de9b",null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0bac4d.328be6f2.js.map