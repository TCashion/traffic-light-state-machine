<template>
  <div class="TrafficSetting">
    <h3>Traffic Setting:</h3>
    <select
      class="TrafficSetting__select"
      name="traffic-setting"
      id="traffic-setting-select"
      @change="onChange($event.target)"
    >
      <option
        v-for="setting in trafficSettings"
        :value="setting"
        :key="setting"
        >{{ setting[0].toUpperCase() + setting.substring(1) }}</option
      >
    </select>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { TrafficSetting } from '../store/store-types'

@Component
export default class TrafficSettingPanel extends Vue {
  trafficSettings: TrafficSetting[] = [
    TrafficSetting.LOW,
    TrafficSetting.HIGH,
    TrafficSetting.BROKEN,
  ]

  onChange(eventTarget: HTMLSelectElement) {
    const newTrafficSetting = eventTarget.value
    this.$store.commit('setCurrentTrafficSetting', newTrafficSetting)
    this.$emit('traffic-setting-changed', newTrafficSetting)
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
