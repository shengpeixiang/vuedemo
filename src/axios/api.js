import axios from 'axios'

const instance = axios.create({
  baseURL:"http://39.103.206.77:8888/api",
  timeout:5000
})
instance.interceptors.request.use(function(config){
  console.log("发送请求之前做一些事情，interceptors.request.use")
  return config;
},function(err){
  return Promise.reject(err);
})
instance.interceptors.response.use(function(response){
  console.log("响应之前做一些事情，interceptors.response.use");
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