import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import mockdata from "./mock"
import {Button,Input,Form,FormItem,Message,Dialog,Tooltip,Row,Col,Table,TableColumn} from "element-ui"

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Tooltip);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.prototype.$message=Message;
Vue.component(Message.name,Message);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
