import Vue from 'vue'
import Vuex from 'vuex'
import { LightState, TrafficSetting } from './store-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLightColor: LightState.GREEN,
    currentTrafficSetting: TrafficSetting.LOW,
  },
  getters: {
    getCurrentLightColor(state) {
      return state.currentLightColor
    },
    getCurrentTrafficSetting(state) {
      return state.currentTrafficSetting
    },
  },
  mutations: {
    setCurrentLightColor(state, payload) {
      state.currentLightColor = payload
    },
    setCurrentTrafficSetting(state, payload) {
      state.currentTrafficSetting = payload
    },
  },
  actions: {},
  modules: {},
})
