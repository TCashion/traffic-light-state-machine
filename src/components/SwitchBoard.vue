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
import { send } from "xstate";
import { useMachine } from "@xstate/vue";

@Component({
  components: {
    SwitchUnit
  }
})
export default class SwitchBoard extends Vue {
  switchCount = 5;
  // state includes number of switches...

  setup() {
    // this is for Vue3. Use https://xstate.js.org/docs/recipes/vue.html for Vue2
    const { state, send } = useMachine(switchMachine);
    console.log("state: ", state);
    return {
      state,
      send
    };
  }

  handleClick(e: string) {
    console.log("clicked " + e);
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
