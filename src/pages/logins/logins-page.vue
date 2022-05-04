<template>
  <div class="wrapper">
    <appTopBar/>
    <div class="mainContent">
      <router-view/>
    </div>
  </div>
</template>

<script>

import appTopBar from '../../components/appTopBar.vue'
import '../../assets/styles/global.css'

export default {
  components: {
    appTopBar
  },
}
</script>

<style>

</style>