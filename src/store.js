import Vue from "vue";
import Vuex from "vuex";
import {apost} from "@/axios/api"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      hnav:[],
      sizemark:"big"
  },
  mutations: {
      setWinSize(state){
        if(document.documentElement.clientWidth<(state.hnav.length * 116 +138)){
          state.sizemark = "small"
        }else{
          state.sizemark = "big"
        }
      }
  },
  actions: {
    
  }
});
