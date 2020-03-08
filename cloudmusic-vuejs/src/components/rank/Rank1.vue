<template>
  <div class="rank-item" @click="rankDetail">
    <div class="rank-cover">
      <img :src="coverImage" width="100" height="100" />
    </div>
    <div class="rank-song">
      <div v-for="(item,index) in topSong" :key="index" class="songlist">
        <span style="padding-right:8px">{{index + 1}}.</span>
        <span>{{item.songerName}} - {{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { transformTime } from "../../assets/js/TimeChange";
import { rank } from "../../axios/api";
export default {
  data() {
    return {
      coverImage: "",
      topSongs: [],
      topSong: []
    };
  },
  beforeMount() {
    this.getRank();
  },
  methods: {
    rankDetail() { //点击排行榜进入详细页，然后传入idx。
      // console.log(this.rankId);
      this.$router.push(`/rank/${1}`)
    },
    getRank() {
      rank({
        idx: 1
      }).then(res => {
        if (res.code == 200) {
          this.coverImage = res.playlist.coverImgUrl;
          // this.rankId = res.playlist.id;
          // console.log(res);
          // console.log(res.playlist.tracks);
          res.playlist.tracks.forEach(item => {
            let songerName = [];
            // console.log(item)
            item.ar.forEach(itemA => {
              // console.log(itemA.name)
              songerName.push(itemA.name);
            });
            this.topSongs.push({
              name: item.name,
              songerName: songerName.join("/")
            });
          });
          this.topSong = this.topSongs.slice(0, 3); //截取前三个歌曲
          // console.log(this.topSong);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/Rank.css';
</style>