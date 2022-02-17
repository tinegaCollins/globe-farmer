const menuButton = document.querySelector("#menu")
const navBar = document.querySelector("#menu1");
menuButton.addEventListener("click",()=>{
    navBar.classList.toggle("moveRight")
})