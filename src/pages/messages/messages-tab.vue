<template>
  <div class="wrapper">
    <appTopBar/>
    <main>
      <h3>messages</h3>
      <div class="maincontent">
        <div class="notifications-tab">

        </div>
        <div class="chat-box"></div>
      </div>
    </main>
  </div>
</template>

<script>

import appTopBar from "../../components/appTopBar.vue"
import '../../assets/styles/global.css'
export default {
  components: {
    appTopBar
  },
  data(){
    return{
      messages: [
        {type: "clement kipkirui", body: "Lorem ipsum dolor sit amet consectetur."},
        {type: "me", body: "Lorem, ipsum dolor."},
        {type: "other", body: "Lorem, ipsum dolor. to us"},
        {type: "me", body: "okay"},
      ]
    }
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
.notifications-tab, .chat-box{
  height: calc(100vh - 180px);
  width: 100%;
  background-color: red;
}
.chat-box{
  background-color: yellow;
}
</style>