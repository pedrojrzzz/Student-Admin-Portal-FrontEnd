import { toast } from 'react-toastify';

const options = {
  position: 'top-center',
  pauseOnHover: false,
  theme: 'dark',
};

/* eslint-disable consistent-return */
export const handleSuccess = (data, navigate) => {
  const notify = () => toast.success('Logado com sucesso', options);

  if (data.code === 'SUCCESS') {
    navigate('/paginaPrincipal');
    return notify();
  }
};
