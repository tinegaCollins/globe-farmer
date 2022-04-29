<template>
   <div class="bars">
        <img :src='imgSrc' @click="sidebar">
    </div>
    <div class="bar">
        <router-link to="/" class="barItem">home</router-link>
        <router-link to="/new-items" class="barItem">new items </router-link>
        <router-link to="/popular-items" class="barItem">popular items</router-link>
        <div class="barItem"><p>Tomatoes</p></div>
        <div class="barItem"><p>Irish Potatoes</p></div>
        <div class="barItem"><p>around you</p></div>
        <div class="barItem"><p>Onions</p></div>
        <div class="barItem"><p>Carrots</p></div>
        <div class="barItem"><p>Green peppers</p></div>
        <div class="barItem"><p>String Beans</p></div>
        <div class="barItem"><p>Peas</p></div>
        <div class="barItem"><p>Spring Onions</p></div>
        <div class="barItem"><p>Brocolli</p></div>
        <div class="barItem"><p>Spinach</p></div>
        <div class="barItem"><p>Sukuma Wiki</p></div>
        <div class="barItem"><p>Indegenous Vegetables</p></div>
    </div>
</template>

<script>
export default {
    methods: {
        sidebar(){
            this.$emit('sidebar')
            this.imgSrc = this.imgSrc === './icons/bars-solid.svg' ? './icons/xmark-solid.svg' : './icons/bars-solid.svg'
        }
    },
    data(){
        return{
            //bind to  the image to be an x when the sidebar is open
            imgSrc: './icons/bars-solid.svg'
        }
    }
}
</script>

<style scoped>
.bar{
    height: 50px;
    width: 100%;
    margin-top: 15px;
    background-color:#e2cfcf;
    display: flex;
    column-gap: 10px;
    align-items: center;
    overflow-x: scroll;
    padding: 0 5px 0 10px;
    border-top-left-radius: 25px;
}
::-webkit-scrollbar{
    height: 8px;
    width: 0px;
}
::-webkit-scrollbar-track{
    background: var(--main-color);
}
::-webkit-scrollbar-thumb{
    width: 10px;
    height: 10px;
    background: black;
}
@supports (scrollbar-color: red blue){
    *{
        scrollbar-color: black #086641;
        scrollbar-width: thin;
    }
}
.bar::after{
    content: "";
    height: 45px;
    width:45px;
    background: linear-gradient(90deg,rgba(174, 197, 197, 0),rgb(174, 197, 197)) ;
    position: absolute;
    right: 0;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
}
.barItem{
    background: var(--main-color);
    padding: 3px 7px 0px 7px;
    height: 25px;
    border-radius: 15px ;
    min-width: max-content;
    font-family: var(--second-font);
    font-size: .8rem;
    transition: all .2s ease-in-out;
    margin-left: 3px;
    font-weight: bold;
}
.barItem:hover{
    cursor: pointer;
    background-color: #086641;
    color: white;
}
img{
    height: 20px;
    width: 20px;
    display: none;
}
@media screen and (max-width: 768px){
    img{
        display: inline;
    }
    .bar{
        position: relative;
    }
}
a{
  text-decoration: none;
  color: white;
  font-weight: bold;
}
a:visited{
    color: black;
}
a.router-link-exact-active{
    background-color: var(--btn-color);
}
</style>