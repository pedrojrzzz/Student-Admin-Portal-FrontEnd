import React from 'react';
import { Link } from 'react-router-dom';
import { DivContainer, ButtonSignIn, ButtonCreateAccount } from './styled';

export default function UserSpace() {
  return (
    <DivContainer className="user__space">
      <Link to="/">
        <ButtonSignIn>Sign In</ButtonSignIn>
      </Link>
      <Link to="/register">
        <ButtonCreateAccount>Create Account</ButtonCreateAccount>
      </Link>
    </DivContainer>
  );
}
