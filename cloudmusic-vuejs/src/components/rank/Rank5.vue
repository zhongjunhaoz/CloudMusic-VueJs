<template>
    <span class="rank-item">
      <div class="rank-cover">
        <img :src="coverImage" width="100" height="100" />
      </div>
      <div class="rank-song">
          <span class="rankdesc">
              {{rankDesc}}
          </span>
          <div class="updatedtime">
              {{updatedTime}}更新
          </div>
      </div>
    </span>
</template>

<script>
import {transformTime} from '../../assets/TimeChange'
import { rank } from "../../axios/api";
export default {
  data() {
    return {
      coverImage: "",
      rankDesc:'',
      updatedTime:''
    };
  },
  mounted() {
    this.getRank();
  },
  methods: {
    getRank() {
      rank({
        idx: 13
      }).then(res => {
        if (res.code == 200) {
          console.log(res.playlist);
          console.log(res.playlist.tracks);

          this.coverImage = res.playlist.coverImgUrl;
          this.rankDesc = res.playlist.description;
          this.updatedTime = transformTime(res.playlist.updateTime)
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/Rank.css';
</style>