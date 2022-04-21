<template>
    <div class="bar">
        <div class="barItem"><p>popular items</p></div>
        <div class="barItem"><p>new items</p></div>
        <div class="barItem"><p>other shit</p></div>
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
    min-width: 100vw;
    margin-top: 3px;
    background-color:#e2cfcf;
    display: flex;
    column-gap: 10px;
    align-items: center;
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
}
</style>