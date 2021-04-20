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

</style>