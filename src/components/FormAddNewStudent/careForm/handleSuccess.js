/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify';

export default function handleSuccess(navigate) {
  console.log('oi estou dentro do handleSuccess');
  const options = {
    position: 'top-center',
    pauseOnHover: false,
    theme: 'dark',
  };
  // eslint-disable-next-line arrow-body-style
  const notify = () => {
    return toast.success('Aluno criado com sucesso', options);
  };
  setTimeout(() => {
    navigate(0);
  }, 3000);

  notify();
}

// Não vou usar o navigate, vou mudar o valor do aluno no listToBeDisplayed
