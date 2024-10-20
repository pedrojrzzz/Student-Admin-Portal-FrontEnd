/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  DivContainer,
  DivTotalAlunos,
  DivAlunosAtivos,
  DivAlunosInativos,
} from './styled';
import studentIcon from '../../images/aluna.png';
import activeStudentIcon from '../../images/carteira-de-identidade.png';
import inactiveStudentIcon from '../../images/alerta.png';
import { useStudentCounter } from '../../hooks/useStudentCounter';

export default function TableInfo() {
  const { data, loading, error } = useSelector((state) => state.alunos);
  const countedData = useStudentCounter(data);
  return (
    <DivContainer>
      <DivTotalAlunos>
        <div className="ContainerImage">
          <div className="SpaceIcon">
            <div className="Elipse">
              <img src={studentIcon} alt="iconAlunos" />
            </div>
          </div>
        </div>
        <div className="ContainerTitleAndNumber">
          <div className="ContainerTitle">
            <p>Total de Alunos</p>
          </div>
          <div className="ContainerNumber">
            {loading ? <ClipLoader /> : countedData.numberOfStudents}
          </div>
        </div>
      </DivTotalAlunos>

      <DivAlunosAtivos>
        <div className="ContainerImage">
          <div className="SpaceIcon">
            <div className="Elipse">
              <img src={activeStudentIcon} alt="iconAlunos" />
            </div>
          </div>
        </div>
        <div className="ContainerTitleAndNumber">
          <div className="ContainerTitle">
            <p>Alunos Ativos</p>
          </div>
          <div className="ContainerNumber">
            {loading ? <ClipLoader /> : countedData.activeStudents}
          </div>
        </div>
      </DivAlunosAtivos>

      <DivAlunosInativos>
        <div className="ContainerImage">
          <div className="SpaceIcon">
            <div className="Elipse">
              <img src={inactiveStudentIcon} alt="iconAlunos" />
            </div>
          </div>
        </div>
        <div className="ContainerTitleAndNumber">
          <div className="ContainerTitle">
            <p>Alunos Inativos</p>
          </div>
          <div className="ContainerNumber">
            {loading ? <ClipLoader /> : countedData.inactiveStudents}
          </div>
        </div>
      </DivAlunosInativos>
    </DivContainer>
  );
}
