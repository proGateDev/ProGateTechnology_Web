import axios from 'axios';
import { devURL } from '../../app/config/server';

const httpClient = axios.create({
    baseURL: devURL,
    timeout: 5000,
});

// Request Interceptor: Attach token to requests
httpClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        else config
        return config
    },
    (error) => Promise.reject(error)
);



export default httpClient;
