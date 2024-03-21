import { ref } from 'vue';
import { CatalogApiService } from '@/services';

export function useCatalogCategory () {
    const products = ref([]);

    async function getProductsCategory (id, params) {
        const data = await CatalogApiService.getCategory(id, params);

        products.value = data;
    }

    return {
        products,
        getProductsCategory
    }
}