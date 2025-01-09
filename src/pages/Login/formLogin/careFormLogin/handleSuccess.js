import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
/* import { useDispatch } from 'react-redux'; */

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
export const handleSuccess = (data, navigate) => {
  console.log('dentro do handleSUccess');
  /*   const dispatch = useDispatch; */

  const notify = () => toast.success('Logado com sucesso', options);

  /*   dispatch(saveInfoUser(data.user)); */
  if (data.code === 'SUCCESS') {
    console.log('dentro do if');
    /* console.log(data); */
    cookie.set('tokenUser', data.token);
    navigate('/portal-alunos');
    return notify();
  }
};
