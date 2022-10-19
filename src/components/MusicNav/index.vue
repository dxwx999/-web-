<template>
  <!-- 导航区域 -->
  <div class="nav" id="nav">
    <div class="navDetail">
      <el-menu :default-active='activeIndex' class="el-menu-demo" mode="horizontal" router>
        <el-menu-item :index="item.name" v-for="item in menu" :key="item.label">{{item.label}}</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicIndex',
  data() {
    return {
      //导航区域渲染数据
      menu: [
        { name: 'personality', label: '个性推荐' },
        { name: 'songSheet', label: '歌单' },
        { name: 'rankList', label: '排行榜' },
        { name: 'singer', label: '歌手' },
      ],
      //导航栏默认选项
      activeIndex: 'personality',
    }
  },
  mounted() {},
  methods: {},
  watch: {
    $route(to) {
      this.activeIndex = to.path.replace('/', '')
    },
  },
}
</script>

<style lang="less" scoped>
/* 导航区域的样式文件 */
.nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .navDetail {
    width: 99%;
    height: 65px;
    .el-menu-demo {
      display: flex;
      .is-active {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3px solid #e13e3e !important ;
      }
    }
  }
}

//输入框的placeholder颜色
/deep/ input::-webkit-input-placeholder {
  color: #dfdfdf;
}
</style>