<template>
  <div class="wrapper" >
    <div class="query" v-if="query">
      <div class="buyer">
        <img src="../istockphoto-1199186094-612x612.png" alt="image" srcset="">
        <button @click="showSignUpForm">sign up as a buyer</button>
      </div>
      <div class="seller" @click="farmer">
         <img src="../../../assets/ad.png" alt="image" srcset="">
        <button @click="showContents" >sign up as farmer</button>
      </div>
    </div>
    <p>{{ response1 }}</p>
    <div class="mainContent" v-if="showSignup">
      <form class="logins" @submit.prevent="createNormalUser">
        <label for="username">
          username: 
        </label>
        <input type="text" id="username" v-model="normalUserData.normalUsername" required>
        <label for="text">
          enter your phone number:
        </label>
        <input v-model="normalUserData.normalUserPhone" type="text" placeholder="phone number" id="text" required>
        <label for="password">
          Password:
        </label>
        <input v-model="normalUserData.normalPassword" type="password" placeholder="password" id="password" required>
        <label for="password2">
          repeat Password:
        </label>
        <input v-model="normalUserData.normalRpassword" type="password" placeholder="password" id="password2" required>
        <button @click="showMoreDetails" >Sign up</button>
        <input type="checkbox" name="save" id="save">
        <label for="save">
          <a href="#">accept terms and conditions</a>
        </label>
      </form>
      <div class="randomlorem">
        <img src="../assets/undraw_my_app_re_gxtj.svg">
      </div>
      </div>
  </div>
  <div class="farmerdetails" v-if="details">
    <h3> we need more details to let you post an ad </h3>
     <form @submit.prevent="submitFarmerDetails"> 
        <div class="card" v-if="step101">
            <h3 class="step-title">Step 1</h3>
            <h5>We need basic information about you</h5>
                <label for="email">Email:</label>
                <input type="email" id="email" required v-model="newFarmerData.farmerEmail">
                <label for="number">Phone Number:</label>
                <input type="number" id="number" required v-model="newFarmerData.farmerphone">
                <label for="password">password:</label>
                <input type="password"  id="password" v-model="newFarmerData.farmerPassword">
                <label for="password">repeat password:</label>
                <input type="password" name="password" id="repeatpassword" v-model="newFarmerData.farmerRpassword">
            <button type="button" @click="step1">Next</button>
        </div>
        
        <div class="card" v-else-if="step102">
                <h3 class="step-title">step 2</h3>
                    <label for="firstName">First name</label>
                    <input type="text" name="firstName" id="firstName" v-model="newFarmerData.firstName">
                    <label for="lastName">Last name</label>
                    <input type="text" name="lastName" id="lastName" v-model="newFarmerData.lastName">
                <div class="buttonWrapper">
                    <button type="button" @click="step1">Previous</button>
                    <button type="button" @click="step2">Next</button>
                </div>
        </div>
        <div class="card" v-else-if="step103">
            <h3 class="step-title">step 3</h3>
                <label for="line">Your product line</label>
                <select name="line" id="line" v-model="newFarmerData.line">
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="cereals">cereals</option>
                    <option value="spices">spices</option>
                </select>
                <label for="product">Your main product</label>
                <input type="text" id="product" v-model="newFarmerData.product">
            <div class="buttonWrapper">
                <button type="button" @click="step2">Previous</button>
                <button type="button" @click="step3">Next</button>
            </div>
    </div>
        <div class="card" v-else-if="step104">
            <h3 class="step-title">last Step</h3>
                <label for="county">County</label>
                <input type="text" id="county" v-model="newFarmerData.county">
                <label for="town">Nearest Town</label>
                <input type="text" id="town" v-model="newFarmerData.town">
           <div class="buttonWrapper">
            <button type="button" @click="step3">Previous</button>
            <button type="submit" id="submitData">submit</button>
           </div>
        </div>
        
    </form>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data(){
    return{
      showSignup: false,
      query: false,
      farmerInfo: {},
      details: true,
      normalUserData: {
        normalUsername: '',
        normalUserPhone: '',
        normalPassword: '',
        normalRpassword: ''
      },
      response1: null,
      response2: null,
      step101: true,
      step102: false,
      step103: false,
      step104: false,
      newFarmerData: {
        firstName: '',
        lastName: '',
        line: '',
        product: '',
        county: '',
        town: '',
        farmerEmail: '',
        farmerphone: '',
        farmerPassword: '',
        farmerRpassword: ''
      }
    }
  },
  methods:{
    showSignUpForm(){
      this.query = !this.query
      this.showSignup = !this.showSignup
    },
    farmer(){
      this.farmerInfo = {"phone" : this.phone}
    },
    showMoreDetails(){
      console.log(this.phone)
      console.log(this.farmerInfo)
      if(this.farmerInfo == !{}){
        this.details = true
      }
    },
    showContents(){
      this.query = !this.query
      this.details = !this.details
    },
    createNormalUser(){
      axios.post('http://localhost:3000/users', this.normalUserData)
      .then(response=>{
        this.response1 = response.data.message
      })
      .then(()=>{
        this.showSignup = !this.showSignup
      })
      .catch(error=>{
        console.log(error);
      })
    },
    step1(){
      this.step101 = !this.step101
      this.step102 = !this.step102
    },
    step2(){
      this.step102 = !this.step102
      this.step103 = !this.step103
    },
    step3(){
      this.step103 = !this.step103
      this.step104 = !this.step104
    },
    submitFarmerDetails(){
      axios.post('http://localhost:3000/farmers', this.newFarmerData)
      .then(response=>{
        this.response2 = response.data.message
      })
      .then(()=>{
        this.details = !this.details
      })
      .catch(error=>{
        console.log(error);
      })
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
.query{
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
}
.query > *{
  display:flex;
  flex-direction: column;
  row-gap:20px;
}
.query button{
  padding: 7px 15px;
  border-radius: 20px;
  width: 240px;
  align-self: center;
  background: var(--main-color);
  font-weight: 500;
}
.query button:hover{
  background: var(--btn-color);
  cursor: pointer;
}
.buyer button{
  background: var(--btn-color);
}
.buyer button:hover{
  background: var(--main-color);
}

.query img{
  height: 300px;
  width: auto;
  border-radius: 30px;
}
.mainContent{
  display: flex;
  flex-wrap: wrap;
  margin-top:20px;
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
.logins #text, #password, #password2, #username{
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
  position: relative;
  left: 170px;
}
#save ~ label{
  position: relative;
  bottom: 45px;
}
.randomlorem > img{
  width: 350px;
  height: auto;
  position: relative;
  top: 30px;
}
a:visited{
  color: black;
}
.farmerdetails{
  font-family: var(--main-font);
  text-align: center;
}
.farmerdetails label{
  text-align: left;
}
input{
  width: 300px;
  height: 30px;
  appearance: none;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
}
.card{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.card button{
  padding: 5px;
  width: min-content;
}
.buttonWrapper{
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;
}
</style>