import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { useNavigate } from 'react-router-dom';

import { GiShipWreck } from 'react-icons/gi';
import { IoMdRefresh } from 'react-icons/io';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { SearchAndFilterContext } from '../../context/SearchAndFilterContext';
import ButtonEdit from '../../components/ButtonEdit/ButtonEdit';
import ButtonAddNewStudent from '../../components/ButtonAddNewStudent/ButtonAddNewStudent';

import {
  DivContainerFather,
  DivContainer,
  DivImgStudent,
  DivError,
  DivLoading,
  ActiveButton,
  InactiveButton,
  DivTableButton,
} from './styled';

export default function ColumnsNames() {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.alunos);
  const { listToBeDisplayed, listIsEmpty, setListIsEmpty } = useContext(
    SearchAndFilterContext,
  );

  const refreshPage = () => {
    navigate(0);
  };

  useEffect(() => {
    if (listToBeDisplayed.length > 0) {
      setListIsEmpty(false);
    } else {
      setListIsEmpty(true);
    }
  }, [setListIsEmpty, listIsEmpty, listToBeDisplayed, loading]);

  return (
    <DivContainerFather>
      <DivContainer>
        <table>
          <thead>
            <tr>
              <th className="columnImg">
                <p>Imagem</p>
              </th>
              <th>Nome</th>
              <th>Email</th>
              <th>Idade</th>
              <th>Peso</th>
              <th>Altura</th>
              <th>Status</th>
              <th className="columnEdit">
                <p>Editar</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {listToBeDisplayed && listToBeDisplayed.length > 0
              ? listToBeDisplayed.map((currentObject) => (
                  <tr key={currentObject.id}>
                    {/* Adicionando uma chave única para cada linha */}
                    <td>
                      <DivImgStudent>
                        <img
                          crossOrigin="use-credentials"
                          src={currentObject.Fotos[0].url}
                          alt="Imagem de perfil estudante"
                          className="img-perfil"
                        />
                      </DivImgStudent>
                    </td>
                    <td>
                      {' '}
                      {`${currentObject.nome} ${currentObject.sobrenome}`}
                    </td>
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
                ))
              : ''}
          </tbody>
        </table>

        {listIsEmpty && loading === false ? (
          <DivLoading>
            <HiMiniMagnifyingGlass size={100} />
            <p>Nenhum aluno foi encontrado.</p>
          </DivLoading>
        ) : (
          ''
        )}

        {loading ? (
          <DivLoading>
            <ClipLoader />
            <p>Buscando alunos...</p>
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
      </DivContainer>

      <DivTableButton>
        <ButtonAddNewStudent />
        <button type="submit" className="buttonRefresh" onClick={refreshPage}>
          <div className="icon">
            <IoMdRefresh size={18} />
          </div>
          Refresh
        </button>
      </DivTableButton>
    </DivContainerFather>
  );
}
