import { toast } from 'react-toastify';
import validator from 'validator';
import DOMPurify from 'dompurify';

const optionNotify = {
  position: 'top-center',
  autoClose: 1800,
  draggable: false,
  theme: 'colored',
};

const notifyInputEmpty = () =>
  toast.error('Nenhum dos campos pode estar vazio.', optionNotify);

const notifyInvalidEmail = () => {
  toast.error(
    'E-mail inválido, verifique novamente o campo e-mail.',
    optionNotify,
  );
};

const notifyInvalidPassword = () => {
  toast.error(
    'Por favor, verifique se o e-mail ou a senha fornecidos estão corretos.',
    optionNotify,
  );
};

const cleanData = (email, password) => {
  const sanitizedEmail = DOMPurify.sanitize(email);
  const sanitizedPassword = DOMPurify.sanitize(password);

  return { sanitizedEmail, sanitizedPassword };
};

const isInputEmpty = (email, password) => {
  if (email.trim() === '' || password.trim() === '') return true;
  return false;
};

export const validationFormLogin = (email, password) => {
  const { sanitizedEmail, sanitizedPassword } = cleanData(email, password);

  if (isInputEmpty(sanitizedEmail, sanitizedPassword)) {
    return notifyInputEmpty();
  }

  if (!validator.isEmail(sanitizedEmail)) {
    return notifyInvalidEmail();
  }

  if (sanitizedPassword.length < 8) {
    return notifyInvalidPassword();
  }

  return true;
};
