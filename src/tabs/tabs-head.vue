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
  justify-content: flex-start;
  height: $gulu-tabs-head-height;
  border-bottom: 1px solid #e8e8e8;

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>