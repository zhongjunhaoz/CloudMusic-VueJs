<template>
  <el-input placeholder="搜索歌曲，歌手" prefix-icon="el-icon-search" class="searchInput" v-model="songName"></el-input>
</template>

<script>
export default {
    data() {
        return {
            songName:''
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>