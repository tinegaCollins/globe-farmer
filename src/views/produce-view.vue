<template>
  <div class="wrapper" v-if="produce">
      <h3>Produce Details</h3>
      <div class="maincontent" > 
          <div class="imagearea">
              <img :src="  '/' + produce.products.image" alt="product image">
          </div>
          <div class="sideContent">
            <h3>{{ produce.products.item }}</h3>
            <h4>price: {{ produce.products.price }}</h4>
            <p>location: {{ produce.location }}</p>
            <p><span> FarmerName: </span> {{ produce.name }} </p>
            <p class="phone">{{ produce.phone }} </p>
          </div>
      </div>
      <div class="moreDetails">
          <p> {{ produce.products.moredetails }}</p>
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
}
.wrapper > h3{
    margin-top: 5px;
    text-decoration: underline;
}
.maincontent{
    display: flex;
    padding: 20px 10px 30px 10px;;
    justify-content: space-around;
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
</style>