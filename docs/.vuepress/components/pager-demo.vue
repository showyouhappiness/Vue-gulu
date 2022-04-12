<template>
  <div>
    <g-pager :total-page="totalPage" :current-page.sync="currentPage" :hide-if-one-page="false"></g-pager>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>

import GPager from '../../../src/pager';


export default {
  name: "toast-demo",
  components: {GPager},
  data() {
    return {
      currentPage: 10,
      totalPage: 20,
      content: `
        <g-pager :total-page="totalPage" :current-page.sync="currentPage" :hide-if-one-page="false"></g-pager>
    `
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