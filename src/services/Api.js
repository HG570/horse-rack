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
        if (axios.isAxiosError(error) && !error.response) {
            throw {
                type: 'connection',
                message: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.'
            };
        }

        if (axios.isAxiosError(error) && error.response) {
            const status = error.response.status;

            if (status === 400 || status === 403 || status === 422) {
                const message = error.response.data?.errorMessage || 'Dados Indisponíveis. Tente novamente mais tarde.';
                throw {
                    type: 'validation',
                    message
                };
            }

            throw {
                type: 'http',
                message: `Erro ${status}`
            };
        }

        throw {
            type: 'unknown',
            message: error.message
        };
    }
};

export const post = async (endpoint, data, options = {}) => {
    try {
        const response = await api.post(endpoint, data, options);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (!error.response) {
                throw {
                    type: 'connection',
                    message: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.'
                };
            }

            const status = error.response.status;
            if (status === 400 || status === 403 || status === 422) {
                const message = error.response.data?.errorMessage || 'Dados inválidos. Verifique e tente novamente.';
                throw {
                    type: 'validation',
                    message: message
                };
            }

            throw {
                type: 'http',
                message: `Erro ${status}`
            };
        }

        throw {
            type: 'unknown',
            message: error.message
        };
    }
};

export const patch = async (endpoint, data, options = {}) => {
    try {
        const response = await api.patch(endpoint, data, options);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && !error.response) {
            throw {
                type: 'connection',
                message: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.'
            };
        }

        if (axios.isAxiosError(error) && error.response) {
            const status = error.response.status;

            if (status === 400 || status === 403 || status === 422) {
                const message = error.response.data?.errorMessage || 'Dados inválidos. Verifique e tente novamente.';
                throw {
                    type: 'validation',
                    message
                };
            }

            throw {
                type: 'http',
                message: `Erro ${status}`
            };
        }

        throw {
            type: 'unknown',
            message: error.message
        };
    }
};

export const del = async (endpoint, options = {}) => {
    try {
        const response = await api.delete(endpoint, options);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error) && !error.response) {
            throw {
                type: 'connection',
                message: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.'
            };
        }

        if (axios.isAxiosError(error) && error.response) {
            const status = error.response.status;

            if (status === 400 || status === 403 || status === 422) {
                const message = error.response.data?.errorMessage || 'Não foi possível e. Tente novamente mais tarde.';
                throw {
                    type: 'validation',
                    message
                };
            }

            throw {
                type: 'http',
                message: `Erro ${status}`
            };
        }

        throw {
            type: 'unknown',
            message: error.message
        };
    }
};

export default api;