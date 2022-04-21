<template>
    <div class="bar">
        <div class="barItem"><p>popular items</p></div>
        <div class="barItem"><p>popular items</p></div>
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
    height: 30px;
    min-width: 100vw;
    margin-top: 5px;
    background-color:#e2cfcf;
    display: flex;
    column-gap: 10px;
    align-items: center;
    overflow: scroll;
}
/* edit the scroll bar  */
.barItem{
    background: var(--main-color);
    padding: 3px 7px 0px 7px;
    height: 25px;
    border-radius: 15px ;
    min-width: max-content;
}
</style>