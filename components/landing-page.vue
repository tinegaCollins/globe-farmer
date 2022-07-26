<template>
    <section class="landing">
        <img class="image1" src="~/assets/images/ad1.png" alt="" srcset="">
        <div class="landing-content">
            <h1>buy,sell,fresh</h1>
            <p>search for anything</p>
            <div class="search-box">
                <input type="text" placeholder="search produce or location">
                <button>search</button>
            </div>
            <p class="last-text">buy or sell groceries to consumers across the country comfortably</p>
        </div>
        <img class="image2" src="~/assets/images/2.png" alt="" srcset="">
    </section>
</template>

<style>
.landing{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 45vh;
}
.landing .image2{
    transform: rotate(180deg);
    z-index: -1;
}
.landing > img {
    height: 45vh;
    width: auto;
}
.landing .landing-content{
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
}
.landing-content h1{
    font-size: 2.5rem;
    background: linear-gradient(90deg, var(--main-yellow), var(--dark-green));
    background-clip: text;
    color: transparent;
}
.landing-content .last-text{
    font-size: .8rem;
}
.search-box {
    width: 60%;
    height: 40px;
    border: 1px solid var(--main-yellow);
    display: flex;
    flex-wrap: nowrap;
}
.search-box input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0 10px;
}
.search-box button {
    border: none;
    padding: 0 10px;
    background-color: var(--main-yellow);
}
.search-box button:hover {
    background-color: var(--dark-green);
}
.search-box button:hover .search-box{
    border: 1px solid var(--dark-green);    
}
@media screen and (max-width: 768px) {
    .landing{
        display: flex;
        position: relative;
        height: 60vh;
    }
    .landing-content{
        height: 60vh;
        width: 100vw !important;
        position: absolute;
        align-items: flex-end !important;
        padding-right: 20px;
        z-index: 1;
        right: 0;
        background-color: rgba(0, 0, 0, .1) !important;
        backdrop-filter: blur(3px);
    }
    .landing .image1{
        height: 100%;
    }
    .landing .image2{
        display: none;
    }
    .search-box, .last-text{
        width: 80vw;
        z-index: 1;
    }
    .last-text{
        font-size: 1.5rem !important;
        font-weight: 800;
        text-align: end;
        width: 80% !important;
        background: linear-gradient(90deg, var(--dark-green),var(--main-red));
        background-clip: text;
        color: transparent;
    }
}
@keyframes swipe-right {
    from{
        transform: translateX(-330px);
    }
    to{
        transform: translateX(0px);
    }
}
@keyframes swipe-left {
    from{
        transform: translateX(330px);
    }
    to{
        transform: translateX(0px);
    }
}
@keyframes swipe-up {
    10%{
        transform: translateY(200px);
        opacity: 0;
    }
    50%{
       transform: translateY(200px);
        opacity: 0; 
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
}
@keyframes background {
    10%{
        background-image: url('~/assets/images/ad2.png');
    }
    40%{
       background-image: url('~/assets/images/ad2.png');
       opacity: 0;
    }
    70%{
        background-image: url('~/assets/images/ad1.png');
        opacity: 1;
    }
    100%{
        background-image: url('~/assets/images/ad1.png');
    }
}
</style>