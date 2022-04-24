<template>
   <div class="wrapper">
      <div class="advertBar">
         <div class="text">
            <h2>looking to <strong>Buy</strong> or <strong>Sell</strong></h2>
            <h3>We got you !</h3>
            <h3>Your one stop groceries shoping site</h3>
            <p>Save on average of KSH140 off RRP</p>
         </div>
         <img src="../assets/ad.png" alt="ad pic" srcset="">
      </div>
      <h3>Trending ads</h3>
      <div class="trending">
             <div class="products" v-for="product in sellers" :key="product.id">
                <img :src="product.products.image" alt="" srcset="">
                <p>Product :{{ product.products.item }} </p>
                <p>Price :{{ product.products.price}} </p>
                <p>Location : {{ product.location }}</p>
                <p>Farmer : {{ product.name }} </p>
                <button class="button1"> <span>Order Now</span></button>
            </div>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return{
      sellers:[
    {
        id : 1,
        name : "lincoln kiptoo",
        location: "Egerton",
        phone : +254791729544,
        products :
            {
                item : "carrots",
                price: " 10000 per gunia",
                image: '../assets/products/carrots.jpg'
            },
            //places to add new items
    },
    {
        id : 2,
        name : "tuya mohan",
        location: "kisii",
        phone : +254791729544,
        products :
            {
                item : "green pepper",
                price: " 1000 per gunia",
                image: '../assets/products/green.jfif'
            },
            //places to add new items
    },
    {
        id : 3,
        name : "boogie hoodie",
        location: "nyeri",
        phone : +254791729544,
        products :
            {
                item : "string beans",
                price: "500 per crate",
            },
            //places to add new items
    },
    {
        id : 4,
        name : "kygo",
        location: "moyale",
        phone : +254791729544,
        products :
            {
                item : "peas",
                price: "200 per kg",
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
            }
            //places to add new items
    },
    {
        id : 7,
        name : "ed sheeran",
        location: "kisumu",
        phone : +254791729544,
        products :
            {
                item : "spinach",
                price: "500 per kg",
            },
            //places to add new items
    },
    {
        id :8,
        name : "pink",
        location: "nyamira",
        phone : +254791729544,
        products :
            {
                item : "sukuma wiki",
                price: " 2000 per gunia",
            },
            //places to add new items
    },
    {
        id : 9,
        name : "justin jeso",
        location: "kisii",
        phone : +254791729544,
        products :
            {
                item : "Indegenous vegetables",
                price: " 1000 per gunia",
            },
            //places to add new items
    },
    {
        id : 10,
        name : "Erick wainaina",
        location: "kiambu",
        phone : +254791729544,
        products :
            {
                item : "irish potatoes",
                price: " 1000 per gunia",
            },
            //places to add new items
    },
    {
        id : 11,
        name : "collins",
        location: "nairobi",
        phone : +254791729544,
        products :
            {
                item : "tomatoes",
                price: "500 per crate",
            },
            //places to add new items
    },
    {
        id : 12,
        name : "lil baby",
        location: "mombasa",
        phone : +254791729544,
        products : 
            {
                item : "onions",
                price: "200 per kg",
            },
            //places to add new items
    },
]
      }
   }

}
</script>

<style scoped>
   .wrapper{
      /* width: 100%; */
      height: max-content;
      padding: 20px 10px 0 0px;
      font-family: var(--main-font);
      display: flex;
      flex-direction: column;
      row-gap: 20px;
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
   .text p{
      margin-top: 5px;
   }
    .wrapper > h3{
       position: relative;
    }
    h3::after{
       content: "";
       width: 100px;
       height: 2px;
       background-color: black;
       position: absolute;
       left: 0;
       bottom: -5px;
    }
    .trending{
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        gap: 10px;
        justify-content: flex-start;
    }
    .products{
    width: 200px;
    font-weight: 500;
    border: 2px solid #3E8141;
    border-radius: 5px;
    padding: 15px;
    overflow: hidden;
    }
    .products:hover{
        cursor: pointer;
    }
    .products > *{
        margin-bottom: 5px;
    }
    .products img {
    width: 80%;
    height: 150px;
    width: auto;
    overflow: hidden;
    }
    .products > button{
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.4rem 1rem;
    margin: 10px 0px 0px 20px;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 17px;
    border-radius: 500px;
    overflow: hidden;
    background: black;
    color: black;
    }
    .products > button span{
        position: relative;
        z-index: 10;
        transition: color 0.4s;
    }
    .products > button:hover span{
        color:whitesmoke;
    }
    .products > button::before,
    .products > button::after{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .products > button::before{
        content: "";
        background: #3E8141;
        width: 120%;
        left: -10%;
        transform: skew(30deg);
        transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    }
    .products > button:hover::before{
        transform: translate3d(100%, 0, 0);
    }
</style>