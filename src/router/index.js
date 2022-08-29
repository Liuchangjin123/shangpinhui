import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
// 配置路由
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        show: true,
      },
    },
    {
      //?表示可传可不传
      path: "/search/:keyword?",
      component: Search,
      meta: {
        show: true,
      },
      name: "search",
      //  路由组件传参
      // props: true,
      // props: { a: 1, b: 2 },
      //  函数写法，可以params参数、query参数，通过props传递给路由组件
      props: ($route) => ({
        keyword: $route.params.keyword,
        k: $route.query.k,
      }),
    },
    {
      path: "/login",
      component: Login,
      meta: {
        show: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        show: false,
      },
    },
    //    重定向
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
