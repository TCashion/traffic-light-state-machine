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
        :class="
          currentValue === 'noneSwitched'
            ? 'SwitchBoard__switches__unswitched'
            : 'SwitchBoard__switches__switched'
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SwitchUnit from "./SwitchUnit.vue";
import { Switch } from "../types/types";

@Component({
  components: {
    SwitchUnit
  }
})
export default class SwitchBoard extends Vue {
  @Prop({ type: String, required: true }) readonly currentValue!: string;

  switchCount = 1;

  handleClick(eventTarget: Switch) {
    this.$emit("clicked", eventTarget);
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
    &__switched {
      background-color: black;
    }
    &__unswitched {
      background-color: transparent;
    }
  }
}
</style>
