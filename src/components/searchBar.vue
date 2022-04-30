<template>
  <div class="container-3">
    <input type="search" id="search" placeholder="search product or farmer">
    <button class="icon"><img src="../assets/icons/mg.svg" alt="" srcset=""></button>
  </div>
</template>
<style scoped>

.container-3 {
	 max-width: 400px;
	 overflow: hidden;
	 white-space: nowrap;
}
.container-3 img{
    width: 20px;
    height: 20px;
}
 .container-3 input#search {
	 max-width: 400px;
	 height: 2rem;
	 background: #333;
	 color: #eceff1;
	 border: none;
	 float: left;
	 font-size: 1rem;
	 line-height: 1.5em;
	 padding: 0 0 0 5px;
	 border-radius: 5px;
	 transition: all .4s ease-in-out;
}
.container-3 input::placeholder{
    color: #eceff1;
    font-size: .8rem;
}

 .container-3 button.icon {
	 position: absolute;
	 border: none;
	 background: none;
	 color: #eceff1;
	 height: 2rem;
	 width: 3rem;
	 font-size: .6rem;
	 line-height: 1.5em;
	 border-radius: 0 5px 5px 0;
	 opacity: 0;
	 z-index: 1;
	 transition: all 0.3s ease;
     padding-top: 5px;
}
 .container-3 input#search:hover + button.icon, .container-3 button.icon:hover, .container-3 input#search:focus + button.icon, .container-3 input#search:active + button.icon {
	 outline: none;
	 opacity: 1;
	 margin-left: -3rem;
}
 .container-3 input#search:hover, .container-3 input#search:focus, .container-3 input#search:active {
	 outline: none;
	 padding-right: 3rem;
}
 .container-3 button.icon:hover, .container-3 button.icon:active {
	 background-color: var(--main-color);
	 color: #eceff1;
     cursor: pointer;
}
 

</style>