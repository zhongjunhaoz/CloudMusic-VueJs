<template>
  <div class="video">
    <div v-for="(item,index) in MV" :key="index">
      <video
        loop
        controls
        autoplay
        preload="auto"
        webkit-playsinline="true"
        playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x-webkit-airplay="allow"
        x5-video-orientation="portraint"
        :src="item.mvUrl"
      ></video>

      <div class="label">
          <div class="label-child">{{item.songer}}</div>
          <div class="label-child">{{item.mvName}}</div>
          <div class="label-child">{{item.time}} 发布</div>
      </div>

      <div class="label-child desc" v-if="item.desc">
          {{item.desc}}
      </div>

    </div>
  </div>
</template>

<script>
import { MVDetail } from "../../axios/api";
export default {
  data() {
    return {
      mvid: this.$route.params.id,
      MV: []
    };
  },
  mounted() {
    this.getMVDetail();
  },
  methods: {
    getMVDetail() {
      MVDetail({
        mvid: this.mvid
      }).then(res => {
        if (res.code == 200) {
        //   console.log(res);
          this.MV.push({
            songer: res.data.artistName,
            mvName: res.data.name,
            desc: res.data.desc,
            time: res.data.publishTime,
            mvUrl: res.data.brs["720"]
          });
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.video {
  width: 100%;
  height: 100%;
}

video {
  width: 101%;
  height: 32vh;
}

.label {
    display flex
}
.label-child {
    flex 1
    display flex
    color #de655c
    background-color #edeef0
    border-radius 5px
    justify-content center
    padding 5px
    margin 10px
}
</style>