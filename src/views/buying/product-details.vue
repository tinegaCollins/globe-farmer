<template>
  <h1>product details page</h1>
  <p>the product details  {{ det }}  </p>
  <h1 @click="goBack">X</h1>
  <p>name: {{ product.name }} </p>
  <p>  {{ product.location }} </p>
</template>

<script>
export default {
  props: ['det'],
  data(){
    return{
      product: null
    }
  },
  // methods: {
  //   goBack(){
  //     this.$router.go(-1)
  //   }
  // },
  // mounted(){
  //      fetch(' http://localhost:3000/sellers/'+ this.det)
  //      .then(res => res.json())
  //      .then(data => {
  //          this.product = data
  //      })
  //      .catch(err => console.log(err.message))
  // }
}
</script>

<style scoped>
</style>