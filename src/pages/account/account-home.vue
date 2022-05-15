<template>
<nav> <a href="/"><img src="./assets/2.png"></a></nav>
<div class="mainContent">
    <h3>profile</h3>
    <div class="details" v-if="userDetails">
        <img src="./assets/face-shot.png">
        <p>names: {{ userDetails.firstName + " " + userDetails.lastName }}</p>
        <p>line of business: {{ userDetails.line }}</p> 
        <p>main product: {{ userDetails.product}}</p>
        <p>county: {{userDetails.county }}</p>
        <p>town: {{userDetails.town}}</p>
        <p>phone: {{userDetails.phone }}</p>
        <p>email:{{userDetails.email}}</p>
    </div>
    <div class="ads"></div>
</div>
</template>

<script >

import '../../assets/styles/global.css'
export default{
    data(){
        return{
            userId: '627e0e1ead1acf5e1d1144ac',
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
.mainContent{
    font-family: var(--main-font);
    padding: 30px;
}
.details img{
    height: 160px;
    width: auto;
    border-radius: 50%;
}
</style>