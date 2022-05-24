<template>
<nav>
  <img src="../2.png" alt="company logo">
  <h3>National Farmer</h3>
  <a href="login.html">login</a>
  <a href="signup.html">sign up</a>
  <a href="#">sell</a>
  <i class="fa-solid fa-magnifying-glass fa-2x"></i>
  <a href="login.html"><i class="fa-solid fa-circle-user fa-2x"></i></a>
</nav>
<main>
  <img src="./assets/images/ad2.png" alt="ad picture">
  <div class="mid">
        <div class="search">
        <input type="text">
        <button>search</button>
    </div>
    <div class="text">
      <h2>looking to <strong id="text1">Buy 🤷‍♀️</strong> or <strong id="text2">Sell 🤑</strong></h2>
      <h3>We got you! 🤝</h3>
      <h3>Your one stop shoping site for farm produces</h3>
    </div>
  </div>
  <img src="./assets/images/ad1.png" alt="ad picture">
</main>

</template>


<script>

import './assets/styles/main.css'
export default{
  name : 'App'
}
</script>

<style scoped>
nav{
  height: 15vh;
  display: flex;
  align-items: center;
}
nav img{
  height: 60%;
  margin-left: 30px;
}
nav h3{
  font-family: var(--title-font);
}
nav a:nth-child(3){
  margin-left: auto;
}
nav a:nth-child(5){
  margin-right: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--main-yellow);
  transition: background-color 0.3s ease-in-out;
}
nav a:nth-child(5):hover{
  background-color: var(--dark-yellow);
}
nav a:nth-child(7), nav .fa-magnifying-glass{
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
@media screen and (max-width: 525px){
  nav img{
    margin-left: 10px;
  }
  nav a:nth-child(5),nav a:nth-child(4),nav a:nth-child(3){
    display: none;
  }
  nav .fa-magnifying-glass{
    display: block;
    margin-left: auto;
  }
  nav a:nth-child(7){
    display: block;
    margin: 0 20px;
  }
}
/* nav bar ends here */
main{
  display: flex;
  justify-content: space-between;
  padding: 30px;
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


</style>