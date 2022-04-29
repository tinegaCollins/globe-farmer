<template>
<div class="wrapper">
    <h3>product details</h3>
    <p>the product details  {{ product.name }}  </p>
    <img src="product.products.image" alt="product image">
    <h1 @click="goBack">X</h1>
</div>
  </template>

<script>
export default {
  props: ['det'],
  data(){
    return{
      product: [],
      image: null
    }
  },
  methods: {
    goBack(){
      console.log(this.product)
      console.log(this.product.products.image)
      //this.$router.go(-1)
    }
  },
  mounted(){
       fetch(' http://localhost:3000/sellers/'+ this.det)
       .then(res => res.json())
       .then(data => {
           this.product = data
       })
       .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
  .wrapper{
    font-family: var(--main-font)
  }
  .wrapper > h3{
    margin: 15px 0;
    position: relative;

  }
  .wrapper > h3::after{
    content: "";
    width: 130px;
    height: 2px;
    background-color: black;
    position: absolute;
    left: 0;
    bottom: -5px;
  }
</style>