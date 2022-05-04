<template>
  <div class="wrapper">
    <div class="ad">
      <h6>ad goes here</h6>
    </div>
    <div class="mainContent">
      <div class="logins">
        <label for="text">
          login with phone number:
        </label>
        <input type="text" placeholder="phone number" id="text">
        <label for="password">
          Password:
        </label>
        <input type="password" placeholder="password" id="password">
        <button>Log In</button>
        <label for="save">
          stay logged in
        </label>
        <input type="checkbox" name="save" id="save">
        <button id="forgot">Forgot password?</button>
      </div>
      <div class="randomlorem">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sapiente. Corporis maiores dolore officiis asperiores maxime consequuntur nesciunt, eaque fuga tenetur voluptates omnis corrupti necessitatibus nihil ullam saepe eveniet laudantium quibusdam qui velit facilis quod explicabo eum enim? Commodi quos reiciendis, libero adipisci quas iste facere reprehenderit voluptatibus distinctio quo!</p>
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper{
  font-family: var(--main-font);
  display: grid;
  place-items: center;
}
.ad{
  height: 100px;
  width: 70vw;
  background: grey;
  color: #fff;
  display: grid;
  place-items: center;
  margin-top: 10px;
  box-shadow: 5px 5px 5px 5px rgba(51, 51, 51, 0.411);
}
.mainContent{
  display: flex;
  flex-wrap: wrap;
  margin-top:20px;
  justify-content: space-between;
  gap: 50px;
}
.logins{
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
}
.logins label{
  font-size: .8rem;
}
.logins input{
  margin-bottom: 10px;
}
.logins #text, #password{
  width: 300px;
  height: 30px;
  appearance: none;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
}
.logins button{
  width: max-content;
  align-self: center;
  padding: 7px 15px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 20px;
  background: var(--btn-color);
  transition: background .3s ease-in-out;
}
.logins button:hover{
  cursor: pointer;
  background: var(--main-color);
}
.logins button ~ label{
  margin-top: 20px;
}
.logins #save{
  position: relative;
  bottom: 14px;
}
#forgot{
  align-self: flex-end;
}
.randomlorem{
  max-width: 50ch;
}
</style>