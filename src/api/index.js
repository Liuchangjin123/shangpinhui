// 当前模块：所有API进行统一管理
import requests from "./request";

// 三级联动接口
// /api/product/getBaseCategoryList get 无参
//发请求,返回的结果是Promise对象
export const reqCategoryList = ()=>{return requests({url:'/product/getBaseCategoryList',method:'get'})} 