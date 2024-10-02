import {
  DivContainer,
  HeaderTableStudents,
  TitleHeaderTableStudents,
  DivSearchAndFilter,
} from './styled';
import SearchInput from '../../components/SearchInput/SearchInput';
import FilterInput from '../../components/FilterInput/FilterInput';
import ColumnsNames from '../ColumnsNames/ColumnsNames';

export default function TableAlunos() {
  return (
    <DivContainer>
      <HeaderTableStudents>
        <TitleHeaderTableStudents>
          <p>Alunos</p>
        </TitleHeaderTableStudents>
        <DivSearchAndFilter>
          <SearchInput />
          <FilterInput />
        </DivSearchAndFilter>
      </HeaderTableStudents>
      <ColumnsNames />
    </DivContainer>
  );
}