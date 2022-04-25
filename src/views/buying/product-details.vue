<template>
  <h1>product details page</h1>
  <p>the product details  {{ det }}  </p>
  <h1 id="x" @click="goBack">X</h1>
</template>

<script>
export default {
  props: ['det'],
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>