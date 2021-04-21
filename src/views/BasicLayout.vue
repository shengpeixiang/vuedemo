<template>
    <div>
        <div class="page-top-bg"></div>
        <div class="out-nav">
            <LeftNav />
        </div>
        <div class="inner-con">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import LeftNav from "./../components/LeftNav"
export default {
    data(){
        return {}
    },
    components:{
        LeftNav
    }
}
</script>

<style>
    body{margin: 0;background-color: #F1F7FF;}
    .page-top-bg{position: fixed;height:89px;width: 100%;background-color:#195190;top: 0;left: 0;z-index: -1;}
    .out-nav{position: fixed;left: 0;top: 0;bottom: 0;width: 107px;padding-top: 21px;
        padding-left: 11px;overflow: hidden;}
    .inner-con{margin-left: 118px;padding-right: 20px;padding-bottom: 20px;}
</style>