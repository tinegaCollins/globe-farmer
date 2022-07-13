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
    title: "national farmer",
    link:[
        { rel: 'icon', href: '../../assets/icons/2.png'}
    ]
})
</script>

<style>
.dynamic-data{
    margin-top: 30px;
    padding: 20px;
    animation: opac 3000ms 1;
    display: flex;
    gap: 20px;
}
@keyframes opac {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    70%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>