import { api } from '@/utils';

export class SearchApiService {
    static getSearch (q) {
        return api.get(`/products/search?q=${q}`);
    }
}