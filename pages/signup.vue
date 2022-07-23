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
            <input type="number" id="phone" v-model="phone" @keyup="checkPhone">
        </div>
        <div class="password">
            <label for="password">enter your password:</label>
            <input type="password" id="password" v-model="password" @keyup="checkOptions">
        </div>
        <div class="rpassword">
            <label for="rpassword">repeat password:</label>
            <input type="password" id="rpassword" v-model="rpassword" @keyup="checkPasswords">
        </div>
        <div class="terms">
            <label for="check">accept the terms and conditions</label>
            <input type="checkbox" name="" id="" v-model="terms" @change="checkOptions">
        </div>
        <button :disabled="ifDisabled" @click="signUp">Sign up</button>
    </div>
</div>
</template>


<script lang="ts" setup>

import '~/assets/styles/variables.css'
useHead({
    title: "sign up",
    link:[
        { rel: 'icon', href: '../../assets/icons/2.png'}
    ]
})
let ifPhone = false;
let ifPassword = false;
const ifDisabled = ref(true);
const checkOptions = ()=>{
    if(ifPhone && ifPassword && terms.value === true){
        ifDisabled.value = false;
    }else{
        ifDisabled.value = true;
    }
    console.log(ifPhone, ifPassword, terms.value);
}
const phone = ref<Number>();
const password = ref<String>();
const rpassword = ref<String>();
const terms = ref(false);
const name = ref<String | Number>('');
const checkPhone = async ()=>{
    if(phone.value != null || undefined){
        ifPhone = true;
    }else{
        ifPhone = false;
    }
    checkOptions();
}
const checkPasswords = ()=>{
    if(password.value == rpassword.value){
        ifPassword = true;
    }else{
        ifPassword = false;
    }
    checkOptions();
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
    const message = await response.json();
    const userID = message._id;
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
@media screen and (min-width: 768px) {
    .logins{
       width: 30%; 
    }
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