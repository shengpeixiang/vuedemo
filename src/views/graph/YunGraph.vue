<template>
    <div class="graph-con">
        <grap-head></grap-head>
        <div class="content-box">
            <el-row :gutter="10">
                <el-col :span="7">
                    <com-title :title="ltt"></com-title>
                    <con-box :ch="lth">
                        <keep-alive>
                            <Charts :ct="tps" :cdata="basicdata[0].data" />
                        </keep-alive>
                    </con-box>
                    <com-title :title="lmt"></com-title>
                    <con-box :ch="lmh"></con-box>
                    <com-title :title="lbt"></com-title>
                    <con-box :ch="lbh"></con-box>
                </el-col>
                <el-col :span="10">
                    <com-title :title="mt"></com-title>
                    <con-box :ch="mh"></con-box>
                </el-col>
                <el-col :span="7">
                    <com-title :title="ltt"></com-title>
                    <con-box :ch="rth"></con-box>
                    <com-title :title="lmt"></com-title>
                    <con-box :ch="rmh"></con-box>
                    <com-title :title="lbt"></com-title>
                    <con-box :ch="rbh"></con-box>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import GrapHead from "./../../components/graph/GrapHead"
import ConBox from "./../../components/graph/ConBox"
import ComTitle from "./../../components/graph/ComTitle"
import Charts from "./../../components/graph/Charts"
import api from "./../../axios/api"
export default {
    data(){
        return {
            lth:{height:'18vh',margin:"0 0 0.8vh"},
            lmh:{height:'25vh',margin:"0 0 0.8vh"},
            lbh:{height:'21vh'},
            rth:{height:'16vh',margin:"0 0 0.8vh"},
            rmh:{height:'26vh',margin:"0 0 0.8vh"},
            rbh:{height:'22vh'},
            mh:{height:'72.8vh'},
            ltt:"基础信息",
            lmt:"精神心理疾病",
            lbt:"重点人群服务",
            rtt:"服务概况",
            rmt:"最近咨询",
            rbt:"心理预警处理率",
            mt:"评测情况",
            tps:{
                width:"30%",
                height:"10vh"
            },
            tps:{width:'30%',height:'15vh'},
            basicdata:[
                {title:"性别分布",data:[]},
                {title:"年龄群体分布",data:[]},
                {title:"职业群体分布",data:[]},
            ],
            getasyncdata:{}
        }
    },
    components:{
        GrapHead,
        ConBox,
        ComTitle, 
        Charts
    },
    created(){
        Promise.all([this.getdata()]).then(res=>{
            this.fmtdata(res[0].data.data);
        })
    },
    created(){
        let _ = this;
        _.getdata();
    },
    methods:{
        getdata(){
            const _ = this;
            api.rq("/grraph/basicdata","").then(res=>{
                _.basicdata[0].data = res.bd.sex;
                _.basicdata[1].data = res.bd.age;
                _.basicdata[2].data = res.bd.cate;
            })
        }
    },
    mounted(){
        let _ = this;

    }
}
</script>

<style>
    .graph-con{height: 100%;background-color: #00043d; background-image:url('~@/assets/bigbg.png');overflow: auto;min-width:1024px;}
    .content-box{width:98%;margin: auto;}
</style>