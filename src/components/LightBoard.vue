<template>
  <div class="LightBoard">
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import Light from './Light.vue'
import { LightColor } from '../types/types'

@Component({
  components: {
    Light,
  },
})
export default class LightBoard extends Vue {
  @Prop({ type: String, required: true })
  readonly currentLightColor!: LightColor

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
    background-color: rgb(248, 219, 87);
    border: black 2px solid;
    height: 300px;
    width: 125px;
    margin: 30px auto;
    border-radius: 10px;
    &__switched {
      background-color: black;
    }
    &__unswitched {
      background-color: transparent;
    }
  }
}
</style>
