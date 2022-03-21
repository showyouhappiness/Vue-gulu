<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Gulutoast"
}
</script>

<style scoped lang="scss">
$font-size: 16px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, .75);

.toast {
  display: flex;
  align-items: center;
  font-size: $font-size;
  height: $toast-height;
  position: fixed;
  top: 0;
  left: 50%;
  color: white;
  transform: translateX(-50%);
  border-radius: 4px;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  padding: 0 16px;
}
</style>