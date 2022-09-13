// 当前模块：所有API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList get 无参
//发请求,返回的结果是Promise对象
export const reqCategoryList = ()=> requests.get('/product/getBaseCategoryList')

// 获取banner
export const reqGetBannerList = ()=> mockRequests.get('/banner')

// 获取floor
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})