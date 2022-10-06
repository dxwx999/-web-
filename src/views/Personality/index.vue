<template>
  <div class="all">
    <!-- 数据已加载，渲染页面 -->
    <div class="containerIndex" v-if='isLoad'>
      <!-- 轮播图区域 -->
      <div class="chart personalItem">
        <el-carousel :interval="4000" type="card" height="240px" class="chartTotal">
          <el-carousel-item v-for="item in chart" :key="item.imageUrl" class="chartItem">
            <img :src="item.imageUrl+'?param=700y245'" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 推荐歌单 -->
      <div class="recommend personalItem">
        <!-- 左上角推荐歌单字样 -->
        <h2>推荐歌单<i class="el-icon-arrow-right"></i></h2>
        <div class="recommendTotal">
          <div class="recommendItem" v-for="item in recommend.slice(0, 10)" :key="item.id">
            <!-- 歌单的图片渲染区域 -->
            <img :src="item.coverImgUrl+'?param=200y200'">
            <!-- 播放量 -->
            <div class="playNum">{{handleCount(item.playCount)}}</div>
            <!-- 播放按钮 -->
            <i class="el-icon-video-play"></i>
            <!-- 歌曲简介 -->
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
      <!-- 独家放送 -->
      <div class="sole personalItem">
        <!-- 左上角独家放送字样 -->
        <h2>独家放送<i class="el-icon-arrow-right"></i></h2>
        <div class="soleTotal">
          <div class="soleItem" v-for="item in sole" :key="item.id">
            <!-- 独家放送图片渲染区域 -->
            <img :src="item.picUrl+'?param=500y200'" alt="">
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 最新音乐 -->
      <div class="newMusic personalItem">
        <!-- 左上角独家放送字样 -->
        <h2>最新音乐<i class="el-icon-arrow-right"></i></h2>
        <div class="newTotal">
          <div class="newItem" v-for="item in newSongs.slice(0,9)" :key="item.id" @click="changeSong(item.id,item.picUrl,item.name,item.song.artists,item.song.duration)">
            <i class="el-icon-video-play"></i>
            <img :src="item.picUrl+'?param=200y200'">
            <div class="newMsg">
              <div class="newMsgTop">
                <div class="songName"><span>{{item.name}}</span></div>
                <div class="songDetail"><span>{{item.song.alias[0]}}</span></div>
              </div>
              <div class="newMsgBtm">
                <span class="author">{{getName(item.song.artists)}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 数据未加载，渲染等待页面 -->
    <div v-else class="loading">
      <img src="https://p0.ssl.img.360kuai.com/t015e613e594ae0d138.webp">
      <div>数据加载中，请稍等...</div>
    </div>
  </div>
</template>

<script>
//导入获取轮播图的API
import { GetChart, GetRecommend, GetSole, GetNewSongs } from '@/request/api'
export default {
  name: 'VueSemoIndex',

  data() {
    return {
      // 轮播图存储数据
      chart: [],
      //热门歌单分类数据
      recommend: [],
      //独家放送
      sole: [],
      //最新歌曲
      newSongs: [],
      //控制页面的加载与显示
      isLoad: false,
    }
  },

  created() {
    //获取轮播图的数据
    GetChart().then(({ data }) => {
      this.chart = data.banners
    }),
      //获取个人推荐页面的歌单
      GetRecommend().then(({ data }) => {
        this.recommend = data.playlists
      }),
      //获取独家放送
      GetSole().then(({ data }) => {
        this.sole = data.result
      }),
      //获取最新音乐
      GetNewSongs().then(({ data }) => {
        this.newSongs = data.result
        console.log(data)
      })
  },

  methods: {
    handleDuration(duration) {
      //返回总时间
      const min = Math.trunc(duration / 1000 / 60)
      const s = Math.trunc((duration / 1000) % 60)
      if (s < 10) {
        s = '0' + s
      }
      const time = min + ':' + s
      return time
    },
    changeSong(id, picUrl, name, artists, duration) {
      picUrl = picUrl + '?param=240y240'
      //处理时间
      duration = this.handleDuration(duration)
      //处理名字
      artists = this.getName(artists)
      this.$changeSong.changeById(id, picUrl, name, artists, duration)
    },
    //将播放量的数据转换为以万计数
    handleCount(num) {
      num = Number(num)
      if (num == 0) {
        return num + ''
      } else if (num > 1 && num < 10000) {
        return num + ''
      } else {
        return (num / 10000).toFixed(2) + '万'
      }
    },
    getName(artists) {
      if (artists.length === 1) return artists[0].name
      const len = artists.length
      var name = ''
      for (var i = 0; i < len; i++) {
        name += artists[i].name + '/'
      }
      return name.slice(0, name.length - 1)
    },
  },
  computed: {},
  //监听初始数据是否加载成功，用isLoad1判断是否渲染页面
  watch: {
    recommend() {
      if (this.recommend.length === 0) return
      else {
        this.isLoad = true
      }
    },
  },
}
</script>

<style lang="less" scoped>
img {
  //设置图片禁止拖拽
  -webkit-user-drag: none;
}
h2 {
  padding: 0;
  margin: 0;
  margin-left: 50px;
  margin-bottom: 20px;
  font-size: 0.3rem !important;
}
.all {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.containerIndex {
  padding-top: 800px;
  width: 1367px;
  height: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  margin-top: 50px;
  //轮播图
  .chart {
    width: 80%;
    .chartTotal {
      .chartItem {
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  //推荐歌单
  .recommend {
    margin: 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .recommendTotal {
      width: 100%;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      .recommendItem {
        width: 17.3%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        /* 歌单图片 */
        img {
          cursor: pointer;
          width: 90%;
          height: 83%;
          margin: 10px;
          border-radius: 10px;
        }
        /*播放量*/
        .playNum {
          /* 子绝父相 */
          width: 38%;
          height: 9%;
          position: absolute;
          border-radius: 10px;
          top: 20px;
          right: 20px;
          color: white;
          font-size: 0.14rem;
          text-align: center;
          background-color: rgba(50, 50, 50, 0.1);
        }
        /* 播放图标 */
        .el-icon-video-play {
          position: absolute;
          bottom: 40px;
          left: 150px;
          display: none;
          font-size: 42px;
          color: rgb(235, 211, 211);
        }
        /* 歌单简介 */
        p {
          width: 89%;
          padding: 0;
          margin: 0;
          /* 超过部分显示省略号 */
          text-overflow: ellipsis;
          /* 超出不换行 */
          white-space: nowrap;
          /* 超出部分隐藏 */
          overflow: hidden;
          /* 文字垂直居中 */
          text-align: center;
        }
      }
      .recommendItem:hover > .el-icon-video-play {
        display: block;
      }
    }
  }
  //独家放送
  .sole {
    width: 90%;
    height: 20%;
    .soleTotal {
      width: 100%;
      height: 83%;
      display: flex;
      margin-top: 15px;
      justify-content: center;
      .soleItem {
        width: 29%;
        height: 100%;

        img {
          width: 96%;
          height: 83%;
          margin: 0 14px 0 0;
          border-radius: 20px;
        }
        div {
          width: 94%;
          text-align: center;
          padding-right: 5px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .soleItem:nth-child(2) {
        padding: 0 9.5px;
      }
    }
  }
  //最新音乐
  .newMusic {
    width: 90%;
    height: 16%;
    .newTotal {
      width: 100%;
      height: 86%;
      margin-top: 10px;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      .newItem {
        position: relative;
        .el-icon-video-play {
          display: none;
          position: absolute;
          font-size: 0.3rem;
          left: 22px;
          top: 22px;
          color: white;
        }
        cursor: pointer;
        display: flex;
        width: 27.6%;
        height: 27.7%;
        margin: 5px;
        img {
          width: 50px;
        }
        .newMsg {
          margin-left: 5px;
          .newMsgTop {
            display: flex;
            flex-wrap: nowrap;

            .songName {
              font-size: 14px;
              white-space: nowrap;
            }
            .songDetail {
              margin-left: 5px;
              margin-top: 1px;
              height: 20px;
              width: 230px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 10px;
              color: #9f9f9f;
            }
          }
          .newMsgBtm {
            .author {
              font-size: 0.12rem;
              color: #9f9f9f;
            }
          }
        }
      }
      .newItem:hover > .el-icon-video-play {
        display: block;
      }
    }
  }
}
.loading {
  text-align: center;
  height: 400px;
  img {
    text-align: center;
    width: 200px;
    border-radius: 200px;
  }
  div {
    font-size: 25px;
  }
}

.personalItem {
  margin-top: 30px;
}
.personalItem:last-child {
  margin-bottom: 90px;
}
</style>