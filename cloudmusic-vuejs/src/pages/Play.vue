<template>
  <div class="palyBox" v-show="this.id">
    <div class="pic" @click="zanting">
        <img :src="pic">
    </div>
    <div class="text">
        <span class="text-child name">{{name}}</span>
        <span class="text-child songer">{{songer}}</span>
    </div>
    <audio
     ref="music"
     class="audioBox"
     autoplay="autoplay"
     loop="loop"
     :src="url"></audio>
  </div>
</template>

<script>
import { EventBus } from '../assets/js/Bus'
import { playMusic } from '../axios/api'
export default {
    data() {
        return {
            id: '',
            url:'',
            pic: '',
            name:'',
            songer: ''
        }
    },
    mounted() {
        EventBus.$on('musicUrl',val => {
            console.log(val)
            this.id = val.id
            this.pic = val.pic
            this.name = val.name,
            this.songer = val.songer
            this.getMusicUrl()
        })
    },
    methods: {
        getMusicUrl() {
            playMusic({
                id: this.id
            }).then(res =>{
                if(res.code == 200) {
                    // console.log(res)
                    this.url = res.data[0].url
                    // console.log(res.data[0].url)
                }
            })
        },
        zanting() {
            this.$refs.music.pause()
        }
    },
}
</script>

<style lang="stylus" scoped>
.palyBox {
  position: fixed;
  bottom: 0px;
  background-color: #f1f3f4
  height: 55px;
  width: 100%;
  display flex
//   justify-content center
//   display flex
}
.audioBox {
    width 100%
}
.pic {
    width 20vw
    height 100%
    position relative
    // flex 1
}
img {
    position absolute
    border-radius: 50%
    width 40px
    height 40px
    transform translate(-50%,-50%)
    top 25%
    left 25%
    animation: imgg 10s linear infinite forwards
}
.text {
    width 60vw
    display flex
    flex-direction column
    flex-wrap nowrap
    // align-items center
}
.text-child {
    overflow hidden
    text-overflow: ellipsis;
    white-space: nowrap;
    flex 1
    display flex
    align-items center
}
.name {
    font-size 12px
    font-weight 550
}
.songer {
    font-size 10px
    font-size 500
}
@keyframes imgg {
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>