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
    .out-nav{position: fixed;left: 0;top: 0;bottom: 0;width: 118px;padding-top: 21px;
        padding-left: 11px;overflow: hidden;}
    .inner-con{margin-left: 118px;padding-right: 20px;padding-bottom: 20px;}
</style>