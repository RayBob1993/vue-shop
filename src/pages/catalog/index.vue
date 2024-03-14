<template>
    <v-layout-default>
        <v-container>
            <router-link 
                v-for="category in categories"
                :to="`/catalog/${category.id}`"
            >
                {{ category.title }}
            </router-link>
        </v-container>
    </v-layout-default>
</template>

<script setup>
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import { useCatalog } from '@/composables';

    const { categories, getCatalog } = useCatalog();

    getCatalog();
</script>