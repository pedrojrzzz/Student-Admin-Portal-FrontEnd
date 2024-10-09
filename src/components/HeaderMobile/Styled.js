import styled from 'styled-components';

// Colors
import { fourthColor, shadow } from '../../config/colors';

export const Nav = styled.nav`
  height: 80px;
  width: 100vw;
  background-color: ${fourthColor};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  box-shadow: ${shadow};
  position: relative;
  z-index: 1000;
`;
