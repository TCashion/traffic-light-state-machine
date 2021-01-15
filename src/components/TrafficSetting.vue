<template>
  <div class="TrafficSetting">
    <h3>Traffic Setting:</h3>
    <select
      class="TrafficSetting__select"
      name="traffic-setting"
      id="traffic-setting-select"
    >
      <option value="low">Low</option>
      <option value="high">High</option>
      <option value="broken">Broken</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TrafficSetting extends Vue {
  get currentTrafficSetting() {
    return this.$store.getters.getCurrentTrafficSetting
  }
}
</script>

<style lang="scss" scoped>
.TrafficSetting {
  height: auto;
  width: auto;

  &__select {
    width: 100%;
  }
}
</style>
