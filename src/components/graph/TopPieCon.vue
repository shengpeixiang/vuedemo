<template>
    <div class="pie-out-item">
        <div class="pie-title">{{pt}}</div>
        <Charts :chartstyle="cs" :chartoptions="co" />
    </div>
</template>

<script>
import Charts from "./Charts"
export default {
    components:{
        Charts
    },
    props:{
        pt:{
            type:String,
            default:""
        },
        cs:{
            type:Object,
            default:{}
        },
        co:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style scoped>
    .pie-out-item{background:linear-gradient(rgba(46, 69, 241,.22),rgba(0,4,61,.22));height: 100%;width: 30%;float: left;margin:0 1.5%;}
</style>