import React from 'react';
import { DivContainer } from './styled';
import FormLoginFormik from './formLogin/FormLoginFormik';
import Header from '../../components/Header/Header';

export default function Login() {
  return (
    <div>
      <Header />
      <DivContainer>
        <FormLoginFormik />
      </DivContainer>
    </div>
  );
}
