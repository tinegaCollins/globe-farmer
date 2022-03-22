//side bar

const navBar = document.querySelector("#bars")
const side = document.querySelector("#sideBar")
navBar.addEventListener("click",()=>{
    side.classList.toggle("moveSidebar")
})



const nav = document.querySelector("#ubuntuNav")
nav.addEventListener("click",(e)=>{
    if(e.target.className == "navImages cart909" || e.target.className == "cartNumber"){
        let cartitems = document.querySelector(".cartItems")
        cartitems.classList.toggle("cartItemsOnclick")
        let overlay = document.querySelector(".overlay")
        overlay.classList.toggle("newOverlay")
        if(cartitems.classList == "cartItems cartItemsOnclick"){
            window.addEventListener("click",(e)=>{
                if(e.target.className == "navImages cart909" || 
                e.target.className == "cartNumber" || 
                e.target.classList =="cartItems cartItemsOnclick" || 
                e.target.classList =="cartItem" || 
                e.target.classList =="removeButton"){
                    
                }else{
                    cartitems.classList.remove("cartItemsOnclick")
                    overlay.classList.remove("newOverlay")
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

//account details button

const account = document.querySelector(".accountPerson")
account.addEventListener("click",()=>{
    let accdet = document.querySelector(".accountDetails")
    accdet.classList.toggle("accountDetailsOnClick")
    window.addEventListener("click",()=>{
        accdet.classList.toggle("accountDetailsOnClick")
    })
})

const logOutBtn = document.querySelector("#logOutBtn")
logOutBtn.addEventListener("click",()=>{
    location.reload()
    //
})


//order now
function orderNowPromp(){
    let popularItems = document.querySelector("#popularItems")
    popularItems.style.display = "none"
    let customerPrompt = document.querySelector(".buyCustomerPrompt")
    customerPrompt.style.display = "block"
}
const buttons = [...document.querySelectorAll(".button1")]
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",orderNowPromp )
}


const customers = [
    {
        name: 'farmer1',
        item: 'viazi',
        location: 'molo',
        pickupPoint: 'nakuru',
        price: 1000
    }
]

//x button 
const xbutton = document.querySelector(".fa-xmark")
if (window.innerWidth < 480) {
    xbutton.classList.remove("fa-2x")
}
xbutton.addEventListener("click",()=>{
    let popularItems = document.querySelector("#popularItems")
        popularItems.style.display = "flex"
        let buy = document.querySelector(".buyCustomerPrompt")
        buy.style.display = "none"
        let h2  = document.querySelector("#popular")
        h2.innerHTML = "Popular Items"
})
