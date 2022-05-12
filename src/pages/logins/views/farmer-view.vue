<template>
<div class="farmerdetails">
    <h3> we need more details about you to let you post an ad </h3>
     <form @submit.prevent="submitFarmerDetails"  action="/upload" method="POST"
            enctype="multipart/form-data"> 
        <div class="card" v-if="step101">
            <h3 class="step-title">Step 1</h3>
                <label for="email">Email:</label>
                <input type="email" id="email" required v-model="newFarmerData.farmerEmail">
                <label for="number">Phone Number:</label>
                <input type="text" id="number" required v-model="newFarmerData.farmerphone">
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
                <label for="image">Upload your avatar</label>
                <input type="file" name="file" id="image">
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

export default{
    data(){
        return{
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
    methods: {
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
            .then(()=>{
              window.location.href = "/account/post"
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>
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
@media screen and (max-width: 400px){
  input,#password{
    width: 90vw;
  }
  .card{
    margin-left: 20px;
  }
  label{
    font-size: .8rem;
  }
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
