/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { TextField, Button } from '@mui/material';
import { Avatar } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { FormStyled, ButtonCloseModal } from './styled';
import { AddNewStudentSchema } from './careForm/AddNewStudentSchema';
import ButtonFile from '../FileButton/ButtonFile';
import { fetchRequest } from '../../redux/slices/addStudentSlice';
import { SpinnerLoading } from '../../styles/GlobalStyles';

const initialValues = {
  nome: '',
  sobrenome: '',
  email: '',
  idade: '',
  peso: '',
  altura: '',
  status: 1,
};

// eslint-disable-next-line no-unused-vars
export default function FormAddNewStudent({ modalSelector, funcCloseModal }) {
  const [fileUploaded, setFileUploaded] = useState(null);
  const [urlImgStudent, setUrlImgStudent] = useState(null);
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.addNewStudent);
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(fetchRequest(values));
  };

  useEffect(() => {
    console.log(data);
    if (data.length > 0 && error === null) {
      console.log('Novo aluno criado');
    }

    if (error) {
      console.log('Erro ao criar aluno');
      console.log(error);
    }
  }, [data, error, loading]);

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={AddNewStudentSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched, resetForm }) => (
        <FormStyled>
          <div className="header-modal">
            <h3>Adiconar novo estudante</h3>
            <ButtonCloseModal
              size={30}
              onClick={() =>
                funcCloseModal(resetForm, setFileUploaded, setUrlImgStudent)
              }
            />
          </div>

          <div className="div-container-img-student">
            <div className="img-student-perfil">
              <Avatar
                src={urlImgStudent}
                alt="nenhuma img"
                size={150}
                variant="light"
                color="rgba(40, 165, 237, 1)"
                radius="xl"
              />
            </div>

            <ButtonFile
              fileUploaded={fileUploaded}
              setFileUploaded={setFileUploaded}
              setUrlImgStudent={setUrlImgStudent}
            />
          </div>

          <div className="div-nome-sobrenome">
            <Field
              name="nome"
              as={TextField}
              /* defaultValue={props.data.data.nome} */
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
            >
              {loading ? <SpinnerLoading size={20} /> : 'Adicionar Estudante'}
            </Button>
          </div>
        </FormStyled>
      )}
    </Formik>
  );
}
