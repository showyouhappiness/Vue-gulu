<template>
  <div class="tabs-item" @click="handleClick" :class="classes">
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: "GuluTabsItem",
  inject: ['eventBus'],
  data() {
    return {
      isActive: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    name: {
      type: String | Number,
      require: true
    }
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
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;

  &.active {
    color: #fff;
    background-color: #409eff;
  }
}
</style>