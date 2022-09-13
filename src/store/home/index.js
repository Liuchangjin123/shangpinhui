import { reqCategoryList, reqGetBannerList,reqGetFloorList } from "@/api";

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList){
    state.floorList = floorList
  }
};
const actions = {
  async categoryList({ commit }) {
    let res = await reqCategoryList();
    if (res.code == 200) {
      commit("CATEGORYLIST", res.data);
    }
  },
  async getBannerList({ commit }) {
    let res = await reqGetBannerList();
    if (res.code == 200) commit("GETBANNERLIST", res.data);
  },
  async getFloorList({commit}){
    let res = await reqGetFloorList();
    console.log('res',res)
    if(res.code == 200) commit("GETFLOORLIST", res.data)
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
