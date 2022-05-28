<template>
<div class="all">
    <a href="/"><img class="logo" src="../../../2.png" alt=""></a>
    <router-view></router-view>
</div>
</template>


<script>

import '../../assets/styles/main.css'

</script>
<style scoped>

.logo {
    height: 100px;
    width: 110px;
}
.all{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
}
</style>