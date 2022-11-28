<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import axios from 'axios';
import { useHead } from '@vueuse/head';
import { useUserStore } from '../stores/user';

const user = useUserStore().id;
const DevUrl = import.meta.env.VITE_DEV_URL;

useHead({
    title: 'Messages',  
})

interface chat {
    _id: string;
    recentMessage: {
        sender: string;
        message: string;
        createdAt: string;
        read: boolean;
    }
    otherUserName: string;
}
let chats = ref<chat[]>([]);
async function getChats() {
    const response = await axios.get(`${DevUrl}api/get-chats/${user}`);
    console.log(response.data);
    chats.value = response.data;
}
getChats();

</script>
<template>
    <div class="chats-side border-r-2 bg-white/10 ">
        <div class="top-bar">
            <a href="/">
                <img src="../../icon.png" alt="logo">
            </a>
            <h3>Messages </h3>
            <img src="../assets/icons/messages/plus-circle-svgrepo-com.svg" alt="" srcset="" class="add-chat">
            <img src="../assets/icons/messages/dots-3-svgrepo-com.svg" alt="" srcset="">
        </div>
        <div class="searchBar">
            <input type="text" placeholder="Search For Messages">
            <img src="../assets/icons/messages/filter-svgrepo-com.svg" alt="" srcset="">
        </div>
        <div class="now-chats">
            <RouterLink v-for="chat in chats" :key="chat._id" :to="{ name: 'Chat', params: { id: chat._id}}">
                <div class="chat">
                    <div class="chat-img">
                        <Icon icon="mdi:user-circle-outline" class="text-5xl" />
                        <div class="if-active"></div>
                    </div>
                    <div class="chat-info">
                        <h3>{{chat.otherUserName}}</h3>
                        <p>{{
                            //add dots if the message is too long
                            chat.recentMessage.message.length > 10 ? chat.recentMessage.message.slice(0, 6) + '...' : chat.recentMessage.message
                            }}</p>
                    </div>
                    <div class="chat-time">
                        <p class="text-sm">{{
                            //format date
                            new Date(chat.recentMessage.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true
                            })
                            }}</p>
                        <div class="unread-messages" v-if="chat.recentMessage.read">
                            <p>{{chat.recentMessage.read}}</p>
                        </div>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.chats-side {
    height: calc(100vh-10px);
    color: #333;  
    /* background-color: red; */
    /* padding: 5px; */
}
.top-bar {
    display: flex;
    padding: 5px;
    padding-bottom: 20px;
    border-bottom: 1px solid #333;
}
.top-bar h3 {
    font-size: 1.2rem;
    font-weight: 500;
}
.chats-side .add-chat {
    margin: 0 15px 0 auto;
}
.top-bar img, .searchBar img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 15px;
}
.searchBar {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #333;
}
.searchBar input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 5px;
}
.now-chats {
    height: calc(100vh - 200px);
    overflow-y: scroll;
}
.now-chats img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
}
.chat-img{
    position: relative;
}
.if-active {
    width: 15px;
    height: 15px;
    background-color: #4cd137;
    border-radius: 50%;
    position: absolute;
    bottom: 5px;
    right: 0;
    border: 2px solid #fff;
}
.chat {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-bottom: 1px solid rgb(102, 100, 100);
    cursor: pointer;
}
.now-chats a{
    text-decoration: none;
    color: #333;
}
.now-chats:visited {
    text-decoration: none;
    color: #333;
}
.chat-info {
    margin-left: 10px;
}
.chat-time {
    margin-left: auto;
}
.unread-messages {
    background-color: var(--jungle-green);
    color: #fff;
    font-size: .8rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
}

@media screen and (min-width: 1024px) {
    .chats-side {
        width: 25%;
    }
}
/* edit scroll bar */
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #888;
}
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

    
</style>