<template>
  <div class="wrapper">
    <h1>popular items</h1>
    <div class="popular">
             <div class="products" v-for="product in sellers" :key="product.id">
                <img v-bind:src="product.products.image" alt="product image">
                <p>Product :{{ product.products.item }} </p>
                <p>Price :{{ product.products.price}} </p>
                <p>Location : {{ product.location }}</p>
                <p>Farmer : {{ product.name }} </p>
                <button><span>Order Now</span></button>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // popularSellers: [],
      sellers: []
    }
  },
  mounted() {
    fetch('  http://localhost:3000/popularItems')
      .then(res => res.json())
      .then(data => {
        this.sellers = data
      })
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
  .wrapper{
    font-family: var(--main-font);
  }
</style>