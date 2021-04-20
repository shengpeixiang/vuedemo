<template>
    <div>
        <div class="out-nav">
            <LeftNav />
        </div>
        <div class="inner-con">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {islogin} from './../utils/login'
import LeftNav from "./../components/LeftNav"
export default {
    data(){
        return {}
    },
    components:{
        LeftNav
    },
    beforeCreate(){
        if(!islogin()){
            this.$router.push("/user/login")
        }
    }
}
</script>

<style>

</style>