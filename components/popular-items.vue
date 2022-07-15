<template>
    <section class="popular-items">
        <h4>popular-items</h4>
        <div class="popular-content" v-if="data">
            <NuxtLink :to="item._id" class="single-item" v-for="item in data" :key="item._id">
                <img src="~/assets/temp/carrots.webp">
                <div class="details">
                    <h4>{{item.name}}</h4>
                    <p>KSH {{item.price}} per {{item.quantity}}</p>
                    <p>farmer: {{item.farmerName}}</p>
                    <p>{{item.location}}</p>
                </div>
                <img class="book-mark" src="~/assets/icons/bookmark-svgrepo-com.svg">
            </NuxtLink>
        </div>
        <div class="skeleton" v-else>
            <div class="single">
                <div class="mover"></div>
            </div>
            <div class="single">
                <div class="mover"></div>
            </div>
            <div class="single">
                <div class="mover"></div>
            </div>
            <div class="single">
                <div class="mover"></div>
            </div>
            <div class="single">
                <div class="mover"></div>
            </div>
            <div class="single">
                <div class="mover"></div>
            </div>
            <div class="single">
                <div class="mover"></div>
            </div>
            <div class="single">
                <div class="mover"></div>
            </div>
            <div class="single">
                <div class="mover"></div>
            </div>
            <div class="single">
                <div class="mover"></div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
const data = ref();
onMounted( async()=>{
    const response = await fetch('http://localhost:8080/get-popular');
    data.value = await response.json();

})
</script>
<style>
.popular-items{
    width: 100%;
}
.popular-content, .skeleton {
    padding: 10px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
    font-size: .8rem;
    padding-top: 30px;
}
@media screen and (max-width: 600px) {
    .popular-content, .skeleton {
        padding: 2px;
        padding-top: 10px;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
    }
}
.single-item{
    border: 1px solid black;
    padding: 10px 30px 10px 10px;
    border-radius: 7px;
    position: relative;
}
.single-item .book-mark{
    height: 20px;
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
}
.single-item img{
    height: 130px;
    width: 130px;
    object-fit: cover;
}
.skeleton .single{
    height: 150px;
    padding: 10px;
}
.skeleton .mover {
    height: 100%;
    width: 100%;
    animation: mover 2000ms infinite;
    animation-fill-mode: backwards;
    background-color: rgba(0, 0, 0,.1);
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
}
.single:nth-child(2) .mover{
    animation-delay: calc(4 * var(--staggered-delay));
}
.single:nth-child(3) .mover{
    animation-delay: calc(7 * var(--staggered-delay));
}
.single:nth-child(4) .mover{
    animation-delay: calc(2 * var(--staggered-delay));
}
.single:nth-child(5) .mover{
    animation-delay: calc(4 * var(--staggered-delay));
}
.single:nth-child(6) .mover{
    animation-delay: calc(8 * var(--staggered-delay));
}
.single:nth-child(7) .mover{
    animation-delay: calc(5 * var(--staggered-delay));
}
.single:nth-child(8) .mover{
    animation-delay: calc(3 * var(--staggered-delay));
}.single:nth-child(9) .mover{
    animation-delay: calc(4 * var(--staggered-delay));
}
.single:nth-child(10) .mover{
    animation-delay: calc(6 * var(--staggered-delay));
}

@keyframes mover {
    0%{
        width: 0%;
    }
    50%{
        width: 100%;
    }
    100%{
        width: 0%;
    }
}
</style>