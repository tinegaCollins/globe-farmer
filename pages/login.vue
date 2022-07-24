<template>
<div class="login">
    <img src="~/assets/icons/2.png" alt="" srcset="">
    <div class="logins">
        <p>{{messageResponse}}</p>
        <div class="phone">
            <label for="phone">phone Number:</label>
            <input type="number" id="phone" v-model="phone">
        </div>
        <div class="password">
            <label for="password">password</label>
            <input type="password"  id="password" v-model="password">
            <div class="keep">
                <label for="check">kept me logged in</label>
                <input type="checkbox" name="" id="check" v-model="ifKeepLoggedIn">
            </div>
            <button @click="signIn">log in</button>
        </div>
    </div>
</div>
</template>


<script setup lang="ts">

useHead({
    title: 'login',
    link:[
        { rel: 'icon', href: './../assets/icons/2.png'}
    ]
})
const password = ref<string>();
const phone = ref<Number>();
const ifKeepLoggedIn = ref<boolean>(false);
const messageResponse = ref<string>();

const signIn = async ()=>{
    const dataToSend = {
        phone: phone.value,
        unHashPassword:password.value
    }
    const response = await fetch('http://localhost:8000/login-user',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
    const data = await response.json();    
    if(response.status == 200){
        messageResponse.value = "succesfully logged in"
        if(ifKeepLoggedIn){
            localStorage.setItem('userId', data)
        }else{
            sessionStorage.setItem('userId', data)
        }
    }else{
        messageResponse.value = data.message;
    }
}
</script>

<style>
#check {
    height: 15px;
    margin-left: auto;
    position: relative;
    bottom: 15px;
}
</style>


