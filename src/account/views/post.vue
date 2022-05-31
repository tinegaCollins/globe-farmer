<template>
   <a href="/"><img src="../../../2.png"></a>
   <h3>Post an ad</h3>
   <h3 v-if="ifLogin">login to continue</h3>
   <h3> {{ response1 }}</h3>
   <div class="mainContent" v-if="mainContent">
     <main>
      <label for="name"> 
        Name of Produce:
      </label>
      <input type="text" id="name" v-model="product.item">
      <label for="type">
        Type of Produce:
      </label>
      <input type="text" id="type" v-model="product.type">
      <label for="price">
        Price:
      </label>
      <input type="text" id="price" v-model="product.price">
      <label for="more">
        more details about your ad:
      </label>
      <input type="text" id="more" v-model="product.moredetails">
      <label for="image">
        image link:
      </label>
      <input type="text" id="image" v-model="product.image">
      <button @click.once="postProduct">post</button>
     </main>
   <article>
     <h4>add images</h4>
      <form class="mt-4"
            action="/upload"
            method="POST"
            enctype="multipart/form-data"
            @submit="send"
          >
              <input
                type="file"
                name="file"
                id="image"
              />
          </form>
   </article>
   </div>
</template>

<script>
import  '../../assets/styles/main.css';
import axios from 'axios';


export default{
  data(){
    return{
      userID: '',
      userDetails: null,
      ifLogin: false,
      mainContent: true,
      product: {
        item: '',
        price: '',
        senderId: '',
        name: '',
        image: '',
        moredetails: '',
        phone: '',
        location: ''
      },
      response1: null
    }
  }, 
  methods: {
    postProduct(){
      axios.post('http://localhost:3000/produces', this.product)
      .then(response=>{
        this.response1 = response.data.message
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },
  mounted(){
    this.userID = this.$store.getters.getUserID
    if(this.userID === ''){
      this.ifLogin = true
      this.mainContent = false
    }
    else{
      fetch('http://localhost:3000/users/' + this.userID)
      .then(res => res.json())
      .then(data => {
        this.product.name = data.firstName + ' ' + data.lastName;
        this.product.phone = data.phone;
        this.product.location = data.county
        this.userDetails = data
      })
      .then(()=>{
         this.product.senderId = this.userID
      })
      .catch(err => console.log(err))
    }
  }
}
</script>
<style scoped>
a{
  margin-top: 20px;
}
a > img{
  height: 80px;
  width: auto;
}
h3{
  font-family: var(--text-font);
  margin-left: 20px;
}
.mainContent{
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: var(--text-font);
  row-gap: 20px;
  padding:0 200px;
}
@media screen and (max-width: 400px) {
  .mainContent{
    padding: 20px;
  }
}
.mainContent main {
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 300px;
  justify-content: space-around;
}
.mainContent main input{
  border: none;
  height: 30px;
  appearance: none;
  outline: none;
  border-bottom: 1px solid #333;
}
main button{
  width: min-content;
  padding: 7px 14px;
  border-radius: 10px;
  border: 1px solid black; 
}
article h4{
  margin: 10px 0;
}
article form{
  display: flex;
  flex-direction: column;
}
article form input{
  height: 150px;
  width: 150px;
}
article form button{
  padding: 7px 15px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: var(--main-color);
  transition: background-color .3s ease-in-out;
}
article form button:hover{
  background-color: var(--btn-color);
}
</style>