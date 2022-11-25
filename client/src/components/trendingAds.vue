<script lang="ts" setup>
import { ref } from 'vue';
import trendingVue from './mini/trending.vue';
import axios from 'axios';
import { recievedPost } from '../types/types';
const DevUrl = import.meta.env.VITE_DEV_URL;


const posts = ref<recievedPost[]>([]);
const renderPosts = ref<boolean>(false);
async function getPosts() {
    await axios.get(`${DevUrl}api/get-trending-posts`)
        .then((res) => {
            posts.value = res.data.posts;
            renderPosts.value = true;
        })
        .catch((err) => {
            console.log(err);
        })
}
getPosts();
</script>
<template>
        <div class="w-full">
            <h2>Trending Ads</h2>
            <div class="grid gap-4 mt-5 custom-grid w-full" v-if="renderPosts">
                <RouterLink :to="'/post/' + post._id" v-for="post in posts" :key="'a' + post._id" :item="post"
                    class="rounded-lg bg-white/10 backdrop-blur-sm relative">
                    <img :src="post.images[0]" alt="" class="h-56 w-full object-cover">
                    <h1 class="mt-4 p-1">{{ post.title }}</h1>
                    <p class="p-1">{{post.price}}</p>
                </RouterLink>
            </div>
            <div class="grid gap-4 mt-5 custom-grid  w-full h-48" v-else>
                <div class="rounded-lg bg-white/10 backdrop-blur-sm relative ">
                    <div class="w-full h-32 object-cover animate-pulse"></div>
                    <div class="animate-pulse">
                        <h1 class="h-4 bg-gray-400 rounded w-3/4 mt-1"></h1>
                        <p class="h-4 bg-gray-400 rounded w-1/4 mt-1"></p>
                        <p class="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
                    </div>
                </div>
                <div class="rounded-lg bg-white/10 backdrop-blur-sm relative ">
                    <div class="w-full h-32 object-cover animate-pulse"></div>
                    <div class="animate-pulse">
                        <h1 class="h-4 bg-gray-400 rounded w-3/4 mt-1"></h1>
                        <p class="h-4 bg-gray-400 rounded w-1/4 mt-1"></p>
                        <p class="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
                    </div>
                </div>
                <div class="rounded-lg bg-white/10 backdrop-blur-sm relative ">
                    <div class="w-full h-32 object-cover animate-pulse"></div>
                    <div class="animate-pulse">
                        <h1 class="h-4 bg-gray-400 rounded w-3/4 mt-1"></h1>
                        <p class="h-4 bg-gray-400 rounded w-1/4 mt-1"></p>
                        <p class="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
                    </div>
                </div>
                <div class="rounded-lg bg-white/10 backdrop-blur-sm relative ">
                    <div class="w-full h-32 object-cover animate-pulse"></div>
                    <div class="animate-pulse">
                        <h1 class="h-4 bg-gray-400 rounded w-3/4 mt-1"></h1>
                        <p class="h-4 bg-gray-400 rounded w-1/4 mt-1"></p>
                        <p class="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
                    </div>
                </div>
                <div class="rounded-lg bg-white/10 backdrop-blur-sm relative ">
                    <div class="w-full h-32 object-cover animate-pulse"></div>
                    <div class="animate-pulse">
                        <h1 class="h-4 bg-gray-400 rounded w-3/4 mt-1"></h1>
                        <p class="h-4 bg-gray-400 rounded w-1/4 mt-1"></p>
                        <p class="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
                    </div>
                </div>
                <div class="rounded-lg bg-white/10 backdrop-blur-sm relative ">
                    <div class="w-full h-32 object-cover animate-pulse"></div>
                    <div class="animate-pulse">
                        <h1 class="h-4 bg-gray-400 rounded w-3/4 mt-1"></h1>
                        <p class="h-4 bg-gray-400 rounded w-1/4 mt-1"></p>
                        <p class="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
                    </div>
                </div>
                <div class="rounded-lg bg-white/10 backdrop-blur-sm relative ">
                    <div class="w-full h-32 object-cover animate-pulse"></div>
                    <div class="animate-pulse">
                        <h1 class="h-4 bg-gray-400 rounded w-3/4 mt-1"></h1>
                        <p class="h-4 bg-gray-400 rounded w-1/4 mt-1"></p>
                        <p class="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
                    </div>
                </div> <div class="rounded-lg bg-white/10 backdrop-blur-sm relative ">
                    <div class="w-full h-32 object-cover animate-pulse"></div>
                    <div class="animate-pulse">
                        <h1 class="h-4 bg-gray-400 rounded w-3/4 mt-1"></h1>
                        <p class="h-4 bg-gray-400 rounded w-1/4 mt-1"></p>
                        <p class="h-4 bg-gray-400 rounded w-1/2 mt-1"></p>
                    </div>
                </div>
            </div>
            </div>
            
</template>

<style>
.custom-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>