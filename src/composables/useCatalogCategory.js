import { ref } from 'vue';
import { CatalogApiService } from '@/services';

export function useCatalogCategory () {
    const products = ref([]);

    function getProductsCategory (category) {
        CatalogApiService.getCategory(category)
            .then(data => {
                products.value = data.products;
            });
    }

    return {
        products,
        getProductsCategory
    }
}