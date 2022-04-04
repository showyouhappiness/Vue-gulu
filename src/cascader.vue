<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items :items="source" :height="popoverHeight"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items'

export default {
  name: "GuluCascader",
  components: {CascaderItems},
  props: {
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String,
    },
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
}
</script>

<style scoped lang="scss">
@import "var";

.cascader {
  position: relative;

  .trigger {
    border: 1px solid $border-color;
    height: 32px;
    width: 200px;
  }

  .popover-wrapper {
    position: absolute;
    top: 32px;
    left: 0;
    height: 200px;
    display: flex;
    border-radius: 5px;
    @extend .box-shadow;
  }
}


</style>