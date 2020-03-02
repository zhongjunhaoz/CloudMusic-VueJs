<template>
  <div class="rank">
    <rank0></rank0>
    <rank1></rank1>
    <rank2></rank2>
    <rank3></rank3>
    <rank4></rank4>
    <rank5></rank5>
  </div>
</template>

<script>
import rank0 from '../components/rank/Rank0'
import rank1 from '../components/rank/Rank1'
import rank2 from '../components/rank/Rank2'
import rank3 from '../components/rank/Rank3'
import rank4 from '../components/rank/Rank4'
import rank5 from '../components/rank/Rank5'
export default {
  components: {
      rank0,
      rank1,
      rank2,
      rank3,
      rank4,
      rank5
  },
};
</script>

<style lang="stylus">
.rank {
  width: 100%;
  height 86vh
  overflow scroll
  background-color: #f2f3f4;
}
</style>