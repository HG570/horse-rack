import axios from 'axios';

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
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

export const post = async (endpoint, data, options = {}) => {
    try {
        const response = await api.post(endpoint, data, options);
        return response.data;
    } catch (error) {
        console.error(`Failed to post to ${endpoint}:`, error);
        throw error;
    }
};

export const patch = async (endpoint, data, options = {}) => {
    try {
        const response = await api.patch(endpoint, data, options);
        return response.data;
    } catch (error) {
        console.error(`Failed to patch to ${endpoint}:`, error);
        throw error;
    }
};

export default api;