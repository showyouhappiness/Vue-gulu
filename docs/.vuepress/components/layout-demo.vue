<template>
  <div>
    <g-layout>
      <g-sider>sider</g-sider>
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Layout from "../../../src/layout/layout";
import Sider from "../../../src/layout/sider";
import Header from "../../../src/layout/header";
import Content from "../../../src/layout/content";
import Footer from "../../../src/layout/footer";

export default {
  name: "layout-demo",
  components: {
    'g-layout': Layout,
    'g-sider': Sider,
    'g-header': Header,
    'g-content': Content,
    'g-footer': Footer
  },
  data() {
    return {
      content: `
     <g-layout>
        <g-sider>sider</g-sider>
        <g-layout>
            <g-header>header</g-header>
            <g-content>content</g-content>
            <g-footer>footer</g-footer>
        </g-layout>
    </g-layout>`
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