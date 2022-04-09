<template>
  <div>
    <g-nav :selected.sync="selected" vertical>
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template v-slot:title>关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template v-slot:title>联系方式</template>
          <g-nav-item name="contact">微信</g-nav-item>
          <g-nav-item name="address">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template v-slot:title>手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <pre><code>{{ content }}</code></pre>
    <g-nav :selected.sync="selected">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template v-slot:title>关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template v-slot:title>联系方式</template>
          <g-nav-item name="contact">微信</g-nav-item>
          <g-nav-item name="address">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template v-slot:title>手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <pre><code>{{ content1 }}</code></pre>
  </div>
</template>

<script>
import GNav from '../../../src/nav/nav';
import GNavItem from '../../../src/nav/nav-item';
import GSubNav from '../../../src/nav/sub-nav';

export default {
  name: "nav-demo",
  components: {
    GNav, GNavItem, GSubNav
  },
  data() {
    return {
      selected: 'home',
      content: `
      <g-nav :selected.sync="selected" vertical>
        <g-nav-item name="home">首页</g-nav-item>
        <g-sub-nav name="about">
            <template v-slot:title>关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>
            <g-nav-item name="developers">开发团队</g-nav-item>
            <g-sub-nav name="contacts">
                <template v-slot:title>联系方式</template>
                <g-nav-item name="contact">微信</g-nav-item>
                <g-nav-item name="address">QQ</g-nav-item>
                <g-sub-nav name="phone">
                    <template v-slot:title>手机</template>
                    <g-nav-item name="cm">移动</g-nav-item>
                    <g-nav-item name="cu">联通</g-nav-item>
                    <g-nav-item name="cn">电信</g-nav-item>
                </g-sub-nav>
            </g-sub-nav>
        </g-sub-nav>
        <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
      `,
      content1: `
      <g-nav :selected.sync="selected">
        <g-nav-item name="home">首页</g-nav-item>
        <g-sub-nav name="about">
            <template v-slot:title>关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>
            <g-nav-item name="developers">开发团队</g-nav-item>
            <g-sub-nav name="contacts">
                <template v-slot:title>联系方式</template>
                <g-nav-item name="contact">微信</g-nav-item>
                <g-nav-item name="address">QQ</g-nav-item>
                <g-sub-nav name="phone">
                    <template v-slot:title>手机</template>
                    <g-nav-item name="cm">移动</g-nav-item>
                    <g-nav-item name="cu">联通</g-nav-item>
                    <g-nav-item name="cn">电信</g-nav-item>
                </g-sub-nav>
            </g-sub-nav>
        </g-sub-nav>
        <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
      `
    }
  },
}
</script>

<style scoped lang="scss">

</style>