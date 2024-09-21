import React from 'react';
import Logo from '../Header/Logo/Logo';
import { Nav } from './styled';
import UserSpaceLogado from './UserSpaceLogado/UserSpaceLogado';

export default function HeaderLogado() {
  return (
    <Nav>
      <Logo />
      <UserSpaceLogado />
    </Nav>
  );
}
