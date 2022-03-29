<template>
  <div class="popover" @click.stop="showPopover"> <!-- .stop 阻止当前事件冒泡-->
    <div class="content-wrapper" v-if="show" @click.stop> <!-- .stop 阻止复制文本点击时，冒泡触发关闭事件-->
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopover() {
      this.show = !this.show
      if (this.show === true) {
        this.$nextTick(() => {
          // x() 一个函数
          // y=x().bind(this) 生成另外一个函数
          let eventHandler = () => {
            this.show = false  // 当点击空白处时，隐藏弹出层
            document.removeEventListener('click', eventHandler)  // 移除事件, 防止点击多次后,事件触发多次,出现多个监听器
          }
          document.addEventListener('click', eventHandler)  // 绑定事件
        })
      }
    },
  }
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: 200px;

  .content-wrapper {
    width: 200px;
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #ccc;
  }
}
</style>