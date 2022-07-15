<template>
<div class="login">
    <img src="~/assets/icons/2.png" alt="" srcset="">
    <div class="logins">
        <div class="name">
            <label for="name">name:</label>
            <input type="text" name="" id="name" v-model="name">
        </div>
        <div class="phone">
            <label for="phone">enter your phone:</label>
            <input type="number" id="phone" v-model="phone" @focusout="checkPhone" @mouseout="checkOptions">
        </div>
        <div class="password">
            <label for="password">enter your password:</label>
            <input type="password" id="password" v-model="password">
        </div>
        <div class="rpassword">
            <label for="rpassword">repeat password:</label>
            <input type="password" id="rpassword" v-model="rpassword" @focusout="checkPasswords" @mouseout="checkOptions">
        </div>
        <div class="terms">
            <label for="check">accept the terms and conditions</label>
            <input type="checkbox" name="" id="" v-model="terms" @click="checkOptions">
        </div>
        <button :disabled="ifDisabled" @click="signUp">Sign up</button>
    </div>
</div>
</template>


<script lang="ts" setup>

import '~/assets/styles/variables.css'
useHead({
    title: "national farmer/sign up",
    link:[
        { rel: 'icon', href: '../../assets/icons/2.png'}
    ]
})
let ifPhone = false;
let ifPassword = false;
const ifDisabled = ref(true);
const checkOptions = ()=>{
    if(ifPhone && ifPassword && terms.value == false){
        ifDisabled.value = false;
    }else{
        ifDisabled.value = true;
    }
}
const phone = ref<Number>();
const password = ref<String>();
const rpassword = ref<String>();
const terms = ref(false);
const name = ref<String | Number>('');
const checkPhone = ()=>{
    if(phone.value != null){
        ifPhone = true
    }

}
const checkPasswords = ()=>{
    if(password.value == rpassword.value){
        ifPassword = true;
    }
}
const signUp = async ()=>{
    const dataToSend = {
        name: name.value,
        phone: phone.value,
        unHashPassword: password.value
    }
    const response = await fetch('http://localhost:8080/register-user',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
    const message = response.json();
}
</script>

<style>

.login{
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login > img {
    height: 80px;
    width: auto;
}
.logins{
    margin-top: 10vh;
    width: 80%;
    display: flex;
    flex-direction: column;
}
.logins > *{
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}
.phone input, .password input , .rpassword input, .name input{
    height: 30px;
    width: 100%;
    border: 1px solid var(--main-yellow);
    border-radius: 5px;
    padding-left: 5px;
    outline: none;
}
.terms{
    flex-direction: row;
    justify-content: space-between;
}
.logins button {
    outline: none;
    appearance: none;
    border: none;
    background-color: var(--light-green);
    width: max-content;
    align-self: center;
    padding: .8em 2em;
    border-radius: 5px;
    transition: all 200ms ease-in-out;
}
.logins button:disabled{
    background-color: rgb(5, 92, 30);
}
</style>