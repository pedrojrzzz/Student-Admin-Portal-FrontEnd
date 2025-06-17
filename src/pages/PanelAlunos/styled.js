import styled from 'styled-components';

export const DivContainer = styled.div`
  background-color: #2c2e33;
  height: auto; // Alterar para auto depois
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  //overflow: hidden;
  padding-top: 40px;
`;

export const ContainerCardAlunos = styled.div`
  width: 80%;
  height: 23%;
  border: 1px solid black;
  border-radius: 2px;

  .ContainerImgAluno {
    background-color: purple;
    height: 100%;
    width: 20%;

    &.imgAluno {
      height: 90%;
      width: 100px;
      border: 1px solid black;
    }
  }
`;
