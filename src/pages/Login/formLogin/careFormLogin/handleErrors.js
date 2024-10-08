import { toast } from 'react-toastify';
/* eslint-disable consistent-return */

const option = {
  position: 'top-center',
  pauseOnHover: false,
  theme: 'dark',
};
export const handleErrors = (error) => {
  const notify = (message) => toast.error(message, option);

  if (error?.status !== 401) {
    console.log(error);
    return notify('Erro interno, tente novamente mais tarde.');
  }

  if (error.status === 401) {
    return error.message.map((err) => notify(err));
  }

  return notify(
    'Desculpe, estamos passando por problemas técnicos, tente novamente mais tarde',
  );
};
