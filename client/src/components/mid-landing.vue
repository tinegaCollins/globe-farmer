<script lang="ts" setup>
import SearchBarVue from './SearchBar.vue';
</script>
<template>
    <div class="bg-white/10 backdrop-blur-lg flex flex-wrap items-center justify-center pt-5 z-1">
        <div class="h-full">
            <h1 class="text-5xl mb-5 mt-5 md:mt-0">Get Fresh Groceries</h1>
            <p class="mb-5 text-3xl">Enjoy a healthy life</p>
            <button class="border-40 bg-yellow-400 h-10 flex items-center gap-4 p-3 rounded-3xl text-black mb-5">
                browse categories
                <img src="../assets/icons/right-arrow.svg" alt="" class="h-full">
            </button>
        </div>
        <SearchBarVue class="mb-10"/>
        <img src="../assets/home-img.png" class=" h-60" >
    </div>
</template>
