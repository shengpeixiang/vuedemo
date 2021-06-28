<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.userAccount"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" :suffix-icon="pw_icon" v-model="form.userPassword" placeholder="有8位以上数字及字母组合"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.userEmail">
              <template slot="append">.com</template>
            </el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.userPhone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即注册</el-button>
            <el-button @click="goper">返回登陆</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {apost} from "@/axios/api"
import {check_pass,check_mobile,deep_copy} from "@/utils/utils"
import md5 from "js-md5"
export default {
    data() {
      return {
        form: {
          userAccount: "",
          userAvatarId: "",
          userEmail: "",
          userName: "",
          userPassword: "",
          userPhone: ""
        },
        pw_icon:""
      }
    },
    watch:{
      'form.userPassword'(val,oval){
        if(check_pass(val)){
          this.pw_icon = "el-icon-success main-color"
        }
      }
    },
    methods: {
      checkval(){
        let _ = this;
        if(!_.form.userAccount){
          _.$message({type:"warning",message:"请输入账号"});
          return !1;
        }else if(!_.form.userName){
          _.$message({type:"warning",message:"请输入用户名"});
          return !1;
        }else if(!check_pass(_.form.userPassword)){
          _.$message({type:"warning",message:"请输入正确格式密码(不小于8位字母跟数字组成)"});
          _.form.userPassword = "";
          return !1;
        }else if(_.form.userPhone!='' && !check_mobile(_.form.userPhone)){
          _.$message({type:"warning",message:"请输入正确的手机号"});
          return !1;
        }else{
          return !0;
        }
      },
      onSubmit() {
        let _ = this;
        if(_.checkval()){
          let pobj = deep_copy(_.form);
          pobj.userPassword = md5(pobj.userPassword);
          apost("/user/register",pobj).then((res)=>{
            if(res.code==200){
              _.$message({type:"ok",message: "恭喜注册成功!!!"})
              _.$router.push({path:"user/login",query:{userAccount:_.form.userAccount,userPassword:_.form.userPassword}})
            }else{
              _.$message({type:"warning",message: res.message || "注册失败!!!"})
            }
          })
        }
      },
      goper(){
        let _ = this;
        _.$router.back();
      }
    }
  }
</script>

<style>
  .main-color{color: #409EFF;}
  .account-input .el-form-item__content{display: flex;}
  .account-img{max-height: 40px;margin-left:20px;}
</style>