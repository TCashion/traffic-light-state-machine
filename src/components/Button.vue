<template>
  <button class="Button" type="button" @click="$emit('button-clicked')">
    Start
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
class Button extends Vue {}

export default Button
</script>

<style lang="scss">
.Button {
  width: fit-content;
}
</style>
