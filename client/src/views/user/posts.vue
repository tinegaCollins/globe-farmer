<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useUserStore } from '../../stores/user';
import router from '../../router';
import Recent from '../../components/recent.vue';
const DevUrl = import.meta.env.VITE_DEV_URL;

const userStore = useUserStore();
const email = ref<string>(userStore.email);
if (!email.value) {
    router.push('/auth/login')
}
let additionalInfo = ref<Boolean>(false);
const isUserSeller = async () => {
    await axios.get(`${DevUrl}api/user/check-if-seller/${email.value}`).then((res) => {
        if (res.status != 200) {
            additionalInfo.value = true;
        }
    }).catch((err) => {
        console.log(err);
    })
}
isUserSeller();

const steps = ref<number>(1);
</script>

<template>
    <div class="post">
        <div class="additional-info" v-if="additionalInfo">
            <main>
                <RouterLink to="/">
                    <img src="../../../icon.png" alt="">
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
                        <input type="text" id="firstName" placeholder="First Name">
                    </div>
                    <div class="input">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Last Name">
                    </div>
                    <div class="input">
                        <label for="phone">Phone Number</label>
                        <input type="text" id="phone" placeholder="Phone Number">
                    </div>
                    <div class="input">
                        <label for="town">Town</label>
                        <input type="text" id="town" placeholder="City">
                    </div>
                    <div class="input">
                        <label for="county">County</label>
                        <input type="text" id="county" placeholder="County">
                    </div>
                </div>
                <div class="buttons">
                    <button class="next" @click="steps++">Next</button>
                    <button class="back" @click="steps--">Back</button>
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
    width: 120%;
    padding: 10px;
    border: 1px solid #ccc;
    height: 50px;
    border-radius: 5px;
    outline: none;
    background: transparent;
}

input::placeholder {
    color: #ccc;
    background-color: transparent;
}

button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    margin-top: 10px;
    background-color: var(--main-yellow);
}

@media screen and (max-width: 1024px) {
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