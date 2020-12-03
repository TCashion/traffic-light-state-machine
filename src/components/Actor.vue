<template>
  <div class="Actor"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Actor extends Vue {
  // this can have different states acting or disabled, which toggle animations
}
</script>

<style lang="scss">
.Actor {
  height: 25px;
  width: 25px;
  background: #000;
  border-radius: 100%;
  margin: auto;
}
</style>
