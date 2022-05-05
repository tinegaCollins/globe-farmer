<template>
  <div class="wrapper">
    <appTopBar/>
    <main>
      <h3>messages</h3>
      <div class="maincontent">
        <div class="notifications-tab">
          <h3>chats</h3>
            <div class="chats">
              <ul v-for="message in messages" :key="message.id">
                <router-link :to = "{ name : 'tab', params : {id: message._id} }"><li>{{ message.to }}</li></router-link>
              </ul>
            </div>
        </div>
        <div class="chat-box">
          <router-view/>
        </div>
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
      messages: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/messages')
       .then(res => res.json())
       .then(data => {
            this.messages = data
        })
        .catch(err => console.log(err))
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
  background-color: #fff;
}
.chat-box{
  background-color: chocolate;
}
</style>