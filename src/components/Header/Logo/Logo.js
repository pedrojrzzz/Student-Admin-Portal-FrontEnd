import React from 'react';
import { Link } from 'react-router-dom';
import { DivContainer } from './Styled';

export default function Logo() {
  return (
    <DivContainer className="navbar__logo__container">
      <Link to="/">
        <p>Logo</p>
      </Link>
    </DivContainer>
  );
}
