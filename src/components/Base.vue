<template>
  <div class="Base" id="base">
    <div class="Base__container">
      <light-board :currentLightColor="current.value" />
      <div class="Base__container__buttons">
        <Button buttonCopy="Start" @button-clicked="handleStartButtonClick" />
        <Button buttonCopy="Stop" @button-clicked="handleStopButtonClick" />
      </div>
    </div>
    <div class="Base__container">
      <traffic-setting-panel @traffic-setting-changed="updateTrafficSetting" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LightBoard from './LightBoard.vue'
import Button from './Button.vue'
import TrafficSettingPanel from './TrafficSettingPanel.vue'
import { lightMachine } from '../util/light-machine'
import { LightEventObject } from '../util/light-machine-types'
import { TrafficSetting } from '../store/store-types'
import { interpret } from 'xstate'

@Component({
  components: {
    Button,
    LightBoard,
    TrafficSettingPanel,
  },
})
export default class Base extends Vue {
  // state machine variables:
  lightService = interpret(lightMachine)
  context = lightMachine.context
  current = lightMachine.initialState

  currentTrafficSetting: TrafficSetting = this.$store.getters
    .getCurrentTrafficSetting

  created() {
    this.lightService
      .onTransition(state => {
        this.current = state
        this.context = state.context

        // update the store with new light color
        this.$store.commit('setCurrentLightColor', state.value)
      })
      .start()
  }

  handleStartButtonClick() {
    this.send({
      type: 'TOGGLE_ON',
      trafficSetting: this.currentTrafficSetting,
    })
  }

  handleStopButtonClick() {
    this.send({ type: 'TOGGLE_IDLE' })
  }

  send(event: LightEventObject) {
    this.lightService.send({ ...event })
  }

  updateTrafficSetting(newTrafficSetting: TrafficSetting) {
    this.currentTrafficSetting = newTrafficSetting
    this.send({
      type: 'TOGGLE_RED',
      trafficSetting: this.currentTrafficSetting,
    })
  }
}
</script>

<style lang="scss" scoped>
.Base {
  display: flex;
  justify-content: center;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__buttons {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
