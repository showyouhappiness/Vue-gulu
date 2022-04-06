<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSlidesItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: undefined,
      reverse: false
    }
  },
  computed: {
    visible() {
      return this.selected === this.name;
    }
  },
}
</script>

<style scoped lang="scss">
.g-slides-item {

}

.slide-leave-active {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.slide-leave-active, .slide-enter-active {
  transition: all 1s ease-in-out;
}

.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter.reverse {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%) scale(0.8);
  opacity: 0;
}

.slide-leave-to.reverse {
  transform: translateX(100%) scale(0.8);
  opacity: 0;
}
</style>