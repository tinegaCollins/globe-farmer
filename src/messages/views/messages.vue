<template>

<h1>messages</h1>

</template>

<script>
export default{
    data(){
        return{
            messages: null,
            id1: this.$route.params.id1,
            id2: this.$route.params.id2
        }
    },
    mounted(){
        fetch('http://localhost:3000/messages/' + this.id1 + '/' + this.id2)
        .then(res => res.json())
        .then(data =>{
            this.messages = data
        })
        .catch(err => console.log(err))
    }
}
</script>