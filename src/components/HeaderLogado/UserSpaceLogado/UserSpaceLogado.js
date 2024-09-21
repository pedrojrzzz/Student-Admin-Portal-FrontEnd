/* eslint-disable jsx-a11y/click-events-have-key-events  */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  DivContainer,
  DivIconUser,
  IconUser,
  ContainerInfoUser,
  SideDivs,
  ContainerLogout,
} from './styled';

const optionCookies = {
  path: '/',
};

export default function UserSpaceLogado() {
  const navigate = useNavigate();
  const cookie = new Cookies(null, optionCookies);
  const { dataUser } = useSelector((state) => state.infoUser);
  console.log(dataUser);
  /* if (dataUser === null || dataUser === undefined ) {
    return
  } */

  // Checando se objeto com as info do user está vazio
  useEffect(() => {
    if (dataUser === null || dataUser === undefined) {
      navigate('/page-loading', {
        state: {
          msg: 'Não conseguimos obter as informações do user, por favor faça login novamente',
        },
      });
    }
  }, []);

  const handleClickLogout = () => {
    cookie.remove('tokenUser');
    navigate('/');
  };
  return (
    <DivContainer>
      <DivIconUser>
        <IconUser />
      </DivIconUser>

      <SideDivs>
        <ContainerInfoUser>
          <p>Olá, {dataUser ? dataUser.nome : 'Anônimo'}</p>
        </ContainerInfoUser>
        <ContainerLogout>
          <p onClick={handleClickLogout}>Logout</p>
        </ContainerLogout>
      </SideDivs>
    </DivContainer>
  );
}
