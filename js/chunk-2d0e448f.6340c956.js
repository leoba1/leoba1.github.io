(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e448f"],{9024:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{"margin-bottom":"5px"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入物品名","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loadPost.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("el-select",{staticStyle:{"margin-left":"5px"},attrs:{placeholder:"请选择仓库"},model:{value:e.storage,callback:function(t){e.storage=t},expression:"storage"}},e._l(e.storageData,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("el-select",{staticStyle:{"margin-left":"5px"},attrs:{placeholder:"请选择分类"},model:{value:e.goodstype,callback:function(t){e.goodstype=t},expression:"goodstype"}},e._l(e.goodstypeData,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:e.loadPost}},[e._v("查询")]),t("el-button",{attrs:{type:"success"},on:{click:e.resetParam}},[e._v("重置")])],1),t("el-table",{attrs:{data:e.tableData,"header-cell-style":{background:"#f2f5fc",color:"#555555"},border:""}},[t("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),t("el-table-column",{attrs:{prop:"goodsname",label:"物品名",width:"180"}}),t("el-table-column",{attrs:{prop:"storagename",label:"仓库",width:"180"}}),t("el-table-column",{attrs:{prop:"goodstypename",label:"分类",width:"180"}}),t("el-table-column",{attrs:{prop:"adminname",label:"操作人",width:"180"}}),t("el-table-column",{attrs:{prop:"username",label:"申请人",width:"180"}}),t("el-table-column",{attrs:{prop:"count",label:"数量",width:"180"}}),t("el-table-column",{attrs:{prop:"createtime",label:"操作时间",width:"180"}}),t("el-table-column",{attrs:{prop:"remark",label:"备注"}})],1),t("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[5,10,20,30],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},l=[],s={name:"RecordManage",data(){return{user:JSON.parse(sessionStorage.getItem("CurUser")),storageData:[],goodstypeData:[],tableData:[],pageSize:10,pageNum:1,total:0,name:"",storage:"",goodstype:"",centerDialogVisible:!1,form:{id:"",name:"",storage:"",goodstype:"",count:"",remark:""}}},methods:{formatStorage(e){let t=this.storageData.find(t=>t.id==e.storage);return t&&t.name},formatGoodstype(e){let t=this.goodstypeData.find(t=>t.id==e.goodstype);return t&&t.name},resetForm(){this.$refs.form.resetFields()},handleSizeChange(e){console.log(`每页 ${e} 条`),this.pageNum=1,this.pageSize=e,this.loadPost()},handleCurrentChange(e){console.log("当前页: "+e),this.pageNum=e,this.loadPost()},resetParam(){this.name="",this.storage="",this.goodstype=""},loadStorage(){this.$axios.get(this.$httpUrl+"/storage/list").then(e=>e.data).then(e=>{console.log(e),200==e.code?this.storageData=e.data:alert("获取数据失败")})},loadGoodstype(){this.$axios.get(this.$httpUrl+"/goodstype/list").then(e=>e.data).then(e=>{console.log(e),200==e.code?this.goodstypeData=e.data:alert("获取数据失败")})},loadPost(){this.$axios.post(this.$httpUrl+"/record/listPage",{pageSize:this.pageSize,pageNum:this.pageNum,param:{name:this.name,goodstype:this.goodstype+"",storage:this.storage+"",roleId:this.user.roleId+"",userId:this.user.id+""}}).then(e=>e.data).then(e=>{console.log(e),200==e.code?(this.tableData=e.data,this.total=e.total):alert("获取数据失败")})}},beforeMount(){this.loadStorage(),this.loadGoodstype(),this.loadPost()}},r=s,n=a("2877"),i=Object(n["a"])(r,o,l,!1,null,"3adeeffa",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0e448f.6340c956.js.map