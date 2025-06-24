import { toast } from 'react-toastify';

export default function handleSuccess(navigate) {
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
