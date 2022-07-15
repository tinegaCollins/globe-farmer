<template>
    <nav>
        <svg width="32px" height="32px" fill="black" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"/></svg>
        <img src="~/assets/icons/2.png" alt="" srcset="">
        <h3>national farmer</h3>
        <svg class="acc" version="1.1" id="Capa_1"  x="0px" y="0px" @click="toggleAcount" width="24px" height="24px"
	            viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve">
                <g>
	            <g>
		    <path d="M417.4,71.6C371.2,25.4,309.8,0,244.5,0S117.8,25.4,71.6,71.6S0,179.2,0,244.5s25.4,126.7,71.6,172.9S179.2,489,244.5,489
			s126.7-25.4,172.9-71.6S489,309.8,489,244.5S463.6,117.8,417.4,71.6z M244.5,462C124.6,462,27,364.4,27,244.5S124.6,27,244.5,27
			S462,124.6,462,244.5S364.4,462,244.5,462z"/>
		    <path d="M244.5,203.2c35.1,0,63.6-28.6,63.6-63.6s-28.5-63.7-63.6-63.7s-63.6,28.6-63.6,63.6S209.4,203.2,244.5,203.2z
			 M244.5,102.9c20.2,0,36.6,16.4,36.6,36.6s-16.4,36.6-36.6,36.6s-36.6-16.4-36.6-36.6S224.3,102.9,244.5,102.9z"/>
		    <path d="M340.9,280.5c-22.3-32.8-54.7-49.5-96.4-49.5s-74.1,16.6-96.4,49.5c-16.6,24.4-27.2,57.7-31.4,98.7
			c-0.8,7.4,4.6,14.1,12,14.8c7.4,0.8,14.1-4.6,14.8-12c8.5-82.3,42.5-124,101-124s92.5,41.7,101,124c0.7,6.9,6.6,12.1,13.4,12.1
			c0.5,0,0.9,0,1.4-0.1c7.4-0.8,12.8-7.4,12-14.8C368.1,338.1,357.5,304.9,340.9,280.5z"/></g></g><g>
            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
        <div class="wrapper-in-nav" ref="wrapperInNav">
            <div class="if-logged-in" v-if="userID">
                <NuxtLink to="/">your account</NuxtLink>
            </div>
            <div class="if-not-logged" v-else>
                <NuxtLink to="/signup">Sign Up</NuxtLink>
                <NuxtLink to="/login">Log In</NuxtLink>
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
    font-family: var(--cambo);
    font-size: 1.5rem;
}
nav .acc {
    margin-left: auto;
    margin-right: 10px;
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