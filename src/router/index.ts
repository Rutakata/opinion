import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Hot from '../views/Hot.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/me',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/hot',
        name: 'Hot',
        component: Hot
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;