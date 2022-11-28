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
    display: flex;
    overflow-y: hidden !important;
}
@media screen and (max-width: 768px) {
    .messages {
        padding: 3px;
        flex-direction: column;
    }
}
    
</style>

