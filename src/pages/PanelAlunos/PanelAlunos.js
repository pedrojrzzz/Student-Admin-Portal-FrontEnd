/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequest } from '../../slices/alunosSlice';
import { careFormErrors } from './careFetchErrors/careFetchErrors';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import { DivContainer } from './styled';
import TableInfo from '../../componentsNonReusable/TableInfo/TableInfo';
import TableAlunos from '../../componentsNonReusable/TableAlunos/TableAlunos';
import { StudentsInfoContext } from '../../context/StudentsInfoContext';

export default function PanelAlunos() {
  const { UserIsLoggedIn } = useSelector((state) => state.userIsLoggedIn);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.alunos);
  const alunoWasFetched = useRef(null);

  console.log(UserIsLoggedIn);

  useEffect(() => {
    if (alunoWasFetched.current === true) return;
    dispatch(fetchRequest());
    alunoWasFetched.current = true;

    console.log(loading);
    console.log(data);
    console.log(error);
  }, []);

  if (error) {
    careFormErrors(error);
  }

  return (
    <div>
      <HeaderLogado />

      <StudentsInfoContext.Provider value={{ data, loading, error }}>
        <DivContainer>
          <TableInfo />
          <TableAlunos />
        </DivContainer>
      </StudentsInfoContext.Provider>
    </div>
  );
}
