import { post, get, patch, del } from './Api'

export const addBicycle = async (data) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
        const response = await post(`/user/${userId}/bicycle`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao adicionar a bicicleta', error);
    }
};

export const getBicycles = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
        const response = await get(`/user/${userId}/bicycle`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao obter as bicicletas do usuário', error);
    }
};

export const getBicycle = async (bikeId) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
        const response = await get(`/user/${userId}/bicycle/${bikeId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao obter a bicicleta do usuário', error);
        localStorage.clearItem('token', 'userId');
    }
};

export const deleteBicycle = async (bikeId) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
        await del(`/user/${userId}/bicycle/${bikeId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const response = "Deletado com sucesso!"
        return response;
    } catch (error) {
        console.error('Erro ao deletar a bicicleta', error);
    }
};

export const updateBicycle = async (bikeId, updateData) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
        const response = await patch(`/user/${userId}/bicycle/${bikeId}`, updateData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar a bicicleta', error);
        localStorage.clearItem('token', 'userId');
    }
};