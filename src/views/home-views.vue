<template>
   <div class="wrapper">
      <h3 id="trendingAds">Trending ads</h3>
      <div class="trending">
             <div class="products" v-for="product in products" :key="product.id">
                <img :src="product.image" alt="product image">
                <p>Product :{{ product.item }} </p>
                <p>Price :{{ product.price}} </p>
                <p>Location : {{ product.location }}</p>
                <p>Farmer : {{ product.name }} </p>
                <a :href="[url] + product._id"><button>Order Now</button></a>
            </div>
      </div>
      <h3 id="around">Around you</h3>
      <div class="around">
         <div class="products" v-for="product in products" :key="product.id">
                <img :src="product.image" alt="product image">
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

import '../assets/styles/product.css'



export default {
   data(){
      return{
          products: [],
         //  userID: '',
         url: 'product.html#/'
      }
   },
   mounted(){
      // this.userID = this.$store.getters.getUserID
       fetch('http://localhost:3000/produces')
       .then(res => res.json())
       .then(data => {
           this.products = data
       })
       .catch(err => console.log(err))
   }
}
</script>

<style scoped>
   .wrapper{
      height: max-content;
      padding: 20px 10px 0 0px;
      font-family: var(--main-font);
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-x: hidden;
   }
    .wrapper > h3{
       position: relative;
    }
    #trendingAds::after{
    content: "";
    width: 115px;
    height: 2px;
    background-color: black;
    position: absolute;
    left: 0;
    bottom: -5px;
   }
   #around::after{
      content: "";
      width: 115px;
      height: 2px;
      background-color: black;
      position: absolute;
      left: 0;
      bottom: -5px;
   }
</style>