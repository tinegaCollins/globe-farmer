<template>
   <section id="sideBar" :class="{ moveSidebar : moveSidebar }">
            <div class="location">
                <h2>Location<img src= "../assets/icons/arrow-right-solid.svg"></h2>
                <p>all Kenya</p>
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
    props: ['moveSidebar'],

}
</script>
<style scoped>
#sideBar{
    width: 300px;
    background-color: var(--main-color);
    font-family: var(--main-font);
    font-size: 1rem;
    z-index: 1;
    height: max-content;
    /* this needs to be sticky */
}
.location{
    margin-top: 30px;
}
p{
    margin-right: 30px;
}
#sideBar .location,.categories{
    margin-left: 20px;
}
#sideBar .categories p, #sideBar .location p{
    transition: all .2s ease-in-out;
    padding: 10px;
}
#sideBar .categories p:hover,#sideBar .location p:hover{
    background-color: #086641;
    color: white;
    cursor: pointer;
}
#sideBar h2 img{
    height: 20px;
    width: 20px;
    position: relative;
    top: 3px;
}
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
        margin-top: 30px;
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