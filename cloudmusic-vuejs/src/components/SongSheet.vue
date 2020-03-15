<template>
  <div class="songsheet">
    <div class="title">推荐歌单</div>
    <div class="lists-content">
      <div class="lists" v-for="(item,index) in sheet" :key="index" @click="getId(item.id)">
        <img v-lazy="item.pic" />
        <span class="text">
            {{item.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { songSheet } from "../axios/api";
export default {
  data() {
    return {
      sheet: []
    };
  },
  created() {
    this.getSongSheet();
  },
  methods: {
    getSongSheet() {
      songSheet({
        limit: 15
      }).then(res => {
        if (res.code == 200) {
          // console.log(res)
          this.sheet = [];
          res.result.forEach(item => {
            this.sheet.push({
              id: item.id,
              name: item.name,
              pic: item.picUrl
            });
          });
        //   console.log(this.sheet);
        }
      });
    },
    getId(id) {
        // console.log(id)
        this.$router.push(`/recommend/${id}`)
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