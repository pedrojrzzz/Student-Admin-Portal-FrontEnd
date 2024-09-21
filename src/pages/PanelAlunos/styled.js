import styled from 'styled-components';

export const DivContainer = styled.div`
  background-color: yellow;
  height: 100vh; // Alterar para auto depois
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  background-color: red;
  h1 {
    color: white;
    margin-top: 10px;
    letter-spacing: 1.5px;
    margin-top: 50px;
    margin-left: 100px;
  }
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
