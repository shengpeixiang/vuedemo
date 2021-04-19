import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Button,Input,Form,FormItem,Message} from "element-ui"

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.prototype.$message=Message;
Vue.component(Message.name,Message);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
