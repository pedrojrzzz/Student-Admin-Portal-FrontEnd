/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { GiSinkingShip } from 'react-icons/gi';
import {
  DivContainer,
  DivError,
  DivLoading,
  ButtonEdit,
  ActiveButton,
  InactiveButton,
} from './styled';

export default function ColumnsNames() {
  const { data, loading, error } = useSelector((state) => state.alunos);

  return (
    <DivContainer>
      <table>
        <thead>
          <tr>
            <th className="columnImg">Imagem</th>
            <th>Nome do Aluno</th>
            <th>E-mail</th>
            <th>Idade</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>Status</th>
            <th className="columnEdit">Editar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((currentObject) => (
            <tr key={currentObject.id}>
              {' '}
              {/* Adicione uma chave única para cada linha */}
              <td>img</td>
              <td>{currentObject.nome}</td>
              <td>{currentObject.email}</td>
              <td>{currentObject.idade}</td>
              <td>{currentObject.peso}kg</td>
              <td>{currentObject.altura}m</td>
              <td>
                {currentObject.status === 1 ? (
                  <ActiveButton>Ativo</ActiveButton>
                ) : (
                  <InactiveButton>Inativo</InactiveButton>
                )}
              </td>
              <td className="columnEdit">
                <ButtonEdit>Editar</ButtonEdit>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot />
      </table>

      {loading ? (
        <DivLoading>
          <ClipLoader />
          <p>Fetching students...</p>
        </DivLoading>
      ) : (
        ''
      )}

      {error ? (
        <DivError>
          <GiSinkingShip size={100} />
          <p>Desculpe, o erro foi do nosso lado</p>
        </DivError>
      ) : (
        ''
      )}
    </DivContainer>
  );
}
// Fazer com tabela html
