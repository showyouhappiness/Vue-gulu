<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Gulucontent"
}
</script>

<style scoped lang="scss">
.content {
  flex-grow: 1;
}
</style>