import * as Yup from 'yup';

export const EditStudentsDataSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, 'Números de caracteres insuficiente')
    .max(30, 'Apenas 30 caracteres permitido')
    .matches(/^[a-zA-Z]+$/, 'Apenas letras são permitidas')
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
    .matches(/^(0|[1-9][0-9]{0,2})$/, 'Idade inválida') // Permite 0 ou números de 1 a 999
    .notOneOf(['0'], 'Idade inválida')
    .required('Campo obrigatório')
    .trim(),
  peso: Yup.string()
    .min(2, 'Peso inválido')
    .max(6, 'Peso inválido')
    .matches(/^[^,]*$/, 'Virgula não é permitida, utilize a notação de "."')
    .required('Campo obrigatório')
    .trim(),
  altura: Yup.string()
    .min(2, 'Altura inválida')
    .max(5, 'Altura inválida')
    .matches(/^[^,]*$/, 'Virgula não é permitida, utilize a notação de "."')
    .matches(/^[0-9.]+$/, 'Apenas números são permitidos')
    .matches(/^(?!0)\d+(\.\d+)?$/, '0 no inicio não é permitido')
    .required('Campo obrigatório')
    .trim(),
});
