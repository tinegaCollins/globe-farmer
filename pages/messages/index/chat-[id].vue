<template>
    <div class="chat-id">
        <div class="chat-itself">
            <div class="chat-top-bar">
                <img src="~/assets/temp/avatar.jpg" alt="" srcset="">
                <div class="chat-single-details">
                    <div class="last-seen">
                        <h4>Ariana grande</h4>
                        <p>last seen 4:04pm tue</p>
                    </div>
                    <div class="chat-icons">
                        <img id="call-icon" src="~/assets/icons/call-svgrepo-com.svg" alt="" srcset="">
                        <img src="~/assets/icons/search-svgrepo-com.svg" alt="" srcset="">
                        <img src="~/assets/icons/three-dots-vertical-svgrepo-com.svg" alt="" srcset="">
                    </div>
                </div>
            </div>
            <div class="messages-tab">
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ex dolorem corrupti accusamus voluptatibus illo odio beatae aut accusantium sed.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ex dolorem corrupti accusamus voluptatibus illo odio beatae aut accusantium sed.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem ipsum dolor ffkfbm.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem ipsum tuytt tfw.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ex dolorem corrupti accusamus voluptatibus illo odio beatae aut accusantium sed.</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>last .</p>
                </div>
                <div class="left">
                    <span>11:06am</span>
                    <p>last .</p>
                </div>
            </div>
            <div class="chat-input">
                <textarea name="" id="" cols="30" rows="10" placeholder="write your message..."></textarea>
                <button><img src="~/assets/icons/send-svgrepo-com.svg" alt="" srcset=""></button>
            </div>
        </div>
        <div class="reciever-profile">

        </div>
    </div>
</template>

<script setup >
const router = useRoute();
const param = ref(router.params.id);
onMounted(()=>{
    alignText()
})
const alignText = ()=>{
    let li_s = [...document.querySelectorAll(".messages-tab div")]
    let reverse_li_s = [];
    let lenght = li_s.length + 1
    for (let j = 0; j < lenght; j++) {
        let pop = li_s.pop()
        reverse_li_s.push(pop)
    }
    console.log(reverse_li_s)
    for (let i = 0; i < reverse_li_s.length; i++){
        reverse_li_s[i].style.marginBottom = `${i}00px`
    }
}
</script>

<style>
.chat-id {
    padding: 0 10px;
    width: 100%;
    height: calc(90vh - 13px);
    display: grid;
    grid-template-columns: 3fr 1fr;
    overflow-y: hidden;
}
.chat-itself{
    background-color: rgba(96, 216, 130, .2);
    height: calc(90vh - 13px);
    border-radius: 20px;
    position: relative;
    width: 100%;
}
.reciever-profile{
    height: 100%;
}
.chat-top-bar {
    background-color: rgb(0, 128, 0, .2);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    padding: 10px 15px;
    align-items: center;
    gap: 10px;
}
.chat-top-bar > img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.chat-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.chat-icons > img{
    height: 23px;
    width: 23px;
    margin: 0 5px;
}
#call-icon{
    height: 27px;
    width: 27px;
}
.chat-single-details{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.last-seen {
    font-size: .8rem;
}
.last-seen h4 {
    position: relative;
    top: 3px;
}
.last-seen p{
    margin-top: 4px;
}
.chat-input{
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between; 
    align-items: center;

}
.chat-input textarea{
    padding: 10px;
    width: 80%;
    height: 10px;
    background-color: transparent;
    outline: none;
    appearance: none;
    border: none;
}
.chat-input button {
    padding: 5px 10px;
    background-color: var(--main-yellow);
    border: none;
    border-radius: 5px;
}
.chat-input img {
    height: 25px;
}
.messages-tab {
    height: 80%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
}
.messages-tab > *{
    position: absolute;
    width: 100%;
    bottom: 0;
}
.messages-tab > * p {
    font-size: .9rem;
    max-width: 40%;
    background-color: var(--main-yellow);
    padding: 15px 10px;
    border-radius: 10px;
    position: relative;
}
.messages-tab > * p::before{
      content: '';
      position: absolute;
      bottom: -7px;
      border-top: 15px solid var(--main-yellow);
      left: 0;
      border-right: 15px solid transparent;
}
.messages-tab span{
    font-size: .6rem;
}
</style>