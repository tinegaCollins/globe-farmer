<template>
  <appTopBar @showSearch="showSearchBar2"/>
  <searchBar class="searchbar" v-if="showSearchBar"/>
  <main>
    <sideBar :moveSidebar= "moveSidebar" class="sidebar"/>
    <div class="mainContent">
      <router-view name="notifications"/>
      <midViewsBar @sidebar="sidebarMove"/>
      <router-view/>
    </div>
  </main>
  <!-- <Footer/> -->
</template>

<script>


import appTopBar from './components/appTopBar.vue'
import './assets/styles/global.css'
import midViewsBar from './components/mid-views-bar.vue'
import sideBar from './components/side-bar.vue'
import searchBar from './components/searchBar.vue'
// import Footer from './components/footer-bar.vue'

export default {
  components: {
    appTopBar,
    midViewsBar,
    sideBar,
    searchBar,
    // Footer
  },
  data(){
    return{
      moveSidebar: false,
      showSearchBar: false,
    }
  },
  methods: {
    sidebarMove(){
      this.moveSidebar = !this.moveSidebar
    },
    showSearchBar2(){
      this.showSearchBar = !this.showSearchBar
    }
  }

}
</script>

<style scoped>
  main{
    width: calc(99vw - 4px) !important;
    padding: 20px 0 20px 20px;
    column-gap: 30px;
    display: flex;
  }
  .mainContent{
    max-width: calc(100% - 327px);
  }
  @media screen and (max-width: 768px){
    .mainContent{
      max-width: 100%;
    }
  }
  .searchbar{
    margin: 10px 0 0 20px;
  }
</style>