<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluSlides",
  props: {
    selected: {
      type: String,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.updateChildren()
    this.playAutomatically()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    playAutomatically() {
      const names = this.$children.map(vm => vm.name)
      console.log(names)
      let index = names.indexOf(this.getSelected())
      let run = () => {
        let newIndex = index - 1
        if (newIndex === -1) {
          newIndex = names.length - 1
        }
        if (newIndex === names.length) {
          newIndex = 0
        }
        this.$emit("update:selected", names[newIndex])
        setTimeout(run, 3000)
      }
      setTimeout(run, 3000)
    },
    getSelected() {
      return this.selected || this.$children[0].name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach(vm => {
        vm.selected = selected
        const names = this.$children.map(vm => vm.name)
        let newIndex = names.indexOf(selected)
        let oldIndex = names.indexOf(vm.name)
        vm.reverse = newIndex <= oldIndex
      })
    },
  },
}
</script>

<style scoped lang="scss">
.g-slides {
  &-window {
    overflow: hidden;
  }

  &-wrapper {
    position: relative;
  }
}
</style>