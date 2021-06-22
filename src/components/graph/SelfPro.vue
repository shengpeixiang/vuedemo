<template>
    <div class="pro-con">
        <div class="pro-item" v-for="v in lists" :key="v.id">
            <div class="pro-name">{{v.name}}</div>
            <div class="pro-bar-bg">
                <div class="pro-bar-val" :style="{'width':(v.num/v.total)+'%'}"></div>
            </div>
            <div class="pro-val">{{v.num}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        lists:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style scoped>
    .pro-con{display: flex;}
    .pro-item{width: '50%';}
</style>