<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import SearchBar from '../components/SearchBar.vue';
import Filters from '../components/Filters.vue';
</script>

<template>
    <div class="home-page">
        <Navbar />
        <SearchBar />
        <div class="landing">
            <Filters />
        </div>
    </div>
</template>

<style scoped>
.landing {
    display: flex;
    gap: 20px;
    padding: 30px 4rem;
    margin-top: 20px;
}
</style>