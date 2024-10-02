import styled from 'styled-components';

export const DivContainer = styled.div`
  height: 150px;
  width: 80%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 60px;
  padding-right: 60px;
`;

export const DivTotalAlunos = styled.div`
  height: 110px;
  width: 350px;
  border-right: 0.3px solid #d9dbe0;
  display: flex;

  .ContainerImage {
    height: 100%;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .Elipse {
    border-radius: 50%;
    height: 110px;
    width: 110px;
    background-color: #ecf0fd;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 90px;
  }

  .ContainerTitleAndNumber {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ContainerTitle {
    width: 150px;
    color: #9c9898;
    font-size: 15pt;
    font-weight: 500;
    padding-top: 10px;
  }

  .ContainerNumber {
    padding-top: 10px;
    padding-right: 21px;
    color: black;
    font-size: 38pt;
  }
`;

export const DivAlunosAtivos = styled.div`
  height: 110px;
  width: 350px;
  border-right: 0.3px solid #d9dbe0;
  display: flex;

  .ContainerImage {
    height: 100%;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .Elipse {
    border-radius: 50%;
    height: 110px;
    width: 110px;
    background-color: #ecf0fd;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 90px;
  }

  .ContainerTitleAndNumber {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ContainerTitle {
    width: 150px;
    color: #9c9898;
    font-size: 15pt;
    font-weight: 500;
    padding-top: 10px;
  }

  .ContainerNumber {
    padding-top: 10px;
    padding-right: 28px;
    color: black;
    font-size: 38pt;
  }
`;

export const DivAlunosInativos = styled.div`
  height: 110px;
  width: 350px;
  display: flex;

  .ContainerImage {
    height: 100%;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .Elipse {
    border-radius: 50%;
    height: 110px;
    width: 110px;
    background-color: #ecf0fd;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 90px;
  }

  .ContainerTitleAndNumber {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ContainerTitle {
    width: 150px;
    color: #9c9898;
    font-size: 15pt;
    font-weight: 500;
    padding-top: 10px;
  }

  .ContainerNumber {
    padding-top: 10px;
    padding-right: 28px;
    color: black;
    font-size: 38pt;
  }
`;
