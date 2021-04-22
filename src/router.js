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
      },{
        path:"/home/zxcenter",
        name:"zxcenter",
        query:{title:"咨询中心",icon:"el-icon-question"},
        component:InnerLayout,
        children:[
          {
            path:"/home/zxcenter",
            redirect:"/home/zxcenter/comment"
          },
          {
            path:"/home/zxcenter/comment",
            name:"comment",
            query:{title:"来访者评价",icon:"el-icon-s-promotion"},
            component:()=>import(/**webpackChunkName:"Zxcenter" */ "./views/zxcenter/Comment")
          },
          {
            path:"/home/zxcenter/appoint",
            name:"appoint",
            query:{title:"预约详情",icon:"el-icon-s-platform"},
            component:()=>import(/**webpackChunkName:"Zxcenter" */ "./views/zxcenter/Appoint")
          },
          {
            path:"/home/zxcenter/doctor",
            name:"doctor",
            query:{title:"咨询师管理",icon:"el-icon-ice-cream-round"},
            component:()=>import(/**webpackChunkName:"Zxcenter" */ "./views/zxcenter/Doctor")
          },
          {
            path:"/home/zxcenter/classes",
            name:"classes",
            query:{title:"排班管理",icon:"el-icon-ice-cream-square"},
            component:()=>import(/**webpackChunkName:"Zxcenter" */ "./views/zxcenter/Classes")
          },
          {
            path:"/home/zxcenter/detail",
            name:"detail",
            query:{title:"排班详情",icon:"el-icon-lollipop"},
            component:()=>import(/**webpackChunkName:"Zxcenter" */ "./views/zxcenter/Detail")
          },
          {
            path:"/home/zxcenter/hotline",
            name:"hotline",
            query:{title:"心理热线",icon:"el-icon-potato-strips"},
            component:()=>import(/**webpackChunkName:"Zxcenter" */ "./views/zxcenter/Hotline")
          },
          {
            path:"/home/zxcenter/yyroom",
            name:"yyroom",
            query:{title:"咨询室预约",icon:"el-icon-milk-tea"},
            component:()=>import(/**webpackChunkName:"Zxcenter" */ "./views/zxcenter/Yyroom")
          },
          {
            path:"/home/zxcenter/zzroom",
            name:"zzroom",
            query:{title:"转诊管理",icon:"el-icon-ice-drink"},
            component:()=>import(/**webpackChunkName:"Zxcenter" */ "./views/zxcenter/Zzroom")
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
