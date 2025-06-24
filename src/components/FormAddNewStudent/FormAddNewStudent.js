/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { TextField, Button } from '@mui/material';
import { Avatar } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRequest } from '../../redux/slices/addStudentSlice';
import { AddNewStudentSchema } from './careForm/AddNewStudentSchema';
import { FormStyled, ButtonCloseModal } from './styled';
import ButtonFile from '../FileButton/ButtonFile';
import { SpinnerLoading } from '../../styles/GlobalStyles';
import handleSuccess from './careForm/handleSuccess';

const initialValues = {
  nome: '',
  sobrenome: '',
  email: '',
  idade: '',
  peso: '',
  altura: '',
  status: 1,
};

export default function FormAddNewStudent({ modalSelector, funcCloseModal }) {
  const [studentImgState, setStudentImgState] = useState({
    fileUploaded: null,
    urlImgStudent: null,
    isEmpty: false,
  });
  const [fileUploaded, setFileUploaded] = useState(null); // Apagar depois, checar se está sendo usado
  const [urlImgStudent, setUrlImgStudent] = useState(null); // Apagar depois, checar se está sendo usado
  const [profileImgIsEmpty, setProfileImgIsEmpty] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { response, error, loading } = useSelector(
    (state) => state.addNewStudent,
  );

  const handleSubmit = async (values) => {
    if (!studentImgState.fileUploaded) {
      // Não permitir envio do formulário sem uma foto de perfil pro aluno
      setStudentImgState((prev) => ({
        ...prev,
        isEmpty: true,
      }));
      setProfileImgIsEmpty(true);
      return;
    }
    setProfileImgIsEmpty(false);

    dispatch(
      fetchRequest({ newStudent: values, file: studentImgState.fileUploaded }),
    );
    modalSelector.current.close();
  };

  useEffect(() => {
    if (Object.keys(response).length > 0 && error === null) {
      handleSuccess(navigate);
    }
  }, [loading]);

  // useEffect(() => {
  //   if (studentImgState.fileUploaded) {
  //     setStudentImgState((prev) => ({
  //       ...prev,
  //       isEmpty: false,
  //     }));
  //   }
  // }, [studentImgState.fileUploaded]);

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
                funcCloseModal(
                  resetForm,
                  setFileUploaded,
                  setUrlImgStudent,
                  setProfileImgIsEmpty,
                )
              }
            />
          </div>

          <div className="div-container-img-student">
            <div className="img-student-perfil">
              <Avatar
                src={studentImgState.urlImgStudent}
                alt="profile picture"
                size={150}
                variant="light"
                color="rgba(40, 165, 237, 1)"
                radius="xl"
              />
            </div>
            <div className="error-profile-img">
              {studentImgState.isEmpty ? (
                <p>
                  A imagem de perfil é obrigatória. Selecione uma imagem para
                  continuar.
                </p>
              ) : (
                ' '
              )}
            </div>

            <ButtonFile
              studentImgState={studentImgState}
              setStudentImgState={setStudentImgState}
            />
          </div>

          <div className="div-nome-sobrenome">
            <Field
              name="nome"
              as={TextField}
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
