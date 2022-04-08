<template>
  <button
      class="g-button"
      :class="{ [`icon-${iconPosition}`]: true }"
      @click="$emit('click')"
  >
    <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "../icon";

export default {
  name: "GuluButton",
  // props: ["icon", "iconPosition"],
  components: {
    "g-icon": Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
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
$font-size: 14px;
$button-height: 32px;
$button-bg: #fff;
$button-active-bg: #f5f5f5;
$border-radius: 4px;
$color: #333;
$border-color: #333;
$border-color-hover: #e6e6e6;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  height: $button-height;
  font-size: $font-size;
  padding: 0 0.55em;
  background: $button-bg;
  border: 1px solid $border-color;
  border-radius: $border-radius;
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
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
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

  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>