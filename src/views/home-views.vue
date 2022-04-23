<template>
   <div class="wrapper">
      <div class="advertBar">
         <img src="../assets/ad.png" alt="ad pic" srcset="">
         <div class="text">
            <h2>looking to <strong>Buy</strong> or <strong>Sell</strong></h2>
            <p>We got you !</p>
         </div>
      </div>
      <div class="trending">
             <div class="products">
                    <img src="" alt="" srcset="">
                    <p class="produce">Product : <span>Carrots</span></p>
                    <p>Price :<span class="price">10000 per Gunia</span></p>
                    <p>Location : <span class="location"> Egerton</span></p>
                    <p>Farmer : Lincoln Kiptoo</p>
                    <button class="button1"> <span>Order Now</span>
                    </button>
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
        products : [
            {
                item : "carrots",
                price: " 10000 per gunia",
            },
            //places to add new items
        ]
    },
    {
        id : 2,
        name : "tuya mohan",
        location: "kisii",
        phone : +254791729544,
        products : [
            {
                item : "green pepper",
                price: " 1000 per gunia",
            },
            //places to add new items
        ]
    },
    {
        id : 3,
        name : "boogie hoodie",
        location: "nyeri",
        phone : +254791729544,
        products : [
            {
                item : "string beans",
                price: "500 per crate",
            },
            //places to add new items
        ]
    },
    {
        id : 4,
        name : "kygo",
        location: "moyale",
        phone : +254791729544,
        products : [
            {
                item : "peas",
                price: "200 per kg",
            },
            //places to add new items
        ]
    },
    {
        id : 5,
        name : "taylor swift",
        location: "kiambu",
        phone : +254791729544,
        products : [
            {
                item : "spring onions",
                price: " 1000 per gunia",
            },
            //places to add new items
        ]
    },    {
        id :6,
        name : "emeli sande",
        location: "eldoret",
        phone : +254791729544,
        products : [
            {
                item : "brocolli",
                price: "160 per kg",
            }
            //places to add new items
        ]
    },
    {
        id : 7,
        name : "ed sheeran",
        location: "kisumu",
        phone : +254791729544,
        products : [
            {
                item : "spinach",
                price: "500 per kg",
            },
            //places to add new items
        ]
    },
    {
        id :8,
        name : "pink",
        location: "nyamira",
        phone : +254791729544,
        products : [
            {
                item : "sukuma wiki",
                price: " 2000 per gunia",
            },
            //places to add new items
        ]
    },
    {
        id : 9,
        name : "justin jeso",
        location: "kisii",
        phone : +254791729544,
        products : [
            {
                item : "Indegenous vegetables",
                price: " 1000 per gunia",
            },
            //places to add new items
        ]
    },
    {
        id : 10,
        name : "Erick wainaina",
        location: "kiambu",
        phone : +254791729544,
        products : [
            {
                item : "irish potatoes",
                price: " 1000 per gunia",
            },
            //places to add new items
        ]
    },
    {
        id : 11,
        name : "collins",
        location: "nairobi",
        phone : +254791729544,
        products : [
            {
                item : "tomatoes",
                price: "500 per crate",
            },
            //places to add new items
        ]
    },
    {
        id : 12,
        name : "lil baby",
        location: "mombasa",
        phone : +254791729544,
        products : [
            {
                item : "onions",
                price: "200 per kg",
            },
            //places to add new items
        ]
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
   }
   .advertBar{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      font-family: var(--main-font);
      font-size: 1.1rem;
   }
   .advertBar > img{
      width: auto;
      height: 300px;
   }
   .text p{
      margin-top: 5px;
   }
</style>