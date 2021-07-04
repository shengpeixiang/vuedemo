import axios from 'axios'
import router from "@/router"
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL:"/api",
  timeout:10000
})
instance.interceptors.request.use(function(config){
  console.log("发送请求之前做一些事情，interceptors.request.use")
  let token = localStorage.getItem("token");
  if(token){
    config.headers.Authorization = token;
  }
  return config;
},function(err){
  return Promise.reject(err);
})
instance.interceptors.response.use(function(response){
  console.log("响应之前做一些事情，interceptors.response.use");
  if(response.data.code === 401){
    localStorage.clear();
    router.replace({path:"/user"})
  }
  return response.data;
},function(err){
  return Promise.reject(err);
})

export function aget(url,params){
  return instance.get(url,{params})
}

export function apost(url,data){
  return instance.post(url,data);
}