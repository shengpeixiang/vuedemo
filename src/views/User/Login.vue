<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.userAccount"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.userPassword" placeholder="有8位以上数字及字母组合"></el-input>
            </el-form-item>
            <el-form-item class="validate-con" label="验证码">
                <el-input v-model="form.validateCode"></el-input>
                <img :src="validatesrc" @click="getvalidate" class="validate-img">
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="checkLogin">登陆</el-button>
                <el-button type="" @click="goRegister">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {apost,aget} from "@/axios/api"
import {deep_copy} from "@/utils/utils"
import md5 from "js-md5"
export default {
    data(){
        return {
            form:{
                userAccount:"",
                userPassword:"",
                validateCode:""
            },
            validatesrc:""
        }
    },
    created(){
        let _ = this;
        _.getvalidate();
    },
    methods:{
        checkLogin(){
            let _ = this;
            if(!_.form.userAccount){
                _.$message({type:"warning",message:"请输入账号！！！"})
            }else if(!_.form.userPassword){
                _.$message({type:"warning",message:"请输入密码！！！"})
            }else if(!_.form.validateCode){
                _.$message({type:"warning",message:"请输入验证码！！！"})
            }else{
                _.submitForm();
            }
        },
        getvalidate(){
            let _ = this;
            aget("/validate/getValidateCodeBase64").then((res)=>{
                if(res.code == 200){
                    _.validatesrc = res.data.validateCode;
                }else{
                    _.$message({type:"warning",message:res.msg || "获取验证码失败"});
                }
            })
        },
        submitForm() {
            let _ = this,pobj=deep_copy(_.form);
            pobj.userPassword = md5(pobj.userPassword);
            apost("/user/login",pobj).then((res)=>{
                if(res.code == 200){
                    localStorage.setItem("token",res.data.token);
                    localStorage.setItem("account",res.data.userAccount);
                    _.$store.state.user = res.data;
                    _.$router.push({path:"/home/graph/yungraph"});
                }else{
                    _.$message({type:"warning",message:res.message || "登陆出错"});
                    _.getvalidate();
                }
            })
        },
        goRegister(){
            this.$router.push({path:"/user/register"})
        }
    }
}
</script>

<style>
    .validate-con .el-form-item__content{display: flex;}
    .validate-img{height: 40px;margin-left: 15px;cursor: pointer;}
</style>