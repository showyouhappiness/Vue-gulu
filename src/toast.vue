<template>
  <div class="toast">
    <slot></slot>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </span>
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
  methods: {
    close() {
      this.$el.remove()
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

.toast {
  display: flex;
  font-size: $font-size;
  height: $toast-height;
  line-height: $line-height;
  position: fixed;
  top: 0;
  left: 50%;
  color: white;
  transform: translateX(-50%);
  border-radius: 4px;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  padding: 0 16px;

  > .close {
    display: block;
    border-left: 1px solid #666;
    cursor: pointer;
    margin-left: 16px;
    padding-left: 16px;
  }
}
</style>