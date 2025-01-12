import styled from 'styled-components';

export const ButtonAddNewStudentStyled = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  padding: 6px 15px 6px 10px;
  background-color: white;
  border: 0.2px solid #d6d6d6;
  border-radius: 5px;
  margin-right: 30px;

  .icon {
    padding-right: 7px;
  }

  &:hover {
    border: 0.2px solid #d6d6d6;
    color: black;
    box-shadow:
      0px 0px 0em 6px #7caee912,
      0 0 1em #69c1e3;
  }
  transition: 0.3s;
`;

export const ModalEdit = styled.dialog`
  width: 600px;
  background-color: #ffffff;
  border: 0.1rem solid white;
  margin: auto auto;
  padding: 20px;
  color: white;

  h3 {
    color: black;
  }

  .header-modal {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
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
