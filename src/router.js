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
            query:{title:"数据总览",icon:"el-icon-upload"},
            component:()=>import(/*webpackChunkName:"Graph" */ "./views/graph/YunGraph")
          },
          {
            path:"/home/graph/datalist",
            name:"datalist",
            query:{title:"综合分析",icon:"el-icon-s-management"},
            component:()=>import(/*webpackChunkName:"Graph" */ "./views/graph/DataList")
          },
          {
            path:"/home/graph/fmreport",
            name:"fmreport",
            query:{title:"报表统计",icon:"el-icon-more-outline"},
            component:()=>import(/*webpackChunkName:"Graph" */ "./views/graph/FmReport")
          },
          {
            path:"/home/graph/overview",
            name:"overview",
            query:{title:"数据概览",icon:"el-icon-s-operation"},
            component:()=>import(/*webpackChunkName:"Graph" */ "./views/graph/OverView")
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
            query:{title:"自杀风险",icon:"el-icon-warning"},
            component:()=>import(/**webpackChunkName:"Crisis" */ "./views/crisis/Suicide")
          }
        ]
      },{
        path:"/home/evacenter",
        name:"evacenter",
        query:{title:"测评中心",icon:"el-icon-s-release"},
        component:InnerLayout,
        children:[
          {
            path:"/home/evacenter",
            redirect:"/home/evacenter/record"
          },
          {
            path:"/home/evacenter/record",
            name:"record",
            query:{title:"评测结果",icon:"el-icon-s-grid"},
            component:()=>import(/**webpackChunkName:"Evacenter" */ "./views/evacenter/Record")
          },
          {
            path:"/home/evacenter/entry",
            name:"entry",
            query:{title:"数据录入",icon:"el-icon-folder-add"},
            component:()=>import(/**webpackChunkName:"Evacenter" */ "./views/evacenter/Entry")
          },
          {
            path:"/home/evacenter/compose",
            name:"compose",
            query:{title:"量表分发",icon:"el-icon-share"},
            component:()=>import(/**webpackChunkName:"Evacenter" */ "./views/evacenter/Compose")
          },
          {
            path:"/home/evacenter/system",
            name:"system",
            query:{title:"系统量表",icon:"el-icon-s-home"},
            component:()=>import(/**webpackChunkName:"Evacenter" */ "./views/evacenter/System")
          },
          {
            path:"/home/evacenter/custom",
            name:"custom",
            query:{title:"自有量表",icon:"el-icon-s-custom"},
            component:()=>import(/**webpackChunkName:"Evacenter" */ "./views/evacenter/Custom")
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
  if(to.name !== 'UserLogin' && to.name!=="UserRegister"){
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
