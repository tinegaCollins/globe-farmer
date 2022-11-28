<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import router from '../../../router';
import { Icon } from '@iconify/vue';
import axios from 'axios';
import { useUserStore } from '../../../stores/user';
let user = ref(useUserStore());

console.log(user.value.userName);
const route = useRoute();
let routeParams = (route.params.id);
const DevUrl = import.meta.env.VITE_DEV_URL;
interface message {
    _id: string;
    sender: string;
    message: string;
    createdAt: string;
    read: boolean;
}

let messages = ref<message[]>([]);
const scrolltoBottom = async () => {
    let chat = document.getElementById('chat-box');
    console.log(chat);
    const scrollToBottomd = (node:any) => {
        console.log(node);
	node.scrollTop = node.scrollHeight;
}
    scrollToBottomd(chat);
}
async function getChat() {
   await axios.get(`${DevUrl}api/get-messages/${routeParams}`) 
    .then((res) => {
         console.log(res.data);
        messages.value = res.data;
        scrolltoBottom();
    })
}
onMounted(async () => {
    await getChat();
    await scrolltoBottom();
})
watch(route, async (newRoute) => {
    routeParams = newRoute.params.id;
    await getChat();
    await scrolltoBottom();
    if( window.innerWidth < 768) {
    console.log('mobile');
}
});
const singleChat = ref<HTMLInputElement | null>(null);
if( window.innerWidth < 768) {
    console.log('mobile');
    document.querySelector('.single-chat')?.classList.add('full-screen');
}

const back = ()=> {
    router.go(-1);
}

getChat();
</script>
<template>
    <div ref="singleChat" class="single-chart h-[calc(100vh-30px)] w-full p-2">
        <button @click="back" class="back">
            <Icon icon="material-symbols:chevron-left" />
        </button>
        <div>
            <div class="flex">
                <div class="flex items-center pl-1">
                    <Icon icon="mdi:user-circle-outline" class="text-5xl" />
                    <div class="if-active"></div>
                    </div>
                    <h3 class="ml-2 self-center">Ot</h3>
                    <div class="flex items-center ml-auto gap-2 border border-sky-400 rounded-3xl px-4">
                        <Icon icon="material-symbols:call" class="text-3xl" />
                        <Icon icon="material-symbols:video-call" class="text-3xl" />
                        <Icon icon="mdi:dots-horizontal-circle-outline" class="text-3xl" />
                    </div>
            </div>
        </div>
        <div class="h-5/6 overflow-y-scroll p-2" id="chat-box">
            <div class="flex flex-col gap-3">
                <div v-for="message in messages" :key="message._id" class="bg-sky-500 p-5 rounded-3xl ml-auto relative w-64 flex flex-col" :class="message.sender.toLocaleLowerCase() == user.userName.toLocaleLowerCase() ? 'ml-auto right-message' : 'ml-0 left-message'">
                        <p>{{message.message}}</p>
                        <p class="self-end">{{message.sender}}</p>
                        <p class="text-xs self-end">{{
                            new Date(message.createdAt).toLocaleString()
                            }}</p>
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center gap-2">
                <Icon icon="mdi:emoticon-outline" class="text-3xl" />
                <input type="text" placeholder="Type a message" class="w-full border border-sky-400 rounded-3xl px-4 py-2" />
                <Icon icon="mdi:paperclip" class="text-3xl" />
                <Icon icon="mdi:camera" class="text-3xl" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.single-chart {
    color: #333;
    display: flex;
    flex-direction: column;
    position: relative;
}
.back {
    display: none;
}
@media screen and (max-width: 768px) {
    .single-chart {
        padding: 3px;
        flex-direction: column;
    }
    .full-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background-color: #fff;
    }
    .back img {
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-right: 15px;
    }
}
.left-message > p::before{
      content: '';
      position: absolute;
      bottom: -7px;
      z-index: 100;
      border-top: 35px solid #0EA5E9;
      left: 0;
      border-right: 35px solid transparent;

}
.right-message >  p::before{
    content: '';
    position: absolute;
    bottom: 0px;
    z-index: 100;
    border-top: 35px solid #0EA5E9;
    right: 0;
    border-left: 35px solid transparent;
}
/* edit scroll bar */
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #888;
}
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

</style>