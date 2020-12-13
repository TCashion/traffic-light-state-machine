<template>
  <div class="SwitchBoard">
    <h1>Switch Board</h1>
    <hr />
    <div class="SwitchBoard__switches">
      <SwitchUnit
        @clicked="handleClick"
        v-for="n in switchCount"
        :switchName="`switch-${n}`"
        :key="n"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SwitchUnit from "./SwitchUnit.vue";
import { switchMachine } from "../util/state-machine";
import { interpret } from "xstate";
// import { useMachine } from "@xstate/vue";
import VueCompositionAPI from "@vue/composition-api";

@Component({
  components: {
    SwitchUnit
  }
})
export default class SwitchBoard extends Vue {
  switchCount = 5;
  // state machine variables:
  switchService = interpret(switchMachine);
  current = switchMachine.initialState;
  context = switchMachine.context;

  created() {
    Vue.use(VueCompositionAPI);
    this.switchService
      .onTransition(state => {
        this.current = state;
        this.context = state.context;
      })
      .start();
  }

  handleClick(e: string) {
    console.log("clicked " + e);
    this.send("TOGGLE");
  }

  send(event: string) {
    this.switchService.send(event);
    console.log(this.current.value);
  }
}
</script>

<style lang="scss">
.SwitchBoard {
  width: 25rem;
  height: 100%;

  &__switches {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
