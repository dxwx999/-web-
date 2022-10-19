<template>
  <div class="sheetContainer" v-if="sheetList" id="sheetContainer">
    <div class="sheetMsg">
      <!-- 歌单大图区域 -->
      <img :src="sheetList.coverImgUrl" class="sheetImg">
      <div class="sheetDetail">
        <div class="firstLine line">
          <svg-icon name='cycle'></svg-icon>
          <!-- 歌单名称 -->
          <h1>{{sheetList.name}}</h1>
        </div>
        <!-- 歌单创作者 -->
        <div class="secondLine line">
          <img :src="sheetList.creator.avatarUrl">
          <p class="signature">{{sheetList.creator.signature}}</p>
          <p class="getTime">{{getTime}}</p>
        </div>
        <div class="thirdLine line">
          <el-button type="danger" round>播放全部 </el-button>
          <el-button round>收藏(32万)</el-button>
          <el-button round>分享(3783)</el-button>
          <el-button round>下载全部</el-button>
        </div>
        <div class="forthLine line">
          <p>
            标签：{{getTags}}
          </p>
          <p> 歌曲：{{trackCount}} 播放 : {{playCount}}</p>
          <p> 简介：{{sheetList.description}}</p>
        </div>
      </div>
    </div>
    <div class="sheetList">
      <div class="listTop">
        <p>歌曲列表</p>
        <p>评论</p>
        <p>收藏者</p>
      </div>
      <div class="listDeatil">
        <div class="listItem" v-for="(item,index) in sheetList.tracks" :key="item.id">
          <div class="first" @click="changeSong(item.id,item.al.picUrl,item.name,item.al.name,itemTime(item.dt))">
            <span class="index">{{index+1}}</span>
            <svg-icon name='kongxin'></svg-icon>
            <svg-icon name='xiazai'></svg-icon>
            <span class="name">{{item.name}}</span>
          </div>
          <div class="second">{{item.ar[0].name}}</div>
          <div class="third">
            <p>{{item.al.name}}</p>
          </div>
          <div class="forth">{{itemTime(item.dt)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetSheetDeatil } from '@/request/api'
export default {
  name: 'SheetDetail',
  data() {
    return {
      sheetList: '',
    }
  },
  components: {},
  mounted() {
    GetSheetDeatil({ id: this.$route.params.id }).then(({ data }) => {
      this.sheetList = data.playlist
    })
  },
  methods: {
    changeSong(id, picUrl, name, artists, duration) {
      console.log('123')
      picUrl = picUrl + '?param=240y240' || ''
      this.$changeSong.changeById(id, picUrl, name, artists, duration)
    },
  },
  computed: {
    getTime() {
      return '2016-09-01'
    },
    getTags() {
      let tags = ''
      this.sheetList.tags.forEach((e) => {
        tags += e + '/'
      })
      return tags.substr(0, tags.length - 1)
    },
    playCount() {
      if (this.sheetList.playCount > 10000) {
        return (this.sheetList.playCount % 10000) + '万'
      }
    },
    trackCount() {
      return this.sheetList.trackCount
    },
    itemTime() {
      return function (dt) {
        return Math.floor(dt / 1000 / 60) + ':' + Math.floor((dt / 1000) % 60)
      }
    },
  },
}
</script>

<style lang="less" scoped>
p,
h1 {
  margin: 0;
  padding: 0;
}
p {
  font-size: 0.18rem;
}

.sheetContainer {
  width: 97%;
  margin: 0 2rem;
  padding-bottom: 15rem;
  .sheetMsg {
    width: 70%;
    height: 50%;
    display: flex;
    margin: 2rem;
    align-items: center;
    .sheetImg {
      width: 24%;
    }
    .sheetDetail {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;
      height: 80%;
      margin: 1.5rem;
      .line {
        margin-bottom: 1rem;
      }
      .firstLine {
        display: flex;
        flex-direction: row;
      }
      .secondLine {
        width: 90%;
        height: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        .signature {
          width: 80%;
          height: 2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .getTime {
          width: 20%;
        }
        img {
          height: 2.8rem;
          border-radius: 50%;
        }
        p:first-child {
          display: none;
        }
      }
      .thirdLine {
        button {
          font-size: 0.18rem;
        }
      }
      .forthLine {
        p {
          width: 48rem;
          margin-bottom: 0.5rem;
          height: 2rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .sheetList {
    width: 100%;
    .listTop {
      border-bottom: 0.3rem solid #e4e7ed;
      display: flex;
      flex-direction: row;
      p {
        margin: 0 1rem 1rem 1rem;
      }
      p:hover {
        color: skyblue;
      }
    }
    .listDeatil {
      margin: 1.5rem;
      .listItem {
        text-align: center;
        line-height: 3.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: space-between;
        .first {
          display: flex;
          align-items: center;
          width: 36%;
          text-align: left;
          white-space: nowrap;
          .index {
            line-height: 2.5rem;
            text-align: center;
            width: 23.5rem;
          }
          .name {
            width: 50%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .second {
          width: 15%;
          text-align: left;
        }
        .third {
          width: 30%;
          text-align: left;
          p {
            width: 50%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .forth {
          width: 5%;
        }
      }
      .listItem:nth-child(odd) {
        background-color: #f0f1f2;
      }
    }
  }
}

/deep/.navDetail {
  display: none;
}
</style>