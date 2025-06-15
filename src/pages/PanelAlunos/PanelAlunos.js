/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequest } from '../../redux/slices/alunosSlice';
import { careFormErrors } from './careFetchErrors/careFetchErrors';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import { DivContainer } from './styled';
import TableInfo from '../../componentsNonReusable/TableInfo/TableInfo';
import TableAlunos from '../../componentsNonReusable/TableAlunos/TableAlunos';
import { StudentsInfoContext } from '../../context/StudentsInfoContext';

export default function PanelAlunos() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.alunos);
  const alunoWasFetched = useRef(null);

  console.log(data);

  useEffect(() => {
    if (alunoWasFetched.current === true) return;
    dispatch(fetchRequest());
    alunoWasFetched.current = true;
  }, [dispatch, data]);

  if (error) {
    careFormErrors(error);
  }

  return (
    <div>
      <HeaderLogado />

      <StudentsInfoContext.Provider
        value={{ data, loading, error, resultSearch: null, resultFilter: null }}
      >
        <DivContainer>
          <TableInfo />
          <TableAlunos />
        </DivContainer>
      </StudentsInfoContext.Provider>
    </div>
  );
}
