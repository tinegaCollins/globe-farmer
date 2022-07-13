<template>
    <div class="location-filter">
        <h3>filter by location</h3>
        <div class="location">
            <NuxtLink to="/">Eldoret</NuxtLink>
            <NuxtLink to="/">Kisii</NuxtLink>
            <NuxtLink to="/">Machakos</NuxtLink>
            <NuxtLink to="/">kitale</NuxtLink>
            <NuxtLink to="/">Meru</NuxtLink>
            <NuxtLink to="/">thika</NuxtLink>
            <NuxtLink to="/">busia</NuxtLink>
            <NuxtLink to="/">Nyahururu</NuxtLink>
            <NuxtLink to="/">Nanyuki</NuxtLink>
            <NuxtLink to="/">Molo</NuxtLink>
            <NuxtLink to="/">Nyeri</NuxtLink>
        </div>
    </div>
</template>

<style>
.location-filter {
    width: 220px;
}
.location{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
@media screen and (max-width: 768px) {
    .location-filter{
        position: absolute;
        background-color: var(--light-green);
        left: -100%;
    }
}
</style>