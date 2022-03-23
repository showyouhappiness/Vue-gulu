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
    return {
      eventBus: this.eventBus,
    }
  },
  created() {
    this.$emit("update:selected", this.selected);
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