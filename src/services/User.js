import { post } from './Api';
import api from './Api';

export const  signUp = async (userData) => {
    try {
        const response = await post('/user', userData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (updatedData) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
        const response = await api.patch(`/user/${userId}`, updatedData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUser = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
        const response = await api.get(`/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter o perfil do usuário', error);
        localStorage.clearItem('token', 'userId');
    }
};