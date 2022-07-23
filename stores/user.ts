import { defineStore } from 'pinia';

export const user = defineStore( 'user', {
    state: ()=>({
        userId: ''
    }),
    actions: {
        addId(id:String){
            this.userId = id;
        },
        revomeId(){
            this.userId = ''
        }
    }
})