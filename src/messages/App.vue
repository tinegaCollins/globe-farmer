<template>
    <div class="wrapper">
        <h3>inbox</h3>
        <main>
            <div class="chats">
                <h4>chats</h4>
                <li v-for="chat in chatNames">
                <router-link :to = "{ name: 'messages',params:{id1: userID,id2: chat.chatID} }">
                <img src="./assets/icons/user-svgrepo-com.svg">
                {{chat.name}}
                </router-link>
                </li>
            </div>
            <router-view></router-view>
        </main>
    </div>
</template>


<script >


import '../assets/styles/main.css'

export default{
    data(){
        return{
            userID: '',
            chatsIDs: [],
            chatNames : []
        }
    },
    mounted(){
        this.userID = this.$store.getters.getUserID
        fetch('http://localhost:3000/chats/' + this.userID)
        .then(res => res.json())
        .then(data => {
            this.chatsIDs = data
        })
        .then(()=>{
            for (let i = 0; i < this.chatsIDs.length; i++) {
                let item;
                fetch('http://localhost:3000/name/' + this.chatsIDs[i])
                .then(res => res.json())
                .then(data =>{
                    item = {
                        chatID: this.chatsIDs[i],
                        name : data
                    }
                })   
                .then(()=>{
                    this.chatNames.push(item)
                }) 
            }
        })
        .catch(err => console.log(err))
    }      
}
</script>
<style>
*{
    font-family: var(--text-font);
}
/* this styles allso apply to susequent child components and views */

.wrapper{
    padding: 20px;
}
.wrapper > h3 {
    position: relative;
}
.wrappper > h3::after {
    content: '';
    height: 2px;
    width: 50px;
    background-color: #333;
    position: absolute;
    bottom: -5px;
    left: 0;
}
main{
    min-height: 100vh;
    padding : 20px 130px;
    display: flex;
    column-gap: 30px;
}
main .chats{
    height: calc(100vh - 80px);
    width: 300px;
    border: 2px solid #333;
    border-radius: 10px;
    padding: 10px;
}
main .chats h4{ 
    margin-bottom: 40px;
}
main .chats li {
    border-bottom: 1px solid #333;
    position: relative;
}
main .chats li:nth-child(2){
    border-top: 1px solid #333;
}
main .chats li a{
  text-decoration: none;
  color: #333;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  font-size: .8rem;
  column-gap: 20px;
  background-color: var(--main-yellow);
}
main .chats li a:hover {
    background-color: var(--dark-yellow);
}
main .chats li a img {
    height: 20px;
    background-color: var(--main-yellow);
}
a:visited{
    color: #333;
}
a.router-link-exact-active{
    background-color: red;
}
</style>