import React from 'react';
import {
  FormRegisterContainer,
  TitleContainer,
  ParagrafoContainer,
  InputContainer,
  ButtonContainer,
} from './styled';

export default function FormRegister() {
  return (
    <FormRegisterContainer>
      <TitleContainer>
        <h1>Register</h1>
      </TitleContainer>

      <ParagrafoContainer>
        <p>Name:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input type="text" placeholder="Name" />
      </InputContainer>

      <ParagrafoContainer>
        <p>E-mail:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input type="email" placeholder="name@example.com" />
      </InputContainer>

      <ParagrafoContainer>
        <p>Password:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input type="password" placeholder="Password" />
      </InputContainer>

      <ParagrafoContainer>
        <p>Confirm Password:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input type="password" placeholder="Repeat password" />
      </InputContainer>

      <ButtonContainer>
        <button type="button">Register</button>
      </ButtonContainer>
    </FormRegisterContainer>
  );
}
