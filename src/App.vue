<template>
  <appTopBar/>
  
  <main>
    <sideBar/>
    <div class="mainContent">
      <midViewsBar/>
    </div>
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
    overflow-x: hidden !important;
    width: calc(99vw - 4px);
    /* display: flex; */
    padding: 20px 0 20px 20px;
    column-gap: 30px;
    display: grid;
    grid-template-columns: auto auto;
  }
  .mainContent{
    max-width: 100%;
  }
</style>