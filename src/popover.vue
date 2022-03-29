<template>
  <div class="popover" @click="showPopover" ref="popover"> <!-- .stop 阻止当前事件冒泡-->
    <div ref="contentWrapper" class="content-wrapper" v-if="show" :class="{[`position-${position}`]:true}">
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
      const {triggerWrapper, contentWrapper} = this.$refs
      console.log(triggerWrapper, contentWrapper);
      document.body.appendChild(contentWrapper)
      let {width, height, top, left} = triggerWrapper.getBoundingClientRect()
      console.log(width, height, top, left);
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY - height / 2,
          left: left + window.scrollX,
        },
        right: {
          top: top + window.scrollY - height / 2,
          left: left + width + window.scrollX,
        }
      }
      contentWrapper.style.top = `${positions[this.position].top}px`
      contentWrapper.style.left = `${positions[this.position].left}px`
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
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  border-radius: 5px;

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before, &::after {
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

  &.position-bottom {
    margin-top: 10px;

    &::before, &::after {
      left: 10px;
    }

    &::before {
      border-bottom-color: #ccc;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before, &::after {
      top: 10px;
    }

    &::before {
      border-left-color: #ccc;
      left: 100%;
    }

    &::after {
      border-left-color: #fff;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before, &::after {
      top: 10px;
    }

    &::before {
      border-right-color: #ccc;
      right: 100%;
    }

    &::after {
      border-right-color: #fff;
      right: calc(100% - 1px);
    }
  }
}
</style>