import * as Yup from 'yup';

export const EditStudentsDataSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, 'Números de caracteres insuficiente')
    .max(30, 'Apenas 30 caracteres permitido')
    .required('Campo Obrigatório')
    .trim(),
  sobrenome: Yup.string()
    .min(2, 'Números de caracteres insuficiente')
    .max(30, 'Campo sobrenome deve ter no máximo 30 caracteres')
    .required('Campo Obrigatório')
    .trim(),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório')
    .trim(),
  idade: Yup.string()
    .min(1, 'Idade inválida')
    .max(3, 'Idade inválida')
    .required('Campo obrigatório')
    .trim(),
  peso: Yup.string()
    .min(2, 'Peso inválido')
    .max(3, 'Peso inválido')
    .required('Campo obrigatório')
    .trim(),
  altura: Yup.string()
    .min(2, 'Altura inválida')
    .max(3, 'Altura inválida')
    .required('Campo obrigatório')
    .trim(),
});
