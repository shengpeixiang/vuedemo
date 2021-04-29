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
      },{
        path:"/home/team",
        name:"team",
        query:{title:"团体辅导",icon:"el-icon-goods"},
        component:InnerLayout,
        children:[
          {
            path:"/home/team",
            redirect:"/home/team/signin"
          },
          {
            path:"/home/team/signin",
            name:"signin",
            query:{title:"开课签到",icon:"el-icon-s-goods"},
            component:()=>import(/**webpackChunkName:"Team" */ "./views/team/Signin")
          },
          {
            path:"/home/team/cure",
            name:"cure",
            query:{title:"预约管理",icon:"el-icon-warning"},
            component:()=>import(/**webpackChunkName:"Team" */ "./views/team/Cure")
          },
          {
            path:"/home/team/course",
            name:"course",
            query:{title:"课程管理",icon:"el-icon-warning-outline"},
            component:()=>import(/**webpackChunkName:"Team" */ "./views/team/Course")
          }
        ]
      },{
        path:"/home/train",
        name:"train",
        query:{title:"康复中心",icon:"el-icon-zoom-out"},
        component:InnerLayout,
        children:[
          {
            path:"/home/train",
            redirect:"/home/train/sleepimprove"
          },
          {
            path:"/home/train/sleepimprove",
            name:"sleepimprove",
            query:{title:"睡眠改善",icon:"el-icon-picture"},
            component:()=>import(/**webpackChunkName:"Train" */ "./views/train/SleepImprove")
          },
          {
            path:"/home/train/cureproject",
            name:"cureproject",
            query:{title:"治疗项目",icon:"el-icon-download"},
            component:()=>import(/**webpackChunkName:"Train" */ "./views/train/CureProject")
          },
          {
            path:"/home/train/recoverycure",
            name:"recoverycure",
            query:{title:"睡眠改善",icon:"el-icon-upload2"},
            component:()=>import(/**webpackChunkName:"Train" */ "./views/train/RecoveryCure")
          }
        ]
      },{
        path:"/home/mentality",
        name:"mentality",
        query:{title:"心理治疗",icon:"el-icon-camera-solid"},
        component:InnerLayout,
        children:[
          {
            path:"/home/mentality",
            redirect:"/home/mentality/file"
          },
          {
            path:"/home/mentality/file",
            name:"file",
            query:{title:"心理档案",icon:"el-icon-camera"},
            component:()=>import(/**webpackChunkName:"Mentality" */ "./views/mentality/File")
          },
          {
            path:"/home/mentality/informationtolead",
            name:"informationtolead",
            query:{title:"信息导入",icon:"el-icon-video-camera-solid"},
            component:()=>import(/**webpackChunkName:"Mentality" */ "./views/mentality/InformationToLead")
          },
          {
            path:"/home/mentality/bindingcheck",
            name:"bindingcheck",
            query:{title:"绑定审核",icon:"el-icon-video-camera"},
            component:()=>import(/**webpackChunkName:"Mentality" */ "./views/mentality/BindingCheck")
          }
        ]
      },{
        path:"/home/popularization",
        name:"popularization",
        query:{title:"心理科普",icon:"el-icon-message-solid"},
        component:InnerLayout,
        children:[
          {
            path:"/home/popularization",
            redirect:"/home/popularization/article"
          },
          {
            path:"/home/popularization/article",
            name:"article",
            query:{title:"文章科普",icon:"el-icon-bell"},
            component:()=>import(/**webpackChunkName:"Popularization" */ "./views/popularization/Article")
          },
          {
            path:"/home/popularization/video",
            name:"video",
            query:{title:"视频科普",icon:"el-icon-s-cooperation"},
            component:()=>import(/**webpackChunkName:"Popularization" */ "./views/popularization/Video")
          },
          {
            path:"/home/popularization/music",
            name:"music",
            query:{title:"放松音乐",icon:"el-icon-s-order"},
            component:()=>import(/**webpackChunkName:"Popularization" */ "./views/popularization/Music")
          },
          {
            path:"/home/popularization/dataclassify",
            name:"dataclassify",
            query:{title:"数据分类",icon:"el-icon-s-platform"},
            component:()=>import(/**webpackChunkName:"Popularization" */ "./views/popularization/DataClassify")
          }
        ]
      },{
        path:"/home/system",
        name:"system",
        query:{title:"系统管理",icon:"el-icon-s-tools"},
        component:InnerLayout,
        children:[
          {
            path:"/home/system",
            redirect:"/home/system/systemid"
          },
          {
            path:"/home/system/systemid",
            name:"systemid",
            query:{title:"账号管理",icon:"el-icon-s-unfold"},
            component:()=>import(/**webpackChunkName:"System" */ "./views/system/SystemId")
          },
          {
            path:"/home/system/limits",
            name:"limits",
            query:{title:"权限管理",icon:"el-icon-s-operation"},
            component:()=>import(/**webpackChunkName:"System" */ "./views/system/Limits")
          },
          {
            path:"/home/system/organization",
            name:"organization",
            query:{title:"组织机构",icon:"el-icon-s-promotion"},
            component:()=>import(/**webpackChunkName:"System" */ "./views/system/Organization")
          },
          {
            path:"/home/system/category",
            name:"category",
            query:{title:"人员类别",icon:"el-icon-s-home"},
            component:()=>import(/**webpackChunkName:"System" */ "./views/system/Category")
          }
        ]
      },{
        path:"/home/sleepmanagement",
        name:"sleepmanagement",
        query:{title:"睡眠管理",icon:"el-icon-s-ticket"},
        component:InnerLayout,
        children:[
          {
            path:"/home/sleepmanagement",
            redirect:"/home/sleepmanagement/program"
          },
          {
            path:"/home/sleepmanagement/program",
            name:"program",
            query:{title:"方案管理",icon:"el-icon-s-management"},
            component:()=>import(/**webpackChunkName:"Sleepmanagement" */ "./views/sleepmanagement/Program")
          },
          {
            path:"/home/sleepmanagement/plan",
            name:"plan",
            query:{title:"计划管理",icon:"el-icon-s-open"},
            component:()=>import(/**webpackChunkName:"sleepmanagement" */ "./views/sleepmanagement/Plan")
          },
          {
            path:"/home/sleepmanagement/task",
            name:"task",
            query:{title:"任务管理",icon:"el-icon-s-shop"},
            component:()=>import(/**webpackChunkName:"sleepmanagement" */ "./views/sleepmanagement/Task")
          },
          {
            path:"/home/sleepmanagement/scale",
            name:"scale",
            query:{title:"量表管理",icon:"el-icon-s-marketing"},
            component:()=>import(/**webpackChunkName:"sleepmanagement" */ "./views/sleepmanagement/Scale")
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
