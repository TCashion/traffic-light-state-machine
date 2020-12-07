import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    switchStack: []
  },
  getters: {
    getSwitchStack(state) {
      return state.switchStack;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
