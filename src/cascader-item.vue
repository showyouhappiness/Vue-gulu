<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <gulu-cascader-item
        v-if="sourceItem.children"
        v-for="item in sourceItem.children"
        :sourceItem="item"
    ></gulu-cascader-item>
  </div>
</template>

<script>
export default {
  name: "GuluCascaderItem",  // 必须与组件名称一致, 否则编译会报错 gulu-cascader-item -> GuluCascaderItem
  props: {
    sourceItem: {
      type: Object,
    },
  }
}
</script>

<style scoped lang="scss">
@import "var";

.cascaderItem {
  border: 1px solid $border-color;
  margin: 10px;
}


</style>