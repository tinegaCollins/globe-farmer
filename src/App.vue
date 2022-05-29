<template>
<nav>
  <img src="../2.png" alt="company logo">
  <h3>National Farmer</h3>
  <a href="/account.html#/login" v-if="account" class="login">login</a>
  <a href="/account.html#/signup/query" v-if="account">sign up</a>
  <div class="account" v-if="accountOnLogin">
    <div class="accountIcon">
      <h3  @click="accountDetailsToggle">account </h3>        
      <img src="./assets/images/arrow-down-svgrepo-com.svg"  @click="accountDetailsToggle">
    </div>
    <div class="accountDetails" v-if="accountDetails">
        <div class="cart">
          <p>cart</p>
          <img src="./assets/images/cart-svgrepo-com.svg">
        </div>
        <a href="/messages.html"><div class="messages">
          <p>messages</p>
          <img src="./assets/images/messages-svgrepo-com.svg">
        </div></a>
        <div class="accountInfo">
          <!-- name binding -->
          <p>Account name</p>
        </div>
        <button @click="logOut">log out</button>
      </div>
  </div>
  <a href="#" class="sell">sell</a>
  <i class="fa-solid fa-magnifying-glass" @click="toggleSearch"></i>
  <a href="login.html"><i class="fa-solid fa-circle-user"></i></a>
  <i class="fa-solid fa-bars" @click="toggleSideBar"></i>
</nav>
<main>
  <img src="./assets/images/ad2.png" alt="ad picture">
  <div class="mid">
        <div class="search" v-if="searchBar">
          <input type="text">
          <button>search</button>
        </div>
    <div class="text">
      <h2>looking to <strong id="text1">Buy 🤷‍♀️</strong> or <strong id="text2">Sell 🤑</strong></h2>
      <h3>We got you! 🤝</h3>
      <h3>Your one stop shoping site for farm produces</h3>
    </div>
  </div>
  <img src="./assets/images/ad1.png" alt="ad picture" id="ad2">
</main>
<section>
  <aside>
    <h4>location</h4>
    <div class="location">
        <p>Nakuru</p>
        <p>Eldoret</p>
        <p>Kisii</p>
        <p>Machakos</p>
        <p>kitale</p>
        <p>Meru</p>
        <p>thika</p>
        <p>busia</p>
        <p>Nyahururu</p>
        <p>Nanyuki</p>
        <p>Molo</p>
        <p>Nyahururu</p>
    </div>
  </aside>
  <article>
    <div class="bar">
        <router-link to = "/" class="barItem">home</router-link>
        <router-link to = "/new-items" class="barItem">new items </router-link>
        <router-link to = "/popular-items" class="barItem">popular items</router-link>
        <router-link to = "/tomatoes" class="barItem">Tomatoes</router-link>
        <router-link to = "/irish potatoes" class="barItem">Irish Potatoes</router-link>
        <router-link to = "/onions" class="barItem">Onions</router-link>
        <router-link to = "/carrots" class="barItem">Carrots</router-link>
        <!-- refresh the filters -->
        <router-link to = "/green pepper" class="barItem">Green pepper</router-link>
        <router-link to = "/string beans" class="barItem">String Beans</router-link>
        <router-link to = "/peas" class="barItem">Peas</router-link>
        <router-link to = "/spring onions" class="barItem">Spring Onions</router-link>
        <router-link to = "/brocolli" class="barItem">Brocolli</router-link>
        <router-link to = "/spinach" class="barItem">Spinach</router-link>
        <router-link to = "/sukuma wiki" class="barItem">Sukuma Wiki</router-link>
        <router-link to = "/indegenous vegetables" class="barItem">Indegenous Vegetables</router-link>
    </div>
    <div class="items">
      <router-view></router-view>
    </div>
  </article>

  </section>
</template>


<script>

import './assets/styles/main.css'
export default{
  name : 'App',
  data(){
    return{
      searchBar: true,
      userID: null,
      account: true,
      accountOnLogin: false,
      accountDetails: false
    }
  },
  methods: {
    toggleSearch(){
      this.searchBar = !this.searchBar
    },
    toggleSideBar(){
      let aside = document.querySelector("aside")
      aside.classList.toggle("normal")
    },
    logOut(){
      let nullID = '';
      this.$store.commit('updateUserID', nullID)
      window.location.reload();
    },
    accountDetailsToggle(){
      this.accountDetails = !this.accountDetails
    }
  },
  mounted(){
    this.userID = this.$store.getters.getUserID
    console.log(this.userID)
    if(window.innerWidth < 525){
      this.searchBar = false
    }
    if(this.userID === ''){
      this.account = true
      this.accountOnLogin = false
    }
    else{
      this.account = false
      this.accountOnLogin = true
    }
  }
}
</script>

<style scoped>
nav{
  height: 15vh;
  display: flex;
  align-items: center;
  position: relative;
}
nav img{
  height: 60%;
  margin-left: 30px;
}
nav h3{
  font-family: var(--title-font);
  margin-right: auto;
}
nav .login{
  margin-left: auto;
}
nav .account {
  margin-left: auto;
  position: absolute;
  top: 35px;
  right: 130px;
}
nav .account:hover {
  cursor: pointer;
}
nav .account .accountIcon {
  display: flex;
  align-items: center;
}
nav .account .accountIcon img {
  position: relative;
  right: 20px;
}
nav .account .accountDetails {
  font-family: var(--text-font);
  display: flex;
  flex-direction: column;
  height: 140px;
  position: relative;
  justify-content: space-between;
  background-color: #fff;
  z-index: 1;
  padding: 3px 6px;
}
nav .account .accountDetails > * {
  padding: 5px 0;
  transition: all 200ms ease-in-out;
}
.cart, .messages {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
nav .account .accountDetails img {
  height: 20px;
  width: auto;
}
nav .account .accountDetails > *:hover{
  background-color: var(--main-green);
}
nav .account .accountDetails button {
  width: 50px;
  border: none;
  border: 1px sold black;
  appearance: none;
  outline: none;
  border-radius: 5px;
  justify-self: center;
}
nav .account .accountDetails button:hover {
  background-color: var(--main-red);
}

nav .account .accountDetails p {
  font-size: .8rem;
}
nav .sell{
  margin-right: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--main-yellow);
  transition: background-color 0.3s ease-in-out;
}
nav .sell:hover{
  background-color: var(--dark-yellow);
}
nav .fa-bars, nav .fa-magnifying-glass{
  display: none;
}
nav a{
  margin: 0 20px;
  color: #333;
  text-decoration: none;
  font-family: var(--text-font);
  font-size: 1.2rem;
}
nav a:visited{
  color: #333;
}
nav .fa-bars{
  display: none;
}
@media screen and (max-width: 768px){
  nav .fa-bars{
    display: block;
    position: relative;
    right: 10px;
    font-size: 20px;
  }
}
@media screen and (max-width: 525px){
  nav h3{
    font-size: .8rem;
  }
  nav img{
    margin-left: 10px;
  }
  nav a:nth-child(5),nav a:nth-child(4),nav a:nth-child(3){
    display: none;
  }
  nav .fa-magnifying-glass{
    display: block;
    margin-left: auto;
    font-size: 20px;
  }
  nav a:nth-child(7){
    display: block;
    margin: 0 20px;
    font-size: 20px;
  }
}
/* nav bar ends here */
main{
  display: flex;
  justify-content: space-around;
  padding: 30px;
  position: relative;
}
main img{
  height: 320px;
}
main .mid{
  font-family: var(--text-font);
  font-weight: 200;
  align-self: center;
}
main .mid .search{
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid var(--main-yellow);
  border-radius: 5px;
}
main .mid .search input{
  width: 100%;
  padding: 10px;
  border: none;
  font-family: var(--text-font);
  font-weight: 200;
}
main .mid .search button{
  width: 100px;
  padding: 10px;
  background-color: var(--main-yellow);
  color: #333;
  font-family: var(--text-font);
  font-weight: 200;
  transition: background-color 0.3s ease-in-out;
  border: none;
}
main .mid .search button:hover{
  background-color: var(--dark-yellow);
  cursor: pointer;
}
.text > *{
  margin: 10px 30px;
}
.text h2{
  margin-top: 40px;
}
@media screen and (max-width: 768px){
  #ad2{
    display: none;
  }
}
@media screen and (max-width: 525px){
  main .mid{
    position: absolute;
    background: transparent;
  }
}
/* end of main */
section{
  font-family: var(--text-font);
  padding: 30px;
  display: flex;
  justify-content: space-between;
}
section aside{
  border: 1px solid var(--main-green);
  width: 200px;
  padding: 5px;
  border-radius: 5px;
  height: max-content;
  position: sticky;
  top: 40px
}
section aside .location > *{
  margin: 5px;
  padding: 5px;
  transition: background-color 150ms ease-in-out;
}
section aside .location > *:hover{
  background-color: var(--main-green);
  cursor: pointer;
}
/* end of aside bar */
article{
  width: calc(100% - 230px);
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 768px){
  section aside{
    position: absolute;
    top: 10px;
    left: -100%;
  }
  article{
    width: 100%
  }
}
.normal{
  left: 0;
}
article .bar{
    height: 40px;
    max-width: 100%;
    margin-top: 15px;
    background-color:#e2cfcf;
    display: flex;
    column-gap: 10px;
    align-items: center;
    overflow-x: scroll;
    padding: 0 5px 0 10px;
    border-top-left-radius: 25px;
    position: relative;
}
::-webkit-scrollbar{
    height: 8px;
    width: 0px;
}
::-webkit-scrollbar-track{
    background: var(--main-color);
}
::-webkit-scrollbar-thumb{
    width: 10px;
    height: 10px;
    background: black;
}
@supports (scrollbar-color: red blue){
    *{
        scrollbar-color: black var(--main-green);
        scrollbar-width: thin;
    }
}
.barItem{
    background: var(--main-color);
    padding: 3px 7px 0px 7px;
    height: 25px;
    border-radius: 15px ;
    min-width: max-content;
    font-family: var(--second-font);
    font-size: .8rem;
    transition: all .2s ease-in-out;
    margin-left: 3px;
    font-weight: bold;
}
.barItem:hover{
    cursor: pointer;
    background-color: #086641;
    color: white;
}
a{
  text-decoration: none;
  color: white;
  font-weight: bold;
}
a:visited{
    color: black;
}
a.router-link-exact-active{
    background-color: var(--btn-color);
}
</style>