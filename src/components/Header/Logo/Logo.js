import React from 'react';
import { Link } from 'react-router-dom';
import { DivContainer } from './Styled';
import { useScreenWidth } from '../../../hooks/windowSize';

export default function Logo() {
  const larguraDaTela = useScreenWidth();
  return (
    <DivContainer>
      <Link to="/">
        {larguraDaTela > 600 ? <p>Student Admin Portal</p> : <p>SAP</p>}
      </Link>
    </DivContainer>
  );
}
