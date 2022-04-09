<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluNav",
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    this.updateChildren();
    this.listenToChildren();
  },
  updated() {
    this.updateChildren();
  },
  computed: {
    items() {
      return this.$children.filter(vm => vm.$options.name === "GuluNavItem");
    }
  },
  methods: {
    updateChildren() {
      this.items.forEach(vm => {
        vm.selected = this.selected.indexOf(vm.value) >= 0;
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on("add:selected", this.addSelected);
      });
    },
    addSelected(value) {
      if (this.multiple) {
        if (this.selected.indexOf(value) < 0) {
          let copy = JSON.parse(JSON.stringify(this.selected));
          copy.push(value);
          this.$emit("update:selected", copy);
        }
      } else {
        this.$emit("update:selected", [value]);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.g-nav {
  display: flex;
  border: 1px solid red;
}
</style>