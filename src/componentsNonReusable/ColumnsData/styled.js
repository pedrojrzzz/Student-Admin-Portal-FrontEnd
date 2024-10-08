import styled from 'styled-components';

export const DivContainer = styled.div`
  height: 30px;
  width: 90%;
  border-bottom: 0.5px solid rgb(217, 217, 219);
  margin-top: 20px;

  table {
    width: 100%;
  }

  table thead tr th {
    color: #b9b7b6;
    font-weight: 600;
  }

  .columnImg {
    visibility: hidden;
  }
  .columnEdit {
    visibility: hidden;
  }
`;

export const DivLoading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
