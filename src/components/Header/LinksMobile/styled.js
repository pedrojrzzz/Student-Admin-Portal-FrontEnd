import styled from 'styled-components';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { menuColor } from '../../../config/colors';

export const DivContainer = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
`;

export const MenuBurguer = styled(CiMenuBurger)`
  height: 30px;
  width: 30px;
  color: #fff;

  &:hover {
    opacity: 0.6;
  }
`;

export const MenuDropdownMobile = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  transition: opacity 0.2s;
  background-color: #3a3a3a;

  &.visible {
    visibility: visible;
    opacity: 1;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    transition: opacity 0.2s ease;
  }

  ul {
    width: 100%;
  }

  li {
    width: 100%;
    display: flex;
    flex-direction: row;
    color: white;
    padding: 5px;
    border-bottom: 0.1px solid #fff;
    position: relative;
  }

  a {
    color: white;
    margin-left: 10px;
    height: 100%;
    width: 100%;
  }

  a:hover {
    opacity: 0.6;
  }
`;

export const DropdownMenuCategoria = styled.div`
  visibility: hidden;
  opacity: 0;
  display: flex;
  position: absolute;
  top: 0%;
  right: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${menuColor};
  transition: opacity 0.3s ease-in-out;

  &.visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DropdownMenuGenero = styled.div`
  visibility: hidden;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0%;
  right: 100%;
  border-radius: 5px;
  background-color: #3a3a3a;

  &.visible {
    visibility: visible;
    opacity: 1;
    height: auto;
    width: auto;
    transition: opacity 0.3s ease-in-out;
  }

  &.visible a:hover {
    opacity: 0.6;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SetaMenuDropdown = styled(IoIosArrowDown)`
  color: #fff;
  rotate: 90deg;
  position: absolute;
  left: 0;
  transition: 0.2s;

  &.rotated {
    rotate: 0deg;
    transition: rotate 0.2s;
  }
`;
