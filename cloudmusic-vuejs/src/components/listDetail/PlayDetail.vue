<template>
    <div class="play" v-show="isShow">
        播放详细页
    </div>
</template>

<script>
import { EventBus } from '../../assets/js/Bus'
export default {
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    EventBus.$on("musicUrl", val => {
      console.log(val);
      this.id = val.id;
      this.pic = val.pic;
      (this.name = val.name),
      (this.songer = val.songer);
    });
    EventBus.$on('isShow',val =>{
      this.isShow = val
      // console.log(val)
    })
  },
}
</script>

<style lang="stylus" scoped>
.play {
  position absolute
  position fixed
  z-index 2000
  top 0px
  width 100vw
  height 100vh
  background-color #000000
  padding-bottom 20px
  transition all 0.8s
}
</style>