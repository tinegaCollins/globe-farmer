<template>
    <div class="wrapper">
        <appTopBar/>
        <h3>Saved Items</h3>
        <div class="saved">
            <div class="products" v-for="product in sellers" :key="product.id">
                <img :src="product.products.image" alt="product image">
                <p>{{ product.products.item }} </p>
                <!-- <p>Price :{{ product.products.price}} </p> -->
                <p>From : {{ product.name }} </p>
                <router-link :to="{ name: 'productDetails', params: { det: product.id }}"><button><span>go</span></button></router-link>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>

import appTopBar from '../../components/appTopBar.vue'
import '../../assets/styles/global.css'


export default {
    components: {
        appTopBar
    },
    data(){
        return{
            sellers: []
        }
    },
    mounted(){
        fetch(' http://localhost:3000/sellers')
       .then(res => res.json())
       .then(data => {
           this.sellers = data
       })
       .catch(err => console.log(err))
    }
}
</script>

<style scoped>
    *{
        font-family: var(--main-font);
    }
    .wrapper > h3{
        position: relative;
        margin: 20px 0 0 20px;
    }
    .wrapper > h3::after{
        content: "";
        width: 105px;
        height: 2px;
        background-color: black;
        position: absolute;
        left: 0;
        bottom: -5px
    }
    .saved{
        margin: 20px;
        padding: 30px;
    }
    .products{
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>