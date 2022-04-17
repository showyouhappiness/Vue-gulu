<template>
  <div>
    <div style="margin: 20px">
      <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected"
               :order-by.sync="orderBy" @update:orderBy="requestData" :loading="loading" :height="400"
               expend-field="description" checkable></g-table>
      <template v-slot="xxx">
        <button @click="edit(xxx.item)">编辑</button>
        <button @click="view(xxx.item)">查看</button>
      </template>
    </div>
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
      content: `
    <div style="margin: 20px">
        <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected"
                 :order-by.sync="orderBy" @update:orderBy="requestData" :loading="loading" :height="400"
                 expend-field="description" checkable></g-table>
        <template v-slot="xxx">
            <button @click="edit(xxx.item)">编辑</button>
            <button @click="view(xxx.item)">查看</button>
        </template>
    </div>
    `,
      selected: [],
      columns: [
        {
          text: '姓名',
          field: 'name'
        },
        {
          text: '分数',
          field: 'score'
        }
      ],
      orderBy: {  // 排序  只能确定是否排序，并不知道是升序还是降序
        score: 'asc'
      },
      loading: false,
      dataSource: [
        {
          id: 1,
          name: '张三',
          score: 20
        },
        {
          id: 2,
          name: '李四',
          score: 30
        },
        {
          id: 3,
          name: '王五',
          score: 40
        },
        {
          id: 4,
          name: '赵六',
          score: 50
        },
        {
          id: 5,
          name: '田七',
          score: 60
        }
        ,
        {
          id: 6,
          name: '陈八',
          score: 70
        },
        {
          id: 7,
          name: '孙九',
          score: 80
        },
        {
          id: 8,
          name: '周十',
          score: 90
        },

      ]
    }
  },
  methods: {
    edit(item) {
      alert(item.name)
    },
    view(item) {
      alert(item.name)
    },
    requestData() {
      this.loading = true;
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
        this.loading = false;
      }, 3000)
    }
  }
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