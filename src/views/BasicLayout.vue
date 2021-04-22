<template>
    <div>
        <div class="page-top-bg"></div>
        <LoginOut />
        <div :class="['out-nav','left-con-'+sizemark]">
            <LeftNav />
        </div>
        <div :class="['inner-con','inner-con-'+sizemark]">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import LoginOut from './../components/LoginOut'
import LeftNav from "./../components/LeftNav"
import { WR } from "./../utils/WindowResize"
export default {
    data(){
        return {}
    },
    components:{
        LeftNav,
        LoginOut
    },
    computed:{
        sizemark(){
            return this.$store.state.sizemark
        }
    },
    methods:{

    },
    mounted(){
        this.$store.commit("setWinSize");
        WR();
    }
}
</script>

<style>
    body{margin: 0;background-color: #F1F7FF;}
    .page-top-bg{position: fixed;height:89px;width: 100%;background-color:#195190;top: 0;left: 0;z-index: -1;}
    .out-nav{position: fixed;left: 0;top: 0;bottom: 0;width: 107px;padding-top: 21px;
        padding-left: 11px;overflow: hidden;}
    .left-con-small{width:67px;}
    .inner-con{margin-left: 118px;padding-right: 20px;padding-bottom: 20px;}
    .inner-con-small{margin-left:78px;}
</style>