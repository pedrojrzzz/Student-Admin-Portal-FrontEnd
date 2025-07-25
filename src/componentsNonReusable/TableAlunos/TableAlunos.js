import {
  DivContainer,
  HeaderTableStudents,
  TitleHeaderTableStudents,
  DivSearchAndFilter,
} from './styled';
import SearchInput from '../../components/SearchInput/SearchInput';
import FilterInput from '../../components/FilterInput/FilterInput';
import TableStudents from '../TableStudents/TableStudents';
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
          {/* <ColumnsData /> */}
          <TableStudents />
        </StudentsInfoContextProvider>
      </SearchAndFilterContextProvider>
    </DivContainer>
  );
}
