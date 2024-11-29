import api from './Api';

export const updateUserProfile = async (updatedData) => {
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
    console.error('Erro ao atualizar o perfil do usuário', error);
    throw error;
  }
};
