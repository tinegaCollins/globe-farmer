<script setup lang="ts">
import { ref } from 'vue';

import avatar from "../../assets/temp/avatar.jpg"
const bannerMessage = ref<string>('Hello!');
let steps = ref<number>(1);
interface user {
    userName: string,
    email: string,
    img: any
}

const currentUser = ref<user>({
    userName : "collins tinega",
    email: "collinstinega003@gmail.com",
    img: avatar
})

const checkEmail = ()=> {
    bannerMessage.value = "Log In"
    steps.value = 2
}
const back = ()=> {
    steps.value = 1
}
</script>
<template>
    <div class="login-wrapper">
        <h1>{{bannerMessage}}</h1>
        <div class="login" v-if="steps == 1">
            <div class="user-info">
                <input type="text" placeholder="Email or Phone">
                <button @click="checkEmail">Continue</button>
            </div>
            <p class="or">or</p>
            <div class="other">
                <button>Continue with Facebook</button>
                <button>Continue with Google</button>
                <button>Continue with Apple</button>
            </div>
            <div class="if-account">
                <p>Don't have an account? <RouterLink to="/auth/signup">Sign Up</RouterLink></p>
                <RouterLink to="/auth/forgot-password">Forgot your password?</RouterLink>
            </div>
        </div>
        <div class="next" v-if="steps == 2">
            <img src="../../assets/icons/back.svg" alt="" @click="back">
            <div class="email-details">
                <img :src="currentUser.img" alt="" srcset="">
                <div class="details">
                    <h4>{{currentUser.userName}}</h4>
                    <p>{{currentUser.email}}</p>
                </div>
            </div>
            <div class="user-info">
                <input type="password" placeholder="password">
                <button>Continue</button>   
            </div>
            <div class="if-account">
                <RouterLink to="/auth/forgot-password">Forgot your password?</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.next {
    margin-top: 20px;
    align-self: center;
    height: 60vh;
    width: 90vw;
     /* From https://css.glass */
    background: rgba(0,0,0,.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(1px);
    border-radius: 20px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.next > img {
    height: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
}
.email-details {
    display: flex;
    width: 80%;
    margin-bottom: 30px;
    margin-top: 15px;
}
.details {
    font-size: small;
    margin-left: 20px;
    align-self: center;
}
.email-details img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
}
.login-wrapper{
    display: flex;
    flex-direction: column;
    height:  100vh;
    background-image: url(../../assets/images/pineapple.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 100px;
    transition: all 200ms ease-in-out;
    font-family: var(--font-family);
}
.login-wrapper > h1 {
    margin-left: 20px;
    font-size: 2rem;
    font-weight: 700;
    color: var(--main-yellow);
}
.login{
    margin-top: 20px;
    align-self: center;
    width: 90vw;
     /* From https://css.glass */
    background: rgba(0,0,0,.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(1px);
    border-radius: 20px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
input, button {
    width: 80%;
    height: 45px;
    border-radius: 10px;
    outline: none;
    border: none;
}
input {
    padding-left: 10px;
}
.user-info, .other{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
}
.user-info button{
    background-color: var(--main-yellow);
} 
.other button {
    background: #7ce26f73;
    color: #fff;
}
.or {
    margin: 15px 0;
}
.if-account {
    width: 80%;
    margin: 20px 0;
}
.if-account a{
    color: white;
    text-decoration: none;
}
.if-account a:visited {
    color: white;
}
.if-account p {
    margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
    .login-wrapper {
        padding-top: 50px;
    }
}
    
</style>