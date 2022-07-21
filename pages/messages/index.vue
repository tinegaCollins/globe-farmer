<template>
    <div class="messages">
        <section class="nav-messages">
            <a href="/"><img src="~/assets/icons/2.png" alt="logo" srcset=""></a>
            <h4>messages</h4>
        </section>
        <div class="messages-content">
            <div class="left-bar">
                <div class="user-details">
                    <img src="~/assets/temp/avatar.jpg" alt="" srcset="">
                    <p>ariana grande</p>
                    <p>{{available}}</p>
                </div>
                <section class="chats">
                    <NuxtLink to="/messages/chat-4444">
                        <img src="~/assets/temp/avatar.jpg">
                        <div class="user-details">
                            <h5>tinega</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.</p>
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

const chartClicked = ref<Boolean>();
const available = ref<String>("available");
</script>

<style>
.messages{
    overflow: hidden;
}
.nav-messages {
    height: 10vh;
    padding: 0 40px;
    display: flex;
    align-items: center;
    gap: 30px;
}
.nav-messages  > a {
    height: 100%;
}
.nav-messages  > a > img{
    height: 70%;
}
.messages-content{
    display: flex;
}
.messages-content .left-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.messages-content .user-details{
    /* text-align: center; */
}
.messages-content .user-details img {
    height: 90px;
    width: 90px;
    object-fit: cover;
    border-radius: 50%;
}
.chats {
    height: 84vh;
    width: 340px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 10px;
    border-right: 2px solid var(--light-green);
}
.chats a {
    width: 100%;
    background-color: #f2f2f2;
    display: flex;
    padding: 10px;
    column-gap: 7px;
    margin-top: 3px;
    transition:  background-color 200ms ease-in-out;
}
.chats a:hover{
    background-color: rgba(242, 242, 242, .3);
}
.chats a .user-details{
    display: grid;
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