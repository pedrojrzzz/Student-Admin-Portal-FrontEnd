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

  @media (max-width: 500px) {
    width: 250px;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    left: 35px;
    a {
      font-size: 22px;
    }
  }
`;
