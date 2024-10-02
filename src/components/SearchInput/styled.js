import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #edeaea;
  border: none;
  border-radius: 24px;
  width: 250px;
  height: 28px;
  font-size: 15px;
  font-family: inherit;
  padding-left: 5px;

  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 24px;
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

export const SearchIcon = styled(CiSearch)``;
