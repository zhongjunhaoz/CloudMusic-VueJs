<template>
    <div>
        <div class="title">
            热门搜索
        </div>
         <div class="songs" v-for="(item,index) in hotSongsList" :key="index">
            {{item}}
        </div>
    </div>
</template>

<script>
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
                    console.log(res.result.hots)
                    res.result.hots.forEach(item => {
                        // console.log(item.first)
                        this.hotSongsList.push(item.first)
                    });
                }
            })
        }
    },
}
</script>