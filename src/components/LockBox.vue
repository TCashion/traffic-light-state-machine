<template>
  <div class="LockBox">
    <div
      :class="
        currentValue === 'noneSwitched'
          ? 'LockBox__door__closed'
          : 'LockBox__door__open'
      "
    >
      <actor />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Actor from "./Actor.vue";

@Component({
  components: {
    Actor
  }
})
class LockBox extends Vue {
  // this can have states open and close, which toggle different styles
  @Prop({ type: String, required: true }) readonly currentValue!: string;
}

export default LockBox;
</script>

<style lang="scss">
.LockBox {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__door {
    &__open,
    &__closed {
      height: 100px;
      width: 100px;
      border: solid black 2px;
      margin: 0 auto;
      display: flex;
    }
  }

  &__door__open {
    background: transparent;
  }
  &__door__closed {
    background: black;
  }
}
</style>
