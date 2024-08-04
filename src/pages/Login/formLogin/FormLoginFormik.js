import React, { useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { schemaValidationYup } from './careFormLogin/schemaValidationYup';
import { sanitizeData } from './careFormLogin/sanitizeData';
import { fetchRequest, resetLoginState } from '../../../slices/loginSlice';
import { handleErrors } from './careFormLogin/handleErrors';
import { handleSuccess } from './careFormLogin/handleSuccess';
import {
  FormStyled,
  TitleContainer,
  InputContainer,
  FieldStyled,
  ButtonContainer,
  ComponentErrorMessage,
  SpinnerLoading,
} from './styled';

export default function FormLoginFormik() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.login);
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (dataForm) => {
    const { sanitizedEmail, sanitizedPassword } = sanitizeData(dataForm);
    const credentials = {
      email: sanitizedEmail,
      password: sanitizedPassword,
    };

    dispatch(fetchRequest(credentials));
    console.log(data, loading, error);
  };

  useEffect(() => {
    if (error) {
      handleErrors(error);
    }

    if (data?.code === 'SUCCESS') {
      handleSuccess(data, navigate);
      dispatch(resetLoginState());
    }
  }, [data, error]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaValidationYup}
      onSubmit={(values) => handleSubmit(values)}
    >
      {() => (
        <FormStyled>
          <TitleContainer>
            <h1>Login</h1>
          </TitleContainer>
          <InputContainer>
            <FieldStyled
              name="email"
              placeholder="example@hotmail.com"
              type="email"
            />
            <ErrorMessage name="email" component={ComponentErrorMessage} />
          </InputContainer>

          <InputContainer>
            <FieldStyled
              name="password"
              placeholder="password"
              type="password"
            />

            <ErrorMessage name="password" component={ComponentErrorMessage} />
          </InputContainer>
          <ButtonContainer>
            <button type="submit">
              {loading ? <SpinnerLoading size={20} /> : 'Sign In'}
            </button>
          </ButtonContainer>
        </FormStyled>
      )}
    </Formik>
  );
}
