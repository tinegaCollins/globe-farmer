<template>
<div class="query">
      <div class="buyer">
        <img src = "../../assets/images/ad1.png" alt="image" srcset="">
        <router-link to ="/signup/user"><button>sign up as a buyer</button></router-link>
      </div>
      <div class="seller">
         <img src="../../assets/images/ad2.png" alt="image" srcset="">
        <router-link to ="/signup/farmer"><button>sign up as farmer</button></router-link>
      </div>
</div>
</template>

<style scoped>
.query{
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  column-gap: 100px;
}
.query > *{
  display:flex;
  flex-direction: column;
  row-gap:20px;
}
.query a{
  align-self: center;
}
.query button{
  padding: 7px 15px;
  border-radius: 20px;
  width: 240px;
  background: var(--main-green);
  font-weight: 500;
}
.query button:hover{
  background: var(--dark-green);
  cursor: pointer;
}
.buyer button{
  background: var(--main-yellow);
}
.buyer button:hover{
  background: var(--dark-yellow);
}

.query img{
  height: 300px;
  width: auto;
  border-radius: 30px;
}
@media screen and (max-width: 400px){
  .query{
    width: 100vw;
  }
  .query img{
    height: auto;
    width: 250px;
  }
  .query{
    align-items: center;
    justify-content: center;
  }
}
</style>