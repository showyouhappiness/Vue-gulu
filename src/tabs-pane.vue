<template>
  <div class="tabs-pane" @click="handleClick" :class="classes" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      isActive: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    },
  },
  computed: {
    isDisabled() {
      return this.disabled || this.eventBus.isDisabled
    },
    classes() {
      return {
        active: this.isActive,
        disabled: this.isDisabled
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.isActive = this.name === name;
    });
  },
  methods: {
    handleClick() {
      this.eventBus.$emit('update:selected', this.name);
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-pane {
  &.active {
    color: #fff;
    background-color: #409eff;
  }
}
</style>