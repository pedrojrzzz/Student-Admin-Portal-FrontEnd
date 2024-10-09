import React, { useEffect, useRef } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { schemaValidationYup } from './careFormLogin/schemaValidationYup';
import { sanitizeData } from './careFormLogin/sanitizeData';
import { fetchRequest, resetLoginState } from '../../../slices/loginSlice';
import { handleErrors } from './careFormLogin/handleErrors';
import { handleSuccess } from './careFormLogin/handleSuccess';
import { saveInfoUser } from '../../../slices/infoUserSlice';
import {
  FormStyled,
  TitleContainer,
  InputContainer,
  FieldStyled,
  ButtonContainer,
  ComponentErrorMessage,
  SpinnerLoading,
  DivError,
} from './styled';

export default function FormLoginFormik() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.login);
  const fetchWasMade = useRef(false); // Checando se o dispatch já foi feito
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
    fetchWasMade.current = true;
    console.log(data, loading, error);
  };

  useEffect(() => {
    if (error && fetchWasMade.current === true) {
      handleErrors(error);
    }

    if (data?.code === 'SUCCESS' && fetchWasMade.current === true) {
      handleSuccess(data, navigate);
      dispatch(resetLoginState());
      dispatch(saveInfoUser(data.user));
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
            <DivError>
              <ErrorMessage name="email" component={ComponentErrorMessage} />
            </DivError>
          </InputContainer>

          <InputContainer>
            <FieldStyled
              name="password"
              placeholder="password"
              type="password"
            />
            <DivError>
              <ErrorMessage name="password" component={ComponentErrorMessage} />
            </DivError>
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
