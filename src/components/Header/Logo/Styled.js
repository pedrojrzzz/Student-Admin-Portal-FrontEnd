import styled from 'styled-components';
import { menuColor } from '../../../config/colors';

export const DivContainer = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${menuColor};
  position: absolute;
  left: 20px;

  img {
    height: 57px;
    width: auto;
  }

  @media (max-width: 1400px) {
    width: 100px;
    position: absolute;
    left: 10px;
  }

  @media (max-height: 624px) {
    img {
      height: 45px;
      width: auto;
    }
  }

  @media (max-height: 555px) {
    img {
      height: 40px;
      width: auto;
    }
  }

  @media (max-width: 1670px) {
    img {
      height: 55px;
      width: auto;
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
`;
