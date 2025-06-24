import { toast } from 'react-toastify';

const option = {
  position: 'top-center',
  pauseOnHover: false,
  theme: 'dark',
};

export default function handleErrors(error) {
  const notify = (message) => toast.error(message, option);

  if (error?.status === 400) {
    return notify(
      'Não foi possível aplicar as alterações, contate o administrador do sistema',
    );
  }

  if (error?.status === 401) {
    return notify('Usuário não autorizado a fazer alterações');
  }

  if (error?.status === 500) {
    return notify('Erro interno, porfavor tente novamente mais tarde.');
  }

  if (error.errorType === 'Network Error') {
    return notify('Erro interno, porfavor tente novamente mais tarde.');
  }

  return notify('Erro interno, porfavor tente novamente mais tarde.');
}
