<template>
  <div>
    <g-slides class="wrapper" :selected.sync="selected">
      <g-slides-item name="haha">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="xixi">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="hehe">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Slides from '../../../src/slides/slides'
import SlidesItem from "../../../src/slides/slides-item";

export default {
  components: {
    'g-slides': Slides,
    'g-slides-item': SlidesItem
  },
  data() {
    return {
      selected: 'haha',
      content: `
    <g-slides class="wrapper" :selected.sync="selected">
        <g-slides-item name="haha">
            <div class="box">1</div>
        </g-slides-item>
        <g-slides-item name="xixi">
            <div class="box">2</div>
        </g-slides-item>
        <g-slides-item name="hehe">
            <div class="box">3</div>
        </g-slides-item>
    </g-slides>`
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 40px;
}

.box {
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333333;
  color: #fff;
}
</style>