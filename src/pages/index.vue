<template>
    <v-layout-default>
        <v-container>
            <h2>Каталог смартфонов</h2>

            <v-row>
                <v-col 
                    v-for="product in smartphones"
                    span="3"
                    md="6"
                    sm="12"
                >
                    <v-catalog-card 
                        :id="product.id"
                        :images="product.images"
                        :title="product.title"
                        :price="product.price"
                        :category="product.categoryId"
                        :is-favorites="product.isFavorites"
                        @addToFavorites="onToggleFavorites"
                    />
                </v-col>
            </v-row>

            <h2>Каталог laptops</h2>

            <v-row>
                <v-col 
                    v-for="product in laptops"
                    span="3"
                    md="6"
                    sm="12"
                >
                    <v-catalog-card 
                        :id="product.id"
                        :price="product.price"
                        :images="product.images"
                        :title="product.title"
                        :category="product.categoryId"
                        :is-favorites="product.isFavorites"
                        @add-to-favorites="onToggleFavorites"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-layout-default>
</template>

<script setup>
    import { useCatalogCategory, useFavorites } from '@/composables';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const { onToggleFavorites } = useFavorites();

    const { 
        products: smartphones, 
        getProductsCategory: getProductsCategorySmartphones
    } = useCatalogCategory();

    const { 
        products: laptops, 
        getProductsCategory: getProductsCategoryLaptops
    } = useCatalogCategory();

    getProductsCategorySmartphones(1);
    getProductsCategoryLaptops(2);
</script>