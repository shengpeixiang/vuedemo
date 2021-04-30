<template>
    <div class="page-head">
        瓯越心港湾心理云平台
        <div class="page-time">{{ctime}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ctime:"",
            timer:null
        }
    },
    methods:{
        getctime(){
            let t = new Date();
            let [cy,cm,cd,ch,cmin,cs] = [t.getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()];
            let tstr = cy+"年"+(cm<=9?"0"+cm:cm)+"月"+(cd<=9?"0"+cd:cd)+"日-"+(ch<=9?"0"+ch:ch)+":"+(cmin<=9?"0"+cmin:cmin)+":"+(cs<=9?"0"+cs:cs);
            this.ctime = tstr;
        }
    },
    mounted(){
        var _ = this;
        _.timer = setInterval(() => {
            _.getctime();
        }, 1000);
    },
    destroyed(){
        var _ = this;
        clearInterval(_.timer);
        _.timer = null;
    }
}
</script>

<style scoped>
    .page-head{
        text-align: center;
        position: relative;
        color: #1FDAFC;
        height:2.4vw;
        padding:0.8vw 0 1.9vw;
        line-height:2.4vw;
        font-size:1.6vw;
        background-image: url("../../assets/graph/topbg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .page-time{
        position: absolute;
        top:1.2vw;
        right:2vw;
        color: #C6D1F0;
        opacity: 0.53;
        font-size:0.8vw;
        line-height:1.2vw;
        font-weight: normal;
    }
</style>