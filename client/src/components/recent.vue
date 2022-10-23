<script setup lang="ts">
import { Item } from '../types/types';
import { ref } from 'vue';
import saved from './mini/saved.vue'
import pineapple from '../assets/temp/avocado.jpg';
import banana from '../assets/temp/banana.jpg';
import bake from '../assets/temp/bake.jpg';

const tempList = ref([
    {
        name: "Avocadoes",
        price: 100,
        description: "This is a description",
        location: "Nairobi",
        img: pineapple,
        category: "vegetables",
        id: '1',
        seller: "John Doe",
        sellerId: '1',
        createdAt: (): string => {
            //get random date 
            const date = new Date();
            const randomDate = new Date(date.getTime() - Math.random() * 10000000000);
            //get the time difference between now and the random date
            const diff = Math.abs(date.getTime() - randomDate.getTime());
            //get the difference in days
            const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            //get the difference in hours
            const diffHours = Math.ceil(diff / (1000 * 3600));
            //get the difference in minutes
            const diffMinutes = Math.ceil(diff / (1000 * 60));
            return diffDays > 1 ? `${diffDays} days ago` : diffHours > 1 ? `${diffHours} hours ago` : `${diffMinutes} minutes ago`;
        },
        saved: false,
    },
    {
        name: "Bananas",
        price: 100,
        description: "This is a description",
        img: banana,
        id: '2',
        location: "Nairobi",
        category: "vegetables",
        seller: "John Doe",
        sellerId: '1',
        createdAt: (): string => {
            const date = new Date();
            const randomDate = new Date(date.getTime() - Math.random() * 10000000000);
            const diff = Math.abs(date.getTime() - randomDate.getTime());
            const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            const diffHours = Math.ceil(diff / (1000 * 3600));
            const diffMinutes = Math.ceil(diff / (1000 * 60));
            return diffDays > 1 ? `${diffDays} days ago` : diffHours > 1 ? `${diffHours} hours ago` : `${diffMinutes} minutes ago`;
        },
        saved: false,

    },
    {
        name: "Cakes",
        price: 100,
        description: "This is a description",
        img: bake,
        id: '3',
        location: "Nairobi",
        category: "vegetables",
        seller: "John Doe",
        sellerId: '1',
        createdAt: (): string => {
            const date = new Date();
            const randomDate = new Date(date.getTime() - Math.random() * 10000000000);
            const diff = Math.abs(date.getTime() - randomDate.getTime());
            const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            const diffHours = Math.ceil(diff / (1000 * 3600));
            const diffMinutes = Math.ceil(diff / (1000 * 60));
            return diffDays > 1 ? `${diffDays} days ago` : diffHours > 1 ? `${diffHours} hours ago` : `${diffMinutes} minutes ago`;
        },
        saved: false,
    }
])
</script>

<template>
    <div class="recent-wrapper">
        <h4>recent posts</h4>
        <div class="item" v-for="item in tempList" :id="item.id">
            <saved :if-saved="item.saved" class="item-saved" />
            <RouterLink to="/ads/:id">
                <div class="tab1">
                    <img :src="item.img" alt="item image">
                    <div class="item-tab2">
                        <h4>{{item.name}}</h4>
                        <p>{{item.price}} KSH</p>
                        <p>{{item.createdAt()}}</p>
                        <p>{{item.seller}}</p>
                        <p>{{item.location}}</p>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>


<style scoped>
.recent-wrapper {
    height: max-content;
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.item {
    display: flex;
    gap: 20px;
    padding: 10px;
    border-radius: 10px;
    background-color: #E2E4E9;
    position: relative;
}
.item-saved {
    position: absolute;
    top: 10px;
    right: 10px;
}
.item a  img {
    height: 120px;
    width: 120px;
    object-fit: cover;
    border-radius: 5px;
}
.item a {
    width: 100%;
    display: flex;
    color: #333;
    text-decoration: none;
}
.item-tab2 {
    margin-left: 20px;
}
.item a:visited {
    color: #333;
}
.tab1 {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
@media screen and (min-width: 768px) {
    .item {
        display: flex;
        flex-direction: row-reverse;
    }
    .item-saved {
        position: relative;
    }
    .item-tab2 {
        width: 100px;
    }
}
</style>