<template>
    <div class="head-nav-box">
        <div :class="['head-nav-item',(cpath===hn.path?'hactive':'')]" @click="changeCon(hn)" v-for="hn in nlist" :key="hn.path">
            <i :class="hn.query.icon"></i>
            {{hn.query.title}}
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
            return this.$store.state.hnav
        },
        cpath(){
            return this.$route.path
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
    }
}
</script>

<style less>
    .head-nav-box{overflow:hidden;padding-top:22px;}
    .head-nav-item{float: left;width:112px;height: 45px;cursor: pointer;text-align: center;
    font-size: 12px;line-height: 45px;color: #fff;background-color: #195190;margin-left: 4px;
    border-radius:5px 5px 0 0;border: 1px solid  #12355e;box-sizing: border-box;}
    .head-nav-item i{font-size: 14px;}
    .head-nav-item:first-child{margin-left: 0;}
    .hactive{border-color: #fff;background-color: #fff;color: #333;font-weight:bold;}
</style>