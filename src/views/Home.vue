<template>
  <div class="home">
    <Base />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Base from "../components/Base.vue";

@Component({
  components: {
    Base
  }
})
export default class Home extends Vue {}
</script>
