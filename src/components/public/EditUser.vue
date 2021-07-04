<template>
    <div style="font-size:12px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item v-if="!form.userId" label="账号">
            <el-input v-model="form.userAccount"></el-input>
          </el-form-item>
          <el-form-item v-if="!form.userId" label="密码">
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
          <el-form-item label="头像">
            <el-upload
                class="avatar-uploader"
                action="/api/file/uploadFile"
                :show-file-list="false"
                :headers="uploadHeader"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {check_pass,check_mobile} from "@/utils/utils"
import {cloneDeep} from "lodash"
export default {
    props:["form"],
    data() {
      return {
        pw_icon:"",
        uploadHeader:{"Authorization":localStorage.getItem("token")},
        pageloading:null
      }
    },
    watch:{
      'form.userPassword'(val,oval){
        if(val){
          if(check_pass(val)){
            this.pw_icon = "el-icon-success main-color"
          }else{
            this.pw_icon = ""
          }
        }else{
          this.pw_icon = ""
        }
      }
    },
    methods: {
      checkval(){
        let _ = this,cansave = !0;
        if(!_.form.userAccount){
          _.$message({type:"warning",message:"请输入账号"});
          cansave = !1;
        }else if(!_.form.userName){
          _.$message({type:"warning",message:"请输入用户名"});
          cansave = !1;
        }else if(!_.form.userId){
          if(!check_pass(_.form.userPassword)){
            _.$message({type:"warning",message:"请输入正确格式密码(不小于8位字母跟数字组成)"});
            _.form.userPassword = "";
            cansave = !1;
          }
        }else if(_.form.userPhone!='' && !check_mobile(_.form.userPhone)){
          _.$message({type:"warning",message:"请输入正确的手机号"});
          cansave = !1;
        }else{
          cansave = !0;
        }
        return cansave;
      },
      beforeAvatarUpload(){
        let _ = this;
        _.pageloading = _.$loading({
          lock: true,
          text: 'Loading'
        })
      },
      handleAvatarSuccess(res,file){
        let _ = this;
        if(res.code === 200){
          _.form.imageUrl = res.data.fileBrowseUrl;
          _.form.userAvatarId = res.data.fileCode;
          _.pageloading.close();
          _.$message({type:"ok",message: "上传成功!!!"})
        }else{
           _.pageloading.close();
          _.$message({type:"warning",message:res.message || "上传成功!!!"})
        }
      },
      onSubmit() {
        let _ = this;
        if(_.checkval()){
            _.$emit("saveuser",cloneDeep(_.form))
        }
      }
    }
  }
</script>

<style>
  .main-color{color: #409EFF;}
  .el-form-item{margin-bottom: 10px;}
  .el-dialog__body{padding: 0 20px 10px 10px;}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width:80px;
    height:80px;
    line-height:80px;
    text-align: center;
  }
  .avatar {
    width:80px;
    height:80px;
    display: block;
  }
</style>