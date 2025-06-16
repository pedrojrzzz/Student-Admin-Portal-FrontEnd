import styled from 'styled-components';

const borderColor = '#d9dbe0';
const backgroundColor = '#ecf0fd';
const titleColor = '#9c9898';
const textColor = 'black';
const titleFontSize = '15pt';
const numberFontSize = '38pt';

const DivBase = styled.div`
  height: 110px;
  width: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  border-right: 0.3px solid ${borderColor};

  .ContainerImage {
    height: 100%;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .Elipse {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background-color: ${backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  img {
    height: 80px;
  }

  .ContainerTitleAndNumber {
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ContainerTitle {
    width: 150px;
    color: ${titleColor};
    font-size: ${titleFontSize};
    font-weight: 500;
    padding-top: 10px;
  }

  .ContainerNumber {
    padding-top: 10px;
    padding-right: 28px;
    color: ${textColor};
    font-size: ${numberFontSize};
  }

  @media (max-width: 1350px) {
    width: 250px;

    img {
      height: 65px;
    }

    .ContainerTitle {
      display: flex;
      align-items: center;
      padding-top: 0;
      padding-right: 0;
      width: 100%;
      height: 50%;
      font-size: 13pt;

      p {
        text-align: center;
      }
    }

    .ContainerNumber {
      font-size: 20pt;
    }
  }

  @media (max-width: 1000px) {
    width: 200px;

    img {
      height: 55px;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .ContainerImage {
      display: none;
    }

    .ContainerTitleAndNumber {
      width: 100%;
    }

    .ContainerTitle {
      width: 100%;
      p {
        width: 100%;
      }
    }

    .ContainerNumber {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 0px;
    }
  }
`;

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

  @media (max-width: 1100px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const DivTotalAlunos = styled(DivBase)``;

export const DivAlunosAtivos = styled(DivBase)``;

export const DivAlunosInativos = styled(DivBase)`
  border: none;
`;
