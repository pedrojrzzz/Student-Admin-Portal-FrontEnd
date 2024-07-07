import * as Yup from 'yup';

export const schemaValidationYup = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .trim()
    .required('Campo obrigatório'),

  password: Yup.string().trim().required('Campo obrigatório'),
});
