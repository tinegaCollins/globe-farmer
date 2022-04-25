<template>
  <div class="wrapper">
    <h3 id="trendingAds">This Week</h3>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   
   .wrapper > h3{
       position: relative;
    }
    #trendingAds::after{
    content: "";
    width: 115px;
    height: 2px;
    background-color: black;
    position: absolute;
    left: 0;
    bottom: -5px;
 }
</style>