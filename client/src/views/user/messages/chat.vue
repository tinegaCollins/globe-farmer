<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import router from '../../../router';
//get  route params from vue router
const route = useRoute();
//get  router from vue router
let routeParams = ref(route.params.id);
//change route params when route changes
watch(route, (newRoute) => {
    routeParams.value = newRoute.params.id;
    console.log(routeParams.value);
    if( window.innerWidth < 768) {
    console.log('mobile');
    console.log(singleChat.value);
}
});
const singleChat = ref<HTMLInputElement | null>(null);
if( window.innerWidth < 768) {
    console.log('mobile');
    document.querySelector('.single-chat')?.classList.add('full-screen');
}

const back = ()=> {
    console.log('back');
    router.go(-1);
}
</script>
<template>
    <div ref="singleChat" class="single-chart full-screen">
        <button @click="back" class="back"><img src="../../../assets/icons/left-arrow-svgrepo-com.svg" alt="" srcset=""></button>
        <h1>single chart</h1>
        <p>{{routeParams}}</p>
    </div>
</template>

<style scoped>
.single-chart {
    background-color: red;
    width: 100%;
}
.back {
    display: none;
}
@media screen and (max-width: 768px) {
    .single-chart {
        padding: 3px;
        flex-direction: column;
    }
    .full-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background-color: #fff;
    }
    .back img {
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-right: 15px;
    }
}
    
</style>