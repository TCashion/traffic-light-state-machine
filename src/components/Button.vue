<template>
  <button class="Button" type="button" @click="$emit('button-clicked')">
    {{ buttonCopy }}
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
class Button extends Vue {
  @Prop({ type: String, required: true }) readonly buttonCopy!: string
}

export default Button
</script>

<style lang="scss">
.Button {
  width: fit-content;
  margin: 3px;
}
</style>
