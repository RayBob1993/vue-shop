import { api } from '@/utils/api';

export class SearchApiService {
    static getSearch (q) {
        return api.get(`/products/search?q=${q}`);
    }
}