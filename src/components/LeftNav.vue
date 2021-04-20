<template>
    <div class="left-nav">
        <div :class="['left-nav-item',(isactive==nav.path?'nav-isactive':'')]" v-for="nav in list" :key="nav.name" @click="curnav(nav)">
            <i :class="nav.query.icon"></i>
            <div class="nav-title">{{nav.query.title}}</div>
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
        }
    },
    methods:{
        curnav(item){
            this.$router.push({path:item.path})
        }
    }
}
</script>

<style>
    .left-nav-item{width: 64px;height:54px;text-align:center;border-radius: 8px;color: #7EA4CD;
        cursor: pointer;font-size: 12px;padding-top:10px;box-shadow:0 0 4px #aaa;margin-bottom: 18px;}
    .left-nav-item i{font-size:24px;}
    .nav-title{margin-top: 4px;}
    .nav-isactive{background-color:#195190;color: #fff;}
</style>