/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

import { GiShipWreck } from 'react-icons/gi';
import { IoMdRefresh } from 'react-icons/io';
import { SearchAndFilterContext } from '../../context/SearchAndFilterContext';
import ButtonEdit from '../../components/ButtonEdit/ButtonEdit';
import ButtonAddNewStudent from '../../components/ButtonAddNewStudent/ButtonAddNewStudent';
import imgStudent from '../../images/imgStudentMulher4.jpg';

import {
  DivContainer,
  DivImgStudent,
  DivError,
  DivLoading,
  ActiveButton,
  InactiveButton,
  DivTableButton,
} from './styled';

export default function ColumnsNames() {
  const { data, loading, error } = useSelector((state) => state.alunos);
  const { listToBeDisplayed } = useContext(SearchAndFilterContext);
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
          {listToBeDisplayed.map((currentObject) => (
            <tr key={currentObject.id}>
              {' '}
              {/* Adicione uma chave única para cada linha */}
              <td>
                <DivImgStudent>
                  {/* <img src={currentObject.Fotos[0].url} alt="imgStudent" /> --- Esse é o código que vai pra produção*/}
                  <img
                    src={imgStudent}
                    alt="Imagem de perfil estudante"
                    className="img-perfil"
                  />
                </DivImgStudent>
              </td>
              <td>{currentObject.nome}</td>
              <td>{currentObject.email}</td>
              <td>{currentObject.idade}</td>
              <td>{currentObject.peso}kg</td>
              <td>{currentObject.altura}m</td>
              <td>
                {currentObject.status === true ? (
                  <ActiveButton>Ativo</ActiveButton>
                ) : (
                  <InactiveButton>Inativo</InactiveButton>
                )}
              </td>
              <td className="columnEdit">
                <ButtonEdit data={currentObject}>Editar</ButtonEdit>
              </td>
            </tr>
          ))}
        </tbody>
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
          <GiShipWreck size={100} />
          <p>Desculpe, não foi possível buscar os alunos</p>
        </DivError>
      ) : (
        ''
      )}

      <DivTableButton>
        <ButtonAddNewStudent />

        <button type="submit" className="buttonRefresh">
          <div className="icon">
            <IoMdRefresh size={18} />
          </div>
          Refresh
        </button>
      </DivTableButton>
    </DivContainer>
  );
}
// Fazer com tabela html
