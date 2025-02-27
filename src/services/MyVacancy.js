 import api from './Api'

export const getMyVacancy = async () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

    try {
      const response = await api.get(`/vacancy/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter vaga do usuário', error);
      localStorage.clearItem('token', 'userId');
    }
};
