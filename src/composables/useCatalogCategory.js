import { ref } from 'vue';
import { api } from '@/utils/api';

export function useCatalogCategory () {
    const products = ref([]);

    function getProductsCategory (category) {
        api(`/products/category/${category}`)
            .then(data => {
                products.value = data.products;
            });
    }

    return {
        products,
        getProductsCategory
    }
}