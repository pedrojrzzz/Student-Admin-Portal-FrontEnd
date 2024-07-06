import React, { useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerSchemaYup } from './careForm/schemaValidation';
import {
  fetchRequest,
  resetRegisterState,
} from '../../../slices/registerSlice';
import { handleErrors } from './careForm/handleErrors';
import { handleSuccess } from './careForm/handleSuccess';
import {
  ButtonContainer,
  FieldStyled,
  FormStyled,
  InputContainer,
  TitleContainer,
  ComponentErrorMessage,
  SpinnerLoader,
} from './styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export default function FormRegisterFormik() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.register);
  const navigate = useNavigate();

  const handleFixInputName = (e) => {
    const { value } = e.target;
    const fullName = value.split(' ');

    const newName = fullName.map((each) => {
      const fixed = each.charAt(0).toUpperCase() + each.slice(1).toLowerCase();
      return fixed;
    });

    e.target.value = newName.join(' ');
    setInputValue(e.target.value); // Atualiza o estado com o valor corrigido
  };

  useEffect(() => {
    if (error) {
      handleErrors(error);
    }

    if (data?.code === 'SUCCESS') {
      handleSuccess(data, navigate);
      dispatch(resetRegisterState());
    }
  }, [error, data]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchemaYup}
      onSubmit={(values) => {
        const user = {
          nome: values.name,
          email: values.email,
          password: values.password,
        };
        dispatch(fetchRequest(user));
      }}
    >
      {() => (
        <FormStyled>
          <TitleContainer>
            <h1>Register</h1>
          </TitleContainer>

          <InputContainer>
            <FieldStyled
              name="name"
              placeholder="Name"
              onBlur={(e) => {
                handleFixInputName(e);
              }}
            />
            <ErrorMessage name="name" component={ComponentErrorMessage} />
          </InputContainer>

          <InputContainer>
            <FieldStyled
              name="email"
              type="email"
              placeholder="name@example.com"
            />
            <ErrorMessage name="email" component={ComponentErrorMessage} />
          </InputContainer>

          <InputContainer>
            <FieldStyled name="password" type="password" placeholder="senha" />
            <ErrorMessage name="password" component={ComponentErrorMessage} />
          </InputContainer>

          <InputContainer>
            <FieldStyled
              name="repeatPassword"
              type="password"
              placeholder="Confirme sua senha"
            />
            <ErrorMessage
              name="repeatPassword"
              component={ComponentErrorMessage}
            />
          </InputContainer>

          <ButtonContainer>
            <button type="submit">
              {loading ? <SpinnerLoader size={20} /> : 'Submit'}
            </button>
          </ButtonContainer>
        </FormStyled>
      )}
    </Formik>
  );
}
