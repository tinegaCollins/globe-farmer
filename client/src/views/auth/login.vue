<script setup lang="ts">
import { onMounted, ref } from 'vue';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import avatar from "../../assets/temp/avatar.jpg";
import { notify } from "@kyvg/vue3-notification";
let steps = ref<number>(1);
interface user {
    userName: string,
    email: string,
    img: any
}

const currentUser = ref<user>({
    userName: "collins tinega",
    email: "collinstinega003@gmail.com",
    img: avatar
})
const email = ref<string>("");
const DevUrl = import.meta.env.VITE_DEV_URL;
const checkEmail = () => {
    isLoading.value = true;
    //regex to check if email is valid
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-0]\d{1,2}\.[0-0]\d{1,2}\.[0-0]\d{1,2}\.[0-0]\d{1,2}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value)) {
        axios.get(`${DevUrl}api/user/check-email/${email.value}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                steps.value = 2;
                isLoading.value = false;
            } else {
                notify({
                    title: "Error",
                    text: res.data.message,
                    type: "error",
                    duration: 3000
                })
            isLoading.value = false;

            }
        }).catch(err => {
            isLoading.value = false;
        })
    } else {
        axios.get(`${DevUrl}api/user/check-user-name/${email.value}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status === 200){
                steps.value = 2;
                isLoading.value = false
            }else{
                notify({
                    title: "Error",
                    text: res.data.message,
                    type: "error",
                    duration: 3000
                })
            isLoading.value = false;

            }
        }).catch(err => {
            isLoading.value = false;
        })
    }

    return true;
}
const isLoading = ref<boolean>(false);
const back = () => {
    steps.value = 1
}
interface googleAuth {
    credential: string
}
const onSignIn = (response: googleAuth) => {
    console.log("jwt", response.credential);
    let userObj = jwt_decode(response.credential);
}
onMounted(() => {
    //@ts-ignore
    google.accounts.id.initialize({
        client_id: "34657994480-t4hg3qkq1coou7lbnpn548k5pu9dven4.apps.googleusercontent.com",
        callback: onSignIn,
    });
    //@ts-ignore
    google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        {
            theme: "outline",
            size: "large",
            type: "standard",
            text: "Sign in with Google",
            shape: "rect",
            round_corners: true,
        }
    );
})
</script>
<template>
    <div class="login-wrapper">
        <div class="inputs">
            <h1>Log In</h1>
            <div class="login">
                <div class="step1" v-if="steps == 1">
                    <div class="user-info">
                        <input type="text" placeholder="Email or Phone" v-model="email">
                        <button @click="checkEmail">
                            <span :class="isLoading ? 'loader' : 'some'">
                                {{isLoading ? '' : 'Continue'}}
                            </span>
                        </button>
                    </div>
                    <p class="or">or</p>
                    <div class="other">
                        <button>Continue with Facebook</button>
                        <button id="google-signin-button"></button>
                        <button>Continue with Apple</button>
                    </div>
                    <div class="if-account">
                        <p>Don't have an account? <RouterLink to="/auth/signup">Sign Up</RouterLink>
                        </p>
                        <RouterLink to="/auth/forgot-password">Forgot your password?</RouterLink>
                    </div>
                </div>
                <div class="step2" v-if="steps == 2">
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
        </div>
        <div class="side-image">
            <img src="../../assets/images/pineapple.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.login-wrapper {
    display: flex;
    height: 100vh;
    width: 100%;
    padding: 5%;
}

/* .login-wrapper h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    position: absolute;
} */
.inputs {
    width: 100%;
    align-self: flex-end;
    backdrop-filter: blur(4px) saturate(100%);
    -webkit-backdrop-filter: blur(5px) saturate(100%);
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}

.inputs h1 {
    margin-left: 15px;
}

input,
button {
    width: 90%;
    height: 50px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
}

input::placeholder {
    color: #ccc;
}

input:focus {
    border: 2px solid var(--jungle-green);
}

.step1 {
    padding: 10px;
    width: 100%;
}

.step1 .user-info {
    margin: 20px 0 15px 0;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
}

.or {
    text-align: center;
    margin: 20px 0;
    color: #ccc;
}

.other {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    width: 100%;
}

.if-account {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    align-items: center;
    width: 100%;
}

.if-account p {
    color: #ccc;
}

.if-account a {
    color: var(--jungle-green);
    /* font-size: 1.2rem; */
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    .side-image {
        display: none;
    }

    .login-wrapper {
        padding: 20% 5%;
        background-image: url(../../assets/images/nguyen-ngoc-tung-ZkG4JdoMANM-unsplash.jpg);
        background-size: cover;
        background-position: top top;
        background-repeat: no-repeat;
        color: #333;
    }
}

.side-image {
    display: n;
    width: 50%;
    height: 50%;
}

.side-image img {
    height: 510px;
    width: 100%;
    object-fit: contain;
}

@media screen and (min-width: 768px) {
    .login-wrapper {
        padding: 5%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: min-content;
    }

    .inputs {
        width: 50%;
        border-radius: 0px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        position: relative;
    }

    input,
    button {
        width: 70%;
    }
}
</style>