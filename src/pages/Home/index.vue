<template>
  <div>
    <!-- 三级联动全局组件 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"/>
    <!-- <Floor /> -->
    <Brand />
  </div>
</template>

<script>
// 引入其余组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'

export default {
  name: "index",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed: {
    ...mapState({ floorList: state => state.home.floorList })
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  }
}
</script>

<style scoped>

</style>