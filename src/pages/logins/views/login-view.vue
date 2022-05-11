<template>
  <div class="wrapper">
    <div class="mainContent">
      <h3>log in to continue</h3>
      <form class="logins" @submit.prevent = "getUser">
        <label for="text">
          login with phone number:
        </label>
        <input v-model="formdata.phone" type="text" placeholder="phone number" id="text">
        <label for="password">
          Password:
        </label>
        <input v-model="formdata.password" type="password" placeholder="password" id="password">
        <button>Log In</button>
        <input type="checkbox" name="save" id="save">
        <label for="save">
          stay logged in
        </label>
        <button id="forgot">Forgot password?</button>
      </form>
      <div class="randomlorem">
        <img src="../assets/undraw_access_account_re_8spm.svg">
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';


export default{
  data(){
    return{
      formdata: {
        phone:'',
        password:''
    }
   }
  },
  methods:{
    getUser(){
      fetch()
    }
  }
}
</script>

<style scoped>
.wrapper{
  font-family: var(--main-font);
  display: grid;
  place-items: center;
}
.wrapper h3{
  margin-left: 20px;
}
.mainContent{
  display: flex;
  flex-wrap: wrap;
  margin-top:30px;
  justify-content: space-between;
  gap: 50px;
}
.logins{
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
}
.logins label{
  font-size: .8rem;
}
.logins input{
  margin-bottom: 10px;
}
.logins #text, #password{
  width: 300px;
  height: 30px;
  appearance: none;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
}

.logins button{
  width: max-content;
  align-self: center;
  padding: 7px 15px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 20px;
  background: #6C63FF;
  transition: background .3s ease-in-out;
}
.logins button:hover{
  cursor: pointer;
  background: var(--btn-color);
}
.logins button ~ label{
  margin-top: 20px;
}
#save{
  margin-top: 25px;
}
#save ~ label{
  position: relative;
  bottom: 46px;
  left: 30px;
}
#forgot{
  align-self: flex-end;
}
.randomlorem > img{
  width: 280px;
  height: auto;
}
@media screen and (max-width: 768px){
  .logins #text, #password{
    width: 250px;
  }
  .randomlorem > img{
    display: none;
  }
}
@media screen and (max-width: 420px){
  .logins #text, #password{
    width: 87vw;
  }
}
</style>