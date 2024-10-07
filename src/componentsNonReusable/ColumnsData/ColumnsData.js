import React from 'react';
import { DivContainer } from './styled';

export default function ColumnsNames() {
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

        <tbody />
      </table>
    </DivContainer>
  );
}
// Fazer com tabela html
