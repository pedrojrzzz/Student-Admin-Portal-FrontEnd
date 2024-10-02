import {
  DivContainer,
  DivTotalAlunos,
  DivAlunosAtivos,
  DivAlunosInativos,
} from './styled';
import studentIcon from '../../images/aluna.png';
import activeStudentIcon from '../../images/carteira-de-identidade.png';
import inactiveStudentIcon from '../../images/alerta.png';

export default function TableInfo() {
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
          <div className="ContainerNumber">56</div>
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
          <div className="ContainerNumber">39</div>
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
          <div className="ContainerNumber">11</div>
        </div>
      </DivAlunosInativos>
    </DivContainer>
  );
}
