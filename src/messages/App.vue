<template>
    <main>
        <div class="links">
            <router-link to="/inbox"><img src="./assets/icons/inbox-solid.svg" ></router-link>
            <router-link to="/notifications"><img src="./assets/icons/bell-solid.svg"></router-link>
            <router-link to="/bookmarks"><img src="./assets/icons/bookmark-solid.svg"></router-link>
        </div>
        <router-view></router-view>
    </main>

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
main{
    min-height: 100vh;
    padding : 0 20px;
}
main .links{
    height: 100vh;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 2px solid #333;
    row-gap: 30px;
}
main .links a img{
    height: 25px;
}
</style>