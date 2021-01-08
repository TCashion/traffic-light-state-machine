<template>
  <div class="LightBoard">
    <h1>Light Board</h1>
    <hr />
    <div class="LightBoard__switches">
      <!-- <Light
        @clicked="handleClick"
        :switchName="`switch-${n}`"
        :key="n"
        :class="
          currentValue === 'noneSwitched'
            ? 'LightBoard__switches__unswitched'
            : 'LightBoard__switches__switched'
        "
      /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Light from "./Light.vue";

@Component({
  components: {
    Light
  }
})
export default class LightBoard extends Vue {
  // handleClick(eventTarget: Switch) {
  //   this.$emit("clicked", eventTarget);
  // }
}
</script>

<style lang="scss">
.LightBoard {
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
