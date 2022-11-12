<script lang="ts" setup>
import SearchBarVue from './SearchBar.vue';
</script>
<template>
    <div class="bg-white/10 backdrop-blur-sm flex flex-wrap items-center justify-center pt-5 ">
        <div class="h-full">
            <h1 class="text-5xl mb-5 ">Get Fresh Groceries</h1>
            <p class="mb-5 text-3xl">Enjoy a healthy life</p>
            <button class="border-40 bg-yellow-400 h-10 flex items-center gap-4 p-3 rounded-3xl text-black">
                browse categories
                <img src="../assets/icons/right-arrow.svg" alt="" class="h-full">
            </button>
        </div>
        <SearchBarVue />
        <img src="../assets/home-img.png" alt="" srcset="" >
    </div>
</template>
