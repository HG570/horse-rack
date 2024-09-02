import api from './Api'

export const getUserProfile = async () => {
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
