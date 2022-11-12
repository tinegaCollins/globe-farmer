<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Filters from '../components/Filters.vue';
import MidLanding from '../components/mid-landing.vue';
import Featured from '../components/Featured.vue';
import Recent from '../components/recent.vue';
</script>

<template>
    <div class="home-page">
        <Navbar />
        <div class="mid-content">
            <MidLanding />
        </div>
        <div class="landing">
            <Recent />
            <Filters />
        </div>
        <Featured />
    </div>
</template>

<style scoped>
.landing {
    display: flex;
    /* flex-direction: row-reverse; */
    justify-content: space-around;
    gap: 20px;
    padding: 30px 4rem;
    margin-top: 20px;
}
@media screen and (max-width: 1024px) {
    .landing {
        padding: 15px 40px;
        flex-direction: column;
    }
    .mid-landing {
        margin: 40px 0;
    }
}
@media  screen and (max-width: 768px) {
    .landing {
        padding: 15px;
    }
}


</style>