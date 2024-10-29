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
