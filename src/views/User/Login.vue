<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="userpassword">
                <el-input type="password" v-model="ruleForm.userpassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                <el-button type="" @click="goRegister">注册</el-button>
            </el-form-item>
        </el-form>
        <el-button @click="setS('L')">setLs</el-button>
        <el-button @click="getS('L')">getLs</el-button>
        <el-button @click="setS('S')">setSs</el-button>
        <el-button @click="getS('S')">getSs</el-button>
        <el-button @click="clears('L')">clearL</el-button>
        <el-button @click="clears('S')">clearS</el-button>
    </div>
</template>

<script>
import {check} from './../../utils/login'
import {setLstorage,setSstorage,getLstorage,getSstorage,clearStorage} from '../../utils/pStorge'
export default {
    data(){
        var validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            }else{
                callback()
            }
        };
        var validatePw = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }else{
                callback()
            }
        };
        return {
            ruleForm:{
                username:"",
                userpassword:""
            },
            rules: {
                username: [
                    { validator: validateName, trigger: 'blur' }
                ],
                userpassword: [
                    { validator: validatePw, trigger: 'blur' }
                ]
            }
            
        }
    },
    methods:{
        submitForm(formName) {
            let _ = this;
            _.$refs[formName].validate((valid) => {
                if (valid) {
                    check(_[formName].username,_[formName].userpassword,function(res){
                        if(res=="200"){
                            _.$router.push({path:"/home"})
                        }else if(res=='201'){
                            _.$message({
                                message: '密码错误',
                                type: 'error'
                            });
                        }else{
                            _.$message({
                                message: '用户不存在',
                                type: 'error'
                            });
                        }
                    })
                } else{
                    return false;
                }
            });
        },
        goRegister(){
            this.$router.push({path:"/user/register"})
        },
        setS(type){
            type === 'L'?setLstorage('ladmin','admin123456'):setSstorage("sadmin","admin123456");
        },
        getS(type){
            type === 'L'?console.log(getLstorage('ladmin')):console.log(getSstorage("sadmin"));
        },
        clears(type){
            clearStorage(type,type==='L'?'ladmin':'sadmin')
        }
    }
}
</script>

<style>

</style>