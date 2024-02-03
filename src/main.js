import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/index.vue';
import Catalog from './pages/catalog/index.vue';
import CatalogCategory from './pages/catalog/category.vue';
import CatalogDetail from './pages/catalog/id.vue';

import App from './App.vue';

const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/catalog', 
        component: Catalog 
    },
    { 
        path: '/catalog/:category', 
        component: CatalogCategory 
    },
    { 
        path: '/catalog/:category/:id', 
        component: CatalogDetail 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');
