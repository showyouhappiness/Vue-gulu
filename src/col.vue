<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluCol",
  props:{
    span:{
      type:[Number, String]
    },
    offset:{
      type:[Number,String]
    }
  },
  data(){
    return{
      gutter:0
    }
  },
  computed:{
    colClass(){
      let {span, offset} = this
      // xxx && `xxx-${xxx}` 如果存在则使用后面的，如果不存在则无
      return [span && `col-${span}`, offset && `offset-${offset}`]
    },
    colStyle(){
      return{
          paddingLeft: this.gutter / 2+'px',
          paddingRight: this.gutter / 2+'px'
      }
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    width: 50%;
    padding: 0 10px;

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-;
    @for $m from 1 through 24 {
      &.#{$class-prefix}#{$m}{
        margin-left: ($m / 24) * 100%;
      }
    }
  }
</style>