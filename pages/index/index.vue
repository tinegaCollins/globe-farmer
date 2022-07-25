<template>
    <main class="all-content">
        <nav-bar/>
        <landing-page/>
        <div class="dynamic-data">
            <location-filter/>
            <popular-items/>
        </div>
    </main>
</template>

<script setup lang="ts">
import '../../assets/styles/variables.css'
import '../../assets/styles/main.css'
useHead({
    title: "fresh pickens",
    link:[
        { rel: 'icon', href: '../../assets/icons/2.png'}
    ]
})
</script>

<style>
.dynamic-data{
    margin-top: 30px;
    padding: 20px;
    display: flex;
    gap: 20px;
}
</style>