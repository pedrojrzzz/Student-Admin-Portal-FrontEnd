import styled from 'styled-components';

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

export const DivMessage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export const DivButtons = styled.div`
  width: 90%;
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
