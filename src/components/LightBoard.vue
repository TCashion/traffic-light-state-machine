<template>
  <div class="LightBoard">
    <h1>Light Board</h1>
    <div class="LightBoard__panel">
      <Light v-for="color in lightColors" :key="color" :color="color" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Light from './Light.vue'
import { LightColors } from '../types/types'

@Component({
  components: {
    Light,
  },
})
export default class LightBoard extends Vue {
  lightColors: LightColors[] = [
    LightColors.RED,
    LightColors.YELLOW,
    LightColors.GREEN,
  ]
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
