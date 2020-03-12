<template>
  <div id="app">
    <Title></Title>
    <Tab></Tab>
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <Play></Play>
  </div>
</template>

<script>
import Play from '../src/pages/Play'
import Tab from "../src/components/Tab";
import Title from "./components/Title";
export default {
  name: "App",
  components: {
    Title,
    Tab,
    Play
  }
};
</script>

<style lang="stylus" scoped>
#id {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  // overflow: hidden;
}
</style>
