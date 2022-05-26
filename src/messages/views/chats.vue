<template>
  <h3>chats go here</h3>
</template>

<script>

export default{
    data(){
        return{
            userID : '627e0e1ead1acf5e1d1144ac',
            chats : [],
        }
    },
    mounted(){
        fetch('http://localhost:3000/chats/' + this.userID)
        .then(res => res.json())
        .then(data =>{
            this.chats = data
            console.log(this.chats)
        })
        .catch(err => console.log(err))
    }
}
</script>