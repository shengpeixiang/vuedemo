<template>
    <div class="left-nav">
        <div :class="['logo-con','logo-con-'+sizemark]" @click="gohome">
            <div class="logo-icon"></div>
            <span :class="['logo-name','logo-name-'+sizemark]">心理服务平台</span>
        </div>
        <div :class="['left-nav-box','left-nav-box-'+sizemark]" :style="{height:navHeight}">
            <div :class="['left-nav-item',(isactive==nav.path?'nav-isactive':'')]" v-for="nav in list" :key="nav.name" @click="curnav(nav)">
                <i :class="nav.query.icon"></i>
                <div :class="['nav-title','nav-title-'+sizemark]">{{nav.query.title}}</div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    computed:{
        list(){
            let list = this.$router.options.routes[1].children,getlist=[];
            for(let i=0;i<list.length;i++){
                if(list[i].query){
                    getlist.push(list[i])
                }
            }
            return getlist;
        },
        isactive(){
            return this.$route.matched[1].path;
        },
        navHeight(){
            return (document.documentElement.clientHeight-105)+'px';
        },
        sizemark(){
            return this.$store.state.sizemark
        }
    },
    methods:{
        curnav(item){
            if(item.path !== this.$route.matched[1].path){
                this.$router.push({path:item.path});
                this.setHnav(item.children);
            }
        },
        setHnav(list){
            let rlist = [];
            for(let i=0;i<list.length;i++){
                if(list[i].query){
                    rlist.push(list[i]);
                }
            }
            this.$store.state.hnav = rlist;
        },
        setFirstHnav(){
            let hlist = [],fhn = this.$router.options.routes[1].children.find(item=>item.path === this.$route.matched[1].path).children;
            for(let i=0;i<fhn.length;i++){
                if(fhn[i].query){
                    hlist.push(fhn[i]);
                }
            }
            this.$store.state.hnav = hlist;
        },
        gohome(){
            if(this.$route.name !=='yungraph'){
                this.$router.replace({path:'/'})
            }
        }
    },
    mounted(){
        this.setFirstHnav();
    }
}
</script>

<style>
    .logo-con{cursor: pointer;margin-bottom:14px;}
    .left-nav-item{width: 64px;height:54px;text-align:center;border-radius: 8px;color: #7EA4CD;position: relative;
        cursor: pointer;font-size: 12px;padding-top:10px;box-shadow:0 0 4px #aaa;margin:0 0 18px 9px;}
    .left-nav-item i{font-size:24px;}
    .nav-title{margin-top: 4px;}
    .nav-isactive{background-color:#195190;color: #fff;}
    .logo-icon{width: 32px;height: 33px;margin:0 auto;border-radius: 50%;position: relative;left: -11px;
        overflow: hidden;background-image: url('../assets/logo-split.png');background-position:0 -179px;}
    .logo-name{font-size: 14px;display: block;color: #fff;line-height: 20px;margin-top: 5px;text-align: center;}
    .left-nav-box{overflow: auto;padding-top: 6px;}

    .logo-name-small{visibility: hidden;}
    .left-nav-box-small .left-nav-item{width:32px;height:28px;padding-top: 4px;}
    .logo-con-small{margin-bottom:0;}
    .nav-title-small{position: absolute;background-color: #ffffff;left: 34px;top: 0;}
</style>