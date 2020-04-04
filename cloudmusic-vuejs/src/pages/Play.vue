<template>
  <div>
    <audio id="music-audio" ref="cloudMusic" class="audioBox" autoplay="autoplay" :src="url" @ended="songEnd"></audio>
    <!-- 播放mini页 -->
    <div class="palyBox" v-show="this.id">
      <div class="pic" @click="showPlayDetail">
        <img v-lazy="pic" :class="isplay ? 'cover': 'cover-pause'" />
      </div>
      <div class="text" @click="showPlayDetail">
        <span class="text-child name">{{name}}</span>
        <span class="text-child songer">{{songer}}</span>
      </div>
      <div class="iconBox">
        <i @click="musicPause" class="el-icon-video-pause icon" v-show="isplay"></i>
        <i @click="musicPlay" class="el-icon-video-play icon" v-show="!isplay"></i>
      </div>
    </div>
    <!-- 播放详情页 -->
    <div class="play" v-show="isShow">
      <i class="el-icon-close iconBack" @click="back"></i>
      <div class="playDetail-name">{{name}}</div>
      <div class="palyDetail-songer">{{songer}}</div>
      <div class="palyDetail-picBox">
        <img
          v-lazy="pic"
          :class="isplay ? 'playDetail-cover' : 'playDetail-cover-pause'"
          @click="showLyric"
          v-show="isShowLyric"
        />
        <span v-show="!isShowLyric" @click="showLyric" class="playDetail-lyric">暂无歌词，请欣赏</span>
      </div>
      <div class="playDetail-icon">
        <!-- 上一首 -->
        <div class="icon icon-changeSong" @click="getLastSong">
          <img class="detail-ChagngeSong" src="../assets/img/lastSong.png" />
        </div>
        <i @click="musicPause" class="el-icon-video-pause icon" v-show="isplay"></i>
        <i @click="musicPlay" class="el-icon-video-play icon" v-show="!isplay"></i>
        <!-- 下一首 -->
        <div class="icon icon-changeSong" @click="getLastSong">
          <img class="detail-ChagngeSong" src="../assets/img/nextSong.png" />
        </div>
      </div>
      <img :src="pic" class="background_img" />
    </div>
  </div>
</template>

<script>
import { EventBus } from "../assets/js/Bus";
import { playMusic } from "../axios/api";
export default {
  data() {
    return {
      id: "",
      url: "",
      pic: "",
      name: "",
      songer: "",
      isplay: true,
      isShow: false,
      isShowLyric: true,
      songListId: []
    };
  },
  mounted() {
    EventBus.$on('pause',val =>{
      this.musicPause()
      // this.isplay = val
      // console.log(val)
    })
    EventBus.$on("songListId", val =>{
      this.songListId = val
      // console.log(this.songListId)
    })
    EventBus.$on("musicUrl", val => {
      // console.log(val);
      this.id = val.id;
      this.pic = val.pic;
      (this.name = val.name), (this.songer = val.songer);
      this.getMusicUrl();
    });
  },
  methods: {
    getLastSong() {
      const arrid = Math.floor(Math.random() * this.songListId.length)
      this.id = this.songListId[arrid].id
      this.name = this.songListId[arrid].name
      this.pic = this.songListId[arrid].pic
      this.songer = this.songListId[arrid].songer
      this.getMusicUrl()
    },
    showLyric() {
      this.isShowLyric = !this.isShowLyric;
    },
    back() {
      this.isShow = false;
    },
    showPlayDetail() {
      // 点击mini页，让详细页呼出。
      this.isShow = true;
      // EventBus.$emit('isShow',this.isShow)
    },
    getMusicUrl() {
      playMusic({
        id: this.id
      }).then(res => {
        if (res.code == 200) {
          // console.log(res)
          this.url = res.data[0].url;
          // console.log(res.data[0].url)
        }
      });
    },
    musicPause() {
      this.isplay = false;
      this.$refs.cloudMusic.pause();
    },
    musicPlay() {
      this.isplay = true;
      this.$refs.cloudMusic.play();
    },
    songEnd() { //结束后自动播放下一首
      // console.log(111)
      this.getLastSong()
    }
  }
};
</script>

<style lang="stylus" scoped>
.icon-changeSong {
  flex: 1;
}

.detail-ChagngeSong {
  width: 25%;
  height: 75%;
}

.playDetail-lyric {
  color: #ffffff;
  font-size: 13px;
}

/* 播放界面毛玻璃效果 */
.background_img {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  filter: blur(20px);//虚化
  z-index: -1;
  transform: scale(1.5); /* 和网易云音乐对比了一下，发现也是放大1.5倍 */
}

.playDetail-icon {
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  // font-size: 45px;
  color: #ffffff;
}

.playDetail-cover {
  // border:5px solid red;
  border-radius: 50%;
  width: 280px;
  height: 280px;
  animation: imgg 20s linear infinite forwards;
  animation-fill-mode: forwards;
}

.playDetail-cover-pause {
  // border:5px solid red;
  border-radius: 50%;
  width: 280px;
  height: 280px;
  animation: imgg 20s linear infinite forwards;
  animation-play-state: paused;
}

.palyDetail-picBox {
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.palyDetail-songer {
  text-align: center;
  color: #ffffff;
  font-size: 13px;
}

.playDetail-name {
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  padding-top: 10px;
  font-weight: 600;
}

.iconBack {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 30px;
  color: #ffffff;
}

.play {
  position: relative;
  position: absolute;
  position: fixed;
  z-index: 2000;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #616162;
  padding-bottom: 20px;
  transition: all 0.8s;
}

.palyBox {
  position: fixed;
  bottom: 0px;
  background-color: #f1f3f4;
  height: 8vh;
  width: 100%;
  display: flex;
  opacity: 0.97;
}

.audioBox {
  width: 100%;
}

.pic {
  width: 20vw;
  height: 100%;
  position: relative;
}

.cover {
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  top: 20%;
  left: 25%;
  animation: imgg 10s linear infinite forwards;
  // animation-fill-mode: forwards; //保持动画最后一帧
}

.cover-pause {
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  top: 20%;
  left: 25%;
  animation: imgg 10s linear infinite forwards;
  animation-play-state: paused; // 暂停动画
}

.text {
  width: 60vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  // align-items center
}

.text-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  display: flex;
  align-items: center;
}

.name {
  font-size: 12px;
  font-weight: 550;
}

.songer {
  font-size: 10px;
  font-size: 500;
}

.iconBox {
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 38px;
  z-index: 5000;
}

.icon {
  font-size: 40px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 5px 5px 0 0;
}

@keyframes imgg {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>