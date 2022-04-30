<template>
  <h1>this page is not available</h1>
  <button @click="back">go back</button>
</template>

<script>
export default {
  methods: {
    back(){
      this.$route(-1)
    }
  }
}
</script>

<style>

</style>