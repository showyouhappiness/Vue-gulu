<template>
  <div>
    <g-row>
      <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
        <div class="demo"></div>
      </g-col>
      <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
        <div class="demo"></div>
      </g-col>
      <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
        <div class="demo"></div>
      </g-col>
      <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
        <div class="demo"></div>
      </g-col>
      <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
        <div class="demo"></div>
      </g-col>
      <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
        <div class="demo"></div>
      </g-col>
    </g-row>
    <g-row class="topBar">
      <g-col class="demoBox" span="9">
        <g-row align="left">
          <g-col>1</g-col>
          <g-col>2</g-col>
          <g-col>3</g-col>
          <g-col>4</g-col>
        </g-row>
      </g-col>
      <g-col class="demoBox" span="15">
        <g-row align="right">
          <g-col>1</g-col>
          <g-col>2</g-col>
          <g-col>3</g-col>
          <g-col>4</g-col>
          <g-col>5</g-col>
          <g-col>6</g-col>
          <g-col>7</g-col>
        </g-row>
      </g-col>
    </g-row>
    <g-row class="logo_search_qrcode">
      <g-col class="demoBox" span="4">
        <div class="logo-wrapper">
          <img class="logo"
               src="https://gw.alicdn.com/imgextra/i3/O1CN01uRz3de23mzWofmPYX_!!6000000007299-2-tps-143-59.png" alt=""/>
        </div>
      </g-col>
      <g-col class="demoBox" span="14">2</g-col>
      <g-col class="demoBox" span="6">2</g-col>
    </g-row>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>

import Col from '../../../src/grid/col'
import Row from '../../../src/grid/row'

export default {
  name: "grid-demo",
  components: {
    'g-col': Col,
    'g-row': Row
  },
  data() {
    return {
      content: `
        <g-row>
        <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
            <div class="demo"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
            <div class="demo"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
            <div class="demo"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
            <div class="demo"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
            <div class="demo"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow="{span:8}">
            <div class="demo"></div>
        </g-col>
    </g-row>
    <g-row class="topBar">
        <g-col class="demoBox" span="9">
            <g-row align="left">
                <g-col>1</g-col>
                <g-col>2</g-col>
                <g-col>3</g-col>
                <g-col>4</g-col>
            </g-row>
        </g-col>
        <g-col class="demoBox" span="15">
            <g-row align="right">
                <g-col>1</g-col>
                <g-col>2</g-col>
                <g-col>3</g-col>
                <g-col>4</g-col>
                <g-col>5</g-col>
                <g-col>6</g-col>
                <g-col>7</g-col>
            </g-row>
        </g-col>
    </g-row>
    <g-row class="logo_search_qrcode">
        <g-col class="demoBox" span="4">
            <div class="logo-wrapper">
                <img class="logo"
                     src="https://gw.alicdn.com/imgextra/i3/O1CN01uRz3de23mzWofmPYX_!!6000000007299-2-tps-143-59.png" alt=""/>
            </div>
        </g-col>
        <g-col class="demoBox" span="14">2</g-col>
        <g-col class="demoBox" span="6">2</g-col>
    </g-row>
    `
    }
  },
}
</script>

<style scoped lang="scss">
</style>