<template>
    <v-container v-if="product">
        {{ product.title }}
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from "vue-router";
    import { api } from '@/utils/api';
    import VContainer from '@/components/VContainer.vue';

    const route = useRoute();

    const product = ref();

    api(`/products/${route.params.id}`)
        .then(data => {
            product.value = data;
        });
</script>