<template>
  <appTopBar/>
  <midViewsBar/>
</template>

<script>


import appTopBar from './components/appTopBar.vue'
import './assets/styles/global.css'
import midViewsBar from './components/mid-views-bar.vue'

export default {
  components: {
    appTopBar,
    midViewsBar
  }

}
</script>

<style>

</style>