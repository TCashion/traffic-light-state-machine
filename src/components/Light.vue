<template>
  <div :class="[lightOn ? color : 'off', 'Light']"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Light extends Vue {
  @Prop({ type: String, required: true }) readonly color!: string
  @Prop({ type: Boolean, required: true, default: false })
  readonly lightOn!: boolean
}
</script>

<style lang="scss">
.Light {
  height: 50px;
  width: 50px;
  border: 2px solid black;
  margin: 1rem;
  border-radius: 50%;
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}

.off {
  background-color: black;
}
</style>
