<script setup lang="ts">
//get props from the parent component
import { defineProps } from 'vue';
import { Item } from '../../types/types';
import saved from './saved.vue'

const props = defineProps<{
    item: Item
}>()
</script>
<template>
    <a href="/item" class="rounded-lg bg-white/10 backdrop-blur-sm relative ">
            <img :src="item.img" class="w-full h-3/5 object-cover">
        <h1>{{item.name}}</h1>
        <p>{{item.price}}</p>
        <p>{{item.location}}</p>
        <saved :ifSaved= "item.saved" class="absolute top-2/3 right-0"/>
    </a>
</template>

<style scoped>

</style>