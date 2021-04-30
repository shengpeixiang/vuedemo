<template>
    <div class="grap-title">
        <span>{{title}}</span>
        <div class="title-icon">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>
    .grap-title{
        font-size:1.7vh;
        font-weight: 700;
        color: #4CF6F3;
        height:3.6vh;
        line-height:3.4vh;
        position: relative;
        background-image: url(../../assets/graph/titlebg.png);
        background-repeat: no-repeat;
        padding-left:2vh;
        background-size: auto 100%;
    }
    .title-icon{position:absolute;right:0;}
</style>