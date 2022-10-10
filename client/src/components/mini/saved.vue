<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    ifSaved : Boolean
}>();
const ifSaved = ref(props.ifSaved);
const save = () => {
    console.log('saved');
    ifSaved.value = !ifSaved.value;
}
</script>
<template>
    <div class="saved-wrapper">
        <div class="saved" @click="save">
        <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="45.743px" height="45.743px" viewBox="0 0 45.743 45.743"
            style="enable-background:new 0 0 45.743 45.743;" xml:space="preserve">
            <g>
                <path :fill="ifSaved? 'rgb(255, 232, 45)' : 'grey'" d="M34.199,3.83c-3.944,0-7.428,1.98-9.51,4.997c0,0-0.703,1.052-1.818,1.052c-1.114,0-1.817-1.052-1.817-1.052
		c-2.083-3.017-5.565-4.997-9.51-4.997C5.168,3.83,0,8.998,0,15.376c0,1.506,0.296,2.939,0.82,4.258
		c3.234,10.042,17.698,21.848,22.051,22.279c4.354-0.431,18.816-12.237,22.052-22.279c0.524-1.318,0.82-2.752,0.82-4.258
		C45.743,8.998,40.575,3.83,34.199,3.83z" />
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
        </svg>

    </div>
    </div>
</template>

<style scoped>
.saved-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.saved {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid v-bind("ifSaved ?  'rgb(255, 232, 45)' : 'grey'");
    display: grid;
    place-items: center;
    margin: 10px 15px 10px 0;
}
.saved svg {
    height: 50%;
    width: 50%;
    position: relative;
    top: 1px;
}
</style>