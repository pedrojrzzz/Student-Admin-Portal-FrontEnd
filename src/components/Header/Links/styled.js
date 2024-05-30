import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { menuColor } from '../../../config/colors';

export const DivContainer = styled.div`
  height: 100%;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${menuColor};
  padding: 0;
  margin-left: 10px;

  ul {
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    display: flex;
    width: 99px;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-left: 28px;
  }

  a {
    color: #fff;
    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: 1100px) {
    ul {
      width: 60%;
      font-size: 14px;
    }
  }
`;

export const DropdownMenuCategoria = styled.div`
  visibility: hidden;
  opacity: 0;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  position: absolute;
  top: 100%;
  transition: opacity 0.5s;
  background-color: ${menuColor};

  &.visible {
    visibility: visible;
    opacity: 1;
    width: auto;
    height: auto;
    padding: 8px;
    transition: opacity 0.3s ease-in-out;
  }

  a {
    padding: 3px;
    color: white;
    &:hover {
      opacity: 0.7;
    }
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
  top: 100%;
  border-radius: 5px;
  background-color: ${menuColor};

  &.visible {
    visibility: visible;
    opacity: 1;
    height: auto;
    width: auto;
    padding: 9px;
    transition: opacity 0.3s ease-in-out;
  }

  a {
    color: white;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const SetaDropdown = styled(IoIosArrowDown)`
  margin-left: auto;
  transition: 0.2s;
  &.rotated {
    transform: rotate(180deg);
    transition: 0.2s;
  }
`;
