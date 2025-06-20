import styled from 'styled-components';

export const DivContainerFather = styled.div`
  height: 450px;
  width: 90%;

  @media (max-width: 1000px) {
    width: 100%;
    height: 500px;
  }
`;

export const DivContainer = styled.div`
  height: 415px;
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2;

  table {
    width: 100%;
    //min-width: 500px;
    overflow-x: auto;
  }

  table thead {
    border: 1px solid black;
    position: sticky;
    background-color: #ffffff;
    z-index: 1;
    top: 0;
  }

  table thead tr th {
    color: #b9b7b6;
    font-weight: 600;
    border-bottom: 0.5px solid rgb(217, 217, 219);
    padding: 10px; /* Adicionando padding para o cabeçalho */
    caret-color: transparent;
    text-align: start;
  }

  .columnImg {
    opacity: 1;

    p {
      visibility: hidden;
    }
  }
  .columnEdit {
    visibility: visible;

    p {
      visibility: visible;
    }
  }

  table tbody tr {
    padding-left: 50px;
  }

  table tbody tr td {
    font-weight: 600;
    border-bottom: 0.5px solid rgb(217, 217, 219);
    padding: 10px; /* Adicione padding para as células */
    text-align: start;
  }

  @media (max-width: 1000px) {
    .coluna-altura {
      display: none;
    }

    .coluna-peso {
      display: none;
    }

    .coluna-email {
      display: none;
    }
  }

  @media (max-width: 510px) {
    table {
      width: calc(100% - 100px);
    }
  }
`;

export const DivImgStudent = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
  position: relative;

  .img-perfil {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    z-index: 0;
  }
`;

export const DivLoading = styled.div`
  height: 300px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  p {
    font-size: 13pt;
    margin-top: 3px;
  }
`;

export const DivError = styled.div`
  height: 300px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  p {
    font-size: 13pt;
    margin-top: 3px;
  }
`;

export const DivTableButton = styled.div`
  width: 100%;
  height: 10%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;

  .buttonRefresh {
    display: flex;
    align-items: center;
    width: auto;
    padding: 6px 15px 6px 10px;
    background-color: white;
    border: 0.2px solid #d6d6d6;
    border-radius: 5px;

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
  }
`;

export const ActiveButton = styled.button`
  padding: 6px 10px 6px 10px;
  color: black;
  background-color: yellowgreen;
  font-weight: 600;
  border: none;
  border-radius: 5px;
`;

export const InactiveButton = styled.button`
  padding: 6px 10px 6px 10px;
  color: white;
  background-color: red;
  font-weight: 600;
  border: none;
  border-radius: 5px;
`;
