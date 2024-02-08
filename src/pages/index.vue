<template>
    <v-container>
        <h2>Каталог смартфонов</h2>

        <router-link
            v-for="product in smartphones"
            :to="`/catalog/${product.category}/${product.id}`"
        >
            {{ product.title }}
        </router-link>

        <h2>Каталог laptops</h2>

        <router-link
            v-for="product in laptops"
            :to="`/catalog/${product.category}/${product.id}`"
        >
            {{ product.title }}
        </router-link>
    </v-container>
</template>

<script setup>
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VContainer from '@/components/VContainer.vue';

    const { 
        products: smartphones, 
        getProductsCategory: getProductsCategorySmartphones
    } = useCatalogCategory();

    const { 
        products: laptops, 
        getProductsCategory: getProductsCategoryLaptops
    } = useCatalogCategory();

    getProductsCategorySmartphones('smartphones');
    getProductsCategoryLaptops('laptops');
</script>