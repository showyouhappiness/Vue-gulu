<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsHead",
  inject: ['eventBus'],
  created() {
    console.log('测试');
    console.log(this.eventBus);
    console.log('测试');
  }
}
</script>

<style scoped>
.tabs-head {
}
</style>