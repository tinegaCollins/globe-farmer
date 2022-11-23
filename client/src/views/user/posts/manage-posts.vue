<script lang="ts" setup>
import { useUserStore } from '../../../stores/user';
import { notify } from "@kyvg/vue3-notification";
import { recievedPost } from '../../../types/types';
import axios from 'axios';
import { onMounted, ref } from 'vue';

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
    console.log(posts.value.length);
})
</script>

<template>
    <div class="wrapper">
        <h1>Your Posts</h1>
        <div>
            <div v-for="post in posts">
                <img v-for="image in post.images" :src="image" alt="" class="">
                <h2>{{post.title}}</h2>
            </div>
        </div>
    </div>
</template>