<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{ item.name }}
        <icon v-if="item.children" name="right" class="icon"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems" :height="height"></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from './icon';

export default {
  name: "GuluCascaderItems",  // 必须与组件名称一致, 否则编译会报错 gulu-cascader-item -> GuluCascaderItem
  components: {
    Icon
  },
  props: {
    items: {
      type: Array,
    },
    height: {
      type: String,
    },
  },
  data() {
    return {
      leftSelected: null,
    }
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import "var";

.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .left {
    padding: .3em 0;
  }

  .right {
    border-left: 1px solid $border-color;
  }

  .label {
    padding: .3em 2em .3em 1.5em;
    position: relative;

    .icon {
      position: absolute;
      right: .2em;
      top: 50%;
      transform: translateY(-50%) scale(.6);
    }
  }
}


</style>