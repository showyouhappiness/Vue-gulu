<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="playAutomatically">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength" :class="{active: selectedIndex === n-1}"
            @click="select(n-1)">{{ n }}</span>
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
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timeId: undefined,
    }
  },
  mounted() {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updateChildren()
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0
    },
    names() {
      return this.$children.map(vm => vm.name)
    },
  },
  methods: {
    onMouseEnter() {
      window.clearTimeout(this.timeId)
      this.timeId = undefined
    },
    playAutomatically() {
      if (this.timeId) {
        return
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        if (newIndex === -1) {
          newIndex = this.names.length + 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.select(newIndex)
        this.timeId = setTimeout(run, 3000)
      }
      this.timeId = setTimeout(run, 3000)
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit("update:selected", this.names[index])
    },
    getSelected() {
      return this.selected || this.$children[0].name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach(vm => {
        vm.reverse = this.lastSelectedIndex >= this.selectedIndex
        if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
          vm.reverse = false
        }
        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
          vm.reverse = true
        }
        this.$nextTick(() => {
          vm.selected = selected
        })
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