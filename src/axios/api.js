import axios from 'axios'

const instance = axios.create({
  baseURL:"",
  timeout:5000
})
instance.interceptors.request.use(function(config){
  console.log("发送请求之前做一些事情，interceptors.request.use")
  config.headers.token="123456";
  return config;
},function(err){
  return Promise.reject(err);
})
instance.interceptors.response.use(function(response){
  console.log("响应之前做一些事情，interceptors.response.use");
  return response;
},function(err){
  return Promise.reject(err);
})

export function aget(url,params){
  return instance.get(url,{params})
}

export function apost(url,data){
  return instance.post(url,data);
}