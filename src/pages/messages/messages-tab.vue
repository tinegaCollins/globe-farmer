<template>
  <div class="wrapper">
    <appTopBar/>
    <main>
      <h3>messages</h3>
      <router-view/>
    </main>
  </div>
</template>

<script>

import appTopBar from "../../components/appTopBar.vue"
import '../../assets/styles/global.css'
export default {
  components: {
    appTopBar
  }
}
</script>

<style scoped>
main{
  font-family: var(--main-font);
  padding: 20px;
}
main > h3{
  font-family: var(--main-font);
  position: relative;
}
main > h3::after{
  content: "";
  width: 85px;
  height: 2px;
  background-color: black;
  position: absolute;
  left: 0;
  bottom: -5px;
}
.maincontent{
  display: flex;
  flex-wrap: nowrap;
  padding: 30px;
  gap: 20px;
}
.chat-box{
  background-color: chocolate;
}
</style>