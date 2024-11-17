/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Formik, Field } from 'formik';
import { TextField, Button } from '@mui/material'; // Certifique-se de importar o Button
import { IoCloudUploadOutline } from 'react-icons/io5';
import { EditStudentsDataSchema } from './careForm/EditStudentDataSchema';
import { FormStyled, ButtonCloseModal } from './styled';
import imgStudent from '../../images/imgStudentMulher4.jpg';

export default function FormModalEdit(props) {
  // Definindo valores iniciais
  const initialValues = {
    nome: `${props.data.data.nome}`,
    sobrenome: `${props.data.data.sobrenome}`,
    email: `${props.data.data.email}`,
    idade: `${props.data.data.idade}`,
    peso: `${props.data.data.peso}`,
    altura: `${props.data.data.altura}`,
  };

  // Lidar com as fotos dos alunos
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Pega o primeiro arquivo selecionado
    console.log(file);
  };

  const handleSubmit = () => {
    console.log('Formulário enviado');
    console.log(props.data.data.nome);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues} // Corrigido para usar a constante definida
        validationSchema={EditStudentsDataSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched, resetForm }) => (
          <FormStyled>
            <div className="header-modal">
              <h3>Editar informações</h3>
              <ButtonCloseModal
                size={30}
                onClick={() => props.funcCloseModal(resetForm)}
              />
            </div>

            <div className="div-container-img-student">
              <div className="img-student-perfil">
                <img
                  src={imgStudent}
                  alt="Imagem de perfil estudante"
                  className="img-perfil"
                />
              </div>
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<IoCloudUploadOutline />}
              >
                Alterar imagem
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange(e)}
                />
              </Button>
            </div>

            <div className="div-nome-sobrenome">
              <Field
                name="nome"
                as={TextField}
                defaultValue={props.data.data.nome}
                label="Nome"
                variant="outlined"
                error={touched.nome && Boolean(errors.nome)}
                helperText={touched.nome && errors.nome}
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
            <div className="div-idade-peso-altura">
              <Field
                name="idade"
                as={TextField}
                label="Idade"
                variant="outlined"
                error={touched.idade && Boolean(errors.idade)} // Verifica se o campo foi tocado e se há erros
                helperText={touched.idade && errors.idade} // Exibe a mensagem de erro
              />
              <Field
                name="peso"
                as={TextField}
                label="Peso"
                variant="outlined"
                error={touched.peso && Boolean(errors.peso)} // Verifica se o campo foi tocado e se há erros
                helperText={touched.peso && errors.peso} // Exibe a mensagem de erro
              />
              <Field
                name="altura"
                as={TextField}
                label="Altura"
                variant="outlined"
                error={touched.altura && Boolean(errors.altura)} // Verifica se o campo foi tocado e se há erros
                helperText={touched.altura && errors.altura} // Exibe a mensagem de erro
              />
            </div>
            <div className="div-buttons">
              <Button type="submit" variant="contained" color="primary">
                Salvar Alterações
              </Button>
            </div>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
}
