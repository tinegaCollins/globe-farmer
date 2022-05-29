<template>
  <div class="trending">
             <div class="products" v-for="product in produce" :key="product.id">
                <img :src="product.image" alt="product image">
                <p>Product :{{ product.item }} </p>
                <p>Price :{{ product.price}} </p>
                <p>Location : {{ product.location }}</p>
                <p>Farmer : {{ product.name }} </p>
                <a :href="[url] + product._id"><button>Order Now</button></a>
            </div>
      </div>
</template>

<script>
export default {
    data(){
        return{
            produce: null,
            type: this.$route.params.type,
            url: 'product.html#/'
        }
    },
    methods: {
    },
    mounted(){
        fetch('http://localhost:3000/produces/filter/'+ this.type)
        .then(res => res.json())
        .then(data => {
           this.produce = data
        })
        .catch(err => console.log(err))
    }
}
</script>

<style>
.trending{
    font-family: var(--main-font);
}
</style>