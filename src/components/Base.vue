<template>
  <div class="Base" id="base">
    <div class="Base__container">
      <robot />
      <switch-board />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Robot from "./Robot.vue";
import SwitchBoard from "./SwitchBoard.vue";

@Component({
  components: {
    Robot,
    SwitchBoard
  }
})
export default class Base extends Vue {}
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
