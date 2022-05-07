<template>
  <h3 class="header"> inbox </h3>
  <div class="wrapper">
    <div class="text-box">
      <ul>
        <h3>{{ message.to }}</h3>
        
      </ul>
      <form action="" method="post">
        <input type="text" placeholder="type your message">
        <button>send</button>
      </form>
  </div>
  <div class="image">
    <img src="../../../assets/icons/undraw_access_account_re_8spm.svg">
  </div>
  </div>
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

<style scoped>
.header{
  margin-top: 15px;
}
.wrapper{
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.image img{
  height: 400px;
  width: auto;
}
.text-box{
  width: 600px;
  border: 1px solid #333;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.text-box ul{
  position: relative;
  padding: 10px;
 
}
ul h3{
  border-bottom: 1px solid #333;
}
.text-box ul li{
  position: relative;
  max-width: 35ch;
  min-height: 40px;
  background: grey;
  margin: 5px 0 5px 0;
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  border-radius: 5px;
}
.text-box .to{
   left: 250px;
}
.text-box .from{
  left: 0;
}
.text-box form{
  position: fixed;
  bottom: 24px;
  height: 30px;
  background: crimson;
  width: 570px;
}
</style>