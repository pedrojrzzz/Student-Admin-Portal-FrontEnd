/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, colors } from '@mui/material'; // Certifique-se de importar o Button
import { EditStudentsDataSchema } from './careForm/EditStudentDataSchema';
import { FormStyled, FieldStyled } from './styled';

export default function FormModalEdit(props) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  // Definindo valores iniciais
  const initialValues = {
    nome: props.data.data.nome || '',
    sobrenome: props.data.data.sobrenome || '',
    email: props.data.data.email || '',
    idade: props.data.data.idade || '',
    peso: props.data.data.peso || '',
    altura: props.data.data.altura || '',
  };

  return (
    <div>
      <Formik
        initialValues={initialValues} // Corrigido para usar a constante definida
        validationSchema={EditStudentsDataSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormStyled>
            <div className="div-nome-sobrenome">
              <FieldStyled
                name="nome"
                as={TextField}
                value={props.data.data.nome}
                label="Nome"
                variant="outlined"
                error={touched.nome && Boolean(errors.nome)} // Verifica se o campo foi tocado e se há erros
                helperText={touched.nome && errors.nome} // Exibe a mensagem de erro
              />

              <Field
                name="sobrenome"
                as={TextField}
                label="Sobrenome"
                variant="outlined"
                error={touched.sobrenome && Boolean(errors.sobrenome)} // Verifica se o campo foi tocado e se há erros
                helperText={touched.sobrenome && errors.sobrenome} // Exibe a mensagem de erro
              />
            </div>

            <Field
              name="email"
              as={TextField}
              label="Email"
              variant="outlined"
              fullWidth
              error={touched.email && Boolean(errors.email)} // Verifica se o campo foi tocado e se há erros
              helperText={touched.email && errors.email} // Exibe a mensagem de erro
            />
            <Field
              name="idade"
              as={TextField}
              label="Idade"
              variant="outlined"
              fullWidth
              error={touched.idade && Boolean(errors.idade)} // Verifica se o campo foi tocado e se há erros
              helperText={touched.idade && errors.idade} // Exibe a mensagem de erro
            />
            <Field
              name="peso"
              as={TextField}
              label="Peso"
              variant="outlined"
              fullWidth
              error={touched.peso && Boolean(errors.peso)} // Verifica se o campo foi tocado e se há erros
              helperText={touched.peso && errors.peso} // Exibe a mensagem de erro
            />
            <Field
              name="altura"
              as={TextField}
              label="Altura"
              variant="outlined"
              fullWidth
              error={touched.altura && Boolean(errors.altura)} // Verifica se o campo foi tocado e se há erros
              helperText={touched.altura && errors.altura} // Exibe a mensagem de erro
            />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
}
