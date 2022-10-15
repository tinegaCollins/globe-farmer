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
        <div class="bottom">
            <router-view></router-view>
        </div>
        <div class="side-images">
            <img src="../../assets/images/farmer.jpg" alt="" srcset="">
            <p>An Online market Place you can trust</p>
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
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #E2E4E9;
    color: #333;
    border-radius: 15px;
    ;
    border-radius: 16px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(209, 204, 25, 0.3);
}

.top img {
    width: auto;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.top h3 {
    font-size: 3rem;
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
    color: #333;
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

    .top {
        grid-column: span 2;
    }

    .content {
        width: 50%;
    }

    .side-images {
        display: block;
        width: 100%;
        grid-column: span 1;
        margin-top: 5px;
        position: relative;

    }

    .side-images img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        object-fit: cover;
    }
    .side-images p {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 2rem;
        font-weight: 600;
        border-radius: 0 0 15px 15px;
    }
}
</style>