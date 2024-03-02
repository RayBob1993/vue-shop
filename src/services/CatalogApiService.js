import { api } from '@/utils';

export class CatalogApiService {
    static getCategories () {
        return api.get('/catalog');
    }

    static getCategory (id) {
        return api.get(`/catalog/${id}`);
    }

    static getProduct (id) {
        return api.get(`/products/${id}`);
    }

    static addProduct (params) {
        return api.post('/products', params);
    }

    static getUserProducts (userId) {
        return api.get(`/my-products/${userId}`);
    }
}