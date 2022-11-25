<script lang="ts" setup>
import { useUserStore } from '../../../stores/user';
import { notify } from "@kyvg/vue3-notification";
import { recievedPost } from '../../../types/types';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import icon from '../../../../icon.png';
import { useHead } from '@vueuse/head';


useHead({
    title: 'Manage Posts',  
    meta: [
        {
            name: 'description',
            content: 'Create a post'
        }
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: icon
        }
    ]

})
const email = useUserStore().email;
const DevUrl = import.meta.env.VITE_DEV_URL;
let posts = ref<recievedPost[]>([]);
async function getPost(){
    await axios.post(`${DevUrl}api/get-posts`, {
        email: email
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        posts.value = res.data.posts;
    }).catch(err => {
        notify({
            title: "Error",
            text: err.message,
            type: "error",
            duration: 3000
        })
    })
}
onMounted(() => {
    getPost();
})
</script>

<template>
    <div class="">
        <h1>Your Posts</h1>
        <div class="flex gap-2 flex-wrap p-3">
            <RouterLink v-for="post in posts" :to="'/post/' + post._id" class="border border-black rounded-xl p-3 ">
                <img :src="post.images[0]" alt="" class="h-56 w-56 object-cover">
                <h2>{{ post.title }}</h2>
                <p>Date posted:{{
                        new Date(post.createdAt).toLocaleDateString()
                }}</p>
            </RouterLink>
        </div>
    </div>
</template>