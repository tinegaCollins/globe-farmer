<template>
    <div class="wrapper">
        <appTopBar/>
        <h3>Saved Items</h3>
        <div class="saved">
            
        </div>
    </div>
</template>

<script>

import appTopBar from '../../components/appTopBar.vue'
import '../../assets/styles/global.css'


export default {
    components: {
        appTopBar
    }
}
</script>

<style scoped>
    *{
        font-family: var(--main-font);
    }
    .wrapper > h3{
        position: relative;
        margin: 20px 0 0 20px;
    }
    .wrapper > h3::after{
        content: "";
        width: 105px;
        height: 2px;
        background-color: black;
        position: absolute;
        left: 0;
        bottom: -5px
    }
</style>