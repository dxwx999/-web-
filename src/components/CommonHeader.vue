<template>
  <div class="header">

    <!-- 最顶部的区域 -->
    <div class="top">
      <!-- 左侧区域 -->
      <div class="headerLeft">
        <!--  顶部logo图片 -->
        <img src="@/assets/log.png" class="logImg">
        <!-- 顶部切换按钮 -->
        <div class="headerChange">
          <div class="back"><i class="el-icon-back"></i></div>
          <div class="qianjin"><i class="el-icon-right"></i></div>
        </div>
        <!-- 顶部输入框 -->
        <div class="headerInput">
          <el-input placeholder="请输入内容"></el-input>
        </div>
        <!-- 顶部听歌识曲 -->
        <div class="headerListen">
          <i class="el-icon-mic"></i>
        </div>
      </div>
      <!-- 歌词区域 -->
      <div class="headerMiddle">

        歌词歌词歌词歌词歌词歌词歌词歌词歌词歌词歌词歌词歌词
      </div>
      <!-- 右侧区域 -->
      <div class="headerRight">
        <!-- 右侧头像区域 -->
        <div class="headPortrait">
          <!-- 头像区域 -->
          <img src="@/assets/headPortrait.jpg">
          <!-- 下拉显示区域 -->
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
    </div>
    <!-- 导航区域 -->
    <div class="nav">
      <div class="navDetail">
        <keep-alive>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color='#303133' router>
            <el-menu-item :index="item.name" v-for="item in menu" :key="item.label">{{item.label}}</el-menu-item>
          </el-menu>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
//封装好的首页数据请求API
export default {
  name: 'VueSemoCommonHeader',
  data() {
    return {
      //导航栏默认选项
      activeIndex: 'personality',
      //头部菜单区域渲染数据
      menu: [
        { name: 'personality', label: '个性推荐' },
        { name: 'songSheet', label: '歌单' },
        { name: 'rankList', label: '排行榜' },
        { name: 'singer', label: '歌手' },
      ],
    }
  },
  created() {},
  mounted() {},
  components: {},
  methods: {},
}
</script>

<style lang="less" scoped>
.header {
  .top {
    display: flex;
    background-color: #ec4141;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .headerLeft {
      display: flex;
      height: 60px;
      align-items: center;
      .logImg {
        width: 123px;
        height: 60px;
        margin: 0 50px;
      }
      .headerChange {
        display: flex;
        i {
          font-size: 25px;
          color: white;
          border-radius: 50%;
          margin-left: 15px;
        }
      }
      .headerInput {
        .el-input {
          margin-left: 30px;
          /deep/ .el-input__inner {
            background-color: #e13e3e;
            border-radius: 50px;
            color: #eee;
            border: none;
            width: 204px;
          }
        }
      }
      .headerListen {
        width: 45px;
        height: 45px;
        margin-left: 10px;
        background-color: #e23e3e;
        border-radius: 50px;

        i {
          font-size: 20px;
          color: white;
          line-height: 45px;
          margin-left: 12px;
        }
      }
    }
    .headerMiddle {
      font-size: 14px;

      width: 400px;
      height: 60px;
      color: white;
      word-break: break-all;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 60px;
    }
    .headerRight {
      .headPortrait {
        display: flex;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          margin-right: 10px;
        }
        i {
          font-size: 20px;
          color: #eee;
          margin-right: 20px;
        }
      }
    }
  }
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
}
//输入框的placeholder颜色
/deep/ input::-webkit-input-placeholder {
  color: #dfdfdf;
}
</style>