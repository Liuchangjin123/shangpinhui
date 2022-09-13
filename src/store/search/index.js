import { reqGetSearchInfo } from "@/api";
// search模块的仓库
const state = {
  searchList: {},
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  async getSearchList({ commit }, params = {}) {
    let res = await reqGetSearchInfo(params);
    if (res.code == 200) commit("GETSEARCHLIST", res.data);
  },
};

// 计算属性，为了简化数据
const getters = {
  goodsList(state) {
    return state.searchList.goodsList;
  },
  trademarkList(state) {
    return state.searchList.trademarkList;
  },
  attrsList(state) {
    return state.searchList.attrsList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
