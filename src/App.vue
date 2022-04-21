<template>
  <appTopBar/>
  <midViewsBar/>
  <main>
    <sideBar/>
  </main>
</template>

<script>


import appTopBar from './components/appTopBar.vue'
import './assets/styles/global.css'
import midViewsBar from './components/mid-views-bar.vue'
import sideBar from './components/side-bar.vue'

export default {
  components: {
    appTopBar,
    midViewsBar,
    sideBar
  }

}
</script>

<style scoped>
  main{
    overflow-y: hidden !important;
    width: 97vw;
  }
</style>