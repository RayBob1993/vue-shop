import { api } from '@/utils';

export class CatalogApiService {
    static getCategories () {
        return api.get('/products/categories/');
    }

    static getCategory (category) {
        return api.get(`/products/category/${category}`);
    }

    static getProduct (id) {
        return api.get(`/products/${id}`);
    }
}