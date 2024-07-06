import * as Yup from 'yup';

export const registerSchemaYup = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Número de caracteres insuficiente')
    .max(30, 'Apenas 30 caracteres permitido')
    .required('Campo Obrigatório')
    .trim(),

  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório')
    .trim(),

  password: Yup.string()
    .min(6, 'Campo precisa ter no mínimo 6 caracteres')
    .max(20, 'Campo pode ter no máximo 20 caracteres')
    .required('Campo obrigatório')
    .trim(),

  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('Campo obrigatório'),
});
