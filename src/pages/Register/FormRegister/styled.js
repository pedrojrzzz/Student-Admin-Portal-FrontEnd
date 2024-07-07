import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { Form, Field } from 'formik';
import {
  textColor,
  shadow,
  secondyColor,
  formColor,
} from '../../../config/colors';

export const FormRegisterContainer = styled.form`
  height: auto;
  width: 30%;
  background-color: ${formColor};
  box-shadow: ${shadow};
  padding: 20px;

  @media (max-width: 1500px) {
    padding: 20px;
  }

  @media (max-width: 1200px) {
    width: 35%;
  }

  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 750px) {
    width: 55%;
  }

  @media (max-width: 650px) {
    width: 65%;
  }

  @media (max-width: 550px) {
    width: 75%;
  }

  @media (max-width: 480px) {
    width: 85%;
  }

  @media (max-width: 420px) {
    width: 95%;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${textColor};
  }

  @media (max-width: 1500px) {
    h1 {
      font-size: 25px;
    }
  }
`;

export const InfoPasswordContainer = styled.div`
  height: auto;
  width: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;

  li {
    font-size: 15px;
    color: ${textColor};
    font-weight: 600;
    list-style-type: disc;
  }
`;

export const ParagrafoContainer = styled.div`
  height: 5%;
  width: 100%;

  p {
    color: ${textColor};
    font-size: 15px;
    font-weight: 700;
    margin-left: 60px;
  }

  @media (max-width: 1500px) {
    p {
      font-size: 14px;
      margin-left: 55px;
    }
  }

  @media (max-width: 1400px) {
    p {
      font-size: 14px;
      margin-left: 40px;
    }
  }

  @media (max-width: 1300px) {
    p {
      font-size: 14px;
      margin-left: 25px;
    }
  }

  @media (max-width: 1200px) {
    p {
      font-size: 14px;
      margin-left: 38px;
    }
  }

  @media (max-width: 1100px) {
    p {
      font-size: 14px;
      margin-left: 23px;
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 14px;
      margin-left: 28px;
    }
  }

  @media (max-width: 800px) {
    p {
      font-size: 14px;
      margin-left: 10px;
    }
  }

  @media (max-width: 750px) {
    p {
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;

export const InputContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 10px 0px;

  input {
    border: none;
    height: 30px;
    width: 300px;
    border-radius: 3px;
    text-indent: 5px;
  }

  input:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  button {
    height: 30px;
    width: 300px;
    border-radius: 3px;
    border: none;
    font-size: 14px;
    transition: 0.3s;
  }

  button:hover {
    background-color: ${secondyColor};
    transition: 0.3s;
    color: white;
  }
`;

export const SpinnerLoader = styled(ClipLoader)``;

export const FieldStyled = styled(Field)`
  border: none;
  height: 30px;
  width: 300px;
  border-radius: 3px;
  text-indent: 5px;
  line-height: 30px;
  margin-bottom: 10px;

  input:focus {
    outline: none;
  }
`;

export const FormStyled = styled(Form)`
  height: auto;
  width: 30%;
  background-color: ${formColor};
  box-shadow: ${shadow};
  padding: 20px;

  @media (max-width: 1500px) {
    padding: 20px;
  }

  @media (max-width: 1200px) {
    width: 35%;
  }

  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 750px) {
    width: 55%;
  }

  @media (max-width: 650px) {
    width: 65%;
  }

  @media (max-width: 550px) {
    width: 75%;
  }

  @media (max-width: 480px) {
    width: 85%;
  }

  @media (max-width: 420px) {
    width: 95%;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const ComponentErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 800;
  margin-top: -5px;
`;
