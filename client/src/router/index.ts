import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/auth",
        name: "Auth",
        component: () => import("../views/auth/auth.vue"),
        children: [
            {
                path: "login",
                name: "Login",
                component: () => import("../views//auth/login.vue"),
            },
            {
                path: "register",
                name: "Register",
                component: () => import("../views/auth/signup.vue"),
            },
        ],
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;