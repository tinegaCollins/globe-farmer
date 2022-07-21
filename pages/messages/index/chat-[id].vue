<template>
    <h1>messages</h1>
    <p>{{param}}</p>
</template>

<script setup lang="ts">
const router = useRoute();
const param = ref(router.params.id);
</script>