import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const optionCookies = {
  path: '/',
};

const cookie = new Cookies(null, optionCookies);

const options = {
  position: 'top-center',
  pauseOnHover: false,
  theme: 'dark',
};

/* eslint-disable consistent-return */
export const handleSuccess = (data) => {
  const notify = () => toast.success('Logado com sucesso', options);

  if (data.code === 'SUCCESS') {
    /* console.log(data); */
    cookie.set('tokenUser', data.token);
    console.log(cookie.get('tokenUser'));

    /* navigate('/teste'); */
    return notify();
  }
};
