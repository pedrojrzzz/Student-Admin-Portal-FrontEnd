import styled from 'styled-components';
import { CiMenuBurger } from 'react-icons/ci';
// import { fourthColor } from '../../../config/colors';

export const DivContainer = styled.div`
  height: 100%;
  width: auto;
  position: absolute;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HamburgerIcon = styled(CiMenuBurger)`
  color: white;
  height: 30px;
  width: 30px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const DropdownMenuUser = styled.div`
  visibility: visible;
  opacity: 1;
  height: 100vh;
  width: 50vw;
  background-color: #322938;
  position: absolute;
  top: 100%;
  right: -5000%;
  transition: 0.3s;

  &.visible {
    visibility: visible;
    opacity: 1;
    transition: 0.3s;
    right: -100%;
    transition: 0.3s;
  }

  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 0.2px solid rgb(165, 162, 162);
  }

  a {
    color: white;
    font-size: 14pt;
    padding: 5px 7px 3px 7px;
    margin-top: 5px;
    margin-bottom: 5px;
    -webkit-text-stroke: 0.1 black;

    &:hover {
      opacity: 0.6;
    }
  }
`;
