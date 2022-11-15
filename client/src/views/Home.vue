<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Filters from '../components/Filters.vue';
import MidLanding from '../components/mid-landing.vue';
import Featured from '../components/Featured.vue';
import trendingAdsVue from '../components/trendingAds.vue';
import Recent from '../components/recent.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="home-page">
        <Navbar />
        <MidLanding />
        <div class="landing">
            <Filters />
            <trendingAdsVue />
        </div>
        <Featured />
        <Footer />
    </div>
</template>

<style scoped>
.landing {
    display: flex;
    gap: 20px;
    padding: 30px 9rem;
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