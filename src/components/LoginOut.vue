<template>
    <div>
        <i class="login-out-icon el-icon-switch-button" @click="dialogVisible = true"></i>
        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            :show-close=false
            custom-class="self-dialog"
            width="30%">
            <span>确认退出登录？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="logOut">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import {logout} from "@/utils/login"
export default {
    data(){
        return {
            dialogVisible:false
        }
    },
    methods:{
        logOut:function(){
            logout.call(this);
        }
    }
}
</script>

<style>
    .login-out-icon{font-size:22px;color: #fff;position:absolute;right: 20px;top: 22px;z-index: 1000;cursor: pointer;}
    .self-dialog .el-button--primary{background-color:#195190;border-color: #195190;}
</style>