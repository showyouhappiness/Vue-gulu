<template>
  <div class="wrapper" :class="{ error }">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
    />
    <!-- 我想在这里加一个v-if但是我不想在这里加一个div所以可以使用template -->
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  components: {
    Icon,
  },
  name: "GuluInput", //name方便用于调试
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>
// scoped的作用：使其CSS将仅应用于当前组件的元素；实现组件的私有化，不对全局造成样式污染，这样虽然方便但是我们需要慎用，因为当我们使用公共组件时有时会修改其他页面的CSS。
//做一个小测试