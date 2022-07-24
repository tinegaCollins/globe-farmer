<template>
    <div class="chat-id">
        <div class="chat-itself">
            <div class="chat-top-bar">
                <img src="~/assets/temp/avatar.jpg" alt="" srcset="">
                <div class="chat-single-details">
                    <div class="last-seen">
                        <h4>Ariana grande</h4>
                        <p>last seen 4:04pm tue</p>
                    </div>
                    <div class="chat-icons">
                        <img id="call-icon" src="~/assets/icons/call-svgrepo-com.svg" alt="" srcset="">
                        <img src="~/assets/icons/search-svgrepo-com.svg" alt="" srcset="">
                        <img src="~/assets/icons/three-dots-vertical-svgrepo-com.svg" alt="" srcset="">
                    </div>
                </div>
            </div>
            <div class="messages-tab" ref="messages-tab">
                <div class="padding-wrapper">
                    <div class="right" :class="message.sender1" v-for="message in messages">
                        <span>{{messages.time}}</span>
                        <p>{{messages.body}}</p>
                    </div>
                </div>
            </div>
            <div class="chat-input">
                <textarea name="" id="" cols="30" rows="10" placeholder="write your message..." v-model="textMessage"></textarea>
                <button @click="scrolltoBottom"><img src="~/assets/icons/send-svgrepo-com.svg" alt="" srcset=""></button>
            </div>
        </div>
        <div class="reciever-profile">

        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRoute();
const param = router.params.id;
let userId:string;
const messages = ref();
onMounted(async()=>{
    const dataToSend = {
        sender1: userId,
        sender2: param
    }
    const response =  await fetch('http://localhost:8080/get-single-chat',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    });
    messages.value = await response.json();
    await scrolltoBottom();
    await alignMessages();
})
const scrolltoBottom = async ()=>{
    const messages = document.querySelector('.messages-tab');
    messages.scrollTop = messages.scrollHeight;
}
const alignMessages = async ()=>{
    const messages = [...document.querySelectorAll('.messages-tab div')];
    for (let i = 0; i < messages.length; i++) {
        if(messages[i].classList.contains(userId)){
            messages[i].classList.add('right-message');
        }else {
            messages[i].classList.add('left-message');
        }
    }
}
const textMessage = ref<string>();
const sendMessage = async ()=>{
    const dataToSend = {
        from: userId,
        body: textMessage.value,
        time: Date.now().toString()
    }
    const send = await fetch('http://localhost:8080/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
    const response = send.json();
}
</script>

<style>
.chat-id {
    padding: 0 10px;
    width: 100%;
    height: calc(91vh - 13px);
    display: grid;
    grid-template-columns: 3fr 1fr;
    overflow-y: hidden;
}
.chat-itself{
    background-color: rgba(96, 216, 130, .2);
    height: calc(90vh - 13px);
    border-radius: 20px;
    position: relative;
    width: 100%;
    overflow-x: hidden;
}
.reciever-profile{
    height: 100%;
}
.chat-top-bar {
    background-color: rgb(0, 128, 0, .2);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    padding: 10px 15px;
    align-items: center;
    gap: 10px;
}
.chat-top-bar > img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.chat-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.chat-icons > img{
    height: 23px;
    width: 23px;
    margin: 0 5px;
}
#call-icon{
    height: 27px;
    width: 27px;
}
.chat-single-details{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.last-seen {
    font-size: .8rem;
}
.last-seen h4 {
    position: relative;
    top: 3px;
}
.last-seen p{
    margin-top: 4px;
}
.chat-input{
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between; 
    align-items: center;
}
.chat-input textarea{
    padding: 10px;
    width: 80%;
    height: 10px;
    background-color: transparent;
    outline: none;
    appearance: none;
    border: none;
}
.chat-input button {
    padding: 5px 10px;
    background-color: var(--main-yellow);
    border: none;
    border-radius: 5px;
}
.chat-input img {
    height: 25px;
}
.messages-tab {
    height: calc(90vh- 140px);
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
}
.messages-tab > div{
    position: relative;
    margin: 8px 0;
}
.right-message{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.messages-tab p{
    font-size: .9rem;
    max-width: 40%;
    background-color: var(--main-yellow);
    padding: 15px 10px;
    border-radius: 10px;
    position: relative;
}
.right-message p {
    width: 40%;
}
.messages-tab span{
    font-size: .6rem;
}
.left-message > p::before{
      content: '';
      position: absolute;
      bottom: -7px;
      border-top: 15px solid var(--main-yellow);
      left: 0;
      border-right: 15px solid transparent;
}
.right-message >  p::before{
    content: '';
    position: absolute;
    bottom: -7px;
    border-top: 15px solid var(--main-yellow);
    right: 0;
    border-left: 15px solid transparent;
}
.padding-wrapper{
    padding: 20px;
}
</style>