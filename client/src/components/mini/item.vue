<script setup lang="ts">
import Item from '../../types/types';
import heart from '../../assets/icons/heart.svg'
const props = defineProps<{
    item: Item
}>()
</script>
<template>
    <div class="item">
        <div class="saved">
            <img :src="heart" alt="" />
        </div>
        <div class="item-image">
            <img :src="item.img" alt="item" />
        </div>
        <div class="text-wrapper">
            <div class="upper-round-text">
                <h1>{{ item.name }}</h1>
                <p>{{ item.description }}</p>
            </div>
            <div class="lower-round-text">
                <h1>{{ item.price }}</h1>
                <p>{{ item.location }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 300px;
    height: 300px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid #333;
}
.item-image img {
    width: 100px;
    height: 100px;
    background-color: blue;
    object-fit: cover;
}
.saved {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.007);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
