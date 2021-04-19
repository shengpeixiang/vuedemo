import Vue from "vue";
import Router from "vue-router";
import UserLayout from "./views/UserLayout.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      name: "User",
      component:UserLayout,
      children:[
        {
          path:"",
          redirect:"/user/login"
        },
        {
          path:"/user",
          redirect:"/user/login"
        },
        {
          path:"/user/login",
          name:"UserLogin",
          component:() =>import(/* webpackChunkName: "User" */ "./views/User/Login")
        },{
          path:"/user/register",
          name:"UserRegister",
          component:() =>import(/* webpackChunkName: "User" */ "./views/User/Register")
        }
      ]
    },
    {
      path: "/home",
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "Home" */ "./views/BasicLayout.vue")
    }
  ]
});
