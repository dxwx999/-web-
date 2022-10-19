<template>
  <div class="all">
    <el-container style='height:100%'>
      <!-- 头部区域的渲染 -->
      <el-header style="padding:0; " class="header">
        <vue-semo-common-header />
      </el-header>
      <!-- 中间内容区域的渲染 -->
      <el-main style="padding:0;">
        <router-view></router-view>
      </el-main>
      <!-- 底部音乐播放器的渲染 -->
      <el-footer style="padding:0rem;position: fixed;bottom:-1px; width:100%">
        <vue-semo-common-music ref="footMusic" />
      </el-footer>
    </el-container>

  </div>
</template>

<script>
import VueSemoCommonHeader from '@/components/CommonHeader.vue'
import VueSemoCommonMusic from '@/components/CommonMusic.vue'
export default {
  name: 'VueSemoMain',

  data() {
    return {}
  },
  components: { VueSemoCommonHeader, VueSemoCommonMusic },
  mounted() {
    if (this.$route.path.indexOf('sheet/') !== -1) document.getElementById('nav').style.display = 'none'
  },
  // 使用 watch 监听$route的变化,
  watch: {
    $route(to) {
      //默认使导航栏出现
      document.getElementById('nav').style.display = 'block'
      if (to.path.indexOf('sheet/') === -1) return
      //隐藏歌单页面的导航栏
      document.getElementById('nav').style.display = 'none'
      //切换到歌单页面的时候，让滚动条复原
      document.getElementsByClassName('el-main')[0].scrollTop = 0
    },
  },

  methods: {},
}
</script>

<style lang="less" scoped>
.el-footer {
  height: 200px;
}
.all {
  /* height: 100vh; */
  user-select: none;
}
.header {
  z-index: 99;
}
</style>