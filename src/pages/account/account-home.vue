<template>
<nav> <a href="/"><img src="./assets/2.png"></a></nav>
<div class="mainContent">
    <div class="details" v-if="userDetails">
        <img src="./assets/face-shot.png">
        <p>{{ userDetails.normalUsername }}</p> 
    </div>
    <div class="ads"></div>
</div>
</template>

<script >
export default{
    data(){
        return{
            userId: '627d6b3cd9f11d3234e7de4d',
            userDetails: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/users/' + this.userId)
        .then(res => res.json())
        .then(data => {
            this.userDetails = data
        })
        .catch(err => console.log(err))
    }
}
</script>
<style scoped>
nav img{
    height: 90px;
    width: auto;
    margin:10px 0 0 50px;
}
.details img{
    height: 160px;
    width: auto;
    border-radius: 50%;
}
</style>