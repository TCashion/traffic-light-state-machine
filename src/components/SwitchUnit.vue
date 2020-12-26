<template>
  <div @click="handleClick" class="SwitchUnit">{{ switchName }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Switch } from "../types/types";

@Component
export default class SwitchUnit extends Vue {
  @Prop({ type: String, required: true }) readonly switchName!: Switch;

  handleClick() {
    this.$emit("clicked", this.switchName as Switch);
  }
}
</script>

<style lang="scss">
.SwitchUnit {
  height: 50px;
  width: 50px;
  border: 2px solid black;
  margin: 1rem;
}
</style>
