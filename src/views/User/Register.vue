<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注册提交</el-button>
                <el-button @click="backlogin">返回登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
     data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
            callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkName, trigger: 'blur' }
          ]
        },
        timeout:null
      };
    },
    methods: {
      submitForm(formName) {
          var _ = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            _.$message({
                message:"注册成功",
                type:"success"
            })
            _.timeout = setTimeout(() => {
                _.$router.push({path:"/user"})
            }, 3000);
          } else {
            _.$message({
                message:"信息不全",
                type:"warning"
            })
          }
        });
      },
      backlogin() {
        this.$router.push({path:"/user"})
      }
    },
    beforeDestroy(){
        clearTimeout(this.timeout);
        this.timeout = null;
    }
  }
</script>

<style>

</style>