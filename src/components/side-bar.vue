<template>
   <section id="sideBar">
            <div class="location">
                <h2>Location<img src= "../assets/icons/arrow-right-solid.svg"></h2>
                <p>All Kenya</p>
            </div>
            <div class="categories">
                <h2>Categories<img src= "../assets/icons/arrow-right-solid.svg"></h2>
                <p>Tomatoes</p>
                <p>Irish Potatoes</p>
                <p>Onions</p>
                <p>Carrots</p>
                <p>Green peppers</p>
                <p>String Beans</p>
                <p>Peas</p>
                <p>Spring Onions</p>
                <p>Brocolli</p>
                <p>Spinach</p>
                <p>Sukuma Wiki</p>
                <p>Indegenous Vegetables</p>
            </div>
   </section>
</template>

<script>
export default {

}
</script>
<style scoped>
#sideBar{
    width: 300px;
    background-color: var(--main-color);
    margin-top: 30px;
}
#sideBar .location,.categories{
    margin-left: 20px;
}
.categories{
    height: 100vh;
}
#sideBar .categories p, #sideBar .location p{
    padding: 10px;
}
#sideBar .categories p:hover,#sideBar .location p:hover{
    background-color: hsl(123,60%, 37%);
}
#sideBar h2 img{
    height: 20px;
    width: 20px;
    position: relative;
    top: 3px;
}

/* main content */
#bars{
    height: 20px;
    width: 30px;
    display:  none;
}

@media only screen and (max-width: 768px) {
    #sideBar{
        position: fixed;
        width: 100%;
        left: -100%;
        transition: all .3s cubic-bezier(0.2, 0.055, 0.675, 0.59) ;
    }
    .moveSidebar{
        left: 0% !important;
    }
    #bars{
        display: unset;
        position: absolute;
        left: 10px;
        top: 90px;
        z-index: 1070;
    }
}
</style>