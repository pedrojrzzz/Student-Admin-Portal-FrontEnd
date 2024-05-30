import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import { fetchRequest } from '../../slices/dataSlice';
import { DivContainer, Title, Div } from './styled';

export default function Login() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  const handleFetchData = () => {
    dispatch(fetchRequest());
  };
  return (
    <DivContainer>
      <Title>Login</Title>
      <Div>
        <button type="button" onClick={handleFetchData}>
          Buscar Dados
        </button>
      </Div>

      <Div>
        <Title>Output:</Title>

        {loading && <BounceLoader color="grey" />}
        {error && <p>{error}</p>}
        {data.map((item) => (
          <ul>
            <li key={item.nome}>
              Nome: {item.nome} {item.sobrenome} / Idade: {item.idade}
              <br />
            </li>
          </ul>
        ))}
      </Div>
    </DivContainer>
  );
}
