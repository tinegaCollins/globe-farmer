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
        path: "/auth/forgot-password",
        name: "forgot",
        component: ()=> import("../views/auth/forgot.vue")
    },
    {
        path: "/user",
        name: "User",
        component: () => import("../views/user/user.vue"),
        children: [
            {
                path: "profile",
                name: "Profile",
                component: () => import("../views/user/profile.vue"),
            },
            {
                path: "saved",
                name: "Saved",
                component: () => import("../views/user/saved.vue"),
            },
            {
                path: "posts",
                name: "Posts",
                component: () => import("../views/user/posts/index.vue"),
                children: [
                    {
                        path: "create",
                        name: "Create",
                        component: () => import("../views/user/posts/create.vue"),
                    },
                    {
                        path: "register-seller",
                        name: "RegisterSeller",
                        component: () => import("../views/user/posts/register-seller.vue"),
                    },
                    {
                        path: "manage",
                        name: "managePosts",
                        component: ()=> import("../views/user/posts/manage-posts.vue")
                    }
                ]
            },
            {
                path: "messages",
                name: "Messages",
                component: () => import("../views/user/messages/messages.vue"),
                children: [
                    {
                        path: "",
                        name: "MessagesHome",
                        component: () => import("../views/user/messages/home.vue"),
                    },
                    {
                        path: "chat/:id",
                        name: "Chat",
                        component: () => import("../views/user/messages/chat.vue"),
                    },
                ]
            },
        
        ]
    },
    {
        path: "/post/:id",
        name: "Post",
        component: () => import("../views/post.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;