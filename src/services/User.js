import { post } from './Api';  // Importa o método post do api.js

export const signUp = async (userData) => {
    try {
        const response = await post('/user', userData);
        return response;
    } catch (error) {
        console.error('Sign-up failed:', error);
        throw error;
    }
};