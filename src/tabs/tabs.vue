<template>
  <div class="tabs">
    <slot></slot>
    <!--    <ul>-->
    <!--      <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">-->
    <!--        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>-->
    <!--      </li>-->
    <!--    </ul>-->
    <!--    <div class="tabs-details">-->
    <!--      <slot></slot>-->
    <!--    </div>-->
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: "GuluTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: function (value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    // 全局注册, 唯一可以跨组件调用的属性, 其他组件只提供给儿子, 不提供给孙子
    // 其他组件可以通过 this.$root.$options.components.GuluTabs 获取到 GuluTabs 组件
    return {
      eventBus: this.eventBus,
    }
  },
  created() {
    this.$emit("update:selected", this.selected);
  },
  mounted() {
    if (this.$children.length === 0) {
      console.error("Tabs组件必须包含子组件tabs-head和tabs-item");
    }
    this.eventBus.$emit("tabs-mounted", this.selected);
  }
}
</script>

<style scoped>
/*.tabs {*/
/*  position: relative;*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  list-style: none;*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*  justify-content: space-between;*/
/*  align-items: flex-start;*/
/*  border-bottom: 1px solid #dbdbdb;*/
/*}*/
</style>