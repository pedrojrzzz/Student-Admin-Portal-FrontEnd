import styled from 'styled-components';
import { fourthColor, textColor } from '../../../config/colors';
import { fontFamilyConfig } from '../../../config/fonts';

export const DivContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${fourthColor};
  position: absolute;
  left: 20px;

  a {
    text-decoration: none;
    color: ${textColor};
    font-size: 24px;
    font-family: ${fontFamilyConfig.title};
    font-weight: 500;
  }

  a:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    width: auto;
    margin-left: 10px;

    a {
      font-size: 22px;
    }
  }
`;
