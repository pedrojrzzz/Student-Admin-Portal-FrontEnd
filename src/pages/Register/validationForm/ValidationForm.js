import DOMPurify from 'dompurify';
import validator from 'validator';
import { toast } from 'react-toastify';

const optionNotify = {
  position: 'top-center',
  autoClose: 1800,
  draggable: false,
  theme: 'colored',
};
const notifyError = (mensagem) => toast.error(mensagem, optionNotify);

const cleanData = (data) => {
  const { name, email, password, confirmPassword } = data;
  const sanitizedName = DOMPurify.sanitize(name);
  const sanitizedEmail = DOMPurify.sanitize(email);
  const sanitizedPassword = DOMPurify.sanitize(password);
  const sanitizedConfirmPassword = DOMPurify.sanitize(confirmPassword);

  return {
    sanitizedName,
    sanitizedEmail,
    sanitizedPassword,
    sanitizedConfirmPassword,
  };
};

const isInputEmpty = (name, email, password, confirmPassword) => {
  if (name.trim() === '' || email.trim() === '') return true;
  if (password.trim() === '' || confirmPassword.trim() === '') return true;
  return false;
};

const fixName = (name) => {
  const nameFixed = name.trim().toLowerCase(); // Remove espaços extras e converte para minúsculas
  const words = nameFixed.split(' ');
  const upperWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  const fixedName2 = upperWords.join(' ');
  return { fixedName2 };
};

const validateEmail = (email) => {
  if (!validator.isEmail(email)) return true;
  return false;
};

const validatePassword = (password) => {
  if (password.length < 8) return true;
  return false;
};

const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) return true;
  return false;
};

export const ValidationForm = (data) => {
  const {
    sanitizedName,
    sanitizedEmail,
    sanitizedPassword,
    sanitizedConfirmPassword,
  } = cleanData(data);

  const flag1 = isInputEmpty(
    sanitizedName,
    sanitizedEmail,
    sanitizedPassword,
    sanitizedConfirmPassword,
  );
  if (flag1 === true) {
    notifyError(
      'Por favor, certifique-se de preencher todos os campos. Nenhum campo pode ficar vazio.',
    );
    return;
  }

  const { fixedName2: nameFixed } = fixName(sanitizedName);

  const flag2 = validateEmail(sanitizedEmail);
  if (flag2 === true) {
    notifyError('Por favor, insira um endereço de e-mail válido.');
    // eslint-disable-next-line no-useless-return
    return;
  }

  const flag3 = validatePassword(sanitizedPassword);
  if (flag3 === true) {
    notifyError('Sua senha não atende os critérios exigidos.');
    // eslint-disable-next-line no-useless-return
    return;
  }

  const flag4 = validateConfirmPassword(
    sanitizedPassword,
    sanitizedConfirmPassword,
  );
  if (flag4 === true) {
    notifyError(
      'Sua confirmação de senha não corresponde. Por favor, verifique e tente novamente.',
    );
    // eslint-disable-next-line no-useless-return
    return;
  }

  const dataUser = {
    name: nameFixed,
    email: sanitizedEmail,
    password: sanitizedPassword,
    confirmPassword: sanitizedConfirmPassword,
  };
  console.log('formulario enviado', dataUser);
};
