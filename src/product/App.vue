<template>
    <nav>
        <a href="/"><img src="../../2.png" alt="logo"></a>
        <a href="/account.html#/" class="account"> account <img src="../assets/images/arrow-down-svgrepo-com.svg" ></a>

        <h3>add to cart</h3>
    </nav>
    <main>
        <router-view></router-view>
    </main>
</template>


<script>

import '../assets/styles/main.css'

</script>


<style scoped>

nav {
    font-family: var(--text-font);
    height: 15vh;
    display: flex;
    padding: 0 20px;
    align-items: center;
}
nav img {
    height: 70px;
}
nav .account {
    margin-left: auto;
    background-color: var(--main-yellow);
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: 300;
    font-size: .9rem;
    display: flex;
    align-items: center;
    text-decoration: none;
}
nav a:visited {
    color: #333;
}
nav .account img {
    height: 20px;
}
nav h3 {
    margin: 0 15px;
    background-color: var(--main-yellow);
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: 300;
    font-size: .9rem;
}
nav h3:hover {
    background-color: var(--dark-yellow);
    cursor: pointer;
}
main {
    font-family: var(--text-font);
}
</style>