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
    }).catch(err => {
        console.log(err);
    })
}
getPost();

</script>

<template>
    <NavbarVue />
    <div v-if="post" class="px-36 py-4">
        <div>
            <img :src="post.images[0]" alt="" class="h-96 w-96 object-cover">
            <div class="mt-4 flex gap-1">
                <img v-for="image in post.images" :src="image" alt="" class="h-24 w-24 object-cover">
            </div>
        </div>
        <div>
            <h1>{{ post.title }}</h1>
            <p>{{ post.description }}</p>
        </div>
    </div>
    <!-- skeleton loading animation -->
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