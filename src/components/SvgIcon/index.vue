<template>
  <svg aria-hidden="true" v-on="$listeners" :width="width" :height="height" :class="className" :fill="color">
    <use :xlink:href="getName" />
  </svg>
</template>

<script>
export default {
  name: 'DemoIndex',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
    },
    color: {
      type: String,
      default: 'black',
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    getName() {
      return `#icon-${this.name}`
    },
  },
}
</script>

<style lang="less" scoped>
.controlIcon {
  margin: 0 20px;
}
.aixin {
  padding-left: 5px;
}
.rightControl {
  padding-right: 20px;
}
.rc1 {
  margin-right: 40px;
}
</style>