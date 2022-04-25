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
                <router-link :to="{ name: 'productDetails', params: { det: product.id }}"><button><span>Order Now</span></button></router-link>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sellers: [
        {
        id : 4,
        name : "kygo",
        location: "moyale",
        phone : +254791729544,
        products :
            {
                item : "peas",
                price: "200 per kg",
                image: './products/peas.jfif'
            },
            //places to add new items
    },
    {
        id : 5,
        name : "taylor swift",
        location: "kiambu",
        phone : +254791729544,
        products :
            {
                item : "spring onions",
                price: " 1000 per gunia",
                image: './products/spring.jfif'
            },
            //places to add new items
    },    {
        id :6,
        name : "emeli sande",
        location: "eldoret",
        phone : +254791729544,
        products :
            {
                item : "brocolli",
                price: "160 per kg",
                image: './products/brocolli.jfif'
            }
            //places to add new items
    },
      ]
    }
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