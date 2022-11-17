<script setup lang="ts">
import Navbar from '../../../components/Navbar.vue';
import { Icon } from '@iconify/vue';
</script>
<template>
    <div>
        <Navbar />
        <main class="flex">
            <section class="flex flex-col  h-[calc(100vh-70px)] text-lg gap-5 p-4 shadow-2xl w-60">
                <RouterLink to="/user/posts/create" class="flex">
                    <Icon icon="material-symbols:add-circle-outline" class="text-3xl" />
                    Create Post
                </RouterLink>
                <RouterLink to="/user/posts/manage" class="flex">
                    <Icon icon="carbon:airline-manage-gates" class="text-3xl" />
                    Manage Posts
                </RouterLink>
                <RouterLink to="/user/messages" class="flex">
                    <Icon icon="tabler:messages" class="text-3xl" />
                    Messages
                </RouterLink>
            </section>
            <RouterView class="w-full p-5"></RouterView>
        </main>
    </div>
</template>