<template>
   <div class="wrapper">
       <img src="../assets/logos/2.png" alt="logo" class="logo">
       <h3>Globe Farmer</h3>
       <div class="searchBar" v-if="showSearchBar">
            <search-bar/>
       </div>
       <div class="dataicons" v-if="showIcons">
            <div class="notification">
                <img class= "icons" src="../assets/icons/bell-solid.svg" alt="" srcset="">
                <div class="notificationNumber">
                    <span> {{ notifications }}</span>
                </div>
            </div>
            <a href="/bookmarks"><div class="bookmark">
                <img class= "icons" src="../assets/icons/bookmark-solid.svg" alt="bookmark" srcset="">
            </div> </a>
                 <div class="messages"  @click="remove">
                 <img class= "icons" src="../assets/icons/message-solid.svg" alt="messages" srcset="">
                 <div class="notificationNumber">
                    <span>{{ messages }}</span>
                </div>
            </div>
            <a href="/logins"><div class="acc">
           <!-- bind to account image -->
                <img class= "icons" :src="Image" :alt="account">
            </div> </a>
            <div class="sell">
                <h4>Sell</h4>
            </div>
            <div class="helpBar">
                <h4>help</h4>
            </div>
       </div>
       <div class="searchIcon" @click="showSearch">
           <img src="../assets/icons/magnifying-glass-solid.svg">
       </div>
       <div class="dropdown" @click="show" v-if="showDropDown">
           <img :src="dropDownImg" alt="" srcset="" ref="rotate">
       </div>
      
   </div>
</template>

<script>

import searchBar from './searchBar.vue'


export default {
    components: {
        searchBar
    },
    data() {
        return {
            account: 'Account',
            Image: 'circle-user-solid.svg',
            showIcons: true,
            notifications: 7,
            messages: 3,
            showDropDown: false,
            showSearchBar: true,
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
        },
        showSearch(){
            this.$emit('showSearch')
        },
    },
    beforeMount() {
        this.Image = './icons/face-shot.png'
       // make a default image
        if(window.innerWidth < 768){
            this.showIcons = false
            this.showDropDown = true
            this.showSearchBar = false
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
        overflow-x: hidden;
        margin-top: 0px;
    }
    .wrapper h3{
        align-self: center;
        margin-right: auto;
        font-family: var(--title-font);
        font-size: 1.3rem;
        font-weight: 500;
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
        column-gap: 30px;
    }
    .dataicons > div > *:hover{
        cursor: pointer;
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
    .bookmark > img{
        height: 20px;
    }
    .sell{
        position: relative;
        bottom: 3px;
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
    .messages img{
        height: 23px;
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
    .dropdown > img{
        transition: transform .3s ease-in-out;
    }
    .rotate{
        transform: rotate(180deg);
    }
    .searchBar{
        margin-right: 100px;
        align-self: center;
    }
    
    .searchIcon{
        display: none;
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
            height: 40%;
            background: var(--main-color);
            justify-items: center;
            align-items: flex-end;
            width: 50vw;
            border-radius: 5px;
            z-index: 1;
        }
        .dataicons > *{
            border-bottom: 1px solid black;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 10px;
            position: relative;
        }
        .icons{
            height: 20px;
        }
        .notificationNumber{
            position: absolute;
            top: 10px;
            right: 5px;
            width: 15px;
            display: grid;
            place-items: center;
        }
        .helpBar{
            border-bottom: none !important;
        }
        .searchIcon{
           display: block;
           align-self: center;
           align-self: center;
            height: 20px;
            width: 20px;
            margin: 15px 15px 0 0; 
        }
        .searchIcon img{
            height: 20px;
        }
    }

</style>