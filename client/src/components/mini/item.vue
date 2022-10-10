<script setup lang="ts">
import { ref } from 'vue'
import Item from '../../types/types';
import saved from './saved.vue'
import heart from '../../assets/icons/heart.svg'
const props = defineProps<{
    item: Item
}>()
const ifSaved = ref<Boolean>(props.item.saved)
</script>
<template>
    <div class="item">
        <saved :ifSaved="ifSaved"/>
        <div class="item-image">
            <img :src="item.img" alt="item" />
            <div class="item-price">
                KSH {{item.price}}
            </div>
        </div>
        <div class="item-details">
            <div class="item-name">
                {{item.name}}
            </div>
            
            <div class="item-location">
                {{item.location}}
            </div>
        </div>
        <button>Add To Cart</button>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid #333;
}
.item-image img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
}
button {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 0 0 10px 10px;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
}
.item-image {
    width: 100%;
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
}
</style>
