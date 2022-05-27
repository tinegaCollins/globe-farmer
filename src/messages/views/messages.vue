<template>
<div class="messagesWrapper">
    <div class="details">
        <img src="../assets/icons/user-svgrepo-com.svg">
        <h3>{{userName}}</h3>
        <img class="call" src="../assets/icons/call-svgrepo-com.svg">
        <img class="dots" src="../assets/icons/3-dots-horizontal-svgrepo-com.svg">
    </div>
    <div class="messages" >
        <li v-for="message in messages" :key="message.timestamp">
            <p class="from">from: {{ message.from }}</p>
            <p>{{message.message}}</p> 
        </li>
       <div class="send">
           <input type="text" placeholder="type a message" v-model="text">
           <button>
               <img src="../assets/icons/send-svgrepo-com.svg">
            </button>
       </div>
    </div> 
</div>

</template>

<script>
export default{
    data(){
        return{
            messages: null,
            id1: this.$route.params.id1,
            id2: this.$route.params.id2,
            userName: '',
            recieverName: '',
            text: '',
        }
    },
    mounted(){
        fetch('http://localhost:3000/messages/' + this.id1 + '/' + this.id2)
        .then(res => res.json())
        .then(data =>{
            this.messages = data
        })
        .catch(err => console.log(err))
        fetch('http://localhost:3000/name/' + this.id2)
        .then(res => res.json())
        .then(data =>{
            this.userName = data
        })
        .catch(err => console.log(err))
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
    overflow-y: scroll;
    width: 100%;
}
.messages li {
    margin: 20px 0;
    padding: 0 15px;
    border: 2px solid #333;
    min-height: 70px;
    max-width: 30ch;
    position: relative;
    left: 20px;
    border-radius: 7px;
}
.messages li::before {
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
.messages p {
    font-size: .8rem;
    margin: 5px 0; 
}
.messages .from {
    color: var(--main-green);
    font-size: .7rem;
}
.send{
    height: 40px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
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