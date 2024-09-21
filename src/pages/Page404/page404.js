import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import Header from '../../components/Header/Header';

export default function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/404');
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <h1>Page not Found</h1>
        <br />
      </Container>
    </div>
  );
}
