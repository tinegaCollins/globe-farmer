<template>
<div class="login">
    <img src="~/assets/icons/2.png" alt="" srcset="">
    <div class="logins">
        <div class="phone">
            <label for="phone">phone Number:</label>
            <input type="number" id="phone">
        </div>
        <div class="password">
            <label for="password">password</label>
            <input type="password"  id="password">
            <div class="keep">
                <label for="check">kept me logged in</label>
                <input type="checkbox" name="" id="check">
            </div>
            <button :disabled="ifDisabled">log in</button>
        </div>
    </div>
</div>
</template>


<script>

useHead({
    title: 'login',
    link:[
        { rel: 'icon', href: './../assets/icons/2.png'}
    ]
})
const ifDisabled = ref<boolean>(true);
const password = ref<string>();
const phone = ref();
const checkDetails = ()=>{
    if(password.value != null || undefined || '' && phone.value != null || undefined){
        
    }
}
</script>

<style>
.keep{
    display: flex;
    justify-content: space-between !important;
    flex-direction: row;
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
}
.keep input {
    height: 15px;
    margin-left: auto;
}
</style>


