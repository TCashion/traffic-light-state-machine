import Vue from 'vue'
import Vuex from 'vuex'
import { LightState } from './store-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLightColor: LightState.GREEN,
  },
  getters: {
    getCurrentLightColor(state) {
      return state.currentLightColor
    },
  },
  mutations: {
    setCurrentLightColor(state, payload) {
      state.currentLightColor = payload
    },
  },
  actions: {},
  modules: {},
})
