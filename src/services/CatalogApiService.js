import { api } from '@/utils';

export class CatalogApiService {
    static getCategories () {
        return api.get('/catalog');
    }

    static getCategory (id, test) {
        const query = test ? `&test=${test}`: '';

        return api.get(`/products?categoryId=${id}${query}`);
    }

    static getCategorySort (id, sort) {
        const orderType = sort ? 'desc' : 'asc';
        
        return api.get(`/products?categoryId=${id}&_sort=title&_order=${orderType}`);
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