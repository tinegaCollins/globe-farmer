<template>
   <div class="wrapper">
       <img src="../assets/logos/2.png" alt="logo" class="logo">
       <h3>Globe Farmer</h3>
       <div class="dataicons" v-if="showIcons">
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
                <h4>Sell</h4>
            </div>
       </div>
       <div class="dropdown" @click="show"></div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            account: 'Account',
            Image: '../assets/icons/circle-user-solid.svg',
            showIcons: false
        }
    },
    methods: {
        logout() {
            this.$router.push('/login')
        },
        show(){
            this.showIcons = !this.showIcons
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
        width: 100vw;
        overflow-x: hidden;
        margin-top: 0px;
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
    .sell > h4{
        background: var(--btn-color);
        height: 25px;
        width: min-content !important;
        padding: 4px 10px 0px 10px;
        border-radius: 5px;
    }
    .dropdown{
        height: 20px;
        width: 20px;
        background: white;
        align-self: center;
        margin-right: 10px;
        border-radius: 50%;
    }
    @media screen and (max-width: 1200px){
         .dataicons{
            width: 40%;
        }
    }
    @media screen and (max-width: 768px) {
        .wrapper{
            height: 70px;
            margin-top: 5px;
        }
        .wrapper > img {
            height: 70px;
            margin-left: 0%;
        }
        .dataicons{
            flex-direction: column;
            position: fixed;
            top: 75px;
            right: -20px;
            height: 50%;
            background: #FF652F;
            justify-items: center;
            align-items: flex-end;
            /* padding: 5px 10px 10px 0; */
            width: 50%
        }
        .dataicons > div{
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            border-left: 1px solid black;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 10px;
        }
        .icons{
            height: 20px;
        }
    }
</style>