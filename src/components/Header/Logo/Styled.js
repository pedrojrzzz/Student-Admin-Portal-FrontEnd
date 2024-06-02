import styled from 'styled-components';
import { fourthColor, textColor } from '../../../config/colors';

export const DivContainer = styled.div`
  height: 100%;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${fourthColor};
  position: absolute;
  left: 20px;

  a {
    text-decoration: none;
    color: ${textColor};
    font-size: 25px;
  }

  a:hover {
    opacity: 0.7;
  }

  // Max-Width

  @media (max-width: 1670px) {
    a {
      font-size: 20px;
    }
  }

  @media (max-width: 1600px) {
    img {
      height: 50px;
      width: auto;
    }
  }

  @media (max-width: 1500px) {
    img {
      height: 45px;
      width: auto;
    }
  }

  @media (max-width: 1400px) {
    position: absolute;
    left: 10px;
    a {
      font-size: 20px;
    }
  }

  @media (max-width: 500px) {
    width: 200px;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    left: 10px;
    a {
      font-size: 19px;
    }
  }
  // *******************

  // Max-Height

  @media (max-height: 624px) {
    a {
      font-size: 20px;
    }
  }

  @media (max-height: 555px) {
    a {
      font-size: 17px;
    }
  }
  // **************
`;
