<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Gululayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'Gulusider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>

<style scoped lang="scss">
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  overflow: hidden;
  height: 100vh;

  &.hasSider {
    flex-direction: row;
  }
}

</style>