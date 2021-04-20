import Vue from "vue";
import Router from "vue-router";
import UserLayout from "./views/UserLayout.vue";
import NProgress from "nprogress"
import {islogin} from "./utils/login"

Vue.use(Router);
const routes = [
  {
    path: "/user",
    name: "User",
    component:UserLayout,
    children:[
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
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "./views/BasicLayout"),
    children:[
      {
        path:"/",
        redirect:"/home/graph/yungraph"
      },
      {
        path:"/home/graph",
        name:"graph",
        component:()=>import(/*webpackChunkName:"Graph" */ "./views/InnerLayout"),
        children:[
          {
            path:"/home/graph/yungraph",
            name:"yungraph",
            component:()=>import(/*webpackChunkName:"Graph" */ "./views/graph/YunGraph")
          }
        ]
      }
    ]
  }
]
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,from,next)=>{
  NProgress.start()
  if(to.name !== 'UserLogin'){
    if(!islogin()){
      next({path:"/user/login"})
    }else{
      next()
    }
  }else{
    next()
  }
})
router.afterEach(()=>{
  NProgress.done();
})

export default router;
