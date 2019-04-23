import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';

const instance = axios.create({
    baseURL: `${proxy}https://jsonplaceholder.typicode.com`
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;