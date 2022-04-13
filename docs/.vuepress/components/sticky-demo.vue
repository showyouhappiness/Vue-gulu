<template>
  <div>
    <g-sticky :distance="distance">
      <div style="border: 1px solid red;height: 20px;"></div>
    </g-sticky>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
    <p>段落10</p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>

import GSticky from '../../../src/sticky';

export default {
  name: "sticky-demo",
  components: {
    GSticky
  },
  data() {
    return {
      distance: 100,
      content: `
    <g-sticky :distance="distance">
      <div style="border: 1px solid red;height: 20px;"></div>
    </g-sticky>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
    <p>段落10</p>
    `
    }
  },
}
</script>

<style scoped lang="scss">
</style>