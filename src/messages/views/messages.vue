<template>
<div class="messagesWrapper">
    <div class="details">
        <img src="../assets/icons/user-svgrepo-com.svg">
        <h3>{{recieverName}}</h3>
        <img class="call" src="../assets/icons/call-svgrepo-com.svg">
        <img class="dots" src="../assets/icons/3-dots-horizontal-svgrepo-com.svg">
    </div>
    <div class="messages" >
        <div class="text">
            <li v-for="message in messages" :key="message.timestamp">
                <p class="from">from: {{ message.from }}</p>
                <p>{{message.message}}</p>
            </li>
        </div>
       <div class="send">
           <input type="text" placeholder="type a message" v-model="text.message">
           <button @click="sendMessage" :disabled="button">
               <img src="../assets/icons/send-svgrepo-com.svg">
            </button>
       </div>
    </div> 
</div>

</template>

<script>

import axios from 'axios';



export default{
    data(){
        return{
            messages: null,
            chatID: '',
            id1: this.$route.params.id1,
            id2: this.$route.params.id2,
            userName: '',
            recieverName: '',
            text: {
                from: null,
                timestamp: 202205272154,
                message: ''
            },
            newMessages: [],
            button: false,
            serverResponse: ''
        }
    },
    mounted(){
        fetch('http://localhost:3000/messages/' + this.id1 + '/' + this.id2)
        .then(res => res.json())
        .then(data =>{
            this.messages = data
        })
        .then(()=>{
            let li_s = [...document.querySelectorAll(".text li")]
            let reverse_li_s = [];
            let lenght = li_s.length + 1
            for (let j = 0; j < lenght; j++) {
                let pop = li_s.pop()
                reverse_li_s.push(pop)
            }
            console.log(reverse_li_s)
            for (let i = 0; i < reverse_li_s.length; i++){
                reverse_li_s[i].style.bottom = `${i}00px`
            }
        })
        .catch(err => console.log(err))
        fetch('http://localhost:3000/name/' + this.id2)
        .then(res => res.json())
        .then(data =>{
            this.recieverName = data
        })
        fetch('http://localhost:3000/name/' + this.id1)
        .then(res => res.json())
        .then(data =>{
            this.userName = data
        })
        .catch(err => console.log(err))
        fetch('http://localhost:3000/chat/' + this.id1 + '/' + this.id2)
        .then(res => res.json())
        .then(data =>{
            this.chatID = data
        })
        .catch(err => console.log(err))
    },
    methods: {
        sendMessage(){
            this.button = !this.button
            for (let i = 0; i < this.messages.length; i++) {
                this.newMessages.push(this.messages[i])
            }
            this.text.from = this.userName
            this.newMessages.push(this.text)
            this.messages = this.newMessages
            this.newMessages = []
            axios.patch('http://localhost:3000/chat/' + this.chatID, this.messages)
            .then(response =>{
                this.serverResponse = response.data
                this.text.message = ''
                this.button = !this.button
            })
            .then(()=>{
                fetch('http://localhost:3000/messages/' + this.id1 + '/' + this.id2)
                .then(res => res.json())
                .then(data =>{
                    this.messages = data
                })
            })
            .then(()=>{
                let li_s = [...document.querySelectorAll(".text li")]
                let reverse_li_s = [];
                let lenght = li_s.length + 1
                for (let j = 0; j < lenght; j++) {
                    let pop = li_s.pop()
                    reverse_li_s.push(pop)
                }
                console.log(reverse_li_s)
                for (let i = 0; i < reverse_li_s.length; i++){
                    reverse_li_s[i].style.bottom = `${i}00px`
                }
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.messagesWrapper {
    height: calc(100vh - 80px);
    width: 80%;
    border: 2px solid black;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}
.details{
    border-bottom: 1px solid #333;
    display: flex;
    padding:5px 8px;
    column-gap: 5px;
    align-items: center;
    z-index: 1;
    background-color: #fff;
    position: relative;
    box-shadow: 3px 3px 6px 5px #ccc;
}
.details img {
    height: 30px;
}
.details h3 {
    margin-left: 10px;
}
.details .call {
    margin-left: auto;
}
.details .dots {
    margin-right: 10px;
}
.messages {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.messages .text {
    overflow-y: scroll;
    height: 500px;
    position: relative;
}
.messages .text li {
    margin: 20px 0;
    padding: 0 15px;
    border: 2px solid #333;
    min-height: 70px;
    max-width: 30ch;
    position: absolute;
    left: 20px;
    bottom: 0;
    border-radius: 7px;
}
.messages .text li::before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;     
    border-left: 12px solid #333;
    border-right: 7px solid transparent;
    border-top: 7px solid #333;
    border-bottom: 12px solid transparent;
    left: 10px;
    bottom: -20px;
}
.messages .text li p {
    font-size: .8rem;
    margin: 5px 0; 
}
.messages .from {
    color: var(--main-green);
    font-size: .7rem;
}

.send{
    height: 50px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    padding: 0 40px;
}
.send input {
    margin-left: 20px;
    width: 80%;
    height: 80%;
    border: none;
    appearance: none;
    outline: none;
    border-radius: 4px;
    background-color: hsl(0, 0%, 90%);
}
.send button {
    background-color: #ccc;
    border: none;
    outline: none;
    appearance: none;
}
.send button:hover{
    cursor: pointer;
}
.send button img {
    height: 20px;
}
</style>