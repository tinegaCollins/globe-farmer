<template>
  <div class="wrapper">
    <!-- <appTopBar/> -->
    <a href="/"><img src="./2.png"></a>
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

<style scoped>
.wrapper{
  font-family: var(--main-font);
  display: grid;
  place-items: center;
}
.wrapper > a > img{
  height: 100px;
  width: auto;
  margin-top: 20px;
}
</style>