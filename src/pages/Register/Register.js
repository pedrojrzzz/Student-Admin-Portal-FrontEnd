import React from 'react';

import { DivContainer } from './styled';
import FormRegisterFormik from './FormRegister/formRegisterFormik';
import Header from '../../components/Header/Header';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';
import { useScreenWidth } from '../../hooks/windowSize';
import { mediumDimesion } from '../../config/dimesion';

export default function Register() {
  const windowSize = useScreenWidth();
  return (
    <div>
      {windowSize < mediumDimesion ? <HeaderMobile /> : <Header />}
      <DivContainer>
        <FormRegisterFormik />
      </DivContainer>
    </div>
  );
}
