<template>
  <div id="app">
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
  mounted(){
      
  }
}
</script>
<style>
  ::-webkit-scrollbar{
    width:3px;
    height:16px;
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
