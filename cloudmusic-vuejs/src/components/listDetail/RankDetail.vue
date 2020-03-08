<template>
    <div class="ListDetail">
        <div>{{name}}</div>
    </div>
</template>

<script>
import { rank } from '../../axios/api'
export default {
    data() {
        return {
            id: this.$route.params.id,
            name:''
        }
    },
    mounted() {
        this.getSongList()
    },
    methods: {
        getSongList() {
            rank({
                idx: this.id
            }).then(res =>{
                if (res.code == 200) {
                    console.log(res)
                   this.name = res.playlist.name
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.ListDetail
    width 100%
    height 100%
</style>