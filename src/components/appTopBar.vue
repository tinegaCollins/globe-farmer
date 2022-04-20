<template>
   <div class="wrapper">
       <img src="../assets/logos/2.png" alt="logo" class="logo">
       <h3>Globe Farmer</h3>
       <div class="dataicons">
            <div class="notification">
                <img class= "icons" src="../assets/icons/bell-solid.svg" alt="" srcset="">
            </div>
            <div class="bookmark">
                <img class= "icons" src="../assets/icons/bookmark-solid.svg" alt="bookmark" srcset="">
            </div>
            <div class="messages">
                <img class= "icons" src="../assets/icons/message-solid.svg" alt="messages" srcset="">
            </div>
            <div class="acc">
           <!-- bind to account image -->
                <img class= "icons" src="../assets/icons/circle-user-solid.svg" :alt="account">
            </div>
            <div class="sell">
                <p>Sell</p>
            </div>
       </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            account: 'Account',
            Image: '../assets/icons/circle-user-solid.svg'
        }
    },
    methods: {
        logout() {
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
    .wrapper{
        font-family: var(--main-font);
        font-weight: 600;
        background: #13A76B;
        display: flex;
    }
    .wrapper h3{
        align-self: center;
        margin-right: auto;
    }
    .wrapper > img{
        padding: 5px;
        height: 100px;
        width: auto;
        margin-left: 30px;
    }
    .dataicons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 50px;
        width: 20%;
    }
    .icons{
        height: 25px;
        width: auto;
    }
    .sell{
        background: var(--btn-color);
        height: 20px;
        padding: 5px;
    }
    .sell > h4{
        inherits: none;
        height: 20px !important;
    }
</style>