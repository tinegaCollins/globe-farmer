<script setup lang="ts">
import { onMounted, ref } from 'vue';


</script>

<template>
    <div class="auth">
        <div class="top">
            <a href="/">
                <img src="../../../icon.png" alt="" srcset="">
            </a>
            <h3>Globe Farmer</h3>
            <p>Globally market for all your fresh produce needs</p>
            <div class="links">
                <RouterLink to="/auth/register">Sign Up</RouterLink>
                <RouterLink to="/auth/login">Log In</RouterLink>
            </div>
        </div>
        <div class="bottom bg-white/10 backdrop-blur-lg min-h-screen mt-10 lg:mt-0">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.auth {
    padding: 10px;
}

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-top: 50px;
}

.top img {
    width: auto;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.top h3 {
    font-weight: 600;
    background-image: linear-gradient(90deg, var(--main-red), var(--main-yellow));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 0.2rem;
    transition: all 0.2s;
}

.top .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 100%;
    gap: 20px;
}

.top .links a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    position: relative;
}

.top .links a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--main-red);
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s;
}

.top .links a:hover::after {
    transform: scaleX(1);
}

.side-images {
    display: none;
}

@media screen and (min-width: 1024px) {
    .bottom {
        height: 100%;
    }

    .auth {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 40px;
        column-gap: 1rem;
    }

}
</style>