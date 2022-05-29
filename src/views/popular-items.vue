<template>
  <div class="wrapper">
    <h1>popular items</h1>
    <div class="popular">
             <div class="products" v-for="product in popularItems" :key="product.id">
                <img v-bind:src="product.image" alt="product image">
                <p>Product :{{ product.item }} </p>
                <p>Price :{{ product.price}} </p>
                <p>Location : {{ product.location }}</p>
                <p>Farmer : {{ product.name }} </p>
                <a :href="[url] + product._id"><button>Order Now</button></a>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularItems: [],
      url: 'product.html#/'
    }
  },
  mounted() {
    fetch('  http://localhost:3000/popular')
      .then(res => res.json())
      .then(data => {
        this.popularItems = data
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