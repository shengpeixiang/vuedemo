<template>
  <div id="app">
    <!-- <Parent /> -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    
  },
  components:{
  },
  mounted(){
      
  }
}
</script>
<style>
  ::-webkit-scrollbar{
    width:3px;
    height:10px;
    background-color: #fff;
  }
  ::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:3px;
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #999;
  }
</style>
