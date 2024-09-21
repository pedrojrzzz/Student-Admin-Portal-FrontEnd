import styled from 'styled-components';

export const DivContainerLoader = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const DivDivisor = styled.div`
  width: 400px;

  #divLoading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  #divMensagemRedirect {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    margin-top: 30px;
  }
`;
