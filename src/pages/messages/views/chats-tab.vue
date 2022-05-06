<template>
  <h3 @click="show"> inbox </h3>
  <ul>
    <li>{{ message.to }}</li>
    <li> {{message.from }}</li>
    <li> {{message.messages}}</li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id,
      message: {},
      // messages: this.message.messages,
    }
  },
  mounted(){
    fetch('http://localhost:3000/messages/'+ this.id)
    .then(res => res.json())
    .then(data => {
      this.message = data
    })
    .catch(err => console.log(err))
  },
  methods: {
    show(){
      console.log(this.messages)
    }
  }
}
</script>

<style>

</style>