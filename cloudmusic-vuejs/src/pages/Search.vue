<template>
    <div>
        <searchInput class="sinput"></searchInput>
        <hotSong></hotSong>
    </div>
</template>

<script>
import searchInput from '../components/SearchInput'
import hotSong from '../components/HotSong'
export default {
    components: {
        searchInput,
        hotSong
    }
}
</script>

<style lang="stylus" scoped>

</style>