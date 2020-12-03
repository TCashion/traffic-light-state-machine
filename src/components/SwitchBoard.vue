<template>
  <div class="SwitchBoard">
    <h1>Switch Board</h1>
    <hr />
    <div class="SwitchBoard__switches">
      <div
        class="SwitchBoard__switches__switch"
        v-for="n in switchCount"
        :key="n"
      >
        {{ n }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class SwitchBoard extends Vue {
  switchCount = 5;
  // state includes number of switches...
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

    &__switch {
      height: 50px;
      width: 50px;
      border: 2px solid black;
      margin: 1rem;
    }
  }
}
</style>
