<template>
    <div class="songsheet">
    <div class="title">推荐MV</div>
    <div class="lists-content">
      <div class="lists" v-for="(item,index) in MV" :key="index" @click="getId(item.id)">
        <img v-lazy="item.img" />
        <span class="text">
            {{item.songer}} - {{item.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../assets/js/Bus'
import { topMV } from "../axios/api"
export default {
    data() {
        return {
            MV: []
        }
    },
    created() {
        this.getTopMV()
    },
    methods: {
        getTopMV() {
            topMV({
                limit: 16
            }).then(res => {
                if (res.code == 200) {
                    // console.log(res)
                    res.data.forEach(item => {
                        // console.log(item)
                        this.MV.push({
                            id: item.id,
                            name: item.name,
                            songer: item.artistName,
                            img: item.cover
                        })
                    });
                }
            })
        },
        getId(id) {
            EventBus.$emit('pause',false) //点击进入MV详情页，则关闭音乐
            // console.log(id)
            this.$router.push(`/MV/${id}`)
        }
    },
}
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
  width: 45%;
  display: inline-block;
  padding 4px
  margin-top 8px
}

img {
  width: 100%;
  height: 80%;
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