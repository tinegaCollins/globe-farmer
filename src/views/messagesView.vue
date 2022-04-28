<template>
  <div class="wrapper">
      <div class="messages">
          <ul>
              <h1>this is the messages tab</h1>
          </ul>
      </div>
      <div class="chatBox"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          incomingMessage: [],
          outGoing:[]
        }
    },
    mounted(){

    }
}
</script>

<style scoped>

</style>
