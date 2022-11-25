<script setup lang="ts">
import axios from 'axios';
import router from '../../../router';
import { ref } from 'vue';
import { PostTypes } from '../../../types/types';
import { notify } from "@kyvg/vue3-notification";
import { useHead } from '@vueuse/head';
import { useUserStore } from '../../../stores/user';
import icon from '../../../../icon.png';
const DevUrl = import.meta.env.VITE_DEV_URL;
const userEmail = useUserStore().email;
if(userEmail === ""){
    notify({
        title: "Error",
        text: "You must be logged in to create a post",
        type: "error",
        duration: 3000
    })
    router.push('/auth/login');
}
useHead({
    title: 'Create Post',
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


const steps = ref<Number>(1);


const post = ref<PostTypes>({
    title: "",
    category: '',
    description: '',
    price: '',
    location: '',
    images: [],
    seller: userEmail,
    farmerName: '',
});

function next(){
    if(post.value.title && post.value.category &&  post.value.images.length > 0){
        steps.value = 2;
    }else{
        notify({
            title: "Error",
            text: "Please fill all the fields",
            type: "error",
            duration: 3000,
        });
    }
}

const imageInput = ref<HTMLInputElement | null>(null);
function toBase64(){
    const files = imageInput.value?.files;
    if(files){
        for(let i = 0; i < files.length; i++){
            const reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onload = () => {
                post.value.images.push(reader.result as string);
            }
        }
    }
}
function postAd(){
    console.log(post.value);
    if(post.value.description && post.value.price){
        console.log("posting")
        axios.post(`${DevUrl}api/add-post`, post.value)
        .then(res => {
            if(res.status === 200){
                notify({
                    title: "Success",
                    text: "Post created successfully",
                    type: "success",
                    duration: 3000,
                });
                router.push('/user/posts/manage');
            }else {
                notify({
                    title: "Error",
                    text: "Something went wrong",
                    type: "error",
                    duration: 3000,
                });
            }
        })
        .catch(err => {
            notify({
                title: "Error",
                text: "Something went wrong",
                type: "error",
                duration: 3000,
            });
        })
    }    
}
</script>
<template>
    <div class="wrapper flex flex-col items-center">
        <h1 class="text-3xl">Post Ad</h1>
        <div class="steps-indicator flex flex-col items-center mt-4 text-2xl ">
            <h1>
                step
            </h1>
            <h1 class="bg-yellow-400 w-10 h-10 text-center text-2xl grid items-center rounded-full mt-3">
                {{ steps }}
            </h1>
        </div>
        <div class="text-black w-3/6" v-if="steps === 1">
            <div class="mb-4 w-full">
                <label class="block text-sm font-bold mb-2 text-white" for="username">
                    Title
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Title" v-model="post.title">
            </div>
            <div class="select-category">
                <label class="block text-sm font-bold mb-2 text-white" for="username">
                    Category
                </label>
                <select v-model="post.category"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                </select>
            </div>
            <div class="select-location">
                <label class="block text-sm font-bold mb-2 text-white" for="username">
                    Location
                </label>
                <select v-model="post.location"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Location 1</option>
                    <option>Location 2</option>
                    <option>Location 3</option>
                    <option>Location 4</option>
                </select>
            </div>
            <div class="add-images">
                <label class="block text-sm font-bold mb-2 text-white" for="username">
                    Add Images
                </label>
                <input type="file" name="" id="fileId" @input="toBase64" ref="imageInput" multiple>
                <div class="flex gap-2 mt-2">
                    <div v-for="image in post.images">
                        <img :src="image" alt="" class="w-20 h-20 object-cover">
                    </div>
                </div>
            </div>
            <button @click="next" class="bg-yellow-400 h-10 flex items-center gap-4 py-5 px-10 rounded-3xl text-black mb-5 mt-5">
                Next
            </button>
        </div>
        <div class="text-black w-3/6" v-if="steps === 2">
            <div class="mb-4 w-full">
                <label class="block text-sm font-bold mb-2 text-white" for="username">
                    Description
                </label>
                <textarea v-model="post.description"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Description"></textarea>
            </div>
            <div class="mb-4 w-full">
                <label class="block text-sm font-bold mb-2 text-white" for="username">
                    Price
                </label>
                <input v-model="post.price"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Price">
            </div>
            <div class="flex items-center w-full justify-center gap-4">
                <button class="bg-yellow-400 h-10 flex items-center gap-4 py-5 px-10  rounded-3xl text-black mb-5">
                Back
            </button>
            <button @click.once="postAd" class="bg-yellow-400 h-10 flex items-center gap-4 py-5 px-10  rounded-3xl text-black mb-5">
                Post
            </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
