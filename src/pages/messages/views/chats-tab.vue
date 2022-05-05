<template>
  <h3>this is the chats tab</h3>
  <ul>
    <li>{{ message.to }}</li>
    <li> {{message.from }}</li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id,
      message: {}
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

  }
}
</script>

<style>

</style>