<template>
  <div class="wrapper" v-if="produce">
      <h3>Produce Details</h3>
      <div class="maincontent" > 
          <div class="imagearea">
              <img :src="produce.image" alt="product image">
          </div>
          <div class="details" v-if="produce">
            <div class="sideContent">
                <h3>{{ produce.item }}</h3>
                <h4>price: {{ produce.price }}</h4>
                <p>location: {{ produce.location }}</p>
                <p><span> FarmerName: </span> {{ produce.name }} </p>
                <p class="phone">{{ produce.phone }} </p>
                <p>{{ response1 }}</p>
            </div>
            <p>{{response}}</p>
            <button @click.once="createChat">
                send a direct message
                <img src="../messages/assets/icons/send-svgrepo-com.svg">
            </button>
            <div class="moreDetails">
                <p> {{ produce.moredetails }}</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
    data(){
      return{
        produce: null,
        id: this.$route.params.id,
        userID: '',
        response: '',
        response1: '',
        farmerID: '',
        sender1: '',
        sender2: '',
        chat: {
            sender1: '',
            sender2: '',
            messages : []
        }
      }
   },
   mounted(){
      this.userID = this.$store.getters.getUserID
       fetch('http://localhost:3000/produces/'+ this.id)
       .then(res => res.json())
       .then(data => {
           this.produce = data
       })
       .then(()=>{
            this.farmerID = this.produce.senderId
            this.chat.sender1 = this.userID
            this.chat.sender2 = this.farmerID
            console.log(this.chat)
       })
       .catch(err => console.log(err)) 
   },
   methods: {
       createChat(){
           if(this.userID == ''){
               this.response = '☹️ you are not logged in'
           }
           else {
                axios.post('http://localhost:3000/chat/', this.chat)
                .then(response=>{
                    this.response1 = response.data.message
                })
                .then(()=>{
                    let link = `/messages.html#/messages/${this.userID}/${this.farmerID}`
                    window.location.href = link
                })
                .catch(error=>{
                    console.log(error);
                })
           }
       }
   }
}
</script>

<style scoped>
.wrapper{
    font-family: var(--text-font);
}
.wrapper > h3{
    margin: 5px 15px; 
    text-align: start;
}
.maincontent{
    width: 100%;
    display: flex;
    padding: 20px;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 40px;
    border: 1px solid #333;
    box-shadow: 5px 5px 5px 5px #f2f2f2;
}
.maincontent img{
    width: 500px;
    height: auto;
}
.imagearea{
    padding-top: 40px;
    height: 100%;
}
.details {
    width: 300px;
    border: 1px solid #333;
    padding: 30px;
    border-radius: 20px;
}
.sideContent > *{
    margin-top: 10px;
}
.details button {
    height: 30px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 5px;
    border: none;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: var(--dark-yellow);
}
.details button:hover {
    cursor: pointer;
}
.details button img {
    height: 20px;
    width: auto;
}
.phone{
    background-color: var(--main-green);
    padding: 8px;
    border-radius: 5px;
}
.phone:hover{
    cursor: pointer;
}
.sideContent p > span {
    font-size: 1.1rem;
    font-weight: 600;
}
.moreDetails{
    margin-top: 15px;
    font-size: .8rem;
}

@media screen and (max-width: 768px){
    .wrapper{
        display: block;
    }
    .maincontent img{
    width: 80vw;
    height: auto;
    }
    .moreDetails{
        padding: 10px;
    }
    .chat-box{
        width: 90vw;
    }
}
</style>