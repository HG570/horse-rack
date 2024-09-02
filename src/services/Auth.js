import { post } from './Api';

export const login = async (email, password) => {
    try {
        const data = { email, password };
        const response = await post('/auth', data);

        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.userId);

        return {
            token: response.token,
            type: response.type,
            userId: response.userId,
            issuedAt: response.issuedAt,
            expiration: response.expiration,
        };
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

