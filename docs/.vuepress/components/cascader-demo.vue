<template>
  <div>
    <g-cascader :source.sync="source" popover-height="200px"
                @update:source="onUpdateSource"
                @update:selected="onUpdateSelected"
                :selected.sync="selected" :load-data="loadData">
    </g-cascader>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Cascader from '../../../src/cascader'
import db from '../../../src/db';
import {removeListener} from "../../../src/click-outside";

function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id === parentId);
      result.forEach(node => {
        node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
      });
      success(result);
    }, 300);
  });
}

export default {
  components: {
    'g-cascader': Cascader
  },
  data() {
    return {
      selected: [],
      source: [],
      content: `
     <g-cascader :source.sync="source" popover-height="200px"
                @update:source="onUpdateSource"
                @update:selected="onUpdateSelected"
                :selected.sync="selected" :load-data="loadData" >
    </g-cascader>
      `
    }
  },
  created() {
    ajax(0).then(result => {
      this.source = result;
    });
  },
  destroyed() {
    removeListener();
    console.log('destroyed');

  },
  methods: {
    loadData({id}, updateSource) {
      ajax(id).then(result => {
        updateSource(result);
      });
    },
    onUpdateSource(result) {
    },
    onUpdateSelected(selected) {
    }
  }
}
</script>

<style scoped lang="scss">

</style>