<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid red">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {type: Object, validator},
    narrow: {type: Object, validator},
    pc: {type: Object, validator},
    wide: {type: Object, validator},
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrow, pc, wide} = this
      // xxx && `xxx-${xxx}` 如果存在则使用后面的，如果不存在则无
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(narrow ? [`col-narrow-${narrow.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(wide ? [`col-wide-${wide.span}`] : []),
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
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
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $m from 1 through 24 {
    &.#{$class-prefix}#{$m} {
      margin-left: ($m / 24) * 100%;
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-ipad-;
    @for $m from 1 through 24 {
      &.#{$class-prefix}#{$m} {
        margin-left: ($m / 24) * 100%;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-narrow-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-narrow-;
    @for $m from 1 through 24 {
      &.#{$class-prefix}#{$m} {
        margin-left: ($m / 24) * 100%;
      }
    }
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-pc-;
    @for $m from 1 through 24 {
      &.#{$class-prefix}#{$m} {
        margin-left: ($m / 24) * 100%;
      }
    }
  }

  @media (min-width: 1200px) {
    $class-prefix: col-wide-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-wide-;
    @for $m from 1 through 24 {
      &.#{$class-prefix}#{$m} {
        margin-left: ($m / 24) * 100%;
      }
    }
  }
}
</style>