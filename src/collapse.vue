<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
// 可以使用父子通讯较简单，这里使用eventBus
export default {
  name: "GuluCollapse",
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>

<style scoped lang="scss">
.collapse {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}
</style>