import React from 'react';
import { Nav } from './Styled';
import Logo from './Logo/Logo';
import UserSpace from './UserSpace/UserSpace';

export default function Header() {
  return (
    <Nav>
      <Logo />
      <UserSpace />
    </Nav>
  );
}
