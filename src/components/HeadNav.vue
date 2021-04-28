<template>
    <div :class="['head-nav-box','head-nav-box-'+$store.state.sizemark]">
        <div :class="['head-nav-item',(cpath===hn.path?'hactive':'')]" @click="changeCon(hn)" v-for="hn in nlist" :key="hn.path">
            <el-tooltip :disabled="tipshow" effect="dark" :content="hn.query.title" placement="top">
                <div>
                    <i :class="hn.query.icon"></i>
                    {{tipshow?hn.query.title:''}}
                </div>
            </el-tooltip>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    computed:{
        nlist(){
            let hnav = this.$store.state.hnav;
            return hnav;
        },
        cpath(){
            return this.$route.path
        },
        tipshow(){
            return this.$store.state.sizemark==='big'
        }
    },
    watch:{
        '$route'(val){
            let cnav = this.$router.options.routes[1].children.find(item=>item.path === val.matched[1].path).children,navlist=[];
            for(let i=0;i<cnav.length;i++){
                if(cnav[i].query){
                    navlist.push(cnav[i]);
                }
            }
            this.$store.state.hnav = navlist;
        }
    },
    methods:{
        changeCon(item){
            if(item.path !== this.$route.path){
                this.$router.push({path:item.path})
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style>
    .more-icon{width:54px;float: left;}
    .head-nav-box{overflow:hidden;padding-top:22px;}
    .head-nav-item{float: left;width:112px;height: 45px;cursor: pointer;text-align: center;
    font-size: 12px;line-height: 45px;color: #fff;background-color: #195190;margin-left: 4px;
    border-radius:5px 5px 0 0;border: 1px solid  #12355e;box-sizing: border-box;}
    .head-nav-item i{font-size: 14px;}
    .head-nav-item:first-child{margin-left: 0;}
    .hactive{border-color: #fff;background-color: #fff;color: #333;font-weight:bold;}
    .head-nav-box-small{padding-top:37px;}
    .head-nav-box-small .head-nav-item{width:36px;height: 30px;line-height: 30px;}

</style>