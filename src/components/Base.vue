<template>
  <div class="Base" id="base">
    <div class="Base__container">
      <robot :currentValue="current.value" />
      <switch-board @clicked="handleClick" :currentValue="current.value" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Robot from "./Robot.vue";
import SwitchBoard from "./SwitchBoard.vue";
import { switchMachine } from "../util/switch-machine";
import { interpret } from "xstate";

@Component({
  components: {
    Robot,
    SwitchBoard
  }
})
export default class Base extends Vue {
  // state machine variables:
  switchService = interpret(switchMachine);
  current = switchMachine.initialState;
  context = switchMachine.context;

  created() {
    this.switchService
      .onTransition(state => {
        this.current = state;
        this.context = state.context;
      })
      .start();
  }

  handleClick() {
    const event = "TOGGLE";
    this.send(event);
  }

  send(event: string) {
    this.switchService.send(event);
    console.log(this.current.value);
  }
}
</script>

<style lang="scss">
.Base {
  display: flex;
  justify-content: center;
  flex-direction: row;

  &__container {
    display: flex;
    flex-direction: row;
  }
}
</style>
