import styled from 'styled-components';

export const DivContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 40px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
  }

  @media (max-width: 1600px) {
    width: 250px;
  }

  @media (max-width: 1550px) {
    width: 200px;
    font: 15px;
  }
`;

export const ButtonSignIn = styled.button`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: none;
  border-radius: 20px;
  background-color: #0ebcf1;
  box-shadow: 1px 2px 10px #00000064;
  color: white;
  font-weight: 900;

  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }

  @media (max-width: 1600px) {
    height: 20px;
    width: 80px;
    font-size: 12px;
  }

  @media (max-width: 1550px) {
    height: 23px;
    width: 77px;
    font-size: 13px;
  }
`;

export const ButtonCreateAccount = styled.a`
  font-weight: 900;
  color: #fff;
  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }

  @media (max-width: 1600px) {
    font-size: 15px;
  }

  @media (max-width: 1550px) {
    font-size: 13px;
  }
`;
