<template>
   <div class="wrapper">
       <img src="../assets/logos/2.png" alt="logo" class="logo">
       <h3>Globe Farmer</h3>
       <div class="dataicons" v-if="showIcons">
            <div class="notification">
                <img class= "icons" src="../assets/icons/bell-solid.svg" alt="" srcset="">
                <div class="notificationNumber">
                    <span> {{ notifications }}</span>
                </div>
            </div>
            <div class="bookmark">
                <img class= "icons" src="../assets/icons/bookmark-solid.svg" alt="bookmark" srcset="">
            </div>
            <div class="messages">
                <img class= "icons" src="../assets/icons/message-solid.svg" alt="messages" srcset="">
                 <div class="notificationNumber">
                    <span>{{ messages }}</span>
                </div>
            </div>
            <div class="acc">
           <!-- bind to account image -->
                <img class= "icons" src="../assets/icons/circle-user-solid.svg" :alt="account">
            </div>
            <div class="sell">
                <h4>Sell</h4>
            </div>
       </div>
       <div class="dropdown" @click="show">
           <img src="../assets/icons/caret-down-solid.svg" alt="" srcset="">
       </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            account: 'Account',
            Image: '../assets/icons/circle-user-solid.svg',
            showIcons: true,
            notifications: 4,
            messages: 1
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
        background-color: var(--main-color);
        display: flex;
        width: calc(98vw + 9px);
        overflow-x: hidden;
        margin-top: 0px;
        /* box-shadow: 20px 10px 17px 10px #12121242; */
    }
    .wrapper h3{
        align-self: center;
        margin-right: auto;
        font-family: var(--title-font);
        font-weight: 300;
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
    .icons:hover{
        cursor: pointer;
    }
    .notification, .messages{
        position: relative;
    }
    .notificationNumber{
        position: absolute;
        top: 0;
        right: 0;
        background: var(--btn-color);
        padding: 0 3px 0 3px;
        font-size: .7rem;
        border-radius: 50%;
    }
    .sell > h4{
        background: var(--btn-color);
        height: 25px;
        width: min-content;
        padding: 4px 10px 0px 10px;
        border-radius: 5px;
    }
    .sell:hover,h4:hover{
        cursor: pointer;
    }
    .dropdown{
        align-self: center;
        height: 20px;
        width: 20px;
        margin-right: 20px;
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
            margin-top: 1px;
        }
        .wrapper > img {
            height: 70px;
            margin-left: 0%;
        }
        .dataicons{
            flex-direction: column;
            position: fixed;
            top: 74px;
            right: -20px;
            height: 30%;
            background: var(--main-color);
            justify-items: center;
            align-items: flex-end;
            width: 70vw;
            border-radius: 5px;
            z-index: 1;
        }
        .dataicons > div{
            border-bottom: 1px solid black;
            /* border-right: 1px solid black; */
            /* border-left: 1px solid black; */
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 10px;
        }
        .icons{
            height: 20px;
        }
        .notificationNumber{
            top: 10px;
            font-size: 1em;
            padding: 0 4px 0 4px;
            right: 5px;
        }
        .sell{
            border-bottom: none !important;
        }
    }
</style>