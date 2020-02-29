<template>
  <div class="tab">
    <router-link :class="isRecommendSelected ?'tab-item-isSelected':'tab-item'" to="/recommend">
      <span @click="changeRec">推荐</span>
    </router-link>
    <router-link :class="isRankSelected ?'tab-item-isSelected':'tab-item'" to="/rank">
      <span @click="changeRank">排行</span>
    </router-link>
    <router-link :class="isSearchSelected ?'tab-item-isSelected':'tab-item'" to="/search">
      <span @click="changeSelect">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isRecommendSelected: false,
            isRankSelected: false,
            isSearchSelected: false
        }
    },
    mounted() {
        this.isRecommendSelected = true  //界面一打开就使之改变样式
    },
    methods: {
        changeRec() {
            this.isRecommendSelected = true
            this.isRankSelected = false
            this.isSearchSelected = false
        },
        changeRank() {
            this.isRankSelected = true
            this.isRecommendSelected = false
            this.isSearchSelected = false
        },
        changeSelect() {
            this.isSearchSelected = true
            this.isRecommendSelected = false
            this.isRankSelected = false
        }
    },
}
</script>

<style lang="stylus" scoped>
.tab
    width 100%
    height 7vh
    background-color #d44439
    display flex
    .tab-item
        flex 1
        display flex
        justify-content center
        align-items center
        color #e2cfcd
        text-decoration none
    .tab-item-isSelected
        flex 1
        display flex
        justify-content center
        align-items center
        color #ffffff
        font-size 14px
        text-decoration none
</style>


