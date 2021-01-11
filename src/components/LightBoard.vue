<template>
  <div class="LightBoard">
    <h1>Light Board</h1>
    <div class="LightBoard__panel">
      <Light
        v-for="(color, index) in lightColors"
        :key="color"
        :lightOn="!!currentLightSequence[index]"
        :color="lightColors[index]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Light from './Light.vue'
import { LightColor } from '../types/types'

@Component({
  components: {
    Light,
  },
})
export default class LightBoard extends Vue {
  lightColors: LightColor[] = [
    LightColor.RED,
    LightColor.YELLOW,
    LightColor.GREEN,
  ]

  lightSequence = {
    [LightColor.IDLE]: [0, 0, 0],
    [LightColor.RED]: [1, 0, 0],
    [LightColor.YELLOW]: [0, 1, 0],
    [LightColor.GREEN]: [0, 0, 1],
  }

  get currentLightColor(): LightColor {
    return this.$store.getters.getCurrentLightColor
  }

  get currentLightSequence() {
    return this.lightSequence[this.currentLightColor]
  }
}
</script>

<style lang="scss">
.LightBoard {
  width: 25rem;
  height: 100%;

  &__panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: black 2px solid;
    height: 300px;
    width: 125px;
    margin: 15px auto;
    &__switched {
      background-color: black;
    }
    &__unswitched {
      background-color: transparent;
    }
  }
}
</style>
