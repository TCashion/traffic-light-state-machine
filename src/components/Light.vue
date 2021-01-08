<template>
  <div class="Light"></div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Light extends Vue {}
</script>

<style lang="scss">
.Light {
  height: 50px;
  width: 50px;
  border: 2px solid black;
  margin: 1rem;
  border-radius: 50%;
}
</style>
