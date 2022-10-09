<script setup lang="ts">
import { ref } from "vue";
import icon from "../assets/icon.png";
import cart from "../assets/icons/cart.svg";
import user from "../assets/icons/user.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import arrowUp from "../assets/icons/arrow-up.svg";
import profile from "../assets/icons/profile.svg";
import logout from "../assets/icons/logout.svg";
import heart from "../assets/icons/heart.svg";
import login from "../assets/icons/login.svg";
import userCheck from "../assets/icons/user-check.svg";
import bars from "../assets/icons/bars.svg";
import x from "../assets/icons/x.svg";

const showMenu = ref<Boolean>(false);
if(window.innerWidth < 768){
    showMenu.value = true;
}
const dropdownMenu = () => {
  showMenu.value = !showMenu.value;
};
const curentUser = ref<Object>({
  name: "John Doe",
  email: "rt",
});
const sideBar = ref<HTMLBodyElement | null>(null);
const blur = ref<HTMLBodyElement | null>(null);
const openBar = ref<Boolean>(false);
const toggleSidebar = () => {
  blur.value?.classList.toggle("active");
  openBar.value = !openBar.value;
  sideBar.value?.classList.toggle("active");
};
</script>
<template>
  <nav>
    <div class="icon">
      <img :src="icon" alt="logo" srcset="" />
      <h3>Fresh pickens</h3>
    </div>
    <div class="nav-links sidebar" ref="sideBar">
      <a href="/home">Home</a>
      <a href="/categories">Categories</a>
      <div class="dropdown">
        <div class="dropdown" @click="dropdownMenu">
          <img :src="user" alt="" srcset="" class="user-icon" />
          <p>Account</p>
          <img
            :src="showMenu ? arrowUp : arrowDown"
            alt=""
            srcset=""
            class="arrow-down"
          />
        </div>
        <div class="dropdown-content" v-if="showMenu">
          <div class="isLoggedIn" v-if="curentUser">
            <a href="/profile">
              <img :src="profile" alt="" srcset="" />
              Profile
            </a>
            <a href="/cart">
              <img :src="cart" alt="" srcset="" />
              Cart
            </a>
            <a href="/saved">
              <img :src="heart" alt="" srcset="" />
              Saved
            </a>
            <a href="/logout">
              <img :src="logout" alt="" srcset="" />
              Logout
            </a>
          </div>
          <div class="isNotLoggedIn" v-else>
            <a href="/login" class="login">
              <img :src="login" alt="" srcset="" />
              Login
            </a>
            <a href="/signup" class="signup">
              <img :src="userCheck" alt="" srcset="" />
              Sign up
            </a>
          </div>
        </div>
      </div>
      <a href="contact" class="contact">Contact us</a>
    </div>
    <div class="blur" ref="blur" @click="toggleSidebar"></div>
    <div class="bars">
      <img :src="openBar ? x : bars" alt="" srcset="" @click="toggleSidebar" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding: 15px 40px;
  font-family: var(--font-family);
  display: flex;
  flex-direction: row;
  align-items: center;
}

nav .icon {
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}

nav .icon img {
  height: 50px;
  margin-right: 10px;
}

nav .account {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

nav .account .cart {
  background-color: #fff;
  opacity: 0.2;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
}

nav .account .cart img {
  height: 24px;
}

nav .account-details button {
  background: transparent;
  border: none;
  border-radius: 5px;
  padding: 7px 40px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}

nav .nav-links {
  margin-left: auto;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.nav-links a:visited {
  color: #fff;
}

.nav-links .dropdown {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  position: relative;
  cursor: pointer;
  color: #fff;
  padding: 3px;
  border-radius: 3px;
  height: 30px;
  transition: all 200ms ease-in-out;
}

.nav-links .dropdown:hover {
  background-color: var(--main-yellow);
}

.nav-links .dropdown .user-icon {
  height: 20px;
}

.nav-links .dropdown .arrow-down {
  height: 15px;
}

.nav-links .dropdown .dropdown-content {
  position: absolute;
  top: 40px;
  width: max-content;
}

.isLoggedIn,
.isNotLoggedIn {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  gap: 10px;
  padding: 15px 6px;
  width: 200px;
  border-radius: 4px;
}

.isLoggedIn a,
.isNotLoggedIn a {
  color: #333;
  /* border: 1px solid #333; */
}

.isLoggedIn a:visited,
.isNotLoggedIn a:visited {
  color: #333;
}

.isLoggedIn a,
.isNotLoggedIn a {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 0 0 10px;
}

.isLoggedIn a img,
.isNotLoggedIn a img {
  height: 23px;
  margin-right: 20px;
}
.bars {
  display: none;
}
@media screen and (max-width: 768px) {
  nav {
    padding: 14px;
  }
  nav .nav-links {
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: -100%;
    z-index: 3;
    background-color: var(--dark-green);
    color: #333;
    width: 60%;
    height: calc(100vh);
    align-items: flex-start;
    padding: 70px 10px;
    transition: all 200ms ease-in-out;
  }
  .active {
    left: 0 !important;
  }
  nav .bars {
    display: block;
    margin: 0 0px 0 auto;
  }
  .bars img {
    z-index: 1000;
    height: 30px;
    transition: all 200ms ease-in-out;
  }
  .dropdown-content {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 0;
    background-color: transparent;
  }
  .blur {
    position: absolute;
    top: 0;
    right: -130%;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    transition: all 200ms ease-in-out;
    background: rgba(46, 39, 39, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.7px);
    -webkit-backdrop-filter: blur(4.7px);
    border: 1px solid rgba(46, 39, 39, 0.3);
  }
  .contact {
    position: relative;
    top: 210px;
  }
  .dropdown > img {
    display: none;
  }
}
</style>
