<template>
  <div class="Base" id="base"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Base extends Vue {}
</script>

<style lang="scss">
.Base {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__container {
    display: flex;
    flex-direction: row;
  }
}
</style>
