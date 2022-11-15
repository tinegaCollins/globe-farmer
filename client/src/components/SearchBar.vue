<script setup lang="ts">
import search from '../assets/icons/search.svg';

</script>

<template>
    <div class="search-box">
            <img :src="search" alt="" srcset="" />
            <input type="text" placeholder="Search products, farmers and categories"/>
            <button>Search</button>
        </div>
</template>

<style scoped>
.search-box{
    padding: 10px;
    display: flex;
    gap: 20px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font: var(--font-family);
}
.search-box input{
    min-width: 400px;
    height: 45px;
    border: none;
    border-radius: 5px;
    padding: 0 5px 0 50px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    border: 2px solid rgba(255, 255, 255,.3);
    outline: none;
}
.search-box button{
    background: var(--main-yellow);
    border: none;
    border-radius: 5px;
    padding:0px 20px;
    height: 45px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255,.3);
    display: grid;
    place-items: center;
}
.search-box img {
    height: 24px;
    position: relative;
    left: 55px;
}
@media screen and (max-width: 768px){
    .search-box {
        /* padding: 10px; */
        gap: 0px;
        position: relative;
        left: -3px;
        margin-top: 10px;
    }
    .search-box input {
        margin: 0;
        min-width: 90%;
        padding: 0 5px 0 35px;
        border-radius: 0;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
    .search-box button{
        border-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding:0px 15px;
    }
    .search-box img {
        left: 35px;
    }
}

</style>