<template>
  <div class="tabs-body">
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: "GuluTabsBody",
  inject: ["eventBus"],
  created() {
  }
}
</script>

<style scoped>
.tabs-body {
  padding: 10px 0;
}
</style>