<script setup   lang="ts">
import chatSide from '../../../components/chartSide.vue';
</script>



<template>
    <div class="messages">
        <chatSide />
        <RouterView></RouterView>
    </div>
</template>


<style scoped>
.messages {
    background: #fff;
    color: #333;
    padding: 20px;
}
@media screen and (max-width: 768px) {
    .messages {
        padding: 3px;
    }
}
    
</style>

