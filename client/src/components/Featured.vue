<script setup lang="ts">

</script>
<template>
    <div class="featured">
        <h1>Featured Products</h1>
            <div class="products">
                <div class="exotic">
                    <img src="../assets/temp/exotic.jpg" alt="" srcset="">
                </div>
                <div class="meats">
                    <img src="../assets/temp/meats.jpg" alt="" srcset="">
                </div>
                <div class="cheese">
                    <img src="../assets/temp/cheese.jpg" alt="" srcset="">
                </div>
                <div class="bake">
                    <img src="../assets/temp/bake.jpg" alt="" srcset="">
                </div>
            </div>
    </div>
</template>

<style scoped>
.featured {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 15px 0;
    width: 100%;
    font-family: var(--font-family);
}
@media screen and (min-width: 768px) {
    .featured {
        padding: 40px;
    }
}

h1 {
    font-family: var(--title-font);
}
.products {
    position: relative;
    padding: 30px 15px;
    display: grid;
    gap: 1rem;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.products img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>