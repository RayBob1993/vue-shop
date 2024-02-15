const BASE_URL = 'https://dummyjson.com';

export const api = {
    get (url) {
        const token = localStorage.getItem('token');

        return fetch(BASE_URL + url, {
            headers: { 
                'Content-Type': 'application/json',
                ...token && { 
                    'Authorization': `Bearer ${token}`
                }
            }
        })
            .then(res => res.json());
    },
    post (url, params) {
        const token = localStorage.getItem('token');

        return fetch(BASE_URL + url, {
            method: 'post',
            headers: { 
                'Content-Type': 'application/json',
                ...token && { 
                    'Authorization': `Bearer ${token}` 
                }
            },
            body: JSON.stringify(params)
        })
            .then(res => res.json());
    }
}