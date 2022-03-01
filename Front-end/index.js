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
// const cart = document.querySelector(".cartNumber")
// let imSoFuckingTired = cart.innerHTML
// let number = parseInt(imSoFuckingTired)
// if(number<=0){
//     cart.style.display = "none"
// }
// const cta = document.querySelector(".cta")
// cta.addEventListener("click",()=>{
//     cart.innerHTML = number++
// })

const nav = document.querySelector("#ubuntuNav")
nav.addEventListener("click",(e)=>{
    if(e.target.className == "navImages cart909" || e.target.className == "cartNumber"){
        let cartitems = document.querySelector(".cartItems")
        cartitems.classList.toggle("cartItemsOnclick")
        if(cartitems.classList == "cartItems cartItemsOnclick"){
            window.addEventListener("click",(e)=>{
                if(e.target.className == "navImages cart909" || e.target.className == "cartNumber" || e.target.classList =="cartItems cartItemsOnclick" ){

                }else{
                    cartitems.classList.remove("cartItemsOnclick")
                }
            })
        }
    }
})


// vegetables categories
const vegetableCategories = document.querySelector(".categories")
let vegetables = [...vegetableCategories.querySelectorAll("p")]
for (let i=0; i<vegetables.length; i++){
    addEventListener("click", (event)=>{
    let clickItem = event.target.innerHTML
    if (clickItem =="Tomatoes"){
        //code to pull only tomatoes fammers
    }else if (clickItem =="Irish potatoes"){
        //code to pull only irish potatoes fammers
    }else if (clickItem =="Onions"){
        //code to pull only onions fammers
    }else if (clickItem =="Carrots"){
        //code to pull only carrots fammers
    }else if (clickItem =="Green Peppers"){
        //code to pull only green peppers fammers
    }else if (clickItem =="String Beans"){
        //code to pull only String beans fammers
    }else if (clickItem =="peas"){
        //code to pull only peas fammers
    }else if (clickItem =="Spring Onions"){
        //code to pull only Spring Onions fammers
    }else if (clickItem =="Brocolli"){
        //code to pull only Brocolli fammers
    }else if (clickItem =="Spinach"){
        //code to pull only spinach fammers
    }else if (clickItem =="Sukuma Wiki"){
        //code to pull only Sukuma Wiki fammers
    }else if (clickItem =="Indegenous Vegetables"){
        //code to pull only Indegenous Vegetables fammers
    }else{
        return
    }
    })
}

const allCart = document.querySelector(".cartItems")
allCart.addEventListener("click",(e)=>{
    if(e.target.className == "removeButton"){
        let childElement = e.target.parentElement;
        allCart.removeChild(childElement)
        //checking if cart is empty
        let itemInCart = [...document.querySelectorAll(".cartItem")]
        if(itemInCart<=0){
            document.querySelector(".emptyCart").style.display = "grid";
            //cart items to back tf off

        }
    }
})


