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
        console.log(res);
        post.value = res.data.singlePost;
    }).catch(err => {
        console.log(err);
    })
}
getPost();
</script>

<template>
    <NavbarVue />
    <p>{{postId}}</p>
    <div v-if="post">
        <h1>{{post.title}}</h1>
        <p>{{post.description}}</p>
        <img :src="post.images[0]" alt="">
    </div>

</template>