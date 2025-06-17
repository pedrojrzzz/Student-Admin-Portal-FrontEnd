import styled from 'styled-components';

export const DivContainer = styled.div`
  background-color: white;
  height: auto;
  width: 80%;
  margin-top: 40px;
  padding-bottom: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 100px) {
    width: 100%;
  }
`;

//**?Header Table Students?*/
export const HeaderTableStudents = styled.div`
  width: 90%;
  height: fit-content;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const TitleHeaderTableStudents = styled.div`
  width: 67%;
  p {
    font-size: 32pt;
    font-weight: 300;
  }
`;

export const DivSearchAndFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: flex-end;
  }

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;

//**?xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?*/
