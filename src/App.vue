<template>
  <div>
    <Header/>
    <!--  路由组件出口  -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
