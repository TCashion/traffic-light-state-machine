<template>
  <div class="Robot">
    <h1>Robot</h1>
    <hr />
    <lock-box :currentValue="currentValue" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import LockBox from "./LockBox.vue";

@Component({
  components: {
    LockBox
  }
})
export default class Robot extends Vue {
  @Prop({ type: String, required: true }) readonly currentValue!: string;
}
</script>

<style lang="scss">
.Robot {
  width: 25rem;
  height: 430px;
}
</style>
