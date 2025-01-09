import styled from 'styled-components';
import { Form } from 'formik';
import { IoMdClose } from 'react-icons/io';

export const FormStyled = styled(Form)`
  padding: 20px;

  .div-container-img-student {
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img-student-perfil {
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    padding-bottom: 10px;
    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
    }
  }
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
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
`;

export const ButtonCloseModal = styled(IoMdClose)`
  border-radius: 50%;
  color: black;
  &:hover {
    opacity: 0.7;
    background-color: #ede6e6;
    cursor: pointer;
  }
`;
