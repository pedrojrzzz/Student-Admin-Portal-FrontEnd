import React from 'react';
import { Link } from 'react-router-dom';
import { DivContainer } from './Styled';

export default function Logo() {
  return (
    <DivContainer>
      <Link to="/">
        <p>Student Admin Portal</p>
      </Link>
    </DivContainer>
  );
}
