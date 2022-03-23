<template>
  <div class="wrapper" :class="toastPosition">
    <div class="toast">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{ closeButton.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gulutoast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },

    // 第一种关闭方法
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭', callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  created() {
    console.log(this.closeButton)
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  computed: {
    toastPosition() {
      return {
        [`position-${this.position}`]: true
      }

    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    log() {
      console.log('测试');
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this) //this === toast实例
      }
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 16px;
$toast-height: 40px;
$line-height: 40px;
$toast-bg: rgba(0, 0, 0, .75);
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 0;
    transform: translateY(0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 0;
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;

  &.position-top {
    top: 0;

    .toast {
      border-radius: 0 0 4px 4px;
      animation: slide-down $animation-duration;
    }
  }

  &.position-bottom {
    bottom: 0;

    .toast {
      border-radius: 4px 4px 0 0;
      animation: slide-up $animation-duration;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);

    .toast {
      animation: fade-in $animation-duration;
    }
  }

  .toast {
    display: flex;
    font-size: $font-size;
    min-height: $toast-height;
    line-height: $line-height;
    color: white;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    padding: 0 16px;

    > .close {
      display: flex;
      align-items: center;
      border-left: 1px solid #666;
      cursor: pointer;
      margin-left: 16px;
      padding-left: 16px;
      flex-shrink: 0;
    }
  }
}
</style>