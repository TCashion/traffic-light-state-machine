<template>
  <div class="LockBox">
    <actor />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Actor from "./Actor.vue";

@Component({
  components: {
    Actor
  }
})
class LockBox extends Vue {
  // this can have states open and close, which toggle different styles
}

export default LockBox;
</script>

<style lang="scss">
.LockBox {
  height: 100px;
  width: 100px;
  border: solid black 2px;
  margin: 0 auto;
  display: flex;
}
</style>
