<template>
    <div class="collapse">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "GuluCollapse"
}
</script>

<style scoped lang="scss">
.collapse{
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}
</style>