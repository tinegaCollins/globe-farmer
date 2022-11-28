<template>
    <div class="chat-home h-[calc(100vh-50px)] w-full grid place-items-center">
        <h1 class="text-3xl">click a chat to view</h1>
        <img src="../../../assets/undraw_inbox_oppv.svg" alt="" class="h-96 w-auto">
    </div>
</template>

<style>
@media screen and (max-width: 768px) {
    .chat-home {
        display: none;
    }
}
</style>