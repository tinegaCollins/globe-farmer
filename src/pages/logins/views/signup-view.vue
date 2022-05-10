<template>
    <div class="query" v-if="query">
      <div class="buyer">
        <img src="../istockphoto-1199186094-612x612.png" alt="image" srcset="">
        <router-link to ="/logins/signup/user"><button @click="togglequery">sign up as a buyer</button></router-link>
      </div>
      <div class="seller" @click="farmer">
         <img src="../../../assets/ad.png" alt="image" srcset="">
        <router-link to ="/logins/signup/farmer"><button @click="togglequery" >sign up as farmer</button></router-link>
      </div>
    </div>
    <router-view></router-view>
</template>

<script>


export default {
  data(){
    return{
      farmerInfo: {},
      query: true
    }
  },
  methods:{
    togglequery(){
      this.query = !this.query
    }
  }
}
</script>

<style scoped>
.query{
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
}
.query > *{
  display:flex;
  flex-direction: column;
  row-gap:20px;
}
.query a{
  align-self: center;
}
.query button{
  padding: 7px 15px;
  border-radius: 20px;
  width: 240px;
  background: var(--main-color);
  font-weight: 500;
}
.query button:hover{
  background: var(--btn-color);
  cursor: pointer;
}
.buyer button{
  background: var(--btn-color);
}
.buyer button:hover{
  background: var(--main-color);
}

.query img{
  height: 300px;
  width: auto;
  border-radius: 30px;
}
</style>