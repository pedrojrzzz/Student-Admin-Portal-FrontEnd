import styled from 'styled-components';
import { IoMdArrowDropdown } from 'react-icons/io';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: fit-content;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: aliceblue;
  border: none;
  width: 150px;
  height: 28px;
  font-size: 15px;
  font-family: inherit;
  padding-left: 5px;
  border-radius: 2px 2px 0 0;
  background-color: #edeaea;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 2px 2px 0 0;
  width: 225px;
  height: 28px;
  text-indent: 15px;
  font-size: 15px;
  font-family: inherit;
  text-indent: 4px;
  background-color: #edeaea;

  &:focus {
    outline: none;
  }
`;

export const IconArrowDrop = styled(IoMdArrowDropdown)`
  height: fit-content;
  transition: 0.2s;

  &.rotate {
    rotate: calc(180deg);
    transition: 0.2s;
  }
`;

export const DropdownSortBy = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: #edeaea;
  border-radius: 0px 0px 2px 2px;
  position: absolute;
  top: 100%;

  &.visible {
    border-top: 0.5px solid #e0dede;
    display: flex;
  }
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: row;

  input {
    margin-left: 2px;
    margin-top: 5px;
  }

  p {
    margin-left: 10px;
    margin-top: 5px;
  }
`;
