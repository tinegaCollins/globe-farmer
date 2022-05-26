<template>
    <div class="wrapper">
        <h3>inbox</h3>
        <main>
            <div class="chats" v-for="chat in chatNames">
                <h4>chats</h4>
                <router-link :to = "{ name: 'messages',params:{id1: userID,id2: chat.chatID} }">{{chat.name}}</router-link>
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
            userID: '627e0e1ead1acf5e1d1144ac',
            chatsIDs: [],
            chatNames : []
        }
    },
    mounted(){
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
    padding : 20px 50px;
    display: flex;
    flex-direction: row;
}
main .chats{
    height: calc(100vh - 80px);
    width: 300px;
    border: 2px solid #333;
    border-radius: 10px;
    padding: 10px;
}
</style>