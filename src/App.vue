<template>
  <appTopBar/>
  
  <main>
    <sideBar :moveSidebar= "moveSidebar" class="sidebar"/>
    <div class="mainContent">
      <midViewsBar @sidebar="sidebarMove"/>
      <router-view/>
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
  },
  data(){
    return{
      moveSidebar: false
    }
  },
  methods: {
    sidebarMove(){
      this.moveSidebar = !this.moveSidebar
    }
  }

}
</script>

<style scoped>
  main{
    overflow-x: hidden;
    width: calc(99vw - 4px) !important;
    padding: 20px 0 20px 20px;
    column-gap: 30px;
    display: flex;
  }
  .mainContent{
    max-width: calc(100% - 327px);
  }
  .sidebar{
    position: sticky;
    top: 20px;
  }
</style>