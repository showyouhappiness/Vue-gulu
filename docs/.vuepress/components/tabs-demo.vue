<template>
  <div>
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head class="crf">
        <template v-slot:actions>
          <button>设置</button>
        </template>
        <g-tabs-item name="首页">首页</g-tabs-item>
        <g-tabs-item name="消息">消息</g-tabs-item>
        <g-tabs-item name="设置" disabled>
          <g-icon name="settings"></g-icon>
          设置
        </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="首页" icon="home" active>首页内容</g-tabs-pane>
        <g-tabs-pane name="消息" icon="message" active>消息内容</g-tabs-pane>
        <g-tabs-pane name="设置" icon="setting" active>设置内容</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs';
import TabsHead from '../../../src/tabs-head';
import TabsItem from '../../../src/tabs-item';
import TabsPane from '../../../src/tabs-pane';


export default {
  name: "popover-demo",
  components: {
    'g-tabs': Tabs,
    'g-tabs-head': TabsHead,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane
  },
  data() {
    return {
      content: `
      <g-tabs :selected.sync="selectedTab">
        <g-tabs-head class="crf">
            <template v-slot:actions>
                <button>设置</button>
            </template>
            <g-tabs-item name="首页">首页</g-tabs-item>
            <g-tabs-item name="消息">消息</g-tabs-item>
            <g-tabs-item name="设置" disabled><g-icon name="settings"></g-icon>设置</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="首页" icon="home" active>首页内容</g-tabs-pane>
            <g-tabs-pane name="消息" icon="message" active>消息内容</g-tabs-pane>
            <g-tabs-pane name="设置" icon="setting" active>设置内容</g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
      `
    }
  },
}
</script>

<style scoped lang="scss">

</style>