// 对axios进行二次封装
import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
// console.log(nProgress)
// 引入进度条的样式
import "nprogress/nprogress.css"

// 利用axios对象的方法create创建axios实例
const requests = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当中会出现api
  baseURL: "/api",
  // 代表请求的超时时间5秒
  timeout: 5000,
});
// 请求拦截器，请求发送之前，请求拦截器可以检测到，可以在请求发出之前做一些事情
requests.interceptors.request.use((config) => {
  // config：配置对象，对象里面有一个属性很重要，header请求头
  //   进度条开始动
  nProgress.start();
  return config;
});
// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    // 成功的回调函数：服务器响应数据回来以后响应拦截器可以检测到，可以做一些事情
    // 进度条结束
    nProgress.done()
    return res.data;
  },
  (error) => {
    // 响应失败的回调函数
    return Promise.reject(new Error("faile"));
  }
);

export default requests;
