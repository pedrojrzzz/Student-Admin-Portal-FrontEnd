import React from 'react';
import {
  FormRegisterContainer,
  TitleContainer,
  InfoPasswordContainer,
  ParagrafoContainer,
  InputContainer,
  ButtonContainer,
} from './styled';
import { ValidationForm } from '../validationForm/ValidationForm';

export default function FormRegister() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.elements.nameField.value,
      email: event.target.elements.emailField.value,
      password: event.target.elements.passwordField.value,
      confirmPassword: event.target.elements.confirmPasswordField.value,
    };
    ValidationForm(data);
  };

  return (
    <FormRegisterContainer onSubmit={handleSubmit}>
      <TitleContainer>
        <h1>Register</h1>
      </TitleContainer>

      <InfoPasswordContainer>
        <ul>
          <li>Sua senha deve conter no mínimo 8 caracteres.</li>
        </ul>
      </InfoPasswordContainer>

      <ParagrafoContainer>
        <p>Name:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input type="text" placeholder="Name" id="nameField" />
      </InputContainer>

      <ParagrafoContainer>
        <p>E-mail:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input type="email" placeholder="name@example.com" id="emailField" />
      </InputContainer>

      <ParagrafoContainer>
        <p>Password:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input type="password" placeholder="Password" id="passwordField" />
      </InputContainer>

      <ParagrafoContainer>
        <p>Confirm Password:</p>
      </ParagrafoContainer>
      <InputContainer>
        <input
          type="password"
          placeholder="Repeat password"
          id="confirmPasswordField"
        />
      </InputContainer>

      <ButtonContainer>
        <button type="submit">Register</button>
      </ButtonContainer>
    </FormRegisterContainer>
  );
}
