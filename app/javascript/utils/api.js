import axios from 'axios';

const csrf = document
.querySelector('meta[name="csrf-token"]')
?.getAttribute('content');

const api = axios.create({
    headers: {
        'X-CSRF-Token': csrf,
        'Accept': 'application/json',
    },   
});

export default api;