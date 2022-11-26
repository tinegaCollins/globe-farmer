<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import NavbarVue from '../components/Navbar.vue';
import { recievedPost } from '../types/types';
import axios from 'axios';
const DevUrl = import.meta.env.VITE_DEV_URL;



const route = useRoute();
const postId = ref(route.params.id);

const post = ref<recievedPost>();

async function getPost(){
    await axios.get(`${DevUrl}api/get-post/${postId.value}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        post.value = res.data.singlePost;
        getSellerDetails();
    }).catch(err => {
        console.log(err);
    })
}
getPost();
interface seller {
    username: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    location: string;
}
let seller = ref<seller>();
async function getSellerDetails(){
    const email = post.value?.seller;
   await axios.get(`${DevUrl}api/get-seller-details/${email}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        seller.value = res.data.user;
        console.log(seller.value);
    }).catch(err => {
        console.log(err);
    })
}
async function contactSeller(){
    
}
</script>

<template>
    <NavbarVue />
    <div v-if="post" class="px-48 py-4 grid grid-cols-2">
      <div class="col-span-2 text-2xl mb-3">
        <h1>{{post.category}}</h1>
      </div>
        <div class="border border-black rounded-xl overflow-hidden">
            <img :src="post.images[0]" alt="" class="h-96 w-full object-cover">
            <div class="mt-4 flex gap-1 p-2">
                <img v-for="image in post.images" :src="image" alt="" class="h-24 w-24 object-cover border border-yellow-100">
            </div>
        </div>
        <div class="px-5">
            <h1 class="text-xl mb-4">{{ post.title }}</h1>
            <p>{{post.price}}</p>
            <p>{{ post.description }}</p>
            <h1 class="text-yellow-400 text-xl">Location: <span>{{post.location}}</span></h1>
            <p>posted on: {{
              new Date(post.createdAt).toLocaleDateString()
              }}</p>
            <button @click="contactSeller" class="bg-yellow-400 w-full py-3 text-black mt-2 rounded-lg">Contact Seller</button>
        </div>
    </div>
    <div v-else class="w-100vw h-[calc(100vh-100px)] grid place-items-center">
        <span class="loader-1"></span>
    </div>

</template>

<style scoped>
.loader-1 {
  width: 48px;
  height: 48px;
  border: 3px dotted #FFF;
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.loader-1::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px dotted yellow;
  border-style: solid solid dotted;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  animation: rotationBack 1s linear infinite;
  transform-origin: center center;
}
    
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
} 
</style>