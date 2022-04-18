<template>
   <div class="content">
      <img src="../assets/logo.png" alt="company logo">
      <div class="details">
         <div class="user" @click="showUser">
            <img src="../assets/user-solid.svg" alt="user">
            <span v-if="showUserData">{{user}}</span>
         </div> 
         <div class="cart" @click="showCart">
            <img src="../assets/cart.svg" alt="cart">
            <span v-if="showCartData">{{cart}}</span>
         </div>
      </div>
   </div>
   <input type="text" placeholder="search for items/farmer">
</template>

<script>
export default {
   data() {
      return {
         showUserData: false,
         showCartData: false,
         user: 'User',
         cart: 'Cart'
      }
   },
   methods: {
      showUser() {
         this.showUserData = !this.showUserData
      },
      showCart() {
         this.showCartData = !this.showCartData
      }
   }

}
</script>

<style scoped>
    .content{
       height: 30%;
       display: flex;
       margin-top: 20px;
    }
    img{
       height: 25px;
       width: auto;
    }
    .content > img {
      height: 70px;
      width: auto;
      margin: 0 auto 0 20px;

    }
    .details{
       display: flex;
       align-items: center;
       width: 100px;
       justify-content: space-around;
    }
    input{
       width: 300px;
       height: 30px;
       border-radius: 5px;
       border: 1px solid #ccc;
       padding: 0 10px;
       margin: 0 auto 0 auto;
    }
</style>