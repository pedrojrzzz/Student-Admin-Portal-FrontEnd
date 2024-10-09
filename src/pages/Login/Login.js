import React from 'react';
import { DivContainer } from './styled';
import FormLoginFormik from './formLogin/FormLoginFormik';
import Header from '../../components/Header/Header';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';
import { mediumDimesion } from '../../config/dimesion';
import { useScreenWidth } from '../../hooks/windowSize';

export default function Login() {
  const windowSize = useScreenWidth();

  return (
    <div>
      {windowSize < mediumDimesion ? <HeaderMobile /> : <Header />}
      <DivContainer>
        <FormLoginFormik />
      </DivContainer>
    </div>
  );
}
