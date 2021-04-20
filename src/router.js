import Vue from "vue";
import Router from "vue-router";
import UserLayout from "./views/UserLayout.vue";
import NProgress from "nprogress";
import InnerLayout from "./views/InnerLayout"
import "nprogress/nprogress.css";
import {islogin} from "./utils/login";

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
        query:{title:"数据概览",icon:"el-icon-s-data"},
        component:InnerLayout,
        children:[
          {
            path:"/home/graph",
            redirect:"/home/graph/yungraph"
          },
          {
            path:"/home/graph/yungraph",
            name:"yungraph",
            query:{title:"数据总览"},
            component:()=>import(/*webpackChunkName:"Graph" */ "./views/graph/YunGraph")
          },
          {
            path:"home/graph/datalist",
            name:"datalist",
            query:{title:"综合分析"},
            component:()=>import(/*webpackChunkName:"Graph" */ "./views/graph/DataList")
          }
        ]
      },{
        path:"/home/crisis",
        name:"crisis",
        query:{title:"危机干预",icon:"el-icon-s-opportunity"},
        component:InnerLayout,
        children:[
          {
            path:"/home/crisis",
            redirect:"/home/crisis/suicide"
          },
          {
            path:"/home/crisis/suicide",
            name:"suicide",
            query:{title:"自杀风险"},
            component:()=>import(/**webpackChunkName:"Crisis" */ "./views/crisis/Suicide")
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
