<template>
  <div class="popover" @click="showPopover" ref="popover"> <!-- .stop 阻止当前事件冒泡-->
    <div ref="contentWrapper" class="content-wrapper" v-if="show">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
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
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
  },
  // x() 一个函数
  // y=x().bind(this) 生成另外一个函数
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.top = `${top + window.scrollY}px` // 加上滚动条的高度
      this.$refs.contentWrapper.style.left = `${left + window.scrollX}px` // 加上滚动条的高度
    },

    onclickDocument(e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return
      }
      if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
        return
      }
      this.onHide()
    },

    onShow() {
      this.show = true // 显示 popover
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onclickDocument)  // 绑定事件
      })
    },

    onHide() {
      this.show = false  // 当点击空白处时，隐藏弹出层
      document.removeEventListener('click', this.onclickDocument) // 移除事件
    },

    showPopover(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.show === true) {
          this.onHide()
        } else {
          this.onShow()
        }
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
}

.content-wrapper {
  position: absolute;
  border: 1px solid #ccc;
  //box-shadow: 0 0 5px #ccc;
  filter: drop-shadow(0 2px 2px #ccc);
  background-color: #fff;
  transform: translateY(-100%);
  margin-top: -10px;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    left: 10px;
  }

  &::before {
    border-top-color: #ccc;
    top: 100%;
  }

  &::after {
    border-top-color: #fff;
    top: calc(100% - 1px);
  }
}
</style>