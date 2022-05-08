<template>
  <div class="wrapper" >
    <div class="query" v-if="query">
      <div class="buyer">
        <img src="../../../assets/landing1.jpg" alt="image" srcset="">
        <button @click="showSignUpForm">sign up as a buyer</button>
      </div>
      <div class="seller" @click="farmer">
         <img src="../../../assets/ad.png" alt="image" srcset="">
        <button @click="showContents" >sign up as farmer</button>
      </div>
    </div>
    <div class="mainContent" v-if="showSignup">
      <div class="logins">
        <label for="text">
          enter your phone number:
        </label>
        <input v-model="phone" type="text" placeholder="phone number" id="text">
        <label for="password">
          Password:
        </label>
        <input v-model="password" type="password" placeholder="password" id="password">
        <label for="password2">
          repeat Password:
        </label>
        <input v-model="rpassword" type="password" placeholder="password" id="password2">
        <button @click="showMoreDetails">Sign up</button>
        <input type="checkbox" name="save" id="save">
        <label for="save">
          <a href="#">accept terms and conditions</a>
        </label>
      </div>
      <div class="randomlorem">
        <img src="../assets/undraw_my_app_re_gxtj.svg">
      </div>
      </div>
  </div>
  <div class="farmerdetails" v-if="details">
    <h3> we need more details to let you post an ad </h3>


     <form action="app.js" method="post" data-multi-step @click="next"> 
        <div class="card" data-step="1">
            <h3 class="step-title">Step 1</h3>
            <h5>We need basic information about you</h5>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="number">Phone Number</label>
                <input type="number" name="number" id="number" required>
            </div>
            <div class="form-group">
                <label for="password">password</label>
                <input type="password" name="password" id="password">
            </div>
            <div class="form-group">
                <label for="password">repeat password</label>
                <input type="password" name="password" id="repeatpassword">
            </div>
            <button type="button" data-next="">Next</button>
        </div>
        
        <div class="card" data-step>
                <h3 class="step-title">step 2</h3>
                <div class="form-group">
                    <label for="firstName">First name</label>
                    <input type="text" name="firstName" id="firstName">
                </div>
                <div class="form-group">
                    <label for="lastName">Last name</label>
                    <input type="text" name="lastName" id="lastName">
                </div>
                <div class="buttonWrapper">
                    <button type="button" data-previous="">Previous</button>
                    <button type="button" data-next>Next</button>
                </div>
        </div>
        <div class="card" data-step>
            <h3 class="step-title">step 3</h3>
            <div class="form-group">
                <label for="line">Your product line</label>
                <select name="line" id="line">
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="cereals">cereals</option>
                    <option value="spices">spices</option>
                </select>
            </div>
            <div class="form-group">
                <label for="product">Your main product</label>
                <input type="text" name="product" id="product">
            </div>
            <div class="buttonWrapper">
                <button type="button" data-previous="">Previous</button>
                <button type="button" data-next>Next</button>
            </div>
    </div>
        <div class="card" data-step>
            <h3 class="step-title">last Step</h3>
            <div class="form-group">
                <label for="county">County</label>
                <input type="text" name="county" id="county">
            </div>
            <div class="form-group">
                <label for="town">Nearest Town</label>
                <input type="text" name="town" id="town">
            </div>
           <div class="buttonWrapper">
            <button type="button" data-previous>Previous</button>
            <button type="submit" id="submitData">submit</button>
           </div>
        </div>
        
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      phone: '',
      password: '',
      rpassword: '',
      showSignup: false,
      query: true,
      farmerInfo: {},
      details: false
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
.logins #text, #password, #password2{
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
  left: 35px;
}
#save ~ label{
  position: relative;
  bottom: 46px;
}
.randomlorem > img{
  width: 280px;
  height: auto;
  position: relative;
  top: 30px;
}
a:visited{
  color: black;
}
.farmerdetails{
  font-family: var(--main-font);
}
</style>