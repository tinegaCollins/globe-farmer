<template>
    <section class="landing">
        <img src="~/assets/images/ad2.png" alt="" srcset="" class="image1">
        <div class="landing-content">
            <h1>Connecting the world through fresh farm produces</h1>
            <p class="p2">while making the world a happier place</p>
            <p>search for anything</p>
            <div class="search-box">
                <input type="text" placeholder="search produce or location">
                <button>search</button>
            </div>
        </div>
        <img src="~/assets/images/ad1.png" alt="" srcset="" class="image2">
        <div class="image-background"></div>
        <h1 class="title">national farmer</h1>
    </section>
</template>

<style>
.landing{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    padding: 20px;
    background-color: rgb(24, 119, 24);
}
.landing .title, .landing .image-background{
    display: none;
}
 .landing > img {
        height: 300px;
    }
.landing-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: swipe-up 2000ms 1;
}
.landing-content h1{
    color: var(--dark-green);
    text-align: center;
}
.landing .p2{
    margin: 10px 0;
}
.image1{
    animation: swipe-right 1000ms 1;
}
.image2{
    animation: swipe-left 1000ms 1;
}
.search-box{
    margin-top: 10px;
    display: flex;
    flex-wrap: nowrap;
    width: 80%;
}
.search-box input{
  width: 100%;
  padding: 10px;
  border: 1px solid var(--main-yellow);
  font-family: var(--text-font);
  font-weight: 200;
  outline: none;
}
.search-box button{
  width: 100px;
  padding: 10px;
  background-color: var(--main-yellow);
  color: #333;
  font-weight: 200;
  transition: background-color 0.3s ease-in-out;
  border: none;
}
.search-box button:hover{
  background-color: var(--light-green);
  cursor: pointer;
}
@media screen and (max-width: 1100px) {
    .landing > img {
        height: 300px;
    }
}
@media screen and (max-width: 768px){
    .landing{
        display: flex;
        flex-direction: column-reverse;
        row-gap: 20px;
    }
    .landing .title{
        display: block;
    }
    .landing > img{
        display: none;
    }
    .landing-content{
        width: 100%;
    }
    .landing .image-background{
        display: block;
        height: 300px;
        width: 300px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        animation: background 20s infinite;
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
    }
    70%{
        background-image: url('~/assets/images/ad1.png');
    }
    100%{
        background-image: url('~/assets/images/ad1.png');
    }
}
</style>