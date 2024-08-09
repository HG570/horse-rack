import axios from 'axios';

const api = axios.create({
    baseURL: `http://${window.location.hostname}:9090/bykerack`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (endpoint, options = {}) => {
    try {
        const response = await api.get(endpoint, options);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch from ${endpoint}:`, error);
        throw error;
    }
};

export default api;