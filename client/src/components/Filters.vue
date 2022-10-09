<script setup lang="ts">
import apple from '../assets/icons/apple.svg'
import vegetable from '../assets/icons/vegetable.svg'
import cereal from '../assets/icons/cereal.svg'
import dairy from '../assets/icons/milk.svg'
import legumes from '../assets/icons/legumes.svg'
import spices from '../assets/icons/spice.svg'
import animal from '../assets/icons/cow.svg'
import chicken from '../assets/icons/chicken.svg'
import other from '../assets/icons/other.svg'
</script>

<template>
    <div className="filters">
        <a href="/Fruits">
            <img :src="apple" alt="" />
            Fruits
        </a>
        <a href="/Vegetables">
            <img :src="vegetable" alt="" srcset="" />
            Vegetables
        </a>
        <a href="/Cereals">
            <img :src="cereal" alt="" srcset="" />
            Cereals
        </a>
        <a href="/Dairy">
            <img :src="dairy" alt="" srcset="" />
            Dairy
        </a>
        <a href="/Legumes">
            <img :src="legumes" alt="" srcset="" />
            Legumes
        </a>
        <a href="/spices">
            <img :src="spices" alt="" srcset="" />
            Spices
        </a>
        <a href="/animal-food">
            <img :src="animal" alt="" srcset="" />
            Animal food
        </a>
        <a href="/chicken">
            <img :src="chicken" alt="" srcset="" />
            Poultry Products
        </a>
        <a href="/other">
            <img :src="other" alt="" srcset="" />
            Other
        </a>
    </div>
</template>

<style scoped>
.filters {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 220px;
    font-family: var(--font-family);
    gap: 10px;
    padding: 5px;
}

.filters a {
    text-decoration: none;
    color: #333;
    display: flex;
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
</style>
