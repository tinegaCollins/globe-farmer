<script setup lang="ts">
import { Item } from '../types/types';
import { ref } from 'vue';
import saved from './mini/saved.vue'
import pineapple from '../assets/temp/avocado.jpg';
import banana from '../assets/temp/banana.jpg';
import bake from '../assets/temp/bake.jpg';
const tempList = ref<Item[]>([
    {
        name: "Item 1",
        price: 100,
        description: "This is a description",
        location: "Nairobi",
        img: pineapple,
        category: "vegetables",
        id: '1',
        seller: "John Doe",
        sellerId: '1',
        saved: false,
        createdAt: new Date(),

    },
    {
        name: "Item 2",
        price: 100,
        description: "This is a description",
        img: banana,
        id: '2',
        location: "Nairobi",
        category: "vegetables",
        seller: "John Doe",
        sellerId: '1',
        createdAt: new Date(),
        saved: false,

    },
    {
        name: "Item 3",
        price: 100,
        description: "This is a description",
        img: bake,
        id: '3',
        location: "Nairobi",
        category: "vegetables",
        seller: "John Doe",
        sellerId: '1',
        createdAt: new Date(),
        saved: false,
    }
])
</script>

<template>
    <div class="recent-wrapper">
        <div class="item" v-for="item in tempList" :id="item.id">
            <img :src="item.img" alt="">
            <saved :if-saved="item.saved"/>
            <div class="item-details">
                <h4>{{item.name}}</h4>
                <p>{{item.location}}</p>
                <p>{{item.price}}</p>
                <p>{{item.seller}}</p>
                <p>{{}}</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.recent-wrapper {
    height: 100%;
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.item {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
    background-color: #E2E4E9;
}
.item > img {
    height: 80px;
    width: 120px;
    object-fit: cover;
    border-radius: 5px;
}
</style>