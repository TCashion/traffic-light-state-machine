<template>
  <div class="Base" id="base">
    <div class="Base__container">
      <light-board />
      <Button @button-clicked="handleButtonClick" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LightBoard from './LightBoard.vue'
import Button from './Button.vue'
import { lightMachine } from '../util/light-machine'
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
      })
      .start()
  }

  handleButtonClick() {
    console.log('button clicked')
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
  }
}
</style>
