<template>
    <nav>
        <svg width="32px" height="32px" fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"/></svg>
        <img src="~/assets/icons/2.png" alt="" srcset="">
        <h3>national farmer</h3>
        <svg @click="toggleAcount" width="24px" height="24px" viewBox="0 0 24 24" class="account" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"/></svg>
        <div class="wrapper-in-nav" ref="wrapperInNav">
            <div class="if-logged-in" v-if="userID">
                <NuxtLink to="/">your account</NuxtLink>
            </div>
            <div class="if-not-logged" v-else>
                <NuxtLink to="/">Sign Up</NuxtLink>
                <NuxtLink to="/">Log In</NuxtLink>
            </div>
        </div>
        <NuxtLink to="/" class="sell">
            <button>sell</button>
        </NuxtLink>
    </nav>
</template>

<script setup lang="ts">
const userID = ref<string>();
const wrapperInNav = ref();
function toggleAcount(){
    wrapperInNav.value.classList.toggle('show-flex')
}

</script>


<style>
nav{
    height: 16vh;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 50px;
    position: relative;
}
nav > img {
    height: 80%;
}
nav h3 {
    margin-right: auto;
}
nav a{
    color: #333;
    text-decoration: none;
}
nav a:visited{
    color: #333;
}
nav .sell{
    margin-right: 25px;
}
nav button{
    padding: .3em 1.7em;
    font-size: 1.2rem;
    border: none;
    background: var(--light-green);
    border-radius: 20px;
    transition: all 300ms ease-in-out;
}
nav button:hover{
    background: linear-gradient(90deg,var(--main-red), var(--main-yellow));
}
.if-not-logged > *{
    margin: 0 10px;
}
nav svg {
    display: none;
}
@media screen and (max-width: 768px) {
    nav {
        height: 10vh;
        padding: 10px;
        gap: 5px;
    }
    nav button{
        padding: .3em 1em;
    }
    nav h3{
        display: none;
    }
    nav .sell{
        margin-right: 10px;
    }
    nav svg{
        display: block;
        fill: black;
    }
    .account {
        margin: 0 5px 0 auto;
    }
    .wrapper-in-nav{
        display: none;
        position: absolute;
        background-color: red;
        right: 0;
        top: 10vh;
    }
    .show-flex{
        display: flex;
    }
}
</style>