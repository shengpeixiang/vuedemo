<template>
    <div class="inner-box">
        <HeadNav />
        <router-view></router-view>
    </div>
</template>

<script>
import HeadNav from "./../components/HeadNav"
export default {
    data(){
        return {}
    },
    components:{
        HeadNav
    }
}
</script>

<style>

</style>