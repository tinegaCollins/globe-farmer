<template>
  <div class="wrapper">
    <h1 @click="hhh">popular items</h1>
    <div class="popular">
             <div class="products" v-for="product in sellers" :key="product.id">
                <img v-bind:src="product.products.image" alt="product image">
                <p>Product :{{ product.products.item }} </p>
                <p>Price :{{ product.products.price}} </p>
                <p>Location : {{ product.location }}</p>
                <p>Farmer : {{ product.name }} </p>
                <router-link :to="{ name: 'productDetails', params: { det: product.id }}"><button><span>Order Now</span></button></router-link>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularSellers: [],
      sellers: []
    }
  },
  beforeMount() {
    fetch('http://localhost:3000/sellers')
      .then(res => res.json())
      .then(data => {
        this.sellers = data
      })
      // .then(
      //   console.log(this.sellers),
      //   this.popularSellers = this.sellers.filter(
      //     (x) => x.popular === true
      //   )
      // )
      .catch(err => console.log(err))
  },
  mounted() {
    console.log(this.sellers)
    this.popularSellers = this.sellers.filter(
      (x) => x.popular === true
    )
  },
  methods: {
    hhh() {
      console.log(this.sellers)
      console.log(this.popularSellers)
    }
  }

}
</script>

<style scoped>
  .wrapper{
    font-family: var(--main-font);
  }
</style>