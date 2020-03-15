<template>
  <div class="songsheet">
    <div class="title">最新音乐</div>
    <div class="lists-content">
      <div class="lists" v-for="(item,index) in newsongs" :key="index" @click="getId(item)">
        <img :src="item.pic" />
        <span class="text">
           {{item.songer}} - {{item.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../assets/js/Bus'
import { newSong } from "../axios/api";
export default {
  data() {
    return {
      newsongs: []
    };
  },
  created() {
    this.getNewSong();
  },
  methods: {
    getNewSong() {
        newSong().then(res => {
            if(res.code == 200) {
                // console.log(res)
                let newSong = []
                res.result.forEach(item =>{
                    let songers = []
                    item.song.artists.forEach(itemA =>{
                        songers.push(itemA.name)
                    })
                    // console.log(songers)
                    newSong.push({
                        id: item.id,
                        name: item.name,
                        pic: item.picUrl,
                        songer: songers.join("/")
                    })
                })
                this.newsongs = newSong.splice(0,9)//截取前9个
            }
        })
    },
    getId(item) {
        // console.log(item)
        EventBus.$emit('songListId',this.newsongs)
        EventBus.$emit('musicUrl',item)
    }
  }
};
</script>

<style lang="stylus" scoped>
.songsheet {
  margin-top: 10px;
}

.title {
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  font-weight: 700;
  padding-left: 8px;
  border-left: 3px solid #d33a31;
}
.lists-content {
    display flex
    flex-wrap wrap
    justify-content center
}
.lists {
  width: 30%;
  display: inline-block;
  padding 4px
}

img {
  width: 100%;
  height: 75%;
  border-radius: 3px;
}
.text {
    font-size 10px
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>