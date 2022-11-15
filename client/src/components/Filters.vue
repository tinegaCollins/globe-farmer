<script setup lang="ts">
import cereal from '../assets/icons/cereal.svg'
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="filters w-max">
        <h4>Categories</h4>
        <a href="/Fruits">
            <Icon icon="emojione-monotone:green-apple" class="mr-5 text-3xl"/>
            Fruits
        </a>
        <a href="/Vegetables">
            <Icon icon="game-icons:cabbage" class="mr-5 text-3xl"/>
            Vegetables
        </a>
        <a href="/Cereals">
            <img :src="cereal" alt="" srcset="" />
            Cereals
        </a>
        <a href="/Dairy">
            <Icon icon="mdi:cow" class="mr-5 text-3xl"/>
            Dairy
        </a>
        <a href="/Legumes">
            <Icon icon="fluent-emoji-high-contrast:beans" class="mr-5 text-3xl"/>
            Legumes
        </a>
        <a href="/spices">
            <Icon icon="game-icons:cool-spices" class="mr-5 text-3xl"/>
            Spices
        </a>
        <a href="/animal-food">
            <Icon icon="emojione-monotone:goat" class="mr-5 text-3xl"/>
            Animal food
        </a>
        <a href="/chicken">
            <Icon icon="emojione-monotone:chicken" class="mr-5 text-3xl"/>
            Poultry Products
        </a>
        <a href="/other">
            <Icon icon="arcticons:state-farm" class="mr-5 text-3xl"/>
            Other
        </a>
    </div>
</template>

<style scoped>
.filters {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    font-family: var(--font-family);
    gap: 10px;
    padding: 15px;
    border-radius: 10px;
    height: 100%;
}
h4 {
    color: #333;
}
.filters a {
    text-decoration: none;
    color: #333;
    display: flex;
    min-width: 200px;
    align-items: center;
    padding: 4px 10px;
    transition: all 0.1s ease-in-out;
}

.filters a:visited {
    color: #333;
}

.filters a:hover {
    background-color: #f1f1f1;
}

.filters a img {
    height: 25px;
    margin-right: 20px;
}
@media screen and (max-width: 1024px) {
    .filters {
        width: 100%;
        margin-bottom: 20px;
    }
}
    
</style>
