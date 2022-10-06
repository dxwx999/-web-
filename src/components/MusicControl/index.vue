<template>
  <div class="panel">
    <div class="playControl">
      <!-- 循环播放图标 -->
      <svg-icon name="cycle" :width=15 :height=15 className="controlIcon" />
      <!-- 上一首图标 -->
      <svg-icon name="left" :width=15 :height=15 className="controlIcon" />
      <!-- 播放图标 -->
      <svg-icon name="play" :width=30 :height=30 className="controlIcon" v-if="isPlay" @click="changePlayIcon" />
      <!-- 暂停图标 -->
      <svg-icon name="pause" :width=30 :height=30 className="controlIcon" v-else @click="changePlayIcon" />
      <!-- 下一首图标 -->
      <svg-icon name="right" :width=15 :height=15 className="controlIcon" />
      <!-- 歌词图标 -->
      <svg-icon name="geci" :width=15 :height=15 className="controlIcon" />
      <!-- 音频播放器 -->
      <audio ref="audio" id="audio" @timeupdate="timeDemo" @ended="endPlay" @pause="changePause" @play="changePlay">
        <source src="" type="audio/mpeg">
        您的浏览器不支持 audio 元素。
      </audio>
    </div>
    <div class="slideControl">
      <span class="lTime" id="leftTime">{{leftTime}}</span>
      <div class="slideTotal">
        <!-- 底部进度条 -->
        <div class="slide" id="slide1" ref="slide1"></div>
        <!-- 播放进度条 -->
        <div class="slide2" ref="slide2" :style="{width:pointerVal+'%'}"></div>
        <!-- 播放进度条前端的小点 -->
        <div class="pointer" ref="pointer" :style="{left:pointerVal1+'%'}"></div>
      </div>
      <span id="rightTime"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicControl',

  data() {
    return {
      pointerVal: 0,
      pointerVal1: -1,
      isPlay: false,
      leftTime: '',
    }
  },
  watch: {
    pointerVal() {
      this.pointerVal1 = this.pointerVal - 1
    },
  },
  mounted() {
    //对进度条进行监听
    this.$refs.slide1.addEventListener('mousedown', (e) => {
      //获取总进度条的DOM
      let S_lide_1 = this.$refs.slide1
      //获得页面中指定元素的上右下左相对于浏览器的位置
      let S_lide1_obj = S_lide_1.getBoundingClientRect()
      //取得当前坐标和总长度的比值
      let percent = ((e.clientX - S_lide1_obj.left) / S_lide1_obj.width).toFixed(2)
      //获取音频播放器的DOM
      let audioDemo = this.$refs.audio
      //将当前的播放时间设置为总时长乘以坐标和总长度的比值
      audioDemo.currentTime = audioDemo.duration * percent
    })
  },
  computed: {},
  methods: {
    handleCurrentTime(currentTime) {
      //返回总时间
      let min = Math.trunc(currentTime / 60)
      let s = Math.trunc(currentTime % 60)
      if (s < 10) {
        s = '0' + s
      }
      let time = min + ':' + s
      return time
    },
    timeDemo() {
      //时间戳改变就会触发这个方法
      //创建一个audioDemo 用来操作Dom
      let audioDemo = this.$refs.audio
      this.leftTime = this.handleCurrentTime(audioDemo.currentTime)
      // this.leftTime=getLeftTime(audioDemo.currentTime)
      this.pointerVal = ((audioDemo.currentTime / audioDemo.duration) * 100).toFixed(2)
    },
    changePlay() {
      this.isPlay = true
    },
    endPlay() {
      console.log('这一首歌放完了')
      //暂停把图标切换成暂停状态
      this.isPlay = false
    },
    changePlayIcon() {
      //通过暂停播放按键切换播放状态
      let audioDemo = this.$refs.audio
      if (audioDemo.currentSrc === '') return
      if (this.isPlay === true) {
        audioDemo.pause()
        this.isPlay = false
        return
      }
      this.isPlay = true
      audioDemo.play()
    },
    changePause() {
      //播放器的切换暂停播放状态也可以影响图标
      this.isPlay = false
    },
  },
}
</script>

<style lang="less" scoped>
.panel {
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .slideControl {
    display: flex;
    //中间进度条长度控制
    width: 90%;
    position: relative;
    justify-content: space-between;
    .slideTotal {
      display: flex;
      align-items: center;
      width: 70%;
      position: relative;

      .slide {
        cursor: pointer;
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 40px;
        z-index: 6;
        background-color: #e4e7ed;
        // 控制伸缩的方向
        left: 0;
        border: none;
      }

      .slide::before {
        //通过伪元素增加可点击面积
        content: '';
        position: absolute;
        top: -10px;
        bottom: -10px;
        right: 0px;
        left: 0px;
      }
      .slide2 {
        //无法点击，点击事件会穿过去点击下一层
        pointer-events: none;
        position: absolute;
        height: 4px;
        border-radius: 30px 0 0 30px;
        background-color: #ff4e4e;
        z-index: 10;
        left: 0;
      }
      .pointer {
        position: absolute;
        bottom: 6px;
        background-color: red;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        z-index: 20;
        left: -1%;
      }
    }
    span {
      width: 14%;
      display: inline-block;
      height: 20px;
      color: gray;
      font-size: 13px;
      right: 0;
    }
    .lTime {
      text-align: right;
    }
  }
  .playControl {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>