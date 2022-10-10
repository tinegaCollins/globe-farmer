<script setup lang="ts">
import { ref } from 'vue'
import itemTemplate from './mini/item.vue';
import Item from '../types/types';

import mangoes from "../assets/temp/mangoes.jpg";
import apples from "../assets/temp/apples.jpg";
import bananas from "../assets/temp/banana.jpg";
import avocados from "../assets/temp/avocado.jpg";
// import milk from "../assets/temp/milk.jpg";
import spinach from "../assets/temp/spinach.jpg";
const items = ref<Item[]>([
    {
        name: 'Apple',
        price: 2.99,
        description: 'A red apple',
        location: 'New York',
        img: apples,
        saved: true,
        id: 1
    },
    {
        name: 'mangoes',
        price: 2.99,
        description: 'A red apple',
        location: 'New York',
        img: mangoes,
        saved: false,
        id: 2
    },
    {
        name: 'spinach',
        price: 2.99,
        description: 'A red apple',
        location: 'New York',
        img: spinach,
        saved: true,
        id: 3
    },
    {
        name: 'Bananas',
        price: 2.99,
        description: 'A red apple',
        location: 'New York',
        img: bananas,
        saved: false,
        id: 4
    },
    {
        name: 'Avocados',
        price: 2.99,
        description: 'A red apple',
        location: 'New York',
        img: avocados,
        saved: true,
        id: 5
    },
])
</script>
<template>
    <div class="featured">
        <h1>Featured Products</h1>
            <div class="products">
                <div class="exotic">
                    <img src="../assets/temp/exotic.jpg" alt="" srcset="">
                </div>
                <div class="meats">
                    <img src="../assets/temp/meats.jpg" alt="" srcset="">
                </div>
                <div class="cheese">
                    <img src="../assets/temp/cheese.jpg" alt="" srcset="">
                </div>
                <div class="bake">
                    <img src="../assets/temp/bake.jpg" alt="" srcset="">
                </div>
            </div>
    </div>
</template>

<style scoped>
.featured {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 15px 0;
    width: 100%;
}

h1 {
    font-family: var(--title-font);
}
.products {
    position: relative;
    padding: 30px 4rem 0 4rem;
    display: grid;
    gap: 1rem;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>