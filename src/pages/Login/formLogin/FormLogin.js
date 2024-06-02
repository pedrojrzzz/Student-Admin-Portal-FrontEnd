import React from 'react';
import {
  FormLoginContainer,
  TitleContainer,
  ParagrafoContainer,
  InputContainer,
  ButtonContainer,
} from './styled';

export default function FormLogin() {
  return (
    <FormLoginContainer>
      <TitleContainer>
        <h1>Login</h1>
      </TitleContainer>

      <ParagrafoContainer>
        <p>E-mail:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input placeholder="name@example.com" type="email" />
      </InputContainer>

      <ParagrafoContainer>
        <p>Password:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input placeholder="Password..." type="password" />
      </InputContainer>

      <ButtonContainer>
        <button type="button">Login</button>
      </ButtonContainer>
    </FormLoginContainer>
  );
}
