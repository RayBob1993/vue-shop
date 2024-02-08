<template>
    <v-container>
        <router-link 
            v-for="category in categories"
            :to="`/catalog/${category}`"
        >
            {{ category }}
        </router-link>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { api } from '@/utils/api'
    import VContainer from '@/components/VContainer.vue';

    const categories = ref([]);

    api(`/products/categories/`)
        .then(data => {
            categories.value = data;
        });
</script>