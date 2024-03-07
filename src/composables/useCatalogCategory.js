import { ref } from 'vue';
import { CatalogApiService } from '@/services';

export function useCatalogCategory () {
    const products = ref([]);

    function getProductsCategory (id, test) {
        CatalogApiService.getCategory(id, test)
            .then(data => {
                products.value = data;
            });
    }

    function getCategorySort (id, sort) {
        CatalogApiService.getCategorySort(id, sort)
            .then(data => {
                products.value = data;
            });
    }

    return {
        products,
        getProductsCategory,
        getCategorySort
    }
}