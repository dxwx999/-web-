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
          <div class="back" @click="routerBack"><i class="el-icon-back"></i></div>
          <div class="qianjin" @click="routerGo"><i class="el-icon-right"></i></div>
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
    <music-nav v-if="$route.path!='/sheet'"></music-nav>
  </div>
</template>

<script>
import MusicNav from '@/components/MusicNav'
//封装好的首页数据请求API
export default {
  name: 'VueSemoCommonHeader',
  data() {
    return {}
  },
  created() {},
  mounted() {
    console.log(this.$route.path)
  },
  components: { MusicNav },
  methods: {
    routerBack() {
      this.$router.back()
    },
    routerGo() {
      this.$router.go(1)
    },
  },
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 768px) {
  .headerMiddle {
    display: none !important;
  }
  .top {
    display: none !important;
  }
}
.header {
  position: fixed;
  width: 100%;
  .top {
    display: flex;
    background-color: #ec4141;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .headerLeft {
      display: flex;
      height: 6rem;
      align-items: center;
      .logImg {
        width: 12.3rem;
        height: 6rem;
        margin: 0 5rem;
      }
      .headerChange {
        display: flex;
        i {
          font-size: 2.5rem;
          color: white;
          border-radius: 50%;
          margin-left: 1.5rem;
        }
      }
      .headerInput {
        .el-input {
          margin-left: 3rem;
          /deep/ .el-input__inner {
            background-color: #e13e3e;
            border-radius: 5rem;
            color: #eee;
            border: none;
            width: 20.4rem;
          }
        }
      }
      .headerListen {
        width: 4.5rem;
        height: 4.5rem;
        margin-left: 1rem;
        background-color: #e23e3e;
        border-radius: 5rem;

        i {
          font-size: 2rem;
          color: white;
          line-height: 4.5rem;
          margin-left: 1.2rem;
        }
      }
    }
    .headerMiddle {
      font-size: 1.4rem;

      width: 40rem;
      height: 6rem;
      color: white;
      word-break: break-all;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 6rem;
    }
    .headerRight {
      .headPortrait {
        display: flex;
        align-items: center;
        img {
          width: 5rem;
          height: 5rem;
          border-radius: 5rem;
          margin-right: 1rem;
        }
        i {
          font-size: 2rem;
          color: #eee;
          margin-right: 2rem;
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