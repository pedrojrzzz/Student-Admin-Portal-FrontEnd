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
