import React from 'react';
import {
  FormLoginContainer,
  TitleContainer,
  ParagrafoContainer,
  InputContainer,
  ButtonContainer,
} from './styled';
import { validationFormLogin } from '../validationForm/ValidationForm';

export default function FormLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.emailField.value;
    const password = event.target.elements.passwordField.value;

    validationFormLogin(email, password);
  };
  return (
    <FormLoginContainer onSubmit={handleSubmit}>
      <TitleContainer>
        <h1>Login</h1>
      </TitleContainer>

      <ParagrafoContainer>
        <p>E-mail:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input placeholder="name@example.com" type="email" id="emailField" />
      </InputContainer>

      <ParagrafoContainer>
        <p>Password:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input placeholder="Password..." type="password" id="passwordField" />
      </InputContainer>

      <ButtonContainer>
        <button type="submit">Login</button>
      </ButtonContainer>
    </FormLoginContainer>
  );
}
