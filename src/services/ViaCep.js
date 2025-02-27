import axios from 'axios';

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    timeout: 10000,
});

export const fetchAddressByPostalCode = async (postalCode) => {
    try {
        const response = await api.get(`${postalCode}/json/`);
        if (response.data.erro) {
            throw new Error('CEP não encontrado');
        }
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar o endereço:', error.message || error);
        throw error;
    }
};
