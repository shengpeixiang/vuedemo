import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      hnav:[],
      sizemark:"big"
  },
  mutations: {
      setWinSize(state){
        if(document.documentElement.clientWidth<900){
          state.sizemark = "small"
        }else{
          state.sizemark = "big"
        }
      }
  },
  actions: {}
});
