<script setup lang="ts">

</script>

<template>
    <div class="login">
        <a href="/">
            <img src="../../../icon.png" alt="">
        </a>
        <div class="main-content">
            <div class="login-Inputs">
            <div class="login-Inputs-Email">
                <input type="text" placeholder="Email or Phone">
                <button>Continue</button>
            </div>
            <p class="or">or</p>
            <div class="login-Inputs-Other">
                <button>Continue with Facebook</button>
                <button>Continue with Google</button>
                <button>Continue with Apple</button>
            </div>
            <div class="login-Inputs-IfAccount">
                <p>Don't have an account? <RouterLink to="/auth/signup">Sign Up</RouterLink></p>
                <RouterLink to="/auth/forgot-password">Forgot your password?</RouterLink>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped>
</style>