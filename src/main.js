import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Button,Input,Form,FormItem,Message,Dialog} from "element-ui"

import {q84,q83,q82} from './utils/testes6'

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.prototype.$message=Message;
Vue.component(Message.name,Message);

// console.log(q84(15));
// q83();
// q82();
Vue.config.silent = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
