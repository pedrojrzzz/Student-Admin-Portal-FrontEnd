import { toast } from 'react-toastify';

const option = {
  position: 'top-center',
  pauseOnHover: false,
  theme: 'dark',
};

export const careFormErrors = (error) => {
  const notify = (message) => toast.error(message, option);
  console.log(error);

  if (error.type === 'Error Network') {
    return toast.error(
      'Não foi possível buscar os dados dos alunos, tente novamente mais tarde',
    );
  }

  return notify(
    'Desculpe, parece que nosso sistema esta fora do ar, tente novamente mais tarde.',
  );
};
