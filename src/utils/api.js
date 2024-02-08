const BASE_URL = 'https://dummyjson.com';

export function api (url, method = 'get', params) {
    return fetch(BASE_URL + url, {
        method,
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(params)
    })
        .then(res => res.json());
}