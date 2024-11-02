import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  padding: 20px;
  .div-nome-sobrenome {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .div-idade-peso-altura {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .div-buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 15px;
  }
`;

export const FieldStyled = styled(Field)``;
