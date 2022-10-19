<template>
  <div class="audioX">
    <!-- 左侧歌曲信息 -->
    <div class="lAudio">
      <!-- 歌曲缩略图区域 -->
      <img src="" id="leftImg" class="imgAudio">
      <!-- 歌曲名字区域---分为上下区域 -->
      <div class="msgAudio">
        <!-- 上区域为歌曲名字加爱心图标 -->
        <div class="leftName" style="display:none" id="leftAiXin">
          <span id="leftName">
          </span>
          <!-- 空心爱心 -->
          <svg-icon name="shixin" color="pink" class="aixin" className="aixin" @click="aixin" v-if="isAixin" />
          <!-- 实心爱心 -->
          <svg-icon name="kongxin" color="gray" class="aixin" className="aixin" @click="aixin" v-else />
        </div>
        <!-- 下区域为作者名字 -->
        <span class="author" id="leftAuthor"></span>
      </div>
    </div>
    <!-- 中间歌曲控件 -->
    <div class="mAudio">
      <music-control ref="musicControl" />
    </div>
    <!-- 右侧音量列表 -->
    <div class="rAudio">
      <svg-icon name="jingyin" :width=26 :height=26 className="rightControl rc1" v-if="isMuted" @click="changeMuted" />
      <svg-icon name="shengyin" :width=25 :height=25 className="rightControl rc1" v-else @click="changeMuted" />
      <svg-icon name="list" :width=25 :height=25 className="rightControl" />
    </div>
  </div>

</template>

<script>
import MusicControl from '@/components/MusicControl'
export default {
  name: 'VueSemoCommonMusic',
  data() {
    return {
      isAixin: false,
      isMuted: false,
    }
  },
  components: { MusicControl },

  mounted() {},

  methods: {
    aixin() {
      this.isAixin = !this.isAixin
    },
    changeMuted() {
      //获取到子组件中的audio组件
      let audioMuted = this.$refs.musicControl.$refs.audio
      if (audioMuted.muted) {
        this.isMuted = false
        audioMuted.muted = false
        return
      }
      this.isMuted = true
      audioMuted.muted = true
      // if (this.isMuted) {
      //   this.isMuted = false
      //   return
      // }
      // this.isMuted = true
    },
  },
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 768px) {
  .aixin {
    display: none !important;
  }
  .author {
    width: 10rem !important;
    font-size: 3rem !important;
    white-space: nowrap;
  }
  #leftName {
    width: 14rem !important;
  }
}
.audioX {
  //将padding扩大
  box-sizing: border-box;
  background-color: #fff;
  border-top: 0.1rem solid #efefef;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  /* 播放器左下角 */
  .lAudio {
    width: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;

    /* 上方歌名和爱心 */
    .msgAudio {
      position: relative;
      width: 10rem;
      height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 2rem;
      .leftName {
        align-items: center;
        width: 20rem;
        display: flex;
        #leftName {
          font-size: 0.18rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
        }
      }
      #leftAuthor {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .author {
        width: 22rem;
        color: gray;
      }
    }
    //音乐播放器缩略图
    .imgAudio {
      width: 8rem;
    }
  }
  /* 播放器中间 */
  .mAudio {
    width: 60rem;
  }
  /* 播放器右边 */
  .rAudio {
    width: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>