import validator from 'validator';
import { toast } from 'react-toastify';

const optionNotify = {
  position: 'top-center',
  autoClose: 1800,
  draggable: false,
  theme: 'colored',
  pauseOnHover: false,
};
const notifyError = (mensagem) => toast.error(mensagem, optionNotify);

const isInputEmpty = (name, email, password, confirmPassword) => {
  if (name.length < 1 || email.length < 1) return true;
  if (password.length < 1 || confirmPassword.length < 1) return true;
  return false;
};

const validateEmail = (email) => {
  if (!validator.isEmail(email)) return true;
  return false;
};

const validatePassword = (password) => {
  if (password.length < 6 || password.length > 50) return true;
  return false;
};

const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) return true;
  return false;
};

export const validationForm = (userData) => {
  const { name, email, password, confirmPassword } = userData;

  const flag1 = isInputEmpty(name, email, password, confirmPassword);
  if (flag1 === true) {
    notifyError(
      'Por favor, certifique-se de preencher todos os campos. Nenhum campo pode ficar vazio.',
    );
    return false;
  }

  const flag2 = validateEmail(email);
  if (flag2 === true) {
    notifyError('Por favor, insira um endereço de e-mail válido.');
    return false;
  }

  const flag3 = validatePassword(password);
  if (flag3 === true) {
    notifyError('Sua senha não atende os critérios exigidos.');
    return false;
  }

  const flag4 = validateConfirmPassword(password, confirmPassword);
  if (flag4 === true) {
    notifyError(
      'Sua confirmação de senha não corresponde. Por favor, verifique e tente novamente.',
    );
    return false;
  }
  return true;
};
