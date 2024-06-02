import styled from 'styled-components';
import { CiUser } from 'react-icons/ci';
import { fourthColor } from '../../../config/colors';

export const DivContainer = styled.div`
  height: 100%;
  width: auto;
  position: absolute;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserIcon = styled(CiUser)`
  color: white;
  height: 30px;
  width: 30px;

  &:hover {
    opacity: 0.6;
  }
`;

export const DropdownMenuUser = styled.div`
  visibility: hidden;
  opacity: 0;
  height: auto;
  width: auto;
  background-color: ${fourthColor};
  position: absolute;
  top: 100%;
  border-radius: 6px;
  transition: 0.3s;

  &.visible {
    visibility: visible;
    opacity: 1;
    transition: 0.3s;
  }

  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 0.5px solid white;
  }

  a {
    color: white;
    padding: 5px 7px 3px 7px;

    &:hover {
      opacity: 0.6;
    }
  }
`;
