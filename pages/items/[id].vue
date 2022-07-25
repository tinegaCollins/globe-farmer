<template>
<div class="items-page">
    <nav-bar/>
    <p>{{messageResponse}}</p>
    <div class="item" v-if="item">
        <h2>{{item.farmerName}}'s {{item.name}}</h2>
        <div class="images">
            <img :src="item.images[0]">
        </div>
        <div class="details">
            <p>location {{item.location}}</p>
            <p>price:{{item.price}} per {{item.quantity}}</p>
            <p>respondes in minutes</p>
        </div>
        <div class="messsages">

        </div>
    </div>
</div>
</template>

<script setup lang="ts">
const route = useRoute()
const itemId = route.params.id;
const messageResponse = ref<string>();
const item = ref();
const fetchData = async ()=>{
    const data = await fetch(`http://localhost:8000/get-by-id/${itemId}`);
    const status = data.status;
    if(status === 200){
        item.value = await data.json();
        console.log(item.value)
    }else{
        messageResponse.value = "kuna kashida mahali, check net yako ama uchill nifix"
    }
}
fetchData();
</script>
<style>
.item {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 0;
    gap: 10px;
}
.item .images {
    width: 100%;
    display: grid;
    place-items: center;
}
.item .images img {
    width: 90%;
    height: 40vh;
    object-fit: cover;
}
</style>