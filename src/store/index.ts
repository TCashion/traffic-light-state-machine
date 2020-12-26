import Vue from "vue";
import Vuex from "vuex";
import { SwitchState } from "./store-types";
import { Switch } from "../types/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSwitchState: SwitchState.NONE_SWITCHED,
    switchStack: [] as Switch[]
  },
  getters: {
    getSwitchStack(state) {
      return state.switchStack;
    }
  },
  mutations: {
    pushToSwitchStack(state, payload: Switch) {
      state.switchStack.push(payload);
    },
    setCurrentSwitchState(state, payload) {
      state.currentSwitchState = payload;
    }
  },
  actions: {},
  modules: {}
});
