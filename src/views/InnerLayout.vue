<template>
    <div class="inner-box">
        <HeadNav class="inner-head-nav" />
        <div class="change-con" :style="{height:conheight}">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeadNav from "./../components/HeadNav"
export default {
    data(){
        return {}
    },
    computed:{
        conheight(){
            return (document.documentElement.clientHeight-87)+'px';
        }
    },
    components:{
        HeadNav
    }
}
</script>

<style scoped>
    .change-con{background-color: #ffffff;overflow: auto;border-radius:0 8px 8px 0;}
</style>