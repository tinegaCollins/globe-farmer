<template>
  <div class="wrapper">
    <div class="ad">
      <h6>ad goes here</h6>
    </div>
    <div class="mainContent">
      <form action="/users" method="post" class="logins">
        <label for="text">
          login with phone number:
        </label>
        <input v-model="phone" type="text" placeholder="phone number" id="text">
        <label for="password">
          Password:
        </label>
        <input v-model="password" type="password" placeholder="password" id="password">
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
export default {
  data(){
    return{
      phone: '',
      password: ''
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
.ad{
  height: 100px;
  width: 70vw;
  background: grey;
  color: #fff;
  display: grid;
  place-items: center;
  margin-top: 10px;
  box-shadow: 5px 5px 5px 5px rgba(51, 51, 51, 0.411);
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
</style>