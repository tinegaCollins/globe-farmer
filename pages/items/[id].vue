<template>
<div class="items-page">
    <nav-bar/>
    <p>{{messageResponse}}</p>
    <div class="item" v-if="item">
        <div class="images">
            <img :src="item.images[0]">
            <div class="smaller-images">
                <img src="~/assets/temp/brocolli.jpeg" alt="" srcset="">
                <img src="~/assets/temp/carrots.webp" alt="" srcset="">
                <img src="~/assets/temp/images.jpeg" alt="" srcset="">
            </div>
        </div>
        <div class="title">
            <h1>{{item.name}}</h1>
            <h3 style="color: green">KSH {{item.price}} per {{item.quantity}}</h3>
            <h4><img src="~/assets/icons/location-svgrepo-com.svg" alt="" srcset="">{{item.location}}</h4>
            <h5>From: {{item.farmerName}}</h5>
        </div>
        <div class="messsages">
            <div class="if-history" v-if="ifHistory">
                <button>go to chat</button>
            </div>
            <div class="if-not-history" v-else>
                <div class="suggestions">
                    <p>is it available</p>
                    <p>can you deliver to...</p>
                    <p>call me</p>
                </div>
                <input type="text" placeholder="write your message">
                <button>start a chat</button>
            </div>
        </div>
        <div class="description">
            <h4>description</h4>
            <p>{{item.description}}</p>
        </div>
        <div class="item-details">
            <p>type: fruit</p>
            <p>availability: available</p>
            <p>delivery-report: can delivery</p>
        </div>
        
        <div class="similar-products">
            <h4>similar products</h4>
            <!-- <div class="similar-product" v-for="similarProduct in item.similarProducts">
                <img :src="similarProduct.images[0]">
                <p>{{similarProduct.name}}</p>
            </div> -->
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
    // await getSimilarProducts(item.value.type);
}
fetchData();


const getSimilarProducts = async (types: string)=>{
    const data = await fetch('http//localhost:8000/get-similar-products/'+types);
    const status = data.status;
    if(status === 200){
        const similarProducts = await data.json();
        console.log(similarProducts)
    }else{
        messageResponse.value = "kuna kashida mahali, check net yako ama uchill nifix"
    }
}

const ifHistory = ref<boolean>();
</script>
<style>
.item {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    gap: 10px;
    font-family: var(--cambo);
}
.item .images {
    width: 100%;
    display: grid;
    place-items: center;
}
.item .images> img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
}
.smaller-images {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin-top: 10px;
}
.smaller-images> img {
    width: 60px;
    border: 1px solid var(--dark-green);
    height: 60px;
    object-fit: cover;
}
.title {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 10px;
}
.title h4{
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
}
.title img{
    width: 30px;
    height: 30px;
    object-fit: cover;
}
.title h5{
    font-size: large;
    grid-column: 1 / 3;
}
.messsages {
    padding: 10px;
}
.if-history {
    width: 100%;
    height: 50px;
    display:grid;
    place-items: center;
}
.if-history button{
    width: 100%;
    height: 100%;
    background-color: var(--light-green);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}
.if-history button:hover{
    background-color: var(--dark-green);
}
.if-not-history {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
    align-items: center;
}
.suggestions {
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr 1.5fr 1fr;
    align-items: center;
}
.suggestions>p{
    background-color: var(--light-green);
    text-align: center;
    padding: 6px 2px;
    border-radius: 6px;
}
.if-not-history input{
    width: 100%;
    height: 50px;
    border: 1px solid var(--dark-green);
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    transition: all 0.3s ease-in-out;
}
.if-not-history input:focus{
    border: 1px solid var(--light-green);
}
.if-not-history button{
    width: 100%;
    height: 50px;
    background-color: var(--light-green);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}
.if-not-history button:hover{
    background-color: var(--dark-green);
}
.description {
    display: grid;
    gap: 10px;
    padding: 10px;
}
</style>