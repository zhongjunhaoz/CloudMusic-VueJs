<template>
    <div>
        <div class="title">
            热门搜索
        </div>
         <div class='hot_key_box' v-for="(item,index) in hotSongsList" :key="index">
            <span class='hot_keys_box_item' @click="getItemVal">{{item}}</span>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../assets/js/Bus'
import { hotSong } from '../axios/api'
export default {
    data() {
        return {
            hotSongsList:[]
        }
    },
    mounted() {
        this.getHotSong()
    },
    methods: {
        getHotSong() {
            hotSong().then(res=>{
                if (res.code == 200) {
                    // console.log(res.result.hots)
                    res.result.hots.forEach(item => {
                        // console.log(item.first)
                        this.hotSongsList.push(item.first)
                    });
                }
            })
        },
        getItemVal(e) {
            // console.log(e.target.innerHTML)
            // 已经获取热门搜索的值
            EventBus.$emit("hotSongVal",e.target.innerHTML)
        }
    },
}
</script>

<style lang="stylus" scoped>
.title {
  color: #DE655C;
  font-size: 12px;
  font-weight: 800
  margin-left 20px
  margin-top 15px
  margin-bottom 10px
}
.hot_key_box{
  display: flex;
  flex-flow: row wrap;
  display inline-block
  margin 15px
}
.hot_keys_box_item{
  font-size: 12px;
  color: #DE655C;
  background-color: #EDEEF0;
  border-radius: 5px;
  padding 7px
}
</style>