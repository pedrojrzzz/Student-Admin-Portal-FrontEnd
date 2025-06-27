import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import { TextField, Button } from '@mui/material'; // Certifique-se de importar o Button
import { EditStudentsDataSchema } from './handlers/EditStudentDataSchema';
import { FormStyled, ButtonCloseModal } from './styled';
import SanitizeDataModalEdit from './handlers/SanitizeData';
import { fetchRequestEditStudents } from '../../redux/slices/studentEditSlice';
import { fetchRequestEditFotoStudent } from '../../redux/slices/studentEditFotoSlice';
import { fetchRequest as getStudents } from '../../redux/slices/alunosSlice';
import { SpinnerLoading } from '../../styles/GlobalStyles';
import '@mantine/core/styles.css';
import SwitchButton from '../SwitchButton/SwitchButton';
import ButtonFile from '../FileButton/ButtonFile';
import handleErrors from './handlers/handleErrors';
import handleSuccess from './handlers/handleSuccess';

export default function FormModalEdit({ data, funcCloseModal }) {
  const [fileUploaded, setFileUploaded] = useState(null);
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const errorAlreadyDisplayed = useRef(false);
  const successMessageAlreadyDisplayed = useRef(false);

  const {
    data: dataAlunosEdit,
    loading: loadingAlunosEdit,
    error: errorAlunosEdit,
  } = useSelector((state) => state.alunosEdit);

  const { id, nome, sobrenome, email, idade, peso, altura, Fotos } = data.data;

  const handleSubmit = (values) => {
    const newObj = {
      ...values,
      id,
      status: checked,
      Fotos: fileUploaded || null,
    };

    const sanitizedData = SanitizeDataModalEdit(newObj);

    dispatch(fetchRequestEditStudents(sanitizedData));

    if (fileUploaded) {
      dispatch(
        fetchRequestEditFotoStudent({ id: newObj.id, file: fileUploaded }),
      );
    }
  };

  useEffect(() => {
    if (errorAlunosEdit && !errorAlreadyDisplayed.current) {
      // Marca o erro como já exibido
      errorAlreadyDisplayed.current = true;
      funcCloseModal(); // Fecha o modal
      handleErrors(errorAlunosEdit); // Lida com o erro
    }
    if (!errorAlunosEdit) {
      errorAlreadyDisplayed.current = false;
    }
    if (
      Object.keys(dataAlunosEdit).length > 0 &&
      !successMessageAlreadyDisplayed.current
    ) {
      successMessageAlreadyDisplayed.current = true;
      dispatch(getStudents());
      funcCloseModal();
      handleSuccess();
    }
  }, [errorAlunosEdit, dataAlunosEdit]);

  return (
    <div>
      <Formik
        initialValues={{ id, nome, sobrenome, email, idade, peso, altura }} // Corrigido para usar a constante definida
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
                  crossOrigin="use-credentials"
                  src={Fotos[0].url}
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
