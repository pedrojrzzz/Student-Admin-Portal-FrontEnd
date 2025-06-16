import {
  DivContainer,
  HeaderTableStudents,
  TitleHeaderTableStudents,
  DivSearchAndFilter,
} from './styled';
import SearchInput from '../../components/SearchInput/SearchInput';
import FilterInput from '../../components/FilterInput/FilterInput';
import ColumnsData from '../ColumnsData/ColumnsData';
import { StudentsInfoContextProvider } from '../../context/StudentsInfoContext';
import { SearchAndFilterContextProvider } from '../../context/SearchAndFilterContext';

export default function TableAlunos() {
  return (
    <DivContainer>
      <SearchAndFilterContextProvider>
        <StudentsInfoContextProvider>
          <HeaderTableStudents>
            <TitleHeaderTableStudents>
              <p>Alunos</p>
            </TitleHeaderTableStudents>
            <DivSearchAndFilter>
              <SearchInput />
              <FilterInput />
            </DivSearchAndFilter>
          </HeaderTableStudents>
          <ColumnsData />
        </StudentsInfoContextProvider>
      </SearchAndFilterContextProvider>
    </DivContainer>
  );
}
