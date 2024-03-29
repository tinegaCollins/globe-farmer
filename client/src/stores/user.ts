import { defineStore } from "pinia";
import jwtDecode from "jwt-decode";
export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        token: sessionStorage.getItem("token") || "",
        userName: sessionStorage.getItem("userName") || "",
        email: sessionStorage.getItem("email") || "",
        seller: sessionStorage.getItem("seller") || "",
        id: sessionStorage.getItem("id") || "",
    }),
    getters: {
        isLoggedIn(): boolean {
            let returnValue = false;
            if(this.token){
                returnValue = true;
            }
            return returnValue;
        },
        getDetails(): object {
            return {
                token: this.token,
                userName: this.userName,
                email: this.email,
            }
        }
    },
    actions: {
        login(user: any) {
            this.token = user.token;
            this.userName = user.userName;
            this.email = user.email;
            this.seller = user.seller; 
            this.id = user.id;
        },
        logout() {
            this.token = "";
            this.userName = "";
            this.email = "";
            this.id = "";
            sessionStorage.clear();
            window.location.href = "/";

        },
    },
});