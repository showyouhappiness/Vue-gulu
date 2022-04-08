<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :data-name="name">
      {{ title }}
    </div>
    <div class="content" v-if="isActive" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus && this.eventBus.$on("update:selected", (names) => {
      if (names.indexOf(this.name) >= 0) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    })
  },
  methods: {
    toggle() {
      if (this.isActive) {
        this.eventBus && this.eventBus.$emit("update:removeSelected", this.name)  // 发送消息
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name)      // 发送消息
      }
    },
  }
}
</script>

<style scoped lang="scss">
.collapseItem {
  .title {
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: -1px -1px 0 -1px;
    min-height: 32px;
    border: 1px solid #ebebeb;
    //border-radius: 4px;
  }

  &:first-child {
    .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    .title, .content {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-bottom: -1px;
    }
  }

  .content {
    padding: 5px 10px;
  }
}
</style>