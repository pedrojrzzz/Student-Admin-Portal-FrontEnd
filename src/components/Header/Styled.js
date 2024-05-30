import styled from 'styled-components';

// Colors
import { menuColor } from '../../config/colors';

export const Nav = styled.nav`
  height: 8vh;
  width: 100vw;
  background-color: ${menuColor};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 3px black;
  position: relative;
  z-index: 1000;
`;
