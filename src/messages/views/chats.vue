<template>
    <div class="messagesWrapper">
        <h3>select a chat to display messages</h3>
    </div>
</template>

<script>

export default{
    data(){
        return{
            userID : '627e0e1ead1acf5e1d1144ac',
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
.messagesWrapper {
    height: calc(100vh - 80px);
    width: 80%;
    border: 2px solid black;
    border-radius: 10px;
    display: grid;
    place-items: center;
}
</style>