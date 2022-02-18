const menuButton = document.querySelector("#menu")
const navBar = document.querySelector("#menu1");
menuButton.addEventListener("click",()=>{
    navBar.classList.toggle("moveRight")
})

//log in  
const login = document.querySelector("#login");
login.addEventListener("click",()=>{
    window.open("login.html", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
})

//sign up on log in page 
