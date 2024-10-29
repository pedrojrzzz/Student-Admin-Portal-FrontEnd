import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

export const ButtonEditComponent = styled.button`
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  border-width: 1px;
  border-color: rgb(160, 160, 255);

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ModalEdit = styled.dialog`
  width: 600px;
  background-color: #212529;
  border: 0.1rem solid white;
  margin: auto auto;
  padding: 20px;
  color: white;

  .header-modal {
    display: flex;
    justify-content: space-between;
    width: 100%;
    caret-color: transparent;
  }

  .body-modal {
    display: flex;
    align-items: flex-start;
    width: 100%;
    color: white;
  }

  &::backdrop {
    backdrop-filter: blur(1px);
  }
`;

export const ButtonCloseModal = styled(IoMdClose)`
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
