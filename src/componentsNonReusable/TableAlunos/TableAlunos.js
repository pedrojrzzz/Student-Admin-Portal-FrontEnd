/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  DivContainer,
  HeaderTableStudents,
  TitleHeaderTableStudents,
  DivSearchAndFilter,
} from './styled';
import SearchInput from '../../components/SearchInput/SearchInput';
import FilterInput from '../../components/FilterInput/FilterInput';
import ColumnsData from '../ColumnsData/ColumnsData';
import {
  StudentsInfoContext,
  StudentsInfoContextProvider,
} from '../../context/StudentsInfoContext';
import { SearchAndFilterContextProvider } from '../../context/SearchAndFilterContext';

export default function TableAlunos() {
  const { data, loading, error } = useSelector((state) => state.alunos);

  const originalList = data;

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
