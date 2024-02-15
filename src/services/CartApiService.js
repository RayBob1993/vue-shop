import { api } from '@/utils';

export class CartApiService {
    static getCart () {
        return api.get('/carts');
    }

    static addToCart (params) {
        return api.post('/carts/add', params)
    }
}