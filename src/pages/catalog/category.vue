<template>
    <v-container>
        <v-row>
            <v-col>
                <input type="radio" v-model="test" name="test" value="1" @change="onFilter"> 1
                <input type="radio" v-model="test" name="test" value="2" @change="onFilter"> 2
            </v-col>

            <v-col>
                <input type="checkbox" v-model="sort" @change="onSort"> Сортировка по id
            </v-col>
        </v-row>

        <v-row>
            <v-col 
                v-for="product in products"
                span="3"
                md="6"
                sm="12"
            >
                <v-catalog-card 
                    :id="product.id"
                    :price="product.price"
                    :image="product.image"
                    :title="product.title"
                    :category="product.categoryId"
                    :is-favorites="product.isFavorites"
                    @add-to-cart="onAddToCart"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from "vue-router";
    import { useCart } from '@/composables/useCart';
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const route = useRoute();

    const test = ref();
    const sort = ref();

    const { products, getProductsCategory, getCategorySort } = useCatalogCategory();
    const { onAddToCart } = useCart();

    getProductsCategory(route.params.category);

    function onFilter () {
        getProductsCategory(route.params.category, test.value);
    }

    function onSort () {
        getCategorySort(route.params.category, sort.value)
    }
</script>