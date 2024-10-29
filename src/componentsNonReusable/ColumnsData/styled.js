import styled from 'styled-components';

export const DivContainer = styled.div`
  height: fit-content;
  width: 90%;

  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2;

  table {
    width: 100%;
  }

  table thead {
    border: 1px solid black;
  }

  table thead tr th {
    color: #b9b7b6;
    font-weight: 600;
    border-bottom: 0.5px solid rgb(217, 217, 219);
    padding: 10px; /* Adicionando padding para o cabeçalho */
    caret-color: transparent;
  }

  .columnImg {
    opacity: 1;
  }
  .columnEdit {
    visibility: visible;
  }

  table tbody tr {
    padding-left: 50px;
  }

  table tbody tr td {
    font-weight: 600;
    border-bottom: 0.5px solid rgb(217, 217, 219);
    padding: 10px; /* Adicione padding para as células */
    text-align: center;
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

<<<<<<< HEAD
=======
export const DivTableButton = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

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
    transition: 1s;
  }
`;

export const ButtonEdit = styled.button`
  border: 0.2px solid black;
  border-radius: 2px;
  padding: 5px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

>>>>>>> 524c507e7df4a52a7ef36e25f46992f01009ab22
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
