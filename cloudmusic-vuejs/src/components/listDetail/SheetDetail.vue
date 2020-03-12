<template>
  <div class="ListDetail">
    <div class="title">
      <div class="el-icon-d-arrow-left icon titleBox" @click="getBack">返回</div>
      <div class="titleBox">{{name}}</div>
    </div>
    <div class="search_result" v-for="(item,index) in songList" :key="index" @click="getId(item)">
      <div class="search_result_name">{{item.name}}</div>
      <div class="search_result_songer">{{item.songer}} - {{item.album}}</div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../assets/js/Bus'
import { sheetDetaill } from "../../axios/api";
export default {
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      songList: []
    };
  },
  mounted() {
    this.getSongList();
  },
  methods: {
    getSongList() {
      sheetDetaill({
        id: this.id
      }).then(res => {
        if (res.code == 200) {
          this.songList = [];
          // console.log(res);
          this.name = res.playlist.name;
          res.playlist.tracks.forEach(item => {
            let songers = [];
            item.ar.forEach(itemA => {
              songers.push(itemA.name);
            });
              // console.log(item)
            this.songList.push({
              id: item.id,
              name: item.name,
              pic: item.al.picUrl,
              album: item.al.name,
              songer: songers.join("/")
            });
            //   console.log(this.songList)
          });
        }
      });
    },
    getBack() {
      this.$router.go(-1);
    },
    getId(item) {
      // console.log(item);
      EventBus.$emit("musicUrl",item)
    }
  }
};
</script>

<style lang="stylus" scoped>
.ListDetail {
  width: 100%;
  height: 100%;
}

.title {
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EDEEF0;
  position: relative;
}

.titleBox {
  padding: 8px;
  color: #DE655C;
  border-radius: 5px;
}

.icon {
  padding: 8px;
  position: absolute;
  left: 0px;
  z-index: 1000;
}

.search_result {
  margin: 15px;
  border-bottom: 1px solid #e5e6e6;
}

.search_result_name {
  font-size: 16px;
  font-weight: 500;
}

.search_result_songer {
  padding-top: 10px;
  font-size: 9px;
  font-weight: 400;
  color: #808c92;
}
</style>