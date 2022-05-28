<template>
    <nav>
        <a href="/"><img src="../../2.png" alt="logo"></a>
        <h3>add to cart</h3>
    </nav>

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
nav h3 {
    margin-left: auto;
    background-color: var(--main-yellow);
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: 300;
}
nav h3:hover {
    background-color: var(--dark-yellow);
    cursor: pointer;
}
</style>