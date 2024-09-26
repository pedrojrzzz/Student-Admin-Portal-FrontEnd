import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import { fetchRequest } from '../../slices/alunosSlice';
import { careFormErrors } from './careFetchErrors/careFetchErrors';
import { DivContainer } from './styled';

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

      <DivContainer />
    </div>
  );
}
