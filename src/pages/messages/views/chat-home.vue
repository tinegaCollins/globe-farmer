<template>
   <div class="notifications-tab">
            <div class="chats">
              <h3>chats</h3>
              <ul v-for="message in messages" :key="message._id">
               <router-link :to = "{ name : 'tab', params : { id: message._id }}"> <li>{{ message.sender1 }}</li></router-link>
              </ul>
            </div>
            <div class="image">
              <img src="../../../assets/icons/undraw_messages_re_qy9x.svg">
            </div>
        </div>
</template>

<script>

import '../../../assets/styles/global.css'
export default {
  data(){
    return{
      userID: '',
      messages: [],
    }
  },
  beforeMount(){
    this.userID = this.$store.getters.getUserID;
    fetch(`http://localhost:3000/chats/${this.userID}`)
    .then(res => res.json())
    .then(data => {
      this.messages = data
    })
    .then(
      console.log(this.messages)
      console.log(this.messages[0].sender1, this.messages[0].sender2)
    )
  } 
}
</script>

<style scoped>
.notifications-tab{
  display: flex;
  flex-direction: row-reverse;
  padding: 0 200px;
}
.notifications-tab .chats{
  margin-right: auto;
  margin-left: 40px;
}
.notifications-tab img{
  height: 400px;
  width: auto;
  margin-left: 30px;
}
.notifications-tab .chats{
  padding: 20px;
  width: 100%;
}
.notifications-tab ul{
  font-weight: 600;
  width: 250px;
}
.notifications-tab .chats li{
  padding: 10px;
  background-color: grey;
  color: black;
  margin-top: 5px;
  width: 100%;
  transition: all .2s ease-in-out;
}
.notifications-tab .chats li:hover{
  cursor: pointer;
  background: rgba(128, 128, 128, 0.219);
}
.notifications-tab .chats a{
  color: black;
  text-decoration: none;
}
.notifications-tab .chats a:visited{
  color: black;
}
.notifications-tab, .chat-box{
  height: calc(100vh - 180px);
  width: 100%;
  background-color: #fff;
}
</style>