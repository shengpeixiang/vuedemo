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
            type:Object,
            default:{}
        }
    }
}
</script>

<style scoped>
    .pie-out-item{}
</style>