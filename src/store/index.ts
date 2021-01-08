import Vue from "vue";
import Vuex from "vuex";
import { LightState } from "./store-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSwitchState: LightState.GREEN
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
});
