<template>
  <div class="all">
    <el-container style='height:100%'>
      <!-- 头部区域的渲染 -->
      <el-header style="padding:0; height:120px">
        <vue-semo-common-header />
      </el-header>
      <!-- 中间内容区域的渲染 -->
      <el-main style="padding:0;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <!-- 底部音乐播放器的渲染 -->
      <el-footer style="padding:0px;height:85px">
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
  mounted() {},

  methods: {},
}
</script>

<style l
ang="less" scoped>
.all {
  height: 100vh;
  user-select: none;
}
</style>