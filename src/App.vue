<template>
    <topBar/>
    <div class="maincontent">
        <navBar/>
        <router-view/>
    </div>
</template>

<script>

import topBar from './components/top-bar.vue'
import navBar from './components/sideBar.vue'

//import css for this  for assets folder
import './assets/styles.css' 


export default {
  components :{
    topBar,
    navBar
  }

}
</script>

<style>
    .maincontent{
      margin-top: 50px;
    }
</style>