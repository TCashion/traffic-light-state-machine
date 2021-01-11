<template>
  <div class="Base" id="base">
    <div class="Base__container">
      <light-board />
      <div class="Base__container__buttons">
        <Button buttonCopy="Start" @button-clicked="handleStartButtonClick" />
        <Button buttonCopy="Stop" @button-clicked="handleStopButtonClick" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LightBoard from './LightBoard.vue'
import Button from './Button.vue'
import { lightMachine } from '../util/light-machine'
import { LightEventObject } from '../util/light-machine-types'
import { interpret } from 'xstate'

@Component({
  components: {
    Button,
    LightBoard,
  },
})
export default class Base extends Vue {
  // state machine variables:
  lightService = interpret(lightMachine)
  context = lightMachine.context
  current = lightMachine.initialState

  created() {
    this.lightService
      .onTransition(state => {
        this.current = state
        this.context = state.context

        // update the store
        this.$store.commit('setCurrentLightColor', state.value)
      })
      .start()
  }

  handleStartButtonClick() {
    this.send({ type: 'TOGGLE_GREEN' })
  }

  handleStopButtonClick() {
    this.send({ type: 'TOGGLE_IDLE' })
  }

  send(event: LightEventObject) {
    this.lightService.send(event)
  }
}
</script>

<style lang="scss">
.Base {
  display: flex;
  justify-content: center;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__buttons {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
