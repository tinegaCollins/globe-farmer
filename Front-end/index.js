//side bar

const navBar = document.querySelector("#bars")
const side = document.querySelector("#sideBar")
navBar.addEventListener("click",()=>{
    side.classList.toggle("moveSidebar")
})


const popular = document.querySelector("#popular")
const items = document.querySelector("#popularItems")
const buy = document.querySelector(".buy")
items.addEventListener("click",(e)=>{
    if(e.target.className = "button1"){
        items.style.display = "none"
        buy.style.display = "flex"
        popular.innerHTML = ""
    }
    
})