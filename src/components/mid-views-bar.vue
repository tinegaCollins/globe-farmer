<template>
    <div class="bar">
        <div class="barItem"><p>popular items</p></div>
        <div class="barItem"><p>new items</p></div>
        <div class="barItem"><p>other shit</p></div>
        <div class="barItem"><p>your choice</p></div>
        <div class="barItem"><p>Freshhhhh</p></div>
        <div class="barItem"><p>around you</p></div>
        <div class="barItem"><p>filter items</p></div>
        <div class="barItem"><p>popular items</p></div>
        <div class="barItem"><p>popular items</p></div>
        <div class="barItem"><p>popular items</p></div>
        <div class="barItem"><p>popular items</p></div>
        <div class="barItem"><p>popular items</p></div>
        <div class="barItem"><p>popular items</p></div>
        <div class="barItem"><p>popular items</p></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bar{
    height: 35px;
    max-width: calc(100vw- 100%);
    margin-top: 15px;
    background-color:#e2cfcf;
    display: flex;
    column-gap: 10px;
    align-items: center;
    overflow-x: auto ;
    padding: 0 5px 0 10px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}
::-webkit-scrollbar{
    height: 4px;
    width: 4px;
    background: gray;
}
::-webkit-scrollbar-track{
    border-radius: 20px;
}
::-webkit-scrollbar-thumb:horizontal{
    background: red;
    border-radius: 10px;
}
.bar::after{
    content: "";
    height: 35px;
    width:35px;
    background: linear-gradient(90deg,rgba(174, 197, 197, 0),rgb(174, 197, 197)) ;
    position: absolute;
    right: 0;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
}
/* edit the scroll bar  */
.barItem{
    background: var(--main-color);
    padding: 2px 7px 0px 7px;
    height: 25px;
    border-radius: 15px ;
    min-width: max-content;
    font-family: var(--second-font);
    font-size: .8rem;
    transition: all .2s ease-in-out;
    margin-left: 3px;
}
.barItem:hover{
    cursor: pointer;
    background-color: #086641;
    color: white;
}
@media screen and (max-width: 768px){
    .bar{
        position: absolute;
        left: 0;
    }
}
</style>