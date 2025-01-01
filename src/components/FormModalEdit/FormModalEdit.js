/* eslint-disable react/destructuring-assignment */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import { TextField, Button } from '@mui/material'; // Certifique-se de importar o Button
import { useNavigate } from 'react-router-dom';
import { EditStudentsDataSchema } from './handlers/EditStudentDataSchema';
import { FormStyled, ButtonCloseModal } from './styled';
import imgStudent from '../../images/imgStudentMulher4.jpg';
import SanitizeDataModalEdit from './handlers/SanitizeData';
import { fetchRequestEditStudents } from '../../redux/slices/studentEditSlice';
import { fetchRequestEditFotoStudent } from '../../redux/slices/studentEditFotoSlice';
import { SpinnerLoading } from '../../styles/GlobalStyles';
import '@mantine/core/styles.css';
import SwitchButton from '../SwitchButton/SwitchButton';
import ButtonFile from '../FileButton/ButtonFile';

export default function FormModalEdit({ data, funcCloseModal }) {
  const [fileUploaded, setFileUploaded] = useState(null);
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: dataAlunosEdit,
    loading: loadingAlunosEdit,
    error: errorAlunosEdit,
  } = useSelector((state) => state.alunosEdit);

  const { dataFotoSlice, loadingFotoSlice, errorFotoSlice } = useSelector(
    (state) => state.alunosFotoEdit,
  );

  const { id, nome, sobrenome, email, idade, peso, altura } = data.data;

  const initialValues = { nome, sobrenome, email, idade, peso, altura };

  const handleSubmit = (values) => {
    const newObj = {
      ...values,
      id,
      status: checked,
      Fotos: fileUploaded || null,
    };

    const sanitizedData = SanitizeDataModalEdit(newObj);

    dispatch(fetchRequestEditStudents(sanitizedData)); // Não está sendo assincrono
    if (fileUploaded) {
      dispatch(
        fetchRequestEditFotoStudent({ id: newObj.id, file: fileUploaded }),
      );
    }

    navigate('/');
  };

  return (
    <div>
      <Formik
        initialValues={initialValues} // Corrigido para usar a constante definida
        enableReinitialize
        validationSchema={EditStudentsDataSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched, resetForm }) => (
          <FormStyled>
            <div className="header-modal">
              <h3>Editar informações</h3>
              <ButtonCloseModal
                size={30}
                onClick={() => funcCloseModal(resetForm)}
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

              <ButtonFile
                fileUploaded={fileUploaded}
                setFileUploaded={setFileUploaded}
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

            <div className="div-status">
              <SwitchButton setChecked={setChecked} checked={checked} />
            </div>

            <div className="div-buttons">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                disabled={loadingAlunosEdit}
              >
                {loadingAlunosEdit ? (
                  <SpinnerLoading size={20} color="white" />
                ) : (
                  'Salvar Alterações'
                )}
              </Button>
            </div>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
}
