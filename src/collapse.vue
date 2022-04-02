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
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
    },
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

    this.eventBus.$emit('update:selected', this.selected) // 初始化时，通知所有子组件设置selected

    this.eventBus.$on('update:addSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected)) // 深拷贝
      if (this.single) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      this.eventBus.$emit('update:selected', selectedCopy)  // 通知子组件设置selected
      this.$emit('update:selected', selectedCopy)  // 通知父组件设置selected
    })

    this.eventBus.$on('update:removeSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected)) // 深拷贝
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      this.eventBus.$emit('update:selected', selectedCopy)  // 发送消息
      this.$emit('update:selected', selectedCopy) // 发送消息
    })
  }
}
</script>

<style scoped lang="scss">
.collapse {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}
</style>