<template>
  <div id="app">
    <Title></Title>
    <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from '../src/components/Tab'
import Title from './components/Title'
export default {
  name: 'App',
  components: {
    Title,
    Tab
  }
}
</script>

<style>
</style>
