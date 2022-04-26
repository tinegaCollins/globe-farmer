<template>
   <div class="wrapper">
       <img src="../assets/logos/2.png" alt="logo" class="logo">
       <h3>Globe Farmer</h3>
       <div class="searchBar">
            <input type="text" name="text">
            <button><span>Search</span></button>
       </div>
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
                <img class= "icons" :src="Image" :alt="account">
            </div>
            <div class="sell">
                <h4>Sell</h4>
            </div>
       </div>
       <div class="dropdown" @click="show" v-if="showDropDown">
           <img :src="dropDownImg" alt="" srcset="" ref="rotate">
       </div>
       <div class="helpBar">
           
       </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            account: 'Account',
            Image: 'circle-user-solid.svg',
            showIcons: true,
            notifications: 4,
            messages: 3,
            showDropDown: false,
            dropDownImg: './icons/caret-down-solid.svg'
        }
    },
    methods: {
        logout() {
            this.$router.push('/login')
        },
        show(){
            this.showIcons = !this.showIcons
            this.$refs.rotate.classList.toggle('rotate')
            // this.dropDownImg = this.dropDownImg === './icons/caret-down-solid.svg' ? './icons/caret-up-solid.svg' : './icons/caret-down-solid.svg'
        }
    },
    beforeMount() {
        this.Image = './icons/face-shot.png'
        if(window.innerWidth < 768){
            this.showIcons = false
            this.showDropDown = true
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
    }
    .wrapper h3{
        align-self: center;
        margin-right: auto;
        font-family: var(--title-font);
        font-weight: 700;
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
        z-index: 2;
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
        font-size: .7rem;
        border-radius: 50%;
        width: 15px;
        display: grid;
        place-items: center;
    }
    .sell > h4{
        background: var(--btn-color);
        height: 25px;
        width: min-content;
        border-radius: 5px;
        padding: 2px 7px 0 7px;
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
    .acc > img{
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
            right: 5px;
            width: 15px;
        display: grid;
        place-items: center;
        }
        .sell{
            border-bottom: none !important;
            }
    }
    .dropdown > img{
        transition: transform .3s ease-in-out;
    }
    .rotate{
        transform: rotate(180deg);
    }
</style>