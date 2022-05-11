<template>
   <div class="wrapper">
       <a href="/"><img src="../assets/logos/2.png" alt="logo" class="logo"></a>
       <h3>Globe Farmer</h3>
       <div class="searchBar" v-if="showSearchBar">
            <search-bar/>
       </div>
       <div class="dataicons" v-if="showIcons">
           <a href="/notes">
            <div class="notification">
                <img class= "icons" src="../assets/icons/bell-solid.svg" alt="" srcset="">
                <div class="notificationNumber">
                    <span> {{this.notes.length }}</span>
                </div>
            </div>
            </a>
            <a href="/bookmarks"><div class="bookmark">
                <img class= "icons" src="../assets/icons/bookmark-solid.svg" alt="bookmark" srcset="">
            </div> </a>
            <a href="/messages">
            <div class="messages"  @click="remove">
                 <img class= "icons" src="../assets/icons/message-solid.svg" alt="messages" srcset="">
                 <div class="notificationNumber">
                    <span>{{ this.messages.length }}</span>
                </div>
            </div>
            </a>
            <a href="#"  @click="acountData"><div class="acc" @click="acountData">
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
   <dialog class="modal" ref="modal">
       <img src="../assets/icons/xmark-solid.svg" @click="closeModal">
       <div class="mainContent">
           <div class="login">
               <img src="../assets/icons/undraw_access_account_re_8spm.svg" alt="">
               <p>have an account?</p>
               <a href="/logins"><button>login</button></a>
           </div>
           <div class="signup">
               <img src="../assets/icons/undraw_my_app_re_gxtj.svg" alt="">
                <p>create your account in just a few steps</p>
                <a href="/logins/signup"><button>signup</button></a>
           </div>
       </div>
   </dialog>
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
            showDropDown: false,
            showSearchBar: true,
            dropDownImg: '/icons/caret-down-solid.svg',
            notes: [],
            messages: [],
            accountDetails: null
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
        acountData(){
            if (this.accountDetails === null) { 
                this.$refs.modal.showModal()
            } else {
                //where account details are shown
                this.$router.push('/account')
            }
        },
        closeModal(){
            this.$refs.modal.close()
        },
    },
    beforeMount() {
        this.Image = '/icons/face-shot.png'
       // make a default image
        if(window.innerWidth < 768){
            this.showIcons = false
            this.showDropDown = true
            this.showSearchBar = false
        }
        fetch('http://localhost:3000/notifications')
        .then(res => res.json())
        .then(data => {
            this.notes = data
        })
        .catch(err => console.log(err))

       fetch('http://localhost:3000/messages')
       .then(res => res.json())
       .then(data => {
            this.messages = data
        })
        .catch(err => console.log(err))
    },
    // mounted(){
    //     if (this.accountDetails === null) {
    //         this.Image = './icons/circle-user-solid.svg'
    //     } else {
    //             this.Image = './icons/face-shot.png'
    //     }
    // }
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
    .wrapper a > img{
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
        @media screen and (max-width: 320px) {
        .wrapper h3{
            font-size: 1rem;
        }
        .notificationNumber{
            font-size: 1.1rem;
            
        }
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
        .wrapper a > img {
            height: 70px;
            margin-left: 0%;
        }
        .dataicons{
            flex-direction: column;
            position: fixed;
            top: 74px;
            /* right: -20px; */
            height: 40%;
            background: var(--main-color);
            justify-items: center;
            align-items: flex-end;
            width: 100vw;
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
        .notification, .messages{
            position: relative;
        }
        .icons{
            height: 20px;
        }
        .notificationNumber{
            position: absolute;
            top: 5px;
            right: -80vw;
            width: 15px;
            display: grid;
            place-items: center;
        }
        .notification, .bookmark, .acc{
            position: relative;
            left: 3px;
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
    .modal{
        padding: 1.3em;
        max-width:70ch;
        z-index: 100;
        /* position: fixed; */
        top: 25%;
        left: 30%;
        border: 1px solid black;
    }
    .modal::backdrop{
        backdrop-filter: blur(2px) saturate(100%);
        -webkit-backdrop-filter: blur(2px) saturate(100%);
        -moz-backdrop-filter:blur(2px) saturate(100%);
        background-color: rgba(17, 25, 40, 0.39);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);
    }   
    .modal > img{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
    .modal div > img{
        height: 150px;
        width: auto;
    }
    .mainContent{
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        text-align: center;
        margin-top: 20px;
        font-family: var(--main-font);
    }

    .mainContent p{
        margin-top: 10px;
    }
    .signup{
        margin: 10px 10px 0 0;
        border-left: 1px solid black;
    }
    @media screen and (max-width: 768px){
        .modal{
            top: 20vw;
            left: 0;
        }
    }
    @media screen and (max-width: 555px){
         .modal{
            top: 10vh; 
            width: 100vw;

         }
         .mainContent{
             display: flex;
             flex-direction: column;
         }
         .signup{
             border: none;
         }
    }
    .mainContent button{
        background-color: var(--btn-color);
        padding:7px 15px;
        border: 1px solid #333;
        border-radius:105px;
        transition: background-color 0.3s ease-in-out;
        transition: bottom 0.5s ease-in-out;
        position: relative;
        margin-top: 10px;
    }   
    .mainContent button:hover{
        background-color: var(--sub-color);
        bottom: 5px;
        cursor: pointer;
    }    
</style>