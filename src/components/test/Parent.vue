<template>
    <div class="parent-con" >
        <button @click="cutComp(0)">c1</button>
        <button @click="cutComp(1)">c2</button>
        <button @click="cutComp(2)">c3</button>
        <div class="clild-con" style="color:red">
            <component v-bind:is="currentTabC"></component>
        </div>
    </div>
</template>

<script>
import Children from "./Children"
import Children1 from "./Children1"
import Children2 from "./Children2"
export default {
    data(){
        return {
            currentTabC:Children
        }
    },
    components:{
        Children,
        Children1,
        Children2,
    },
    methods:{
        cutComp(num){
            switch(num){
                case 0:this.currentTabC = Children;break
                case 1:this.currentTabC = Children1;break
                case 2:this.currentTabC = Children2;break
            }
        }
    }
}
</script>

<style>
    .parent-con{position: fixed;z-index:99999999999999999999999999;}
</style>