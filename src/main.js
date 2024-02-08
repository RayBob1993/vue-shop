import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/index.vue';
import Catalog from '@/pages/catalog/index.vue';
import CatalogCategory from '@/pages/catalog/category.vue';
import CatalogDetail from '@/pages/catalog/id.vue';
import Cart from '@/pages/cart.vue';
import Profile from '@/pages/profile/index.vue';
import Search from '@/pages/search.vue';

import App from '@/App.vue';

import '@/assets/main.css';

const routes = [
    { 
        path: '/', 
        component: Home 
    },
    {
        path: '/search',
        component: Search
    },
    { 
        path: '/catalog', 
        component: Catalog
    },
    { 
        path: '/catalog/:category', 
        component: CatalogCategory,
    },
    { 
        path: '/catalog/:category/:id', 
        component: CatalogDetail 
    },
    { 
        path: '/cart', 
        component: Cart 
    },
    { 
        path: '/profile', 
        component: Profile 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');
