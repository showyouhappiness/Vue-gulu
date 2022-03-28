<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluTabsHead",
  inject: ['eventBus'],
  created() {
  }
}
</script>

<style scoped lang="scss">
$gulu-tabs-head-height: 40px;
.tabs-head {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: $gulu-tabs-head-height;

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>