<template>
   <div class="content">
      <img src="../assets/svglogos/logo.png" alt="company logo">
      <div class="details">
         <div class="user" @click="showUser">
            <img src="../assets//svglogos/user-solid.svg" alt="user">
            <span v-if="showUserData">{{user}}</span>
         </div> 
         <div class="cart" @click="showCart">
            <img src="../assets//svglogos/cart.svg" alt="cart">
            <span v-if="showCartData">{{cart}}</span>
         </div>
      </div>
   </div>
   <div class="after">
         <img src="../assets//svglogos/bars-solid.svg" alt="" srcset="" @click="sideBarMove">
         <input type="text" placeholder="search for items/farmer">
   </div>
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
      },
      sideBarMove() {
         //function to emit a event to parent component
         this.$emit('sideBarMove', this.classmove)
      }
   }

}
</script>

<style scoped>
    .content{
       height: 30%;
       display: flex;
       margin-top: 20px;
       align-items: center;
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
       width: 60%;
       height: 30px;
       border: none;
       outline: none;
       border-bottom: 1px solid green;
       padding: 0 10px;
       margin-left: 20%;
       color: green;
    }
    /* edit this when adding cart and user login information */
    .cart, .user{
       display: flex;
       flex-direction: column;
    }
    @media screen and (max-width: 480px){
       img{
          height: 20px;
       }
       .content > img {
          height: 50px;
          margin-left: 0px;
       }
    }
    .after{
       margin-top: 10px;
    }
    .after > img{
        margin-left: 10px;
    }
</style>