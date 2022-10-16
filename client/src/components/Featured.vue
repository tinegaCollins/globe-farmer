<script setup lang="ts">

</script>
<template>
    <div class="featured">
        <h1>Featured Products</h1>
            <div class="products">
                <div class="exotic">
                    <h2>get the best exotic fruit supply money can buy you</h2>
                    <button>Explore More</button>
                    <img src="../assets/temp/exotic.jpg" alt="" srcset="">
                </div>
                <div class="meats">
                    <h2>Fresh Meat supply from a variety of stock</h2>
                    <button>Explore More</button>
                    <img src="../assets/temp/meats.jpg" alt="" srcset="">
                </div>
                <div class="cheese">
                    <h2>Hundreds of cheese makers under one roof</h2>
                    <button>Explore More</button>
                    <img src="../assets/temp/cheese.jpg" alt="" srcset="">
                </div>
                <div class="bake">
                    <h2>Get the best baked goods from the best bakers</h2>
                    <button>Explore More</button>
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
        padding: 20px 40px;
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
.products > div {
    position: relative !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #333;
    border-radius: 4px;
    overflow: hidden;
}
.products div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.products div h2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    padding: 0 20px;
    z-index: 1;
}
.products div button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    z-index: 1;
    transition: .5s all ease;
}
.products div button:hover {
    background-color: #000;
}
</style>