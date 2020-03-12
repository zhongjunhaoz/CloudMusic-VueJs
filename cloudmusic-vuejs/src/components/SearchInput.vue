<template>
  <div>
    <!-- 搜索框 -->
    <el-input
      placeholder="搜索歌曲，歌手"
      prefix-icon="el-icon-search"
      class="searchInput"
      v-model="songName"
      @input="getSearchValue"
      clearable
    ></el-input>
    <!-- 实时搜索建议列表 @change="search" -->
    <div
      class="search_suggest_result"
      v-for="(item,index) in searchSuggestItem"
      :key="index"
      v-show="hasResult"
    >
      <i class="el-icon-search"></i>
      <span class="text" @click="getSuggestName(item)">{{item}}</span>
    </div>

    <!-- 搜索结果 -->
    <div
      class="search_result"
      v-for="(item,index) in searchResult"
      :key="'result'+index"
      v-show="haveResult"
      @click="getId(item)"
    >
      <div class="search_result_name">{{item.name}}</div>
      <div class="search_result_songer">{{item.songer}} - {{item.album}}</div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../assets/js/Bus";
import { searchSuggest, search } from "../axios/api";
export default {
  data() {
    return {
      loading: true,
      songName: "",
      searchSuggestItem: [], //搜索建议
      hasResult: true,
      searchResult: [], //搜索结果
      haveResult: true
    };
  },
  mounted() {
    EventBus.$on("hotSongVal", val => {
      // console.log(val)
      this.songName = val; //把热门搜索的值给输入框的v-model
      this.getSearchValue(val); //接着执行搜索
      this.search();
    });
  },
  methods: {
    getSearchValue(val) {
      if (val == "") {
        this.hasResult = false;
        this.haveResult = false;
        return;
      } else {
        this.hasResult = true;
        this.haveResult = true;
      }
      searchSuggest({
        type: "mobile",
        keywords: this.songName
      }).then(res => {
        if (res.code == 200) {
          this.searchSuggestItem = [];
          //   console.log(res.result.allMatch);
          res.result.allMatch.forEach(item => {
            //   console.log(item.keyword)
            this.searchSuggestItem.push(item.keyword);
          });
        }
      });
    },
    search() {
      // (this.hasResult = false),
        search({
          keywords: this.songName,
          limit: 30
        }).then(res => {
          if (res.code == 200) {
            this.searchResult = [];
            // console.log(res.result.songs)
            res.result.songs.forEach(item => {
              // console.log(item.artists)
              let songers = [];
              item.artists.forEach(itemA => {
                songers.push(itemA.name);
              });
              this.searchResult.push({
                id: item.id,
                name: item.name,
                pic: item.album.artist.img1v1Url,
                album: item.album.name,
                songer: songers.join("/")
              });
              // console.log(this.searchResult)
              console.log(item)
            });
            this.hasResult = false
          }
        });
    },
    getSuggestName(item) {
      this.songName = item
      this.search()
      
    },
    getId(item) {
      // console.log(item)
      EventBus.$emit("musicUrl",item)
    }
  }
};
</script>

<style lang="stylus" scoped>
.search_suggest_result {
  padding: 15px;
  border-bottom: 1px solid #e5e6e6;
}

.text {
  font-weight: 500;
  padding-left: 5px;
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