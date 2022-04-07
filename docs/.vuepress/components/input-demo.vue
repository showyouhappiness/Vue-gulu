<template>
  <div>
    <div class="box">
      <g-input value="禁止输入和选用" disabled></g-input>
      <g-input value="禁止输入可以选用" readonly></g-input>
      <g-input value="可以输入选用"></g-input>
      <g-input value="可以获取输入的内容" @change="inputChange"></g-input>
      <g-input value="根据条件判断是否合格" error="姓名不能少于两个字"></g-input>
      <p>双向绑定</p>
      <g-input v-model="message"></g-input>
      <button @click="message += 1">+1</button>
      <input type="text" :value="message" @input="message = $event.target.value">
    </div>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Input from '../../../src/input';

export default {
  name: "input-demo",
  components: {
    'g-input': Input
  },
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: "hi",
      content: `
    <div class="box">
      <g-input value="禁止输入和选用" disabled></g-input>
      <g-input value="禁止输入可以选用" readonly></g-input>
      <g-input value="可以输入选用"></g-input>
      <g-input value="可以获取输入的内容" @change="inputChange"></g-input>
      <g-input value="根据条件判断是否合格" error="姓名不能少于两个字"></g-input>
      <p>双向绑定</p>
      <g-input v-model="message"></g-input>
      <button @click="message += 1">+1</button>
      <input type="text" :value="message" @input="message = $event.target.value">
    </div>`
    }
  },
  methods: {
    inputChange(e) {
      console.log(e);
    }
  },
}
</script>

<style scoped lang="scss">

</style>