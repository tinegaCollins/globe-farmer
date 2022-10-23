<script setup lang="ts">
import { ref } from 'vue';

interface chart {
    name: string;
    id: number;
    lastMessage: string;
    lastMessageTime: string;
    unreadMessages: number;
    avatar: string;
}
const charts = ref<chart[]>([
    {
        name: 'John Doe',
        id: 1,
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '12:00',
        unreadMessages: 3,
        avatar: 'https://i.pinimg.com/236x/aa/db/e3/aadbe3f76c4c8fcd2eab0d3ff28e66f3--woman-face-pretty-face.jpg'
    },
    {
        name: 'John Doe',
        id: 2,
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '12:00',
        unreadMessages: 1,
        avatar: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/08/celebrity-actor-faces-mix-morph-pedro-berg-johnsen-thatnordicguy-2.jpg'
    },
    {
        name: 'John Doe',
        id: 3,
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '12:00',
        unreadMessages: 45,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwbA3X5lfUyoBdRrU5kltZNYtOP4iud_QE_Lqbemf&s'
    },
    {
        name: 'John Doe',
        id: 4,
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '12:00',
        unreadMessages: 3,
        avatar: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/08/celebrity-actor-faces-mix-morph-pedro-berg-johnsen-thatnordicguy-14.jpg'
    },
    {
        name: 'John Doe',
        id: 5,
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '12:00',
        unreadMessages: 56,
        avatar: 'https://i.pinimg.com/736x/82/ee/e8/82eee84dfc280011f70dd4799a29a737.jpg'
    },
    {
        name: 'John Doe',
        id: 6,
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '12:00',
        unreadMessages: 12,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3u6t98Vd0fLGgnHjhWfY7o7KzbD2o54g7ekZab8ZS&s'
    },
    {
        name: 'John Doe',
        id: 7,
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '12:00',
        unreadMessages: 7,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofj7HZhcjeOQYKMo-WduJ691xYI5c48CBUc4eo6me&s'
    },
    {
        name: 'John Doe',
        id: 8,
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '12:00',
        unreadMessages: 2,
        avatar: 'https://i.pinimg.com/736x/ba/33/e4/ba33e46bb8fd86e643b7ce3a1297d5ca--sia-music-top-knot.jpg'
    },
    {
        name: 'John Doe',
        id: 9,
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '12:00',
        unreadMessages: 2,
        avatar: 'https://i.pinimg.com/originals/b8/35/38/b8353848408bfbe9ba6668a198715ac7.jpg'
    }
])
</script>
<template>
    <div class="chats-side">
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
            <RouterLink v-for="chat in charts" :key="chat.id" :to="{ name: 'Chat', params: { id: chat.id}}">
                <div class="chat">
                    <div class="chat-img">
                        <img :src="chat.avatar" alt="" srcset="">
                        <div class="if-active"></div>
                    </div>
                    <div class="chat-info">
                        <h3>{{chat.name}}</h3>
                        <p>{{chat.lastMessage}}</p>
                    </div>
                    <div class="chat-time">
                        <p>{{chat.lastMessageTime}}</p>
                        <div class="unread-messages" v-if="chat.unreadMessages > 0">
                            <p>{{chat.unreadMessages}}</p>
                        </div>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.chats-side {
    height: calc(100vh );
    color: #333;  
    padding: 5px;
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
    
</style>