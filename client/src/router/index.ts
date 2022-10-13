import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/auth/login",
        name: "login",
        component: ()=> import("../views/auth/login.vue")
    },
    {
        path: "/auth/signup",
        name: "signup",
        component: ()=> import("../views/auth/signup.vue")
    },
    {
        path: "/auth/forgot-password",
        name: "forgot",
        component: ()=> import("../views/auth/forgot.vue")
    },
    {
        path: "/auth/alt-login",
        name: "alt-login",
        component: ()=> import("../views/auth/alt.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;