import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { fifthColor, successColor, errorColor } from '../config/colors';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  html, body, #root {
    height: 100%;
    overflow: auto;
  }

  body {
    font-family: sans-serif;
    background-color: ${fifthColor};
    
  }

  body .Toastify__toast-container {
    width: auto;
  }

  body .Toastify__toast--success {
    background-color: ${successColor};
  }

  body .Toastify__toast--error {
    background-color: ${errorColor};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerLoading = styled(ClipLoader)``;
