<template>
    <div class="recommend">
        <SongSheet></SongSheet>
        <TopMV></TopMV>
        <NewSong></NewSong>
    </div>
</template>

<script>
import NewSong from '../components/NewSong'
import SongSheet from '../components/SongSheet'
import TopMV from '../components/TopMV'
export default {
    components: {
        NewSong,
        SongSheet,
        TopMV
    }
}
</script>

<style lang="stylus" scoped>
.recommend {
  width: 100%;
  height 86vh
  overflow scroll
  background-color: #f2f3f4
}
</style>>