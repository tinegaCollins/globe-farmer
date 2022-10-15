<script setup lang="ts">
import { onMounted, ref } from 'vue';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import avatar from "../../assets/temp/avatar.jpg";
import { notify } from "@kyvg/vue3-notification";
import { useUserStore } from '../../stores/user';
const DevUrl = import.meta.env.VITE_DEV_URL;
const userStore = useUserStore();

let steps = ref<number>(2);
interface user {
    userName: string,
    email: string,
    img: any
}
let loginType:string;
const currentUser = ref<user>({
    userName: "collins tinega",
    email: "collinstinega003@gmail.com",
    img: avatar
})
// const currentUser = ref<user>({
//     userName: "",
//     email: "",
//     img: avatar
// })
const email = ref<string>("");
const checkEmail = () => {
    isLoading.value = true;
    //regex to check if email is valid
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-0]\d{1,2}\.[0-0]\d{1,2}\.[0-0]\d{1,2}\.[0-0]\d{1,2}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value)) {
        console.log("valid email");
        axios.get(`${DevUrl}api/user/check-email/${email.value}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                steps.value = 2;
                isLoading.value = false;
                console.log(res.data);
                currentUser.value.email = email.value;
                currentUser.value.userName = res.data.data.userName;
            } else {
                notify({
                    title: "Error",
                    text: res.data.message,
                    type: "error",
                    duration: 3000
                })
                isLoading.value = false;
                loginType = "email";

            }
        }).catch(err => {
            isLoading.value = false;
        })
    } else {
        console.log("invalid email");
        axios.get(`${DevUrl}api/user/check-user-name/${email.value}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                steps.value = 2;
                isLoading.value = false
                currentUser.value.userName = email.value;
                currentUser.value.email = res.data.data.email;

            } else if (res.status === 204) {
                notify({
                    title: "Error",
                    text: res.data.message,
                    type: "error",
                    duration: 3000
                })
                isLoading.value = false;
                loginType = "username";
            }
        }).catch(err => {
            isLoading.value = false;
        })
    }

    return true;
}
const isLoading = ref<boolean>(false);
const password = ref<string>("");
async function login() {
    isLoading.value = true;
    await axios.post(`${DevUrl}api/user/login`, {
        userName: currentUser.value.userName,
        email: currentUser.value.email,
        loginType: loginType,
        password: password.value
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status === 200) {
            userStore.login({
                userName: currentUser.value.userName,
                email: currentUser.value.email,
                token: res.data.token,
            })
            //save token to session storage
            sessionStorage.setItem("token", res.data.token);
            //decode token
            interface decode {
                exp: number,
                iat: number,
                id: string,
                userName: string,
                email: string
            }
            const decoded:decode = jwt_decode(res.data.token);
            sessionStorage.setItem("userName", decoded.userName);
            sessionStorage.setItem("email", decoded.email);
            window.location.href = "/";
            isLoading.value = false;
        } else if (res.status === 204) {
            notify({
                title: "Error",
                text: "wrong password",
                type: "error",
                duration: 3000
            })
            isLoading.value = false;
        }else {
            notify({
                title: "Error",
                text: "user not found",
                type: "error",
                duration: 3000
            })
            isLoading.value = false;
        }
    }).catch(err => {
        notify({
            title: "Error",
            text: err.message,
            type: "error",
            duration: 3000
        })
        isLoading.value = false;
    })
}
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
            <h1>Welcome Back</h1>
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
                    <button id="google-signin-button"></button>
                </div>
                <div class="if-account">
              
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
                    <input type="password" placeholder="password" v-model="password">
                    <button @click="login">
                        <span :class="isLoading ? 'loader' : 'some'">
                            {{isLoading ? '' : 'Continue'}}
                        </span>
                    </button>
                </div>
                <div class="if-account">
                    <RouterLink to="/auth/forgot-password">Forgot your password?</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    margin-top: 5px;
    background-color: #E2E4E9;
    color: #333;
    border-radius: 15px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(209, 204, 25, 0.3);
}
.inputs > h1 {
    margin:  10px 0;
}
input {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    border: none;
    background: transparent;
    border-bottom: 1px solid #333;
    outline: none;
}

input::placeholder {
    color: black;
}
button {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
    /* background-color: var(--main-yellow); */
    color: #333;
    font-weight: 600;
    font-size: 1.2rem;
    margin: 20px 0;
    transition: all 0.3s ease-in-out;
}
button:disabled {
    background-color: #333;
    color: #fff;
    opacity: 0.5;
}
.step2> img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.email-details {
    display: flex;
    align-items: center;
    margin: 20px 0;
}
.email-details > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}

</style>