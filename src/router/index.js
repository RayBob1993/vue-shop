import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        path: '/', 
        component: () => import('@/pages/index.vue') 
    },
    { 
        path: '/auth/sign-in', 
        component: () => import('@/pages/auth/sign-in.vue') 
    },
    {
        path: '/search',
        component: () => import('@/pages/search.vue')
    },
    { 
        path: '/catalog', 
        component: () => import('@/pages/catalog/index.vue')
    },
    { 
        path: '/catalog/:category', 
        component: () => import('@/pages/catalog/category.vue')
    },
    { 
        path: '/catalog/:category/:id', 
        component: () => import('@/pages/catalog/id.vue')
    },
    { 
        path: '/cart', 
        component: () => import('@/pages/cart.vue')
    },
    { 
        path: '/profile', 
        component: () => import('@/pages/profile/index.vue')
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});