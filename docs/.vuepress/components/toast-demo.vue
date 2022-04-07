<template>
  <div>
    <button @click="showToast1">top</button>
    <button @click="showToast2">middle</button>
    <button @click="showToast3">bottom</button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>

import Toast from '../../../src/toast';
import Plugin from '../../../src/plugin';

export default {
  name: "toast-demo",
  components: {
    Plugin, Toast
  },
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: "hi",
      content: `
    <button @click="showToast1">top</button>
    <button @click="showToast2">middle</button>
    <button @click="showToast3">bottom</button>
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
            toask.log()
            console.log('I know')
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