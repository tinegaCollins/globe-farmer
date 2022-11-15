<script lang="ts" setup>
import { ref } from 'vue';
import trendingVue from './mini/trending.vue';

const tempList = ref([
    {
        name: "Avocadoes",
        price: 100,
        description: "This is a description",
        location: "Nairobi",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRYSLqTkYBAVZsCynOLCRUOf_Tioc7AMwW1kKj-pSwg&s',
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
        saved: true,
    },
    {
        name: "Bananas",
        price: 100,
        description: "This is a description",
        img: 'https://smartfarmerkenya.com/wp-content/uploads/2020/05/banana.jpg',
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
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg',
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
    },
    {
        name: "Avocadoes",
        price: 100,
        description: "This is a description",
        location: "Nairobi",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRYSLqTkYBAVZsCynOLCRUOf_Tioc7AMwW1kKj-pSwg&s',
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
        img: 'https://smartfarmerkenya.com/wp-content/uploads/2020/05/banana.jpg',
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
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg',
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
        saved: true,
    },
    {
        name: "Avocadoes",
        price: 100,
        description: "This is a description",
        location: "Nairobi",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRYSLqTkYBAVZsCynOLCRUOf_Tioc7AMwW1kKj-pSwg&s',
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
        saved: true,
    },
    {
        name: "Bananas",
        price: 100,
        description: "This is a description",
        img: 'https://smartfarmerkenya.com/wp-content/uploads/2020/05/banana.jpg',
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

])
</script>
<template>
        <div class="w-full">
            <h2>Trending Ads</h2>
            <div class="grid gap-4 mt-5 custom-grid  w-full">
                <trendingVue v-for="item in tempList" :key="'a' + item.id" :item="item" />
            </div>
        </div>
</template>

<style>
.custom-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>