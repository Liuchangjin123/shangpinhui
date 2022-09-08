import Vue from "vue";
import App from "./App.vue";
//三级联动组件
import TypeNav from "@/components/TypeNav"
Vue.component(TypeNav.name, TypeNav)
// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";

// 引入mock数据
import  '@/mock/mockServer';

import 'swiper/css/swiper.css'
// 测试
// import {reqCategoryList} from '@/api'
// reqCategoryList()

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  //  注册路由
  router,
  // 注册仓库:组件实例的身上多了一个$store属性
  store
}).$mount("#app");
