<template>
    <div class="account-page">
        <el-table :data="tableData" ref="multipleTable"
            border stripe tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
                prop="userName"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="userAccount"
                label="账号">
            </el-table-column>
            <el-table-column
                prop="userPhone"
                label="手机号">
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态">
                <template slot-scope="scope">
                    <span v-if="scope.row.status==='ENABLE'">启用</span>
                    <span v-else>禁用</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="edituserinrow(scope.row.userId)">编辑</el-button>
                    <el-button
                        size="mini"
                        type="warning"
                        @click="updatapw(scope.row.userId,scope.row.userAccount)">修改密码</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="deleteuser(scope.row.userId)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row class="handel-row">
            <el-col :span="8">
                <el-button @click="openuser('add')">新增<i class="el-icon-plus el-icon--right"></i></el-button>
                <el-button @click="openuser('edit')">修改<i class="el-icon-edit el-icon--right"></i></el-button>
                <el-button @click="deleteuser">删除<i class="el-icon-delete el-icon--right"></i></el-button>
            </el-col>
            <el-col :span="16" class="page-con">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="datatotal">
                </el-pagination>
            </el-col>
        </el-row>

        <el-dialog
            :title="edit_title"
            :visible.sync="editopen"
            :close-on-click-modal="false"
            width="50%">
            <edit-user :form="editdata" @saveuser="saveuser"></edit-user>
        </el-dialog>
        <el-dialog
            title="修改密码"
            :visible.sync="openupdatepw"
            :close-on-click-modal="false"
            width="50%">
            <el-form label-width="80px">
                <el-form-item label="旧密码">
                    <el-input type="password" :suffix-icon="pw_icon1" v-model="pw.oldPw" placeholder="有8位以上数字及字母组合"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input type="password" :suffix-icon="pw_icon2" v-model="pw.newPw" placeholder="有8位以上数字及字母组合"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码">
                    <el-input type="password" :suffix-icon="pw_icon3" v-model="pw.newPwAgain" placeholder="有8位以上数字及字母组合"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="savenewpw">保存</el-button>
                </el-form-item>
                </el-form>
        </el-dialog>

    </div>
</template>

<script>
import {aget,apost} from "@/axios/api"
import {check_pass} from "@/utils/utils"
import EditUser from "@/components/public/EditUser"
import {logout} from "@/utils/login"
import md5 from "js-md5"
export default {
    components:{
        EditUser
    },
    data(){
        return {
            tableData:[],
            currentPage:1,
            pageSize:10,
            datatotal:0,
            isfirst:true,
            editdata:{
                userId:"",
                userAccount: "",
                userAvatarId: "",
                userEmail: "",
                userName: "",
                userPassword: "",
                userPhone: "",
                imageUrl:""
            },
            editopen:false,
            edit_title:"",
            openupdatepw:false,
            pw_icon1:"",
            pw_icon2:"",
            pw_icon3:"",
            pw:{
                oldPw:"",
                newPw:"",
                newPwAgain:""
            },
            editid:null
        }
    },
    created(){
        this.getlist();
    },
    watch:{
        'pw.oldPw'(val){
            if(val){
                if(check_pass(val)){
                    this.pw_icon1 = "el-icon-success main-color"
                }else{
                    this.pw_icon1 = ""
                }
            }else{
                this.pw_icon1 = ""
            }
        },
        'pw.newPw'(val){
            if(val){
                if(check_pass(val)){
                    this.pw_icon2 = "el-icon-success main-color"
                }else{
                    this.pw_icon2 = ""
                }
            }else{
                this.pw_icon2 = ""
            }
        },
        'pw.newPwAgain'(val){
            if(val){
                if(check_pass(val)){
                    this.pw_icon3 = "el-icon-success main-color"
                }else{
                    this.pw_icon3 = ""
                }
            }else{
                this.pw_icon3 = ""
            }
        }
        
    },
    methods:{
        getlist(){
            let _ = this,params = {
                isEnable:"ENABLE",
                pageNum:_.currentPage,
                pageSize:_.pageSize
            };
            aget("/user/list",params).then((res)=>{
                if(res.code == 200){
                    _.tableData = res.data.records;
                    if(_.isfirst){
                        _.datatotal = res.data.total
                    }
                }
            })
        },
        handleSizeChange(res){
            let _ = this;
            _.pageSize = res;
            _.getlist();
        },
        handleCurrentChange(res){
            let _ = this
            _.pageNum = res;
            _.getlist();
        },
        openuser(type){
            let _ = this
            if(type=='add'){
                _.edit_title = "新增用户"
                _.editdata={
                    userId:"",
                    userAccount: "",
                    userAvatarId: "",
                    userEmail: "",
                    userName: "",
                    userPassword: "",
                    userPhone: "",
                    imageUrl:""
                }
            }else if(type == 'edit'){
                _.edit_title = "修改用户"
            }
            _.edituser()
        },
        updatapw(id,account){
            let _ = this;
            _.openupdatepw=true;
            _.editid = id;
            _.editaccount = account;
        },
        savenewpw(){
            let _ = this;
            if(!check_pass(_.pw.oldPw)){
                _.$message({type:"warning",message:"旧密码格式有误"});
                return false;
            }
            if(!check_pass(_.pw.newPw)){
                _.$message({type:"warning",message:"新密码格式有误"});
                return false;
            }
            if(!check_pass(_.pw.newPwAgain)){
                _.$message({type:"warning",message:"确认新密码格式有误"});
                return false;
            }
            if(_.pw.newPwAgain !== _.pw.newPw){
                _.$message({type:"warning",message:"两次新密码输入不一致"});
                return false;
            }
            _.$confirm('确定要修改密码?', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                _.savepwrequest();
            }).catch(()=>{})
            
        },
        savepwrequest(){
            let _ = this;
            let pobj = {
                newUserPassword:md5(_.pw.newPw),
                oldUserPassword:md5(_.pw.oldPw),
                userId:_.editid
            }
            apost("/user/updatePassword",pobj).then((res)=>{
                if(res.code == 200){
                    let localaccount = localStorage.getItem("account");
                    if(_.editaccount !== localaccount){
                        _.$message({type:"ok",message:"密码修改成功"});
                        _.pw.oldPw = "";
                        _.pw.newPw = "";
                        _.pw.newPwAgain = "";
                        _.editid = null;
                        _.openupdatepw = false;
                    }else{
                        _.$message({type:"warning",message:"密码修改成功,即将重新登陆",onClose(){
                            logout.call(_);
                        }});
                    }
                    
                }else{
                    _.$message({type:"warning",message:res.message || "密码修改失败"});
                }
                
            })
        },
        edituser(){
            this.editopen = true;
        },
        saveuser(form){
            let _ = this;
            if(!form.userId){
                delete form.userId
            }
            if(!form.userId){
                form.userPassword = md5(form.userPassword);
                apost("/user/register",form).then((res)=>{
                    if(res.code==200){
                        _.$message({type:"ok",message: "保存成功!!!"});
                        _.editopen = false;
                        _.getlist();
                    }else{
                        _.$message({type:"warning",message: res.message || "保存失败!!!"})
                    }
                })
            }else{
                delete form.imageUrl;
                delete form.userAccount;
                apost("/user/update",form).then((res)=>{
                    if(res.code==200){
                        _.$message({type:"ok",message: "保存成功!!!"});
                        _.editopen = false;
                        _.getlist();
                    }else{
                        _.$message({type:"warning",message: res.message || "保存失败!!!"})
                    }
                })
            }
            
        },
        edituserinrow(uid){
            let _ = this;
            _.getinfobyid(uid);
        },
        getinfobyid(uid){
            let _ = this;
            aget("/user/detail/"+uid).then((res)=>{
                if(res.code == 200){
                    _.editdata={
                        userId:uid,
                        userAccount:res.data.userAccount,
                        userAvatarId:res.data.fileInfoResp.fileCode,
                        userEmail:res.data.userEmail,
                        userName:res.data.userName,
                        userPhone:res.data.userPhone,
                        imageUrl:res.data.fileInfoResp.fileUrl
                    }
                    _.openuser("edit");
                }else{
                    _.$message({type:"warning",message: res.message || "获取用户信息失败!!!"})
                }
            })
        },
        deleteuser(uid){
            let _ = this
            _.$confirm('确定要删除该账号?', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                aget("/user/deleted/"+uid).then((res)=>{
                    if(res.code === 200){
                        _.$message({type:"ok",message: "删除成功"});
                        _.getlist();
                    }else{
                        _.$message({type:"warning",message: res.message || "删除失败!!!"})
                        _.getlist();
                    }
                })
            }).catch(()=>{})
            
        }
        
    },
    mounted(){

    }
}
</script>

<style>
    .account-page{padding:1vh 1vw;}
    .handel-row{margin-top: 1.5vh;}
    .page-con{text-align: right;}
</style>