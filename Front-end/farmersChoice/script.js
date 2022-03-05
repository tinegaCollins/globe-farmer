const login = document.querySelector("#SignInBtn")
login.addEventListener("click",()=>{
    window.open("../login.html", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
})

//sign up button

const signUp = document.querySelector("#signup")
signUp.addEventListener("click",()=>{
    let details = document.querySelector("form")
    details.style.display = "block"
    let wrapper2  = document.querySelector(".wrapper2")
    wrapper2.style.display = "none"
})
const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
let currentStep = formSteps.findIndex(step=>{
    return step.classList.contains("active")
})
if (currentStep<0){
    currentStep = 0;
    formSteps[currentStep].classList.add("active")
    showCurrentStep()
}

multiStepForm.addEventListener("click",(e)=>{
    let incrementor;
    if (e.target.matches("[data-next]")){
        incrementor = 1;
    }else if (e.target.matches("[data-previous]")){
        incrementor = -1
    }
    
    if(incrementor==null) return

    
    const inputs = [...formSteps[currentStep].querySelectorAll("input")]
    const allValid = inputs.every(input=>input.checkValidity())
    if(allValid){
        currentStep += incrementor
        showCurrentStep()
    }else{
        alert("please fill out the forms")
    }
})


function showCurrentStep(){
    formSteps.forEach((step,index)=>{
        step.classList.toggle("active", index === currentStep)
    })
}
