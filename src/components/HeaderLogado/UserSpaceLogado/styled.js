import styled from 'styled-components';
import { LiaUserSolid } from 'react-icons/lia';
import { fontFamilyConfig } from '../../../config/fonts';

export const DivContainer = styled.div`
  height: 100%;
  width: 260px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 40px;

  @media (max-width: 1600px) {
    width: 250px;
  }

  @media (max-width: 1550px) {
    width: 200px;
    font: 15px;
  }

  @media (max-width: 750px) {
    width: 165px;
    position: absolute;
    right: 15px;
    column-gap: 7px;
  }

  @media (max-width: 600px) {
    width: 150px;
    right: 50px;
  }
`;

export const DivIconUser = styled.div`
  height: 100%;
  width: 20%;
`;

export const SideDivs = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;
`;

export const ContainerInfoUser = styled.div`
  height: 50%;
  width: auto;
  display: flex;
  align-items: end;

  p {
    color: white;
    font-size: 17px;
    font-weight: 500;
    font-family: ${fontFamilyConfig.text};
  }
`;

export const ContainerLogout = styled.div`
  color: white;
  width: auto;
  background-color: puple;

  p {
    color: white;
    text-decoration: none;
    font-family: ${fontFamilyConfig.text};
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
  }

  p:hover {
    opacity: 0.7;
    color: red;
  }
`;

export const IconUser = styled(LiaUserSolid)`
  height: 100%;
  font-size: 40px;
  color: white;
`;
