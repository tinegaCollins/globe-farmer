//side bar

const navBar = document.querySelector("#bars")
const side = document.querySelector("#sideBar")
navBar.addEventListener("click",()=>{
    side.classList.toggle("moveSidebar")
})


//buttons 

const buttons = document.querySelectorAll(".button1");
const buttonsArray = Array.from(buttons);
for(let i=0; i < buttonsArray.length; i++){
    let k = i + 1;
    buttonsArray[i].addEventListener("click",()=>{
        let popularItems = document.querySelector("#popularItems")
        popularItems.style.display = "none"
        let buy = document.querySelector(".buy")
        buy.style.display = "flex"
        let h2  = document.querySelector("#popular")
        h2.innerHTML = ""
        // console.log(`button no ${k}`)
    });
}

//x button 
 const xbutton = document.querySelector(".fa-xmark")
xbutton.addEventListener("click",()=>{
    let popularItems = document.querySelector("#popularItems")
        popularItems.style.display = "flex"
        let buy = document.querySelector(".buy")
        buy.style.display = "none"
        let h2  = document.querySelector("#popular")
        h2.innerHTML = "Popular Items"
})


//add and minus value on checklist

const minus = document.querySelector(".fa-minus")
const add = document.querySelector(".fa-plus")
minus.addEventListener("click",()=>{
    let q = document.querySelector("#addQuantity")
    let num = parseInt(q.value)
    if (num>=0){
        num--
    }
    q.value = num
})

add.addEventListener("click",()=>{
    let q = document.querySelector("#addQuantity")
    let num = parseInt(q.value)
        num++
    q.value = num
})

//add to cart 
const cart = document.querySelector(".cta")
cart.addEventListener("click",()=>{
    
})