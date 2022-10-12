<template>
    <div class="signup-wrapper">
        <!-- <a href="/">
            <img src="../../assets/icon.png" alt="" srcset="">
        </a> -->
        <h1>Sign Up</h1>
        <div class="user-details">
            <input type="text" placeholder="full Names">
            <input type="text" placeholder="username">
            <input type="text" placeholder="Email">
            <p>or</p>
            <input type="text" placeholder="phone">
            <input type="text" placeholder="location">
            <div class="if-seller">
                <input type="checkbox" name="" id="">
                <p>Are you a seller?</p>
            </div>
            <button>Agree and Continue</button>
        </div>
    </div>
</template>

<style scoped>
.signup-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-image: url(../../assets/images/pineapple.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 100px;
    transition: all 200ms ease-in-out;
    font-family: var(--alt-font);
}
.signup-wrapper > h1 {
    margin: 0px 20px 0 auto;
    font-size: 2rem;
    font-weight: 700;
    color: var(--main-yellow);
}
.user-details{
    margin-top: 20px;
    align-self: center;
    width: 90vw;
    height: 70vh;
     /* From https://css.glass */
    background: rgba(0,0,0,.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(1px);
    border-radius: 20px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
}
input, button {
    width: 80%;
    height: 45px;
    border-radius: 10px;
    outline: none;
    border: none;
}
input {
    padding-left: 10px;
}
.signup-wrapper > a  > img {
    height: 60px;
    width: auto;
}
</style>