<template>
    <h3>messages</h3>
    <router-view></router-view>
</template>


<script >


import '../assets/styles/main.css'

export default{
    data(){
        return{
        }
    },
    mounted(){
        // console.log(this.userID)
    }
}
</script>
<style scoped>
*{
    font-family: var(--text-font);
}
</style>