<template>
  <div>
    <g-popover position="top">
      <template v-slot:content>
        <div>测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</div>
      </template>
      <button>上上</button>
    </g-popover>
    <g-popover position="bottom">
      <template v-slot:content>
        <div>asdasdasdadasdasdaasdadasdasdasdasdasdasdasdasdasdadadasdadadasdasdasd</div>
      </template>
      <button>下下</button>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template v-slot:content>
        <div>测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</div>
      </template>
      <button>左左</button>
    </g-popover>
    <g-popover position="right" trigger="click">
      <template v-slot:content>
        <div>asdasdasdadasdasdaasdadasdasdasdasdasdasdasdasdasdadadasdadadasdasdasd</div>
      </template>
      <button>右右</button>
    </g-popover>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Popover from '../../../src/popover';

export default {
  name: "popover-demo",
  components: {
    'g-popover': Popover
  },
  data() {
    return {
      content: `
    <g-popover position="top">
        <template v-slot:content>
            <div>测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</div>
        </template>
        <button>上上</button>
    </g-popover>
    <g-popover position="bottom">
        <template v-slot:content>
            <div>asdasdasdadasdasdaasdadasdasdasdasdasdasdasdasdasdadadasdadadasdasdasd</div>
        </template>
        <button>下下</button>
    </g-popover>
    <g-popover position="left" trigger="hover">
        <template v-slot:content>
            <div>测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</div>
        </template>
        <button>左左</button>
    </g-popover>
    <g-popover position="right" trigger="click">
        <template v-slot:content>
            <div>asdasdasdadasdasdaasdadasdasdasdasdasdasdasdasdasdadadasdadadasdasdasd</div>
        </template>
        <button>右右</button>
    </g-popover>
      `
    }
  },
}
</script>

<style scoped lang="scss">

</style>