import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      email: null,
      token: null,
    },
  },
  getters: {
    userInfoGetters(state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    setUserInfo({ commit }, payload) {
      commit("SET_USER_INFO", payload);
    },
  },
  modules: {},
});
