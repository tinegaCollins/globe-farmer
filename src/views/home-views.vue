<template>
   <div class="wrapper">
      <div class="advertBar">
         <div class="text">
            <h2>looking to <strong id="text1">Buy 🤷‍♀️</strong> or <strong id="text2">Sell 🤑</strong></h2>
            <h3>We got you! 🤝</h3>
            <h3>Your one stop shoping site for farm produces</h3>
            <p>Save on average of KSH140 off RRP</p>
         </div>
         <img src="../assets/ad.png" alt="ad pic" srcset="">
      </div>
      <h3 id="trendingAds">Trending ads</h3>
      <div class="trending">
             <div class="products" v-for="product in sellers" :key="product.id">
                <img :src="product.products.image" alt="product image">
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
   .wrapper{
      height: max-content;
      padding: 20px 10px 0 0px;
      font-family: var(--main-font);
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-x: hidden;
   }
   .advertBar{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      font-family: var(--main-font);
      font-size: 1.1rem;
      border-bottom: 1px solid black;
      border-top: 1px solid black;
   }
   .advertBar > img{
      width: auto;
      height: 300px;
   }
   .text > *{
      margin-top: 3px;
   }
   .text > p{
       font-size: .8rem;
   }
   #text1{
       color: rgb(0, 140, 255);
   }
   #text2{
       color: green;
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
   
</style>