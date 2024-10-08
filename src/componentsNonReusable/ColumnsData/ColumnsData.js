/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { DivContainer, DivLoading } from './styled';

export default function ColumnsNames() {
  const { data, loading, error } = useSelector((state) => state.alunos);
  console.log('****** LOGS - COLUMNS DATA *********');
  console.log('oi estou no columnsDATA');
  console.log(data, loading, error);
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
          <tr>
            <td>{}</td>
            <td>
              {loading ? (
                <DivLoading>
                  <ClipLoader size={50} />{' '}
                </DivLoading>
              ) : (
                ''
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </DivContainer>
  );
}
// Fazer com tabela html
