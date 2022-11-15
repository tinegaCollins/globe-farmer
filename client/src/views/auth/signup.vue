<script setup lang="ts"> 
import { ref } from 'vue';
import  { UserRegister } from '../../types/types';
import axios from 'axios';
import { notify } from "@kyvg/vue3-notification";
import router from '../../router';

const DevUrl = import.meta.env.VITE_DEV_URL;
const currentUser = ref<UserRegister>({
    userName : "",
    email : "",
    secPassword: "",
    seller: false,
    location: "",
})
const repeatPassword = ref<string>("");
const passwordError = ref<string>("");
const checkPasswords = () => {
    if(currentUser.value.secPassword === repeatPassword.value){
        passwordError.value = "";
        return true;
    }else{
        passwordError.value = "Passwords do not match";
        return false;
    }
}
const ifDisabled = ref<boolean>(false);
const enableButton = () => {
    ifDisabled.value = false;
}
async function checkUserName():Promise<boolean>{
    let returnValue: boolean = false;
    if(currentUser.value.userName.length > 0){
        await axios.get(`${DevUrl}api/user/check-user-name/${currentUser.value.userName}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            if(res.status === 201){
                returnValue = true;
            }else{
                notify({
                    title: "Error",
                    text: "Username already exists",
                    type: "error",
                    duration: 3000
                })
                returnValue = false;
            }
        }).catch(err => {
            notify({
                title: "Error",
                text: err.message,
                type: "error",
                duration: 3000
            })
            returnValue = false;
        })
    }
    return returnValue;
}
async function checkEmail():Promise<boolean>{
    let returnValue:boolean = false;
    if(currentUser.value.email.length > 0){
        await axios.get(`${DevUrl}api/user/check-email/${currentUser.value.email}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            if(res.status === 201){
                returnValue = true;
            }else{
                notify({
                    title: "Error",
                    text: "Email already exists",
                    type: "error",
                    duration: 3000
                })
                returnValue = false;
            }
        }).catch(err => {
            notify({
                title: "Error",
                text: err.message,
                type: "error",
                duration: 3000
            })
        })
    }
    return returnValue;
}
async function register():Promise<boolean>{
    console.log(currentUser.value);
    console.log(DevUrl);
    const userNameRight = await checkUserName();
    const emailRight = await checkEmail();
    const passwordsRight = checkPasswords();
    console.log(userNameRight, emailRight, passwordsRight);
    if(userNameRight && emailRight && passwordsRight){
        await axios.post(`${DevUrl}api/user/register-user`, currentUser.value, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                notify({
                    title: "Success",
                    text: "Account created successfully",
                    type: "success",
                    duration: 3000
                })
                setTimeout(() => {
                    notify({
                        title: "Success",
                        text: "redirecting to login page",
                        type: "success",
                        duration: 1000
                    })
                    window.location.href = "/auth/login";
                }, 3000);
            } else {
                notify({
                    title: "Error",
                    text: "Account not created",
                    type: "error",
                    duration: 3000
                })
                return false
            }
        }).catch(err => {
            notify({
                title: "Error",
                text: err.message,
                type: "error",
                duration: 3000
            })
        })
    }else {
        return false;
    }
    return true;
}
</script>
<template>
    <div class="signup-wrapper">
        <h1>Welcome </h1>
        <div class="user-details">
            <input type="text" placeholder="Username" v-model="currentUser.userName">
            <input type="email" placeholder="Email" v-model="currentUser.email">
            <input type="text" placeholder="Location" v-model="currentUser.location">
            <input type="password" name="" id="" placeholder="Password" v-model="currentUser.secPassword">
            <input type="password" placeholder="Repeat password" v-model="repeatPassword" @mouseout="checkPasswords">
            <h3>{{passwordError}}</h3>
            <div class="if-seller">
                <input type="checkbox" name="" id="seller" v-model="currentUser.seller">
                <label for="seller">Are you a seller?</label>
            </div>
            <button @click="register" :disabled="ifDisabled">Agree and Continue</button>
        </div>
    </div>
</template>

<style scoped>
.signup-wrapper {
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
    color: #fff;
    border-radius: 15px;

}

.user-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width: 100%;
    padding: 10px;
}

.user-details p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    align-self: flex-start;
    padding: 0 5%;
}
.user-details h3 {
    font-size: .9rem;
    font-weight: 600;
    color: var(--main-red);
    align-self: flex-start;
}
input {
    width: 90%;
    height: 50px;
    margin: 10px 0;
    border: none;
    background: transparent;
    border-bottom: 1px solid #fff;
    outline: none;
}

input::placeholder {
    color: #fff;
}

.if-seller {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    width: 90%;
}

.if-seller input {
    width: 20px;
    height: 20px;
    margin: 0;
}

button {
    width: 90%;
    height: 50px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 0 10px;
    background-color: var(--main-yellow);
    color: #333;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 20px;
    transition: all 0.3s ease-in-out;
}
button:disabled {
    background-color: #333;
    color: #fff;
    opacity: 0.5;
}
@media screen and (min-width: 768px) {
    .user-details {
        width: 50%;
    }
}

@media screen and (min-width: 1024px) {
    .user-details {
        width: 100%;
    }

    input {
        width: 60%;
    }

    .user-details p {
        align-self: center;
    }

    .if-seller input {
        width: 20px;
        height: 20px;
        margin: 0;
    }
    .if-seller {
        width: 60%;
        align-self: center;
    }
    
.user-details h3 {
    width: 60%;
    align-self: center;
    height: 20px;
}
    button {
        width: 60%;
    }
}
</style>