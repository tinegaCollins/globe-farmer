<template>
    <p>{{ response1 }}</p>
    <p>{{ response2 }}</p>
    <div class="mainContent" v-if="user">
      <form class="logins" @submit.prevent="createUser">
        <label for="username">
          username: 
        </label>
        <input type="text" id="username" v-model="UserData.name" required>
        <label for="email">
          enter your email:
        </label>
        <input type="email" name="" id="email" v-model="UserData.email">
        <label for="text">
          enter your phone number:
        </label>
        <input v-model="UserData.phone" type="text" placeholder="phone number" id="text" required>
        <label for="password">
          Password:
        </label>
        <input v-model="UserData.password" type="password" placeholder="password" id="password" required>
        <label for="password2">
          repeat Password:
        </label>
        <input v-model="rpassword" type="password" placeholder="password" id="password2" required>
        <button>Sign up</button>
        <h4 class="terms">By clicking sign up, you have accepted our
            <br>
             <a href="#" target="_blank" rel="noopener noreferrer">Terms and conditions</a></h4>
      </form>
      </div>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            response1: null,
            response2: null,
            UserData: {
                name: '',
                phone: '',
                password: '',
                email: ''
            },
            rpassword: '',
            user: true,
            userID: null
        }
    },
    methods: {
      createUser(){
        axios.post('http://localhost:3000/users', this.UserData)
        .then(response=>{
            this.response1 = response.data.message
        })
        .then(()=>{
            fetch('http://localhost:3000/user/' + this.UserData.phone + '/' + this.UserData.password)
            .then(res => res.json())
            .then(data =>{
            if(data._id === null){
                this.response2 = 'enter a valid phonenumber and password 🤦‍♂️'
            }
            else{
                this.$store.commit('updateUserID', data._id);
                this.userID = this.$store.getters.getUserID
            }    
            })
            .then(()=>{
                if(this.userID === null || this.userID === ''){
                    this.response2 = 'enter a valid phonenumber and password 🤦‍♂️'
                }
                else{
                    this.button = !this.button
                    this.response2 = 'log in successful 👍'
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 2000);
                }
            })
            .then(()=>{
            this.user = !this.user
            })
            .catch(err => console.log(err))
            })
        .catch(error=>{
            console.log(error);
        })
        
    }
    }
}
</script>
<style scoped>
.mainContent, p {
    font-family: var(--text-font);
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
.logins #text, #password, #password2, #username, #email{
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
  background: var(--main-red);
  transition: background .3s ease-in-out;
}
.logins button:hover{
  cursor: pointer;
  background: var(--main-yellow);
}
.logins button ~ label{
  margin-top: 20px;
}
#save{
  margin-top: 25px;
  position: relative;
  left: 60px;
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
a{
    color: black;
}
a:visited{
  color: black;
}
.mainContent{
  display: flex;
  flex-wrap: wrap;
  margin-top:20px;
  justify-content: space-between;
  gap: 50px;
}
.terms {
    margin-top: 15px;
    font-size: .7rem;
}
@media screen and (max-width: 400px){
  .logins #text, #password, #password2, #username{
    width: 90vw;
  }
  .randomlorem{
    display: none;
  }
}
</style>