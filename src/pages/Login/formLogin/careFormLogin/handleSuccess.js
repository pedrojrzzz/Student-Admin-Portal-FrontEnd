import Cookies from 'universal-cookie';

const optionCookies = {
  path: '/',
};

const cookie = new Cookies(null, optionCookies);

export const handleSuccess = (data, navigate) => {
  if (data.code === 'SUCCESS') {
    cookie.set('tokenUser', data.token);
    navigate('/portal-alunos');
  }
};
