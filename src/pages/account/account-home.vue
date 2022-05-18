<template> 
<nav> <a href="/"><img src="./assets/2.png"></a></nav>
<div class="mainContent">
    <div class="details" v-if="userDetails">
        <div class="card1">
            <img src="./assets/face-shot.png">
            <h3>My account</h3>
            <p>Name: {{ userDetails.firstName + " " + userDetails.lastName }}</p>
            <p>Email: {{userDetails.email}}</p> 
            <p>Phone: {{userDetails.phone }}</p>
            <p class="pass"><img src="./assets/setting-svgrepo-com.svg"><span>change password</span></p>
            <button>Edit</button>
        </div>
        <div class="card2">
            <div class="ads">
                <h4><img src="./assets/present-svgrepo-com.svg">My ads </h4>
                <p><span>potatoes</span><span>10/05/2022</span></p>
                <p><span>tomatoes</span><span>13/05/2022</span></p>
                <p><span>carrots</span><span>17/05/2022</span></p>
                <p><span>cabbages</span><span>20/05/2022</span></p>
                <button>view all</button>
            </div>
            <div class="otherInfo">
                <h3>other info</h3>
                <p>line of business: {{ userDetails.line }}</p> 
                <p>main product: {{ userDetails.product}}</p>
                <p>county: {{userDetails.county }}</p>
                <p>town: {{userDetails.town}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script >

import '../../assets/styles/global.css'
export default{
    data(){
        return{
            userID: '',
            userDetails: null
        }
    },
    mounted(){
        this.userID = this.$store.getters.getUserID
        fetch('http://localhost:3000/users/' + this.userID)
        .then(res => res.json())
        .then(data => {
            this.userDetails = data
        })
        .catch(err => console.log(err))

    }
}
</script>
<style scoped>
nav{
    margin-top: 10px;
}
nav img {
    height: 70px;
    width: auto; 
}
.mainContent{
    font-family: var(--main-font);
}  
.details{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 350px 0 300px;
    gap: 0;
    max-height: 100vh;
}
.card1{
    padding: 20px;
    box-shadow: 3px 3px 6px 5px #ccc;
    border-radius: 15px;
    width: 280px;
}

.details .card1 > img{
    height: 230px;
    width: auto;
    border-radius: 10%;
}
.card1 p{
    font-size: .9rem;
    margin: 17px 0;
}
.pass:hover{
    cursor: pointer;
}
.card1 p::after{
    content: "";
    display: block;
    width: 100%;
    position: relative;
    top: 10px;
    height: 1px;
    background-color: #ccc;
}
.card1 button {
    background-color: var(--main-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: .9rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
    position: relative;
    top: 10px;
    left: 90px;
}
.card1 p img{
    height: 30px;
    width: auto;
}
.card1 button:hover{
    background-color: var(--main-color-dark);
}
.card2{
    width: calc(100% + 100px);
    grid-column-start: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.ads, .otherInfo{
     box-shadow: 3px 3px 6px 5px #ccc;
     border-radius: 15px;
     height: 46%;
     padding: 10px;
}
.ads img{
    height: 20px;
    width: auto;
}
.ads, .otherInfo{
    display: flex;
    flex-direction: column;
}
.ads h4, .ads button, .otherInfo h3{
    align-self: flex-end;
    text-align: justify;
}
.ads h4 img{
    margin-right: 10px;
}
.ads button{
    margin-top: auto;
    padding: 4px 10px;
    border-radius: 20px;
    border: 1px solid black;
}
button:hover{
    cursor: pointer;
}
.ads p, .otherInfo p{
    margin: 2px 0;
    display: flex;
    justify-content: space-between;
    padding: 7px;
    transition: background 200ms ease;
}
.ads p:hover{
    background: #ccc;
    cursor: pointer;
}
</style>