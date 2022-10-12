<template>
    <div class="mid-landing">
        <div class="wrapper-image">
            <div class="text">
                <h1>Get Fresh Groceries</h1>
                <p>Enjoy a healthy life</p>
                <button>
                    browse categories
                    <img src="../assets/icons/right-arrow.svg" alt="" srcset="">
                </button>
            </div>
            <div class="wrapper-round">
                <div class="upper-round">
                    <img src="../assets/images/bell.png" alt="" srcset="">
                    <img src="../assets/images/pineapple.png" alt="" srcset="">
                    <img src="../assets/images/brocolli.png" alt="" srcset="">
                    <img src="../assets/images/tomato.png" alt="" srcset="">
                    <img src="../assets/images/avocado.png" alt="" srcset="">
                    <div class="round"></div>
                </div>
                <img class="banner" src="../assets/home-img.png" alt="" srcset="">
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.mid-landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 15px 0;
}
.text {
    margin-bottom: 60px;
    color: #fff;
}
.text h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
}
.text p {
    font-size: 1.5rem;
    font-weight: 400;
}
.text button {
    margin-top: 10px;
    padding: 10px 20px;
    background: var(--main-yellow);
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
}
.text button img {
    margin-left: 10px;
    width: 20px;
    height: 20px;
}
.wrapper-image {
    position: relative;
}
.wrapper-round {
    position: relative;
}
.upper-round{
    width: 370px;
    height: 370px; 
    border-radius: 50%;
    border-bottom: 2px solid bisque;
    border-top: 2px solid bisque;
    display: grid;
    place-items: center;
    position: relative;
}
.upper-round img {
    position: absolute;
    width: 50px;
    height: auto;
    z-index: 1;
}
.upper-round img:nth-child(1) {
    top: 0;
    left: 70px;
    width: 40px;
}
.upper-round img:nth-child(2) {
    top: 30px;
    right: 0;
    transform: rotate(20deg);
}
.upper-round img:nth-child(3) {
    top: -30px;
    left: 170px;
    width: 70px;
}
.upper-round img:nth-child(4) {
    top: 100px;
    left: -10px;
    width: 50px;
}
.upper-round img:nth-child(5) {
    top: 150px;
    right: -15px;
    width: 50px;
}
.round {
    background: linear-gradient(200deg, #EC6D0E, #8DB127);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    opacity: 0.4;
}

.banner {
    position: absolute;
    top: 70px;
    width: 350px;
    height: 300px;
}
@media screen and (min-width: 768px) {
    .mid-landing {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 4rem;
    }
    .wrapper-image {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}   
</style>