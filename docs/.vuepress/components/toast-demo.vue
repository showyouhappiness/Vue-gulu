<template>
  <div>
    <g-button @click="showToast1">top</g-button>
    <g-button @click="showToast2">middle</g-button>
    <g-button @click="showToast3">bottom</g-button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>

import Toast from '../../../src/toast';
import Plugin from '../../../src/plugin';
import Button from "../../../src/button/button";

export default {
  name: "toast-demo",
  components: {
    Plugin, Toast, 'g-button': Button
  },
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: "hi",
      content: `
    <g-button @click="showToast1">top</g-button>
    <g-button @click="showToast2">middle</g-button>
    <g-button @click="showToast3">bottom</g-button>
    `
    }
  },
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast('I am message', {
        position,
        enableHtml: false,
        closeButton: {
          text: '知道了',
          callback(toask) {
            console.log(toask.$options.propsData.position, toask.$options.propsData.closeButton.text)
          }
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
.header {
  background: #999;
  height: 100px;
}

.sider {
  background: #333;
  width: 200px;
}

.footer {
  background: #ccc;
  height: 50px;
}
</style>