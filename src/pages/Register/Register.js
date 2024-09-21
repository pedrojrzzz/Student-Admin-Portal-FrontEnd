import React from 'react';

import { DivContainer } from './styled';
/* import FormRegister from './FormRegister/FormRegister'; */
import FormRegisterFormik from './FormRegister/formRegisterFormik';
import Header from '../../components/Header/Header';

export default function Register() {
  return (
    <div>
      <Header />
      <DivContainer>
        <FormRegisterFormik />
      </DivContainer>
    </div>
  );
}
