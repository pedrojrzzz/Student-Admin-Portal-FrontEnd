/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClipLoader from 'react-spinners/ClipLoader';
import { GiShipWreck } from 'react-icons/gi';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import {
  DivImgStudent,
  DivMessage,
  ActiveButton,
  InactiveButton,
  DivButtons,
} from './styled';
import ButtonEdit from '../../components/ButtonEdit/ButtonEdit';
import ButtonAddNewStudent from '../../components/ButtonAddNewStudent/ButtonAddNewStudent';
import { SearchAndFilterContext } from '../../context/SearchAndFilterContext';

export default function TableStudents() {
  // Estado global dos alunos
  const { loading, error } = useSelector((state) => state.alunos);

  // Estado de pesquisa e filtro
  const { listToBeDisplayed, listIsEmpty } = useContext(SearchAndFilterContext);

  // Gera as linhas da tabela com os dados dos alunos
  /**
   * @type {JSX.Element[]}
   */
  const rows = listToBeDisplayed.map((row) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <DivImgStudent>
          <img
            src={row.Fotos[0].url}
            alt="foto do estudante"
            crossOrigin="use-credentials"
            className="img-perfil"
          />
        </DivImgStudent>
      </TableCell>
      <TableCell align="left">{row.nome}</TableCell>
      <TableCell align="left">{row.email}</TableCell>
      <TableCell align="center">{row.idade}</TableCell>
      <TableCell align="center">{row.peso}</TableCell>
      <TableCell align="center">{row.altura}</TableCell>
      <TableCell align="center">
        {row.status === true ? (
          <ActiveButton>Ativo</ActiveButton>
        ) : (
          <InactiveButton>Inativo</InactiveButton>
        )}
      </TableCell>
      <TableCell align="center">
        <ButtonEdit data={row}>Editar</ButtonEdit>
      </TableCell>
    </TableRow>
  ));

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '15px',
      }}
    >
      <TableContainer component={Paper} style={{ width: '85%', height: '50%' }}>
        <Table sx={{ minWidth: 650, minHeight: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Imagem</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="center">Idade</TableCell>
              <TableCell align="center">Peso</TableCell>
              <TableCell align="center">Altura</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ position: 'relative' }}>
            {listToBeDisplayed && rows}

            {loading && (
              <DivMessage>
                <ClipLoader />
                <p>Buscando alunos...</p>
              </DivMessage>
            )}

            {error && (
              <DivMessage>
                <GiShipWreck size={100} />

                <p>Desculpe, não foi possível buscar os alunos</p>
              </DivMessage>
            )}

            {listIsEmpty && (
              <DivMessage>
                <HiMiniMagnifyingGlass size={100} />
                <p>Nenhum aluno encontrado</p>
              </DivMessage>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <DivButtons>
        <ButtonAddNewStudent />
      </DivButtons>
    </div>
  );
}
