<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
    <g-icon :name="icon" class="icon" v-if="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
// import Icon from "./icon";
export default {
  // props: ["icon", "iconPosition"],
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 0.55em;
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .content {
    order: 2;
  }

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }

    > .content {
      order: 1;
    }
  }
}
</style>