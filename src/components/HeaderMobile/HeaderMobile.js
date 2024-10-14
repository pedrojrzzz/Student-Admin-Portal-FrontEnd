import React from 'react';
import { Nav } from './Styled';
import Logo from './Logo/Logo';

import UserSpaceMobile from './UserSpaceMobile/UserSpaceMobile';

export default function Header() {
  return (
    <Nav>
      <Logo />
      <UserSpaceMobile />
    </Nav>
  );
}
