<template>
    <div class="messages">
        <section class="nav-messages">
            <a href="/"><img src="~/assets/icons/2.png" alt="logo" srcset=""></a>
            <h4>messages</h4>
        </section>
        <div class="messages-content">
            <div class="left-bar">
                <section class="chats">
                    <div class="user-details-top">
                        <img src="~/assets/temp/avatar.jpg" alt="" srcset="">
                        <p>{{user.name}}</p>
                        <p class="avail">{{available}} <img src="~/assets/icons/arrow-down-svgrepo-com.svg" alt="" srcset=""></p>
                    </div>
                    <div class="search-bar">
                        <input type="text" id="search" placeholder="search">
                        <label for="search">
                            <img src="~/assets/icons/search-svgrepo-com.svg" alt="" srcset="">
                        </label>
                    </div>
                    <NuxtLink :to="chats.id" v-for="chat in chats">
                        <img src="~/assets/temp/avatar.jpg">
                        <div class="user-details">
                            <h4>{{chat.name}}</h4>
                            <p>{{chat.recent}}</p>
                        </div>
                    </NuxtLink>
                </section>
            </div>
            <NuxtPage/>
        </div>
    </div>
</template>

<script setup lang="ts">
import '../../assets/styles/variables.css'

useHead({
    title: 'messages',
    link:[
        { rel: 'icon', href: '../../assets/icons/2.png'}
    ]
})
const messageString = '/messages/chat-';
const id:String = 'heyPorsce'
let chats = ref();
let user = ref();
onMounted(async ()=>{
    const chatsData = await fetch(`http://localhost:8080/get-recent-chats/${id}`);
    chats.value = await chatsData.json();
    const userData = await fetch(`http://localhost:8080/get-data-at-messages/${id}`);
    user.value = userData.json();
})
const chartClicked = ref<Boolean>();
const available = ref<String>("available");
const ifOnline = ref<String>('green');


</script>

<style>
.messages{
    overflow: hidden;
}
.nav-messages {
    height: 8vh;
    padding: 0 40px;
    display: flex;
    align-items: center;
    gap: 30px;
}
.nav-messages  > a {
    height: 100%;
}
.nav-messages  > a > img{
    height: 100%;
}
.messages-content{
    display: grid;
    grid-template-columns: 1fr 5fr;
    padding: 10px;
}
.messages-content .left-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    height: calc(90vh - 90px);
    width: 340px;
    padding: 40px 0;
}
.messages-content .user-details-top{
    text-align: center;
    font-size: .8rem;
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    margin-bottom: 20px;
    position: relative;
    align-items: center;
}
.messages-content .user-details-top .avail{
    font-size: .6rem ;
    background-color: rgba(0, 128, 0, .3);
    border-radius: 5px;
    width: min-content;
    padding: 3px 5px;
    display: flex;
    gap: 3px;
}
.messages-content .user-details-top .avail > img{
    height: 10px;
    width: 10px;
}
.messages-content .user-details-top img {
    height: 90px;
    width: 90px;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
}
.messages-content .user-details-top::before{
    content: "";
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: v-bind(ifOnline);
    border: 1px solid white;
    position: absolute;
    top: 70px;
    right: 130px;
    z-index: 1;
}
.chats {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
}
.chats a {
    width: 90%;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    column-gap: 7px;
    margin-top: 6px;
    overflow-x: hidden;
    transition:  background-color 200ms ease-in-out;
}
.chats a:active{
    background-color: red;
}
.chats a:hover{
    background-color: rgba(242, 242, 242, .3);
}
.chats a .user-details h4{
    margin-bottom: 4px;
}
.chats a p{
    font-size: .7rem;
    width: max-content;
}
.chats a img{
    border-radius: 50%;
    height: 40px;
    width: 40px;
    object-fit: cover;
}
.search-bar{
    background-color: hsla(40, 100%, 53%, 0.753);
    z-index: 1;
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
}
.search-bar img{
    height: 20px;
    width: 20px;
}
.search-bar input{
    background-color: transparent;
    border: none;
    appearance: none;
    outline: none;
    padding: 0 7px;
    height: 30px;
    width: 80%;
}
::-webkit-scrollbar{
    width:0px;
    border-left:1px solid #E6ECF8;
}
::-webkit-scrollbar-thumb{
    background-color:#d6872c;
}
::-moz-scrollbar{
    width:0px;
border-left:1px solid #E6ECF8;
}
::-moz-scrollbar-thumb{
    background-color:#d6872c;
}
</style>