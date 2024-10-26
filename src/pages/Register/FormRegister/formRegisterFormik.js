import React, { useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerSchemaYup } from './careForm/schemaValidation';
import {
  fetchRequest,
  resetRegisterState,
} from '../../../slices/registerSlice';
import { handleFixInputName } from '../../../hooks/handleFixInputName';
import { sanitizeData } from './careForm/sanitizeData';
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
        const { sanitizedName, sanitizedEmail, sanitizedPassword } =
          sanitizeData(values);
        const user = {
          nome: sanitizedName,
          email: sanitizedEmail,
          password: sanitizedPassword,
        };
        dispatch(fetchRequest(user));
      }}
    >
      {({ setFieldValue }) => (
        <FormStyled>
          <TitleContainer>
            <h1>Register</h1>
          </TitleContainer>

          <InputContainer>
            <FieldStyled
              name="name"
              placeholder="Name"
              onBlur={(e) => {
                handleFixInputName(e, setFieldValue);
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
