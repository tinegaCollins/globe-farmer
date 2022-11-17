<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useUserStore } from '../../../stores/user';
import { notify } from "@kyvg/vue3-notification";
import router from '../../../router';
import Recent from '../../../components/recent.vue';
const DevUrl = import.meta.env.VITE_DEV_URL;
 


const userStore = useUserStore();
const email = ref<string>(userStore.email);
if (!email.value) {
    router.push('/auth/login')
}

const steps = ref<number>(1);

interface stepOne {
    firstName: string;
    lastName: string;
    phone: string;
    town: string;
    county: string;
}
const step1details = ref<stepOne>({
    firstName: '',
    lastName: '',
    phone: '',
    town: '',
    county: '',
});
interface stepTwo {
    title: string;
    businessAddress: string;
    businessPhone: string;
    businessEmail: string;
}
const step2details = ref<stepTwo>({
    title: '',
    businessAddress: '',
    businessPhone: '',
    businessEmail: ''
});
let finish = ref<Boolean>(false);
let image: ArrayBuffer | null | String = null;
const handleImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        image = reader.result;
        finish.value = true;
    }
}
const next = () => {
    if(steps.value == 1) {
        console.log(step1details.value);
        if(step1details.value.firstName == '' || step1details.value.lastName == ''|| step1details.value.phone == '' || step1details.value.town == '' || step1details.value.county == '') {
            //notify user to fill all fields
            notify({
                title: "Error",
                text: "Please fill all fields",
                type: "error",
                duration: 3000
            })
        }else{
            steps.value = 2;
        }
    }
    else if(steps.value == 2) {
        console.log(step2details.value);
        if(step2details.value.title == '' || step2details.value.businessAddress == ''|| step2details.value.businessPhone == '' || step2details.value.businessEmail == '') {
            //notify user to fill all fields
            notify({
                title: "Error",
                text: "Please fill all fields",
                type: "error",
                duration: 3000
            })
        }else{
            steps.value = 3;
        }
    }
    else if(steps.value == 3){
        let dataToSend = {
            email: email.value,
            firstName: step1details.value.firstName,
            lastName: step1details.value.lastName,
            phone: step1details.value.phone,
            town: step1details.value.town,
            county: step1details.value.county,
            title: step2details.value.title,
            businessAddress: step2details.value.businessAddress,
            businessPhone: step2details.value.businessPhone,
            businessEmail: step2details.value.businessEmail,
            avatar: image
        }
        axios.post(`${DevUrl}api/user/add-seller`, dataToSend).then((res) => {
            if(res.status == 200) {
                notify({
                    title: "Success",
                    text: "Seller account created successfully",
                    type: "success",
                    duration: 3000
                })
                router.push('/user/dashboard');
            }
        }).catch((err) => {
            console.log(err);
        })
    }
}
</script>

<template>
    <div class="post">
        <div class="additional-info">
            <main>
                <RouterLink to="/">
                    <img src="../../../../icon.png" alt="">
                </RouterLink>
                <h2>we need additional information about you</h2>
                <div class="tracker">
                    <div class="step" v-if="steps == 1">
                        <div class="step__number">
                            1
                        </div>
                        <div class="step__title">
                            <h3>Personal Information</h3>
                        </div>
                    </div>
                    <div class="step" v-if="steps == 2">
                        <div class="step__number">
                            2
                        </div>
                        <div class="step__title">
                            <h3>Business Information</h3>
                        </div>
                    </div>
                    <div class="step" v-if="steps == 3">
                        <div class="step__number">
                            3
                        </div>
                        <div class="step__title">
                            <h3>Final Details</h3>
                        </div>
                    </div>
                </div>
                <div class="inputs" v-if="steps == 1">
                    <div class="input">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="First Name" v-model="step1details.firstName">
                    </div>
                    <div class="input">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Last Name" v-model="step1details.lastName">
                    </div>
                    <div class="input">
                        <label for="phone">Phone Number</label>
                        <input type="text" id="phone" placeholder="Phone Number" v-model="step1details.phone">
                    </div>
                    <div class="input">
                        <label for="town">Town</label>
                        <input type="text" id="town" placeholder="Town" v-model="step1details.town">
                    </div>
                    <div class="input">
                        <label for="county">County</label>
                        <input type="text" id="county" placeholder="County" v-model="step1details.county">
                    </div>
                </div>
                <div class="inputs" v-if="steps == 2">
                    <div class="input">
                        <label for="title">title</label>
                        <input type="text" id="title" placeholder="eg. Fresh tomatoes seller" v-model="step2details.title">
                    </div>
                    <div class="input">
                        <label for="businessPhone">Business Phone Number</label>
                        <input type="text" id="businessPhone" placeholder="Business Phone Number" v-model="step2details.businessPhone">
                    </div>
                    <div class="input">
                        <label for="businessEmail">Business Email</label>
                        <input type="text" id="businessEmail" placeholder="Business Email" v-model="step2details.businessEmail">
                    </div>
                    <div class="input">
                        <label for="businessAddress">Business Address</label>
                        <input type="text" id="businessAddress" placeholder="Business Address" v-model="step2details.businessAddress">
                    </div>
                </div>
                <div class="inputs" v-if="steps == 3">
                    <div class="input last">
                        <h5>add a profile image</h5>
                        <label for="id">
                            <img src="../../assets/icons/add-svgrepo-com.svg" alt="" srcset="">
                        </label>
                        <input @change="handleImage" class="image" type="file" id="id" placeholder="ID" accept="image/*">
                    </div>
                </div>
                <div class="buttons">
                    <button class="next" @click="next" >{{
                        steps < 3 ? 'Next' : 'Finish'
                    }}</button>
                    <button :disabled="steps > 1? false : true" class="back" @click="steps--">Back</button>
                </div>
            </main>
            <section>
                <div class="text">
                    <h3>Why do we need this information?</h3>
                    <p>
                        We need this information to verify your identity and to make sure that you are a real person.
                    </p>
                </div>
                <Recent />
            </section>
        </div>
    </div>
</template>

<style scoped>
.additional-info {
    display: flex;
    justify-content: center;
    padding: 2rem;
    height: 100vh;
}
main {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.post a{
    width: 100%;
    display: grid;
    place-items: center;
}
.post a>img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    float: cent;
}

main,
section {
    padding: 10px;
}

section {
    width: 40%;
    margin-left: 30px;
    border-radius: 10px;
    height: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
}

.recent-wrapper {
    margin-top: 10px;
}
.tracker {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.step__number {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--main-yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
}

.step__title {
    margin-top: 1rem;
    text-align: center;
}

.input {
    margin-top: 10px;
}


input {
    width: 110%;
    padding: 10px;
    border: 1px solid #ccc;
    height: 50px;
    border-radius: 5px;
    outline: none;
    background: transparent;
    color: #fff;
}

input::placeholder {
    color: #ccc;
    background-color: transparent;
}
.buttons {
    margin-top: 30px;
}
button {
    padding: 10px 30px;
    border: 1px solid #ccc;
    border-radius: 30px;
    outline: none;
    margin-top: 10px;
    background-color: var(--main-yellow);
    transition: all 0.3s ease-in-out;
}
button:disabled {
    background-color: #ccc;
    color: #333;
    cursor: not-allowed;
}
label > img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    float: cent;
}
.last {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 1024px) {
    .additional-info {
        padding: 10px;
    }

    section {
        display: none;
    }

    .inputs {
        width: 80%;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .input{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    input {
        width: 100%;
    }
    .last input{
        width: 60%;
    }
    h2 {
        text-align: center;
    }
    main {
        width: 100%;
    }
}
@media screen and (max-width: 768px) {
    .additional-info {
        padding: 10px;
    }

    section {
        display: none;
    }

    .inputs {
        width: 100%;
        padding: 0;
    }
    input {
        width: 100%;
    }

    h2 {
        text-align: center;
    }
    main {
        width: 100%;
    }
}
    

.next {
    margin-right: 5px;
}
</style>