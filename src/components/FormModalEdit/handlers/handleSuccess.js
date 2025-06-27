/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify';

export default function handleSuccess(response) {
  const options = {
    position: 'top-center',
    pauseOnHover: false,
    theme: 'dark',
  };
  // eslint-disable-next-line arrow-body-style
  const notify = () => {
    return toast.success(response[0], options);
  };
  notify();
}

// Não vou usar o navigate, vou mudar o valor do aluno no listToBeDisplayed
