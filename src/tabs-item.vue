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
        disabled: this.disabled
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
      if (this.disabled) {
        return
      }
      this.eventBus.$emit('update:selected', this.name);
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-item {
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &.active {
    color: #409eff;
    border-bottom: 2px solid #409eff;
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>