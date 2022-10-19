//用来拦截

// 导入axios
import axios from 'axios'

// 创建一个axios实例
const instance = axios.create({
  baseURL:'http://119.3.122.177:3000/'
})
//拦截器 - 请求拦截
instance.interceptors.request.use(config=>{
  // 部分接口需要拿到token
  //判断是否有token，有则在config请求头中携带token 
  let token = localStorage.getItem('token');
  if(token){
    config.headers.token=token
  }
  return config;
},err=>{
    return Promise.reject(err)
});


//拦截器 - 响应拦截
instance.interceptors.response.use(res=>{
  return res;
},err=>{
  return Promise.reject(err)
});

//导出整体
export default instance




