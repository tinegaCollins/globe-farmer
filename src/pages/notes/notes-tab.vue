<template>
  <appTopBar/>
  <div class="wrapper">
    <main v-for="note in notes" :key="note.noteid">
    <p>{{ note.note}}</p>
    <h4> {{ note.date}} </h4>
  </main>
  </div>
</template>

<script>

import appTopBar from '../../components/appTopBar.vue'
import '../../assets/styles/global.css'
export default {
  components:{
    appTopBar
  },
  data(){
    return{
      notes: []
    }
  },
  mounted(){
    fetch(' http://localhost:3000/notifications')
    .then(res => res.json())
    .then(data => {
      this.notes = data
    })
    .catch(err => console.log(err))
  }
}
</script>

<style scoped>
.wrapper{
  padding: 30px;
}
main{
  font-family: var(--main-font);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: var(--main-color);
  font-size: .8rem;
  margin-top: 10px;
  transition: all .3s ease;
}
main:hover{
  cursor: pointer;
  background-color: #22ffa6;
}
</style>