<template>
    <div class="account-page">
        <el-table :data="tableData" ref="multipleTable"
            border stripe tooltip-effect="dark"
            style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="userAvatarUrl"
                label="头像">
            </el-table-column>
            <el-table-column
                prop="userAccount"
                label="账号">
            </el-table-column>
            <el-table-column
                prop="userName"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="userPhone"
                label="手机号">
            </el-table-column>
            <el-table-column
                prop="userEmail"
                label="邮箱">
            </el-table-column>
        </el-table>
        
    </div>
</template>

<script>
import {aget,apost} from "@/axios/api"
export default {
    data(){
        return {
            tableData:[],
            pageNum:1,
            pageSize:10,
            multipleSelection:[]
        }
    },
    created(){
        this.getlist();
    },
    methods:{
        getlist(){
            let _ = this,params = {
                userName:localStorage.getItem("userName"),
                isDeleted:false,
                pageNum:_.pageNum,
                pageSize:_.pageSize
            };
            aget("/user/list",params).then((res)=>{
                console.log(res);
                if(res.code == 200){
                    _.tableData = res.data.records;
                }
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    },
    mounted(){

    }
}
</script>

<style>
    .account-page{padding:1vh 1vw;}
</style>