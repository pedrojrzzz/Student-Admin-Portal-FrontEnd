import Cookies from 'js-cookie';

export const getAuthorization = () => {
  const authorization = Cookies.get('tokenUser');
  if (!authorization) {
    return new Error('Não foi possível obter a autorização do usuário');
  }
  return authorization;
};
