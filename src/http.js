/**
 * 封装axios http 请求
 **/
import axios from 'axios'
import qs from 'qs'
// import *as _ from './config/whole'

//axios 自定义配置
// var instance = axios.create({
//   baseURL:"https://some-domain.com/api/",
//   timeout:1000,
//   headers: {'X-Custom-Header':'foobar'}
// });
axios.defaults.timeout = 5000;
axios.defaults.headers.post['content-Type']='application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http:ssssssss'

//添加一个请求拦截器
axios.interceptors.request.use((config)=> {
  //在发送请求之前做的事
  if (config.method === 'post') {
    //将返回的数据转换成字符串形式的数据
    config.data = qs.stringify(config.data);
  }
  return config;
}//请求错误时做的事情
,(error)=>{
    console.log("错误的传参");
    //_.toast("错误的参数",'fail')
    return Promise.reject(error);
  })
//添加一个返回响应拦截器
axios.interceptors.response.use((res)=>{
  //对响应做的事
  //如果响应不成功
  if(!res.data.success) {
    return Promise.resolve(res);
  }
  return res;
  //请求错误做的事
},(error)=>{
  console.log("网络异常");
  //_.toast("网路异常"，"fail");
  return Promise.reject(error);
});
//如果以后可能需要删除拦截器
var myInterceptor = axios.interceptors.request.use(function(){/*...*/})
axios.interceptors.request.eject(myInterceptor);
//也可以将拦截器添加到axios的自定义实例。
var instance = axios.create();
instance.interceptors.request.use(function(){/*.....*/});


export function fetch(url,params) {
  return new Promise((resolve,reject) =>{
    axios.post(url,params)
      .then(res =>{
        resolve(res.data)
      },(err)=>{
        reject(err);
      })
      .catch((error)=>{
        reject(error)
      })
  })
}

export default {

}
