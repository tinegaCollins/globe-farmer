<script setup lang="ts">
import { ref } from 'vue'
import itemTemplate from './mini/item.vue'
import tomato from '../assets/images/tomato.png'
import bell from '../assets/images/bell.png'
import pineapple from '../assets/images/pineapple.png'
import broccoli from '../assets/images/brocolli.png'
import Item from '../types/types';

const items = ref<Item[]>([
    {
        name: 'Apple',
        price: 2.99,
        description: 'A red apple',
        location: 'New York',
        img: tomato
    },
    {
        name: 'Bell Pepper',
        price: 2.99,
        description: 'A red apple',
        location: 'New York',
        img: bell
    },
    {
        name: 'Pineapple',
        price: 2.99,
        description: 'A red apple',
        location: 'New York',
        img: pineapple
    },
    {
        name: 'Broccoli',
        price: 2.99,
        description: 'A red apple',
        location: 'New York',
        img: broccoli
    }
])
</script>
<template>
    <div class="featured">
        <h1>Featured Products</h1>
            <div class="products">
                <itemTemplate v-for="item in items" :key="item.name" :item="item" />
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
}

h1 {
    font-family: var(--title-font);
}
.products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 15px 0;
}
</style>