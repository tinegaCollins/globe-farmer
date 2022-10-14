<script setup lang="ts">

</script>

<template>
    <div class="auth">
        <div class="top">
            <img src="../../../icon.png" alt="" srcset="">
            <h3>Globe Farmer</h3>
            <p>Globally market for all your fresh produce needs</p>
            <div class="links">
                <RouterLink to="/auth/loginv">Log In</RouterLink>
                <RouterLink to="/auth/signupv">Sign Up</RouterLink>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.auth{
    padding: 15px;
}
.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-top: 20px;
    background-color: #fff;
    color: #333;
    border-radius: 15px;
    /* background: rgba(209, 204, 25, 0.22);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(209, 204, 25, 0.3); */
}
.top .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
    gap: 20px;
}
.top .links a {
    color: #333;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
}
.top .links a::after{
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #333;
    margin-top: 5px;
}
</style>