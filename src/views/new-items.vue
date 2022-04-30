<template>
  <div class="wrapper">
    <h3 id="trendingAds">This Week</h3>
    <div class="trending new">
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
  data(){
    return{
      sellers: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/newItems')
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
   .wrapper > h3{
       position: relative;
       margin-top: 10px;
    }
    #trendingAds::after{
    content: "";
    width: 85px;
    height: 2px;
    background-color: black;
    position: absolute;
    left: 0;
    bottom: -5px;
 }
</style>