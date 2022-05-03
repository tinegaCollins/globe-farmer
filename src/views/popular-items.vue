<template>
  <div class="wrapper">
    <h1>popular items</h1>
    <div class="popular">
             <div class="products" v-for="product in popularItems" :key="product.id">
                <img v-bind:src="product.products.image" alt="product image">
                <p>Product :{{ product.products.item }} </p>
                <p>Price :{{ product.products.price}} </p>
                <p>Location : {{ product.location }}</p>
                <p>Farmer : {{ product.name }} </p>
               <router-link :to = "{ name: 'produce',params: {id :product._id} }"> <button><span>Order Now</span></button></router-link>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularItems: []
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