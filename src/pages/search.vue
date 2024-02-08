<template>
    <v-container>
        <v-catalog-card 
            v-for="product in products"
            :id="product.id"
            :title="product.title"
            :category="product.category"
            @add-to-cart="onAddToCart"
        />
    </v-container>
</template>

<script setup>
    import { ref, watch } from 'vue'
    import { api } from '@/utils/api';
    import { useRoute } from 'vue-router';
    import VContainer from '@/components/VContainer.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const products = ref([]);

    const route = useRoute();

    api(`/products/search?q=${route.query.q}`)
        .then(data => {
            products.value = data.products;
        });

    function onAddToCart (params) {
        api('/carts/add', 'post', {
            userId: 1,
            products: [
                params
            ]
        }).then(() => {
            alert('Товар добавлен успешно!')
        });
    }

    watch(() => route.query.q, () => {
        api(`/products/search?q=${route.query.q}`)
            .then(data => {
                products.value = data.products;
            });
    });
</script>