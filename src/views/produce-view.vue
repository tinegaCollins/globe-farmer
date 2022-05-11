<template>
  <div class="wrapper" v-if="produce">
      <h3>Produce Details</h3>
      <div class="maincontent" > 
          <div class="imagearea">
              <img :src="  '/' + produce.image" alt="product image">
          </div>
          <div class="sideContent">
            <h3>{{ produce.item }}</h3>
            <h4>price: {{ produce.price }}</h4>
            <p>location: {{ produce.location }}</p>
            <p><span> FarmerName: </span> {{ produce.name }} </p>
            <p class="phone">{{ produce.phone }} </p>
          </div>
      </div>
      <div class="moreDetails">
          <p> {{ produce.moredetails }}</p>
      </div>
      <div class="chat-box">
          <div class="messages"></div>
          <div class="send">
              <input type="text" placeholder="write you massage here">
              <button>send</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
          produce: null,
          id: this.$route.params.id
      }
   },
   mounted(){
       fetch('http://localhost:3000/produces/'+ this.id)
       .then(res => res.json())
       .then(data => {
           this.produce = data
       })
       .catch(err => console.log(err))
   }
}
</script>

<style scoped>
.wrapper{
    font-family: var(--main-font);
    display: grid;
    place-items: center;
}
.wrapper > h3{
    margin-top: 5px;
    text-decoration: underline;
}
.maincontent{
    width: 100%;
    display: flex;
    padding: 20px 10px 30px 10px;
    justify-content: space-around;
    flex-wrap: wrap;
}
.maincontent img{
    width: auto;
    height: 400px;
}
.sideContent > *{
    margin-top: 6px;
}
.phone{
    background-color: var(--main-color);
    padding: 8px;
    border-radius: 5px;
}
.phone:hover{
    cursor: pointer;
}
.sideContent p > span {
    font-size: 1.3rem;
    font-weight: 600;
}
.moreDetails{
    padding: 50px;
}
.chat-box{
    height: 100px;
    background: #74e7b9;
    width: 400px;
    height: 300px;
    position: relative;
}
.chat-box .send{
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 35px;
}
.chat-box .send button{
    padding: 0 10px;
    border-radius: 0%;
    border: none;
}
.chat-box .send input{
    width: 100%;
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