/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */

import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import { TextField, Button } from '@mui/material'; // Certifique-se de importar o Button
import { IoCloudUploadOutline, IoCloudUpload } from 'react-icons/io5';
import { EditStudentsDataSchema } from './careForm/EditStudentDataSchema';
import { FormStyled, ButtonCloseModal } from './styled';
import { SearchAndFilterContext } from '../../context/SearchAndFilterContext';
import imgStudent from '../../images/imgStudentMulher4.jpg';
import SanitizeDataModalEdit from './careForm/SanitizeData';
import { fetchRequestEditStudents } from '../../redux/slices/studentEditSlice';
import { SpinnerLoading } from '../../styles/GlobalStyles';
import '@mantine/core/styles.css';
import SwitchButton from '../SwitchButton/SwitchButton';
import ButtonFile from '../FileButton/ButtonFile';

export default function FormModalEdit(props) {
  const { originalList } = useContext(SearchAndFilterContext);
  const [fileUploaded, setFileUploaded] = useState(null);
  const [file, setFile] = useState(null);
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const { dataAlunosEdit, loading, error } = useSelector(
    (state) => state.alunosEdit,
  );

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
    const file1 = e.target.files[0]; // Pega o primeiro arquivo selecionado
    setFileUploaded(true);
    setFile(file1);
  };

  const handleSubmit = (values) => {
    const newObj = {
      ...values,
      id: props.data.data.id,
      status: checked,
      Fotos: fileUploaded || null,
    };

    const sanitizedData = SanitizeDataModalEdit(newObj);
    dispatch(fetchRequestEditStudents(sanitizedData));
    console.log('******* LOGS TESTE ***********');
    console.log(dataAlunosEdit);
    console.log(loading);
    console.log(error);
    console.log('******* LOGS TESTE FIM ***********');
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

              <ButtonFile
                fileUploaded={fileUploaded}
                setFileUploaded={setFileUploaded}
              />
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

            <div className="div-status">
              <SwitchButton setChecked={setChecked} checked={checked} />
            </div>

            <div className="div-buttons">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
              >
                {loading ? (
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
