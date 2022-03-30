<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" v-if="isActive">
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
      default: ""
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus && this.eventBus.$on("update:selected", (vm) => {
      if (vm !== this) {
        this.close()
      }
    })
  },
  methods: {
    toggle() {
      if (this.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
        this.eventBus && this.eventBus.$emit("update:selected", this)
      }
    },
    close() {
      this.isActive = false
    }
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