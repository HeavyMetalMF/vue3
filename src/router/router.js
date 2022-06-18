import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostIdPage from "@/components/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        // name: 'App',
        component: PostPage
    },
    {
        path: '/about',
        // name: About,
        component: About
    },
    {
        path: '/posts/:id',
        // name: About,
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;