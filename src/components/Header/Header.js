import React, { useEffect, useState } from 'react';
import { Nav } from './Styled';
import Logo from './Logo/Logo';
import UserSpace from './UserSpace/UserSpace';
import UserSpaceMobile from './UserSpaceMobile/UserSpaceMobile';
import { bigDimension } from '../../config/dimesion';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Nav>
      <Logo />
      {windowWidth > bigDimension ? <UserSpace /> : <UserSpaceMobile />}
    </Nav>
  );
}
